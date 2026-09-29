// ============================================================================
// CYTUBE ROOM CUSTOM JAVASCRIPT
// ============================================================================
//
// Features:
//
// 1. Custom favicon
// 2. Full date/time on chat timestamps
// 3. Smooth scroll to video
// 4. Paste screenshots/images directly into chat with CTRL+V
// 5. Drag images onto the chat box
// 6. Automatically upload pasted images
// 7. Automatically display image URLs inline
// 8. Click an inline image to open the full-size image
//
// ============================================================================

(function () {
    "use strict";


    // ========================================================================
    // CONFIGURATION
    // ========================================================================

    const FAVICON_URL =
        "https://i.postimg.cc/5N5W08N0/Stan-Smith-Head.png";

    // Maximum displayed image size inside chat.
    const IMAGE_MAX_WIDTH = 500;
    const IMAGE_MAX_HEIGHT = 400;

    // Maximum pasted/uploaded image size.
    // 20 MB.
    const MAX_UPLOAD_SIZE = 20 * 1024 * 1024;

    // GoFile anonymous upload endpoint.
    const UPLOAD_URL =
        "https://upload.gofile.io/uploadfile";


    // ========================================================================
    // FAVICON
    // ========================================================================

    function setFavicon() {
        let link =
            document.querySelector("link[rel~='icon']");

        if (!link) {
            link = document.createElement("link");
            link.rel = "icon";

            document
                .getElementsByTagName("head")[0]
                .appendChild(link);
        }

        link.href = FAVICON_URL;
    }

    setFavicon();


    // ========================================================================
    // CHAT TIMESTAMPS
    // ========================================================================

    function padNumber(number) {
        return String(number).padStart(2, "0");
    }


    function formatDate(date) {
        if (
            !(date instanceof Date) ||
            isNaN(date.getTime())
        ) {
            date = new Date();
        }

        const month =
            padNumber(date.getMonth() + 1);

        const day =
            padNumber(date.getDate());

        const year =
            date.getFullYear();

        const hours =
            padNumber(date.getHours());

        const minutes =
            padNumber(date.getMinutes());

        return (
            month +
            "/" +
            day +
            "/" +
            year +
            " " +
            hours +
            ":" +
            minutes
        );
    }


    function processTimestamp(timestamp) {
        if (!timestamp) {
            return;
        }

        if (timestamp.dataset.dateAdded === "true") {
            return;
        }

        let date;

        if (timestamp.title) {
            date = new Date(timestamp.title);
        } else {
            date = new Date();
        }

        timestamp.textContent =
            "[" + formatDate(date) + "]";

        timestamp.dataset.dateAdded = "true";
    }


    function processNode(node) {
        if (!(node instanceof HTMLElement)) {
            return;
        }

        // The node itself may be a timestamp.
        if (
            node.classList &&
            node.classList.contains("timestamp")
        ) {
            processTimestamp(node);
        }

        // Or timestamps may exist underneath it.
        const timestamps =
            node.querySelectorAll(".timestamp");

        timestamps.forEach(function (timestamp) {
            processTimestamp(timestamp);
        });
    }


    // ========================================================================
    // SMOOTH SCROLL TO VIDEO
    // ========================================================================

    function addSmoothScroll() {
        const video =
            document.getElementById("videowrap");

        const link =
            document.querySelector(
                'a[href="#videowrap"]'
            );

        if (!video || !link) {
            setTimeout(
                addSmoothScroll,
                500
            );

            return;
        }

        // Prevent duplicate event listeners.
        if (
            link.dataset.smoothScrollAdded === "true"
        ) {
            return;
        }

        link.dataset.smoothScrollAdded = "true";

        link.addEventListener(
            "click",
            function (event) {
                event.preventDefault();

                const rect =
                    video.getBoundingClientRect();

                const scrollTop =
                    window.pageYOffset ||
                    document.documentElement.scrollTop;

                const videoCenter =
                    rect.top +
                    scrollTop +
                    rect.height / 2;

                const targetScroll =
                    videoCenter -
                    window.innerHeight / 2;

                window.scrollTo({
                    top: targetScroll,
                    behavior: "smooth"
                });
            }
        );
    }

    addSmoothScroll();


    // ========================================================================
    // UPLOAD STATUS MESSAGE
    // ========================================================================

    function showUploadStatus(message) {
        let status =
            document.getElementById(
                "cytube-image-upload-status"
            );

        if (!status) {
            status =
                document.createElement("div");

            status.id =
                "cytube-image-upload-status";

            status.style.position =
                "fixed";

            status.style.bottom =
                "55px";

            status.style.right =
                "15px";

            status.style.zIndex =
                "999999";

            status.style.padding =
                "8px 12px";

            status.style.background =
                "rgba(0,0,0,0.88)";

            status.style.color =
                "#ffffff";

            status.style.borderRadius =
                "4px";

            status.style.fontSize =
                "13px";

            status.style.fontFamily =
                "Arial, sans-serif";

            status.style.pointerEvents =
                "none";

            status.style.boxShadow =
                "0 2px 8px rgba(0,0,0,.4)";

            document.body.appendChild(
                status
            );
        }

        status.textContent = message;

        if (status._removeTimer) {
            clearTimeout(
                status._removeTimer
            );
        }

        status._removeTimer =
            setTimeout(function () {
                if (status.parentNode) {
                    status.remove();
                }
            }, 3000);
    }


    // ========================================================================
    // GOFILE IMAGE UPLOAD
    // ========================================================================

    function normalizeGoFileServer(server) {
        server = String(server || "");

        server =
            server.replace(
                /^https?:\/\//i,
                ""
            );

        server =
            server.replace(
                /\/.*$/,
                ""
            );

        if (
            !/\.gofile\.io$/i.test(server)
        ) {
            server += ".gofile.io";
        }

        return server;
    }


    async function uploadImage(file) {
        if (!file) {
            throw new Error(
                "No file was supplied."
            );
        }

        if (
            !file.type ||
            !file.type.startsWith("image/")
        ) {
            throw new Error(
                "The selected file is not an image."
            );
        }

        if (
            file.size >
            MAX_UPLOAD_SIZE
        ) {
            throw new Error(
                "Image is larger than 20 MB."
            );
        }

        const form =
            new FormData();

        form.append(
            "file",
            file,
            file.name ||
                "pasted-image.png"
        );

        const response =
            await fetch(
                UPLOAD_URL,
                {
                    method: "POST",
                    body: form
                }
            );

        if (!response.ok) {
            throw new Error(
                "Upload server returned HTTP " +
                response.status
            );
        }

        const result =
            await response.json();

        if (
            !result ||
            result.status !== "ok" ||
            !result.data
        ) {
            throw new Error(
                "Unexpected upload response."
            );
        }

        const data =
            result.data;

        let server = null;

        if (
            Array.isArray(data.servers) &&
            data.servers.length
        ) {
            server =
                data.servers[0];
        }

        if (
            !server &&
            data.server
        ) {
            server =
                data.server;
        }

        if (
            !server ||
            !data.id ||
            !data.name
        ) {
            console.error(
                "GoFile response:",
                result
            );

            throw new Error(
                "Upload succeeded but direct file information was missing."
            );
        }

        const hostname =
            normalizeGoFileServer(server);

        const filename =
            encodeURIComponent(data.name);

        return (
            "https://" +
            hostname +
            "/download/web/" +
            data.id +
            "/" +
            filename
        );
    }


    // ========================================================================
    // SEND A CYTUBE CHAT MESSAGE
    // ========================================================================

    function sendChatMessage(message) {
        if (
            !window.socket ||
            typeof window.socket.emit !==
                "function"
        ) {
            throw new Error(
                "CyTube socket was not found."
            );
        }

        window.socket.emit(
            "chatMsg",
            {
                msg: message
            }
        );
    }


    // ========================================================================
    // HANDLE A PASTED / DROPPED IMAGE
    // ========================================================================

    let uploadInProgress = false;


    async function handleImage(file) {
        if (
            !file ||
            !file.type ||
            !file.type.startsWith("image/")
        ) {
            return;
        }

        if (uploadInProgress) {
            showUploadStatus(
                "An image is already uploading..."
            );

            return;
        }

        if (
            file.size >
            MAX_UPLOAD_SIZE
        ) {
            showUploadStatus(
                "Image is too large. Maximum: 20 MB."
            );

            return;
        }

        uploadInProgress = true;

        showUploadStatus(
            "Uploading image..."
        );

        try {
            const imageURL =
                await uploadImage(file);

            sendChatMessage(
                imageURL
            );

            showUploadStatus(
                "Image posted."
            );
        } catch (error) {
            console.error(
                "[CyTube Images] Upload failed:",
                error
            );

            showUploadStatus(
                "Image upload failed."
            );
        } finally {
            uploadInProgress = false;
        }
    }


    // ========================================================================
    // PASTE IMAGE INTO CHAT
    // ========================================================================

    function setupPasteHandler() {
        document.addEventListener(
            "paste",
            function (event) {
                const target =
                    event.target;

                // Only intercept image paste while
                // the chat input is focused.
                if (
                    !target ||
                    target.id !== "chatline"
                ) {
                    return;
                }

                const clipboard =
                    event.clipboardData;

                if (!clipboard) {
                    return;
                }

                const items =
                    clipboard.items;

                if (!items) {
                    return;
                }

                for (
                    let i = 0;
                    i < items.length;
                    i++
                ) {
                    const item =
                        items[i];

                    if (
                        item.kind === "file" &&
                        item.type &&
                        item.type.startsWith(
                            "image/"
                        )
                    ) {
                        const file =
                            item.getAsFile();

                        if (file) {
                            event.preventDefault();
                            event.stopPropagation();

                            handleImage(file);

                            return;
                        }
                    }
                }
            },
            true
        );
    }

    setupPasteHandler();


    // ========================================================================
    // DRAG + DROP IMAGE INTO CHAT
    // ========================================================================

    function setupDragAndDrop() {
        const chatline =
            document.getElementById(
                "chatline"
            );

        if (!chatline) {
            setTimeout(
                setupDragAndDrop,
                500
            );

            return;
        }

        if (
            chatline.dataset
                .imageDropAdded ===
            "true"
        ) {
            return;
        }

        chatline.dataset.imageDropAdded =
            "true";

        chatline.addEventListener(
            "dragover",
            function (event) {
                event.preventDefault();
            }
        );

        chatline.addEventListener(
            "drop",
            function (event) {
                event.preventDefault();

                const files =
                    event.dataTransfer &&
                    event.dataTransfer.files;

                if (
                    !files ||
                    !files.length
                ) {
                    return;
                }

                for (
                    let i = 0;
                    i < files.length;
                    i++
                ) {
                    if (
                        files[i].type &&
                        files[
                            i
                        ].type.startsWith(
                            "image/"
                        )
                    ) {
                        handleImage(
                            files[i]
                        );

                        return;
                    }
                }
            }
        );
    }

    setupDragAndDrop();


    // ========================================================================
    // IMAGE URL DETECTION
    // ========================================================================

    function isImageURL(url) {
        if (!url) {
            return false;
        }

        try {
            const parsed =
                new URL(url);

            if (
                parsed.protocol !==
                    "http:" &&
                parsed.protocol !==
                    "https:"
            ) {
                return false;
            }

            const pathname =
                parsed.pathname.toLowerCase();

            // Normal direct image URLs.
            if (
                /\.(png|jpg|jpeg|gif|webp|bmp|avif)$/i.test(
                    pathname
                )
            ) {
                return true;
            }

            // Catbox direct links.
            if (
                parsed.hostname ===
                "files.catbox.moe"
            ) {
                return true;
            }

            return false;
        } catch (error) {
            return false;
        }
    }


    // ========================================================================
    // TURN IMAGE LINKS INTO INLINE IMAGES
    // ========================================================================

    function convertImageLink(link) {
        if (!link) {
            return;
        }

        if (
            link.dataset
                .imageConverted ===
            "true"
        ) {
            return;
        }

        if (
            link.dataset
                .imageRenderFailed ===
            "true"
        ) {
            return;
        }

        const url =
            link.href;

        if (!isImageURL(url)) {
            return;
        }

        // Don't convert links that already
        // contain an image.
        if (
            link.querySelector("img")
        ) {
            link.dataset.imageConverted =
                "true";

            return;
        }

        link.dataset.imageConverted =
            "true";

        const wrapper =
            document.createElement("a");

        wrapper.href = url;
        wrapper.target = "_blank";
        wrapper.rel =
            "noopener noreferrer";

        wrapper.dataset.imageConverted =
            "true";

        const image =
            document.createElement("img");

        image.src = url;
        image.alt = "Chat image";

        image.loading = "lazy";

        image.style.display =
            "block";

        image.style.maxWidth =
            IMAGE_MAX_WIDTH + "px";

        image.style.maxHeight =
            IMAGE_MAX_HEIGHT + "px";

        image.style.width =
            "auto";

        image.style.height =
            "auto";

        image.style.marginTop =
            "5px";

        image.style.marginBottom =
            "5px";

        image.style.borderRadius =
            "4px";

        image.style.cursor =
            "pointer";

        image.style.objectFit =
            "contain";

        // If the image cannot actually be loaded,
        // restore the normal clickable link.
        image.addEventListener(
            "error",
            function () {
                link.dataset
                    .imageRenderFailed =
                    "true";

                if (
                    wrapper.parentNode
                ) {
                    wrapper.replaceWith(
                        link
                    );
                }
            }
        );

        wrapper.appendChild(
            image
        );

        link.replaceWith(
            wrapper
        );
    }


    function renderImages(root) {
        if (!root) {
            return;
        }

        if (
            root instanceof HTMLAnchorElement
        ) {
            convertImageLink(root);
        }

        if (
            root.querySelectorAll
        ) {
            const links =
                root.querySelectorAll(
                    "a[href]"
                );

            links.forEach(
                convertImageLink
            );
        }
    }


    // ========================================================================
    // WATCH CYTUBE CHAT FOR NEW MESSAGES
    // ========================================================================

    function setupChatObserver() {
        const messageBuffer =
            document.getElementById(
                "messagebuffer"
            );

        if (!messageBuffer) {
            setTimeout(
                setupChatObserver,
                500
            );

            return;
        }

        if (
            messageBuffer.dataset
                .customObserverAdded ===
            "true"
        ) {
            return;
        }

        messageBuffer.dataset
            .customObserverAdded =
            "true";

        // Process existing messages.
        processNode(
            messageBuffer
        );

        renderImages(
            messageBuffer
        );

        const observer =
            new MutationObserver(
                function (mutations) {
                    mutations.forEach(
                        function (mutation) {
                            mutation.addedNodes.forEach(
                                function (
                                    node
                                ) {
                                    if (
                                        !(
                                            node instanceof
                                            HTMLElement
                                        )
                                    ) {
                                        return;
                                    }

                                    processNode(
                                        node
                                    );

                                    renderImages(
                                        node
                                    );
                                }
                            );
                        }
                    );
                }
            );

        observer.observe(
            messageBuffer,
            {
                childList: true,
                subtree: true
            }
        );
    }

    setupChatObserver();


    // ========================================================================
    // READY
    // ========================================================================

    console.log(
        "[CyTube Room JS] Loaded successfully."
    );

    console.log(
        "[CyTube Images] Paste an image into #chatline with Ctrl+V."
    );

})();
