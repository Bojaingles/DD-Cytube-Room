// ============================================================================
// CYTUBE ROOM CUSTOM JAVASCRIPT
// ============================================================================

(function () {
    "use strict";


    // ========================================================================
    // CONFIGURATION
    // ========================================================================

    const FAVICON_URL =
        "https://i.postimg.cc/5N5W08N0/Stan-Smith-Head.png";

    const IMAGE_MAX_WIDTH = 500;
    const IMAGE_MAX_HEIGHT = 400;

    // 20 MB
    const MAX_UPLOAD_SIZE =
        20 * 1024 * 1024;

    const UPLOAD_URL =
        "https://upload.gofile.io/uploadfile";


    // ========================================================================
    // FAVICON
    // ========================================================================

    function setFavicon() {
        let link =
            document.querySelector(
                "link[rel~='icon']"
            );

        if (!link) {
            link =
                document.createElement(
                    "link"
                );

            link.rel = "icon";

            document.head.appendChild(
                link
            );
        }

        link.href =
            FAVICON_URL;
    }

    setFavicon();


    // ========================================================================
    // DATE / TIME
    // ========================================================================

    function padNumber(number) {
        return String(number).padStart(
            2,
            "0"
        );
    }


    function formatDate(date) {
        if (
            !(date instanceof Date) ||
            isNaN(date.getTime())
        ) {
            date = new Date();
        }

        const month =
            date.getMonth() + 1;

        const day =
            date.getDate();

        const year =
            String(
                date.getFullYear()
            ).slice(-2);

        const hours =
            padNumber(
                date.getHours()
            );

        const minutes =
            padNumber(
                date.getMinutes()
            );

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


    // ========================================================================
    // CURRENT VIDEO TITLE
    // ========================================================================

    function getCurrentVideoTitle() {

        // ------------------------------------------------------------
        // Prefer active playlist entry.
        // ------------------------------------------------------------

        const activeTitle =
            document.querySelector(
                ".queue_active .qe_title"
            );

        if (
            activeTitle &&
            activeTitle.textContent.trim()
        ) {
            return activeTitle.textContent.trim();
        }


        // ------------------------------------------------------------
        // Some CyTube layouts use an anchor directly.
        // ------------------------------------------------------------

        const activeLink =
            document.querySelector(
                ".queue_active a"
            );

        if (
            activeLink &&
            activeLink.textContent.trim()
        ) {
            return activeLink.textContent.trim();
        }


        // ------------------------------------------------------------
        // Fallback: Currently Playing title.
        // ------------------------------------------------------------

        const currentTitle =
            document.getElementById(
                "currenttitle"
            );

        if (
            currentTitle &&
            currentTitle.textContent.trim()
        ) {
            return currentTitle.textContent.trim();
        }


        return "";
    }


    // ========================================================================
    // EXTRACT EPISODE CODE
    // ========================================================================

    function getCurrentEpisodeCode() {
        const title =
            getCurrentVideoTitle();

        if (!title) {
            return null;
        }


        // Finds:
        //
        // S02E07
        // S2E7
        // s03e14
        //
        // etc.

        const match =
            title.match(
                /\bS(\d{1,3})E(\d{1,3})\b/i
            );


        if (!match) {
            return null;
        }


        const season =
            String(
                parseInt(
                    match[1],
                    10
                )
            ).padStart(
                2,
                "0"
            );


        const episode =
            String(
                parseInt(
                    match[2],
                    10
                )
            ).padStart(
                2,
                "0"
            );


        return (
            "S" +
            season +
            "E" +
            episode
        );
    }


    // ========================================================================
    // CHAT TIMESTAMP
    // ========================================================================

    function getMessageDate(timestamp) {

        // Try CyTube's original timestamp metadata first.

        if (
            timestamp &&
            timestamp.title
        ) {
            const parsed =
                new Date(
                    timestamp.title
                );

            if (
                !isNaN(
                    parsed.getTime()
                )
            ) {
                return parsed;
            }
        }


        // Otherwise use the moment the message
        // appeared in this browser.

        return new Date();
    }


    function processTimestamp(timestamp) {
        if (!timestamp) {
            return;
        }


        if (
            timestamp.dataset
                .customTimestampAdded ===
            "true"
        ) {
            return;
        }


        const date =
            getMessageDate(
                timestamp
            );


        const episode =
            getCurrentEpisodeCode();


        // ------------------------------------------------------------
        // Desired format:
        //
        // [S02E07] [9/28/26 23:14]
        //
        // ------------------------------------------------------------

        if (episode) {
            timestamp.textContent =
                "[" +
                episode +
                "] [" +
                formatDate(date) +
                "]";
        } else {

            // Video doesn't contain SxxExx.
            //
            // Fall back to date/time only.

            timestamp.textContent =
                "[" +
                formatDate(date) +
                "]";
        }


        timestamp.dataset
            .customTimestampAdded =
            "true";


        if (episode) {
            timestamp.dataset
                .episodeCode =
                episode;
        }
    }


    function processChatNode(node) {
        if (
            !(node instanceof HTMLElement)
        ) {
            return;
        }


        // The element itself might be a timestamp.

        if (
            node.classList &&
            node.classList.contains(
                "timestamp"
            )
        ) {
            processTimestamp(
                node
            );
        }


        // Or timestamp may be contained in the message.

        const timestamps =
            node.querySelectorAll(
                ".timestamp"
            );

        timestamps.forEach(
            function (timestamp) {
                processTimestamp(
                    timestamp
                );
            }
        );
    }


    // ========================================================================
    // SMOOTH SCROLL TO VIDEO
    // ========================================================================

    function addSmoothScroll() {

        const video =
            document.getElementById(
                "videowrap"
            );


        const link =
            document.querySelector(
                'a[href="#videowrap"]'
            );


        if (
            !video ||
            !link
        ) {
            setTimeout(
                addSmoothScroll,
                500
            );

            return;
        }


        if (
            link.dataset
                .smoothScrollAdded ===
            "true"
        ) {
            return;
        }


        link.dataset
            .smoothScrollAdded =
            "true";


        link.addEventListener(
            "click",
            function (event) {

                event.preventDefault();


                const rect =
                    video.getBoundingClientRect();


                const scrollTop =
                    window.pageYOffset ||
                    document.documentElement
                        .scrollTop;


                const videoCenter =
                    rect.top +
                    scrollTop +
                    rect.height / 2;


                const targetScroll =
                    videoCenter -
                    window.innerHeight / 2;


                window.scrollTo({
                    top:
                        targetScroll,

                    behavior:
                        "smooth"
                });
            }
        );
    }


    addSmoothScroll();


    // ========================================================================
    // IMAGE UPLOAD STATUS
    // ========================================================================

    function showUploadStatus(message) {

        let status =
            document.getElementById(
                "cytube-image-upload-status"
            );


        if (!status) {

            status =
                document.createElement(
                    "div"
                );


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

            status.style.pointerEvents =
                "none";

            status.style.boxShadow =
                "0 2px 8px rgba(0,0,0,.4)";


            document.body.appendChild(
                status
            );
        }


        status.textContent =
            message;


        if (
            status._removeTimer
        ) {
            clearTimeout(
                status._removeTimer
            );
        }


        status._removeTimer =
            setTimeout(
                function () {

                    if (
                        status.parentNode
                    ) {
                        status.remove();
                    }

                },
                3000
            );
    }


    // ========================================================================
    // GOFILE UPLOAD
    // ========================================================================

    function normalizeGoFileServer(
        server
    ) {

        server =
            String(
                server || ""
            );


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
            !/\.gofile\.io$/i.test(
                server
            )
        ) {
            server +=
                ".gofile.io";
        }


        return server;
    }


    async function uploadImage(file) {

        if (!file) {
            throw new Error(
                "No image supplied."
            );
        }


        if (
            !file.type ||
            !file.type.startsWith(
                "image/"
            )
        ) {
            throw new Error(
                "File is not an image."
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
                    method:
                        "POST",

                    body:
                        form
                }
            );


        if (
            !response.ok
        ) {
            throw new Error(
                "Upload returned HTTP " +
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
            console.error(
                "GoFile response:",
                result
            );

            throw new Error(
                "Unexpected upload response."
            );
        }


        const data =
            result.data;


        let server =
            null;


        if (
            Array.isArray(
                data.servers
            ) &&
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
                "Upload response did not contain direct file information."
            );
        }


        const hostname =
            normalizeGoFileServer(
                server
            );


        const filename =
            encodeURIComponent(
                data.name
            );


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
    // SEND CYTUBE CHAT MESSAGE
    // ========================================================================

    function sendChatMessage(
        message
    ) {

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
                msg:
                    message
            }
        );
    }


    // ========================================================================
    // HANDLE IMAGE
    // ========================================================================

    let uploadInProgress =
        false;


    async function handleImage(
        file
    ) {

        if (
            !file ||
            !file.type ||
            !file.type.startsWith(
                "image/"
            )
        ) {
            return;
        }


        if (
            uploadInProgress
        ) {
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


        uploadInProgress =
            true;


        showUploadStatus(
            "Uploading image..."
        );


        try {

            const imageURL =
                await uploadImage(
                    file
                );


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

            uploadInProgress =
                false;
        }
    }


    // ========================================================================
    // CTRL+V IMAGE PASTE
    // ========================================================================

    document.addEventListener(
        "paste",
        function (event) {

            const target =
                event.target;


            // Only intercept image pastes
            // while the chat box is focused.

            if (
                !target ||
                target.id !==
                    "chatline"
            ) {
                return;
            }


            const clipboard =
                event.clipboardData;


            if (
                !clipboard ||
                !clipboard.items
            ) {
                return;
            }


            for (
                let i = 0;
                i <
                clipboard.items.length;
                i++
            ) {

                const item =
                    clipboard.items[i];


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

                        handleImage(
                            file
                        );

                        return;
                    }
                }
            }
        },
        true
    );


    // ========================================================================
    // DRAG + DROP IMAGES
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


        chatline.dataset
            .imageDropAdded =
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


            if (
                /\.(png|jpg|jpeg|gif|webp|bmp|avif)$/i.test(
                    pathname
                )
            ) {
                return true;
            }


            if (
                parsed.hostname ===
                "files.catbox.moe"
            ) {
                return true;
            }


            if (
                /\.gofile\.io$/i.test(
                    parsed.hostname
                ) &&
                parsed.pathname.includes(
                    "/download/"
                )
            ) {
                return true;
            }


            return false;

        } catch (error) {

            return false;
        }
    }


    // ========================================================================
    // DISPLAY IMAGE LINKS INLINE
    // ========================================================================

    function convertImageLink(
        link
    ) {

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


        const url =
            link.href;


        if (
            !isImageURL(url)
        ) {
            return;
        }


        if (
            link.querySelector(
                "img"
            )
        ) {
            link.dataset
                .imageConverted =
                "true";

            return;
        }


        link.dataset
            .imageConverted =
            "true";


        const wrapper =
            document.createElement(
                "a"
            );


        wrapper.href =
            url;

        wrapper.target =
            "_blank";

        wrapper.rel =
            "noopener noreferrer";


        const image =
            document.createElement(
                "img"
            );


        image.src =
            url;

        image.alt =
            "Chat image";

        image.loading =
            "lazy";


        image.style.display =
            "block";

        image.style.maxWidth =
            IMAGE_MAX_WIDTH +
            "px";

        image.style.maxHeight =
            IMAGE_MAX_HEIGHT +
            "px";

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


        wrapper.appendChild(
            image
        );


        link.replaceWith(
            wrapper
        );
    }


    function renderImages(
        root
    ) {

        if (!root) {
            return;
        }


        if (
            root instanceof
            HTMLAnchorElement
        ) {
            convertImageLink(
                root
            );
        }


        if (
            root.querySelectorAll
        ) {

            const links =
                root.querySelectorAll(
                    "a[href]"
                );


            links.forEach(
                function (link) {
                    convertImageLink(
                        link
                    );
                }
            );
        }
    }


    // ========================================================================
    // CHAT OBSERVER
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
                .roomObserverAdded ===
            "true"
        ) {
            return;
        }


        messageBuffer.dataset
            .roomObserverAdded =
            "true";


        // Process whatever is already visible.

        processChatNode(
            messageBuffer
        );

        renderImages(
            messageBuffer
        );


        const observer =
            new MutationObserver(
                function (
                    mutations
                ) {

                    mutations.forEach(
                        function (
                            mutation
                        ) {

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


                                    processChatNode(
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
                childList:
                    true,

                subtree:
                    true
            }
        );
    }


    setupChatObserver();


    // ========================================================================
    // VIDEO CHANGE DEBUGGING
    // ========================================================================

    if (
        window.socket &&
        typeof window.socket.on ===
            "function"
    ) {

        window.socket.on(
            "changeMedia",
            function () {

                setTimeout(
                    function () {

                        console.log(
                            "[CyTube Room] Current title:",
                            getCurrentVideoTitle()
                        );

                        console.log(
                            "[CyTube Room] Episode:",
                            getCurrentEpisodeCode()
                        );

                    },
                    250
                );
            }
        );
    }


    // ========================================================================
    // READY
    // ========================================================================

    console.log(
        "[CyTube Room JS] Loaded successfully."
    );


    console.log(
        "[CyTube Room] Current title:",
        getCurrentVideoTitle()
    );


    console.log(
        "[CyTube Room] Episode:",
        getCurrentEpisodeCode()
    );


    console.log(
        "[CyTube Images] Ctrl+V an image into the chat box to upload it."
    );

})();
