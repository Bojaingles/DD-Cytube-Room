// ============================================================
// CYTUBE ROOM CUSTOM JAVASCRIPT
// ============================================================



// ------------------------------------------------------------
// FAVICON
// ------------------------------------------------------------

(function () {
    const faviconURL = "https://i.postimg.cc/5N5W08N0/Stan-Smith-Head.png";

    let link = document.querySelector("link[rel~='icon']");

    if (!link) {
        link = document.createElement("link");
        link.rel = "icon";
        document.getElementsByTagName("head")[0].appendChild(link);
    }

    link.href = faviconURL;
})();



// ------------------------------------------------------------
// CHAT TIMESTAMPS
// ------------------------------------------------------------

function processNode(node) {
    if (!(node instanceof HTMLElement)) return;

    const ts = node.querySelector(".timestamp");

    if (ts && !ts.dataset.dateAdded) {
        let date;

        if (ts.title) {
            // CyTube puts a full timestamp in the title attribute
            date = new Date(ts.title);
        } else {
            // fallback if no title is present
            date = new Date();
        }

        ts.textContent = "[" + formatDate(date) + "]";
        ts.dataset.dateAdded = "true";
    }
}



// ------------------------------------------------------------
// SMOOTH SCROLL TO VIDEO
// ------------------------------------------------------------

function addSmoothScroll() {
    const video = document.getElementById("videowrap");
    const link = document.querySelector('a[href="#videowrap"]');

    if (!video || !link) {
        setTimeout(addSmoothScroll, 500);
        return;
    }

    link.addEventListener("click", function (e) {
        e.preventDefault();

        const rect = video.getBoundingClientRect();
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
    });
}

addSmoothScroll();



// ============================================================
// PASTE IMAGE / CATBOX CODE GOES BELOW HERE
// ============================================================


(function () {
    "use strict";

    /*
     * CyTube Paste Images
     * -------------------
     * Ctrl+V an image into chat -> uploads to Catbox -> posts image URL.
     * Also supports drag & drop.
     */

    const CATBOX_API = "https://catbox.moe/user/api.php";

    // Maximum displayed image width/height.
    const MAX_WIDTH = 500;
    const MAX_HEIGHT = 400;

    // Prevent accidental duplicate paste/drop handling.
    let uploading = false;

    function uploadToCatbox(file) {
        const form = new FormData();

        form.append("reqtype", "fileupload");
        form.append("fileToUpload", file, file.name || "image.png");

        return fetch(CATBOX_API, {
            method: "POST",
            body: form
        }).then(function (response) {
            if (!response.ok) {
                throw new Error("Catbox returned HTTP " + response.status);
            }

            return response.text();
        }).then(function (url) {
            url = url.trim();

            if (!/^https?:\/\/files\.catbox\.moe\//i.test(url)) {
                throw new Error("Unexpected Catbox response: " + url);
            }

            return url;
        });
    }

    function sendChatMessage(message) {
        if (!window.socket) {
            throw new Error("CyTube socket was not found.");
        }

        window.socket.emit("chatMsg", {
            msg: message
        });
    }

    function showUploadStatus(text) {
        let status = document.getElementById("paste-image-status");

        if (!status) {
            status = document.createElement("div");
            status.id = "paste-image-status";

            status.style.position = "fixed";
            status.style.bottom = "55px";
            status.style.right = "15px";
            status.style.zIndex = "99999";
            status.style.padding = "8px 12px";
            status.style.background = "rgba(0,0,0,.85)";
            status.style.color = "#fff";
            status.style.borderRadius = "4px";
            status.style.fontSize = "13px";
            status.style.pointerEvents = "none";

            document.body.appendChild(status);
        }

        status.textContent = text;

        clearTimeout(status._timeout);

        status._timeout = setTimeout(function () {
            status.remove();
        }, 2500);
    }

    function handleImage(file) {
        if (!file || !file.type || !file.type.startsWith("image/")) {
            return;
        }

        if (uploading) {
            showUploadStatus("Already uploading an image...");
            return;
        }

        uploading = true;

        showUploadStatus("Uploading image...");

        uploadToCatbox(file)
            .then(function (url) {

                /*
                 * Send the raw image URL through CyTube.
                 * Our renderer below will turn it into an image.
                 */
                sendChatMessage(url);

                showUploadStatus("Image posted.");
            })
            .catch(function (error) {
                console.error("CyTube image upload failed:", error);
                showUploadStatus("Image upload failed.");
            })
            .finally(function () {
                uploading = false;
            });
    }

    /*
     * Clipboard paste support.
     */
    document.addEventListener("paste", function (event) {

        const target = event.target;

        // Only intercept paste while the user is actually in the chat box.
        if (!target || target.id !== "chatline") {
            return;
        }

        const clipboard = event.clipboardData;

        if (!clipboard || !clipboard.items) {
            return;
        }

        for (let i = 0; i < clipboard.items.length; i++) {

            const item = clipboard.items[i];

            if (item.kind === "file" &&
                item.type.startsWith("image/")) {

                const file = item.getAsFile();

                if (file) {
                    event.preventDefault();
                    event.stopPropagation();

                    handleImage(file);
                    return;
                }
            }
        }

    }, true);


    /*
     * Drag & drop support.
     */
    const chatline = document.getElementById("chatline");

    if (chatline) {

        chatline.addEventListener("dragover", function (event) {
            event.preventDefault();
        });

        chatline.addEventListener("drop", function (event) {

            event.preventDefault();

            const files = event.dataTransfer.files;

            if (!files || !files.length) {
                return;
            }

            for (let i = 0; i < files.length; i++) {

                if (files[i].type.startsWith("image/")) {
                    handleImage(files[i]);
                    break;
                }
            }

        });
    }


    /*
     * Convert Catbox image URLs appearing in chat into clickable images.
     */
    function renderImages() {

        const buffer = document.getElementById("messagebuffer");

        if (!buffer) {
            return;
        }

        const links = buffer.querySelectorAll("a");

        links.forEach(function (link) {

            if (link.dataset.imageConverted === "1") {
                return;
            }

            const url = link.href;

            if (!/^https?:\/\/files\.catbox\.moe\/.+/i.test(url)) {
                return;
            }

            link.dataset.imageConverted = "1";

            const image = document.createElement("img");

            image.src = url;
            image.alt = "Chat image";

            image.style.display = "block";
            image.style.maxWidth = MAX_WIDTH + "px";
            image.style.maxHeight = MAX_HEIGHT + "px";
            image.style.width = "auto";
            image.style.height = "auto";
            image.style.marginTop = "5px";
            image.style.cursor = "pointer";
            image.style.borderRadius = "3px";

            /*
             * Clicking opens the original full-size image.
             */
            image.addEventListener("click", function () {
                window.open(
                    url,
                    "_blank",
                    "noopener,noreferrer"
                );
            });

            /*
             * Replace the URL with the image.
             */
            link.replaceWith(image);
        });
    }


    /*
     * Watch for new CyTube chat messages.
     */
    const messageBuffer = document.getElementById("messagebuffer");

    if (messageBuffer) {

        const observer = new MutationObserver(function () {
            renderImages();
        });

        observer.observe(messageBuffer, {
            childList: true,
            subtree: true
        });

        renderImages();
    }


    /*
     * Allow normal pasted text to behave normally.
     */
    console.log(
        "[CyTube Paste Images] Loaded. Ctrl+V images into chat."
    );

})();
