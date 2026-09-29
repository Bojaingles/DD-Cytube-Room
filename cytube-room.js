(function () {
  "use strict";

  // ---------- CONFIG ----------
  const FAVICON_URL = "https://i.postimg.cc/5N5W08N0/Stan-Smith-Head.png";

  // Catbox does not expose a browser-readable CORS response from its upload API.
  // Deploy the tiny proxy shown after this file, then paste its URL here.
  const CATBOX_PROXY_URL = "https://YOUR-WORKER.YOUR-SUBDOMAIN.workers.dev";

  const IMAGE_EXTS = new Set(["png", "jpg", "jpeg", "gif", "webp", "bmp", "avif"]);
  const VIDEO_EXTS = new Set(["mp4", "webm", "ogv", "m4v", "mov"]);

  // ---------- STYLES ----------
  function installStyles() {
    if (document.getElementById("room-js-styles")) return;

    const style = document.createElement("style");
    style.id = "room-js-styles";

    style.textContent = `
      .room-media {
        display: block;
        margin: 6px 0;
        max-width: 100%;
      }

      .room-media img {
        display: block;
        max-width: 500px;
        max-height: 400px;
        width: auto;
        height: auto;
        object-fit: contain;
        border-radius: 4px;
      }

      .room-media video {
        display: block;
        max-width: min(100%, 640px);
        max-height: 420px;
        width: auto;
        height: auto;
        background: #000;
        border-radius: 4px;
      }

      .room-youtube {
        position: relative;
        width: min(100%, 640px);
        aspect-ratio: 16 / 9;
        margin: 6px 0;
      }

      .room-youtube iframe {
        position: absolute;
        inset: 0;
        width: 100%;
        height: 100%;
        border: 0;
      }

      #room-upload-overlay {
        position: fixed;
        inset: 0;
        z-index: 2147483646;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 20px;
        background: rgba(0, 0, 0, 0.72);
      }

      #room-upload-card {
        box-sizing: border-box;
        width: min(560px, 94vw);
        max-height: 90vh;
        overflow: auto;
        padding: 14px;
        border: 1px solid rgba(255, 255, 255, 0.18);
        border-radius: 7px;
        background: #171717;
        color: #eee;
        box-shadow: 0 12px 36px rgba(0, 0, 0, 0.55);
      }

      #room-upload-preview-wrap {
        display: flex;
        align-items: center;
        justify-content: center;
        min-height: 120px;
        margin-bottom: 10px;
        padding: 8px;
        border-radius: 5px;
        background: #0d0d0d;
      }

      #room-upload-preview {
        display: block;
        max-width: 100%;
        max-height: 52vh;
        width: auto;
        height: auto;
        object-fit: contain;
      }

      #room-upload-comment {
        box-sizing: border-box;
        width: 100%;
        min-height: 82px;
        resize: vertical;
        margin: 0 0 10px;
        padding: 9px 10px;
        border: 1px solid #555;
        border-radius: 4px;
        background: #242424;
        color: #fff;
        font: inherit;
      }

      #room-upload-status {
        min-height: 18px;
        margin: 0 0 8px;
        color: #ddd;
        font-size: 12px;
      }

      #room-upload-actions {
        display: flex;
        justify-content: flex-end;
        gap: 8px;
      }

      #room-upload-actions button {
        min-width: 88px;
        padding: 7px 12px;
        border: 1px solid #666;
        border-radius: 4px;
        background: #333;
        color: #fff;
        cursor: pointer;
      }

      #room-upload-actions button:disabled {
        opacity: 0.55;
        cursor: default;
      }

      #room-upload-send {
        background: #3d5f8d !important;
      }
    `;

    document.head.appendChild(style);
  }

  installStyles();

  // ---------- FAVICON ----------
  (function setFavicon() {
    let link = document.querySelector("link[rel~='icon']");

    if (!link) {
      link = document.createElement("link");
      link.rel = "icon";
      document.head.appendChild(link);
    }

    link.href = FAVICON_URL;
  })();

  // ---------- EPISODE + DATE/TIME ----------
  const pad2 = n => String(n).padStart(2, "0");

  function formatDate(date) {
    if (!(date instanceof Date) || Number.isNaN(date.getTime())) {
      date = new Date();
    }

    return (
      `${date.getMonth() + 1}/` +
      `${date.getDate()}/` +
      `${String(date.getFullYear()).slice(-2)} ` +
      `${pad2(date.getHours())}:` +
      `${pad2(date.getMinutes())}`
    );
  }

  function getCurrentVideoTitle() {
    const candidates = [
      document.querySelector(".queue_active .qe_title"),
      document.querySelector(".queue_active a"),
      document.getElementById("currenttitle")
    ];

    for (const el of candidates) {
      if (
        el &&
        el.textContent &&
        el.textContent.trim()
      ) {
        return el.textContent.trim();
      }
    }

    return "";
  }

  function getCurrentEpisodeCode() {
    const title = getCurrentVideoTitle();

    const match = title.match(
      /(?:^|[^a-z0-9])S(\d{1,3})E(\d{1,3})(?![a-z0-9])/i
    );

    if (!match) {
      return "";
    }

    return (
      "S" +
      pad2(parseInt(match[1], 10)) +
      "E" +
      pad2(parseInt(match[2], 10))
    );
  }

  function getMessageDate(timestamp) {
    if (
      timestamp &&
      timestamp.title
    ) {
      const date =
        new Date(timestamp.title);

      if (!Number.isNaN(date.getTime())) {
        return date;
      }
    }

    return new Date();
  }

  function applyCustomTimestamp(timestamp) {
    if (
      !timestamp ||
      timestamp.dataset.roomStampApplied === "1"
    ) {
      return;
    }

    const episode =
      getCurrentEpisodeCode();

    const date =
      "[" +
      formatDate(
        getMessageDate(timestamp)
      ) +
      "]";

    if (episode) {
      timestamp.textContent =
        "[" +
        episode +
        "] " +
        date +
        " ";
    } else {
      timestamp.textContent =
        date +
        " ";
    }

    timestamp.dataset.roomStampApplied =
      "1";
  }

  // ---------- SMOOTH SCROLL TO VIDEO ----------
  function setupSmoothScroll() {
    const video =
      document.getElementById(
        "videowrap"
      );

    const link =
      document.querySelector(
        'a[href="#videowrap"]'
      );

    if (!video || !link) {
      setTimeout(
        setupSmoothScroll,
        500
      );

      return;
    }

    if (
      link.dataset.roomSmoothScroll ===
      "1"
    ) {
      return;
    }

    link.dataset.roomSmoothScroll =
      "1";

    link.addEventListener(
      "click",
      function (event) {
        event.preventDefault();

        const rect =
          video.getBoundingClientRect();

        const scrollTop =
          window.pageYOffset ||
          document.documentElement.scrollTop;

        const target =
          rect.top +
          scrollTop +
          rect.height / 2 -
          window.innerHeight / 2;

        window.scrollTo({
          top: target,
          behavior: "smooth"
        });
      }
    );
  }

  setupSmoothScroll();

  // ---------- CHAT SEND ----------
  function sendChatMessage(message) {
    const text =
      String(message || "").trim();

    if (!text) {
      return;
    }

    if (
      !window.socket ||
      typeof window.socket.emit !==
        "function"
    ) {
      throw new Error(
        "CyTube chat connection is unavailable."
      );
    }

    window.socket.emit(
      "chatMsg",
      {
        msg: text
      }
    );
  }

  // ---------- CATBOX UPLOAD ----------
  async function uploadToCatbox(file) {
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
        CATBOX_PROXY_URL,
        {
          method: "POST",
          body: form
        }
      );

    const text =
      (
        await response.text()
      ).trim();

    if (!response.ok) {
      throw new Error(
        text ||
        "Upload failed (" +
        response.status +
        ")."
      );
    }

    if (
      !/^https:\/\/files\.catbox\.moe\/[A-Za-z0-9._-]+$/i.test(
        text
      )
    ) {
      throw new Error(
        "Catbox returned an unexpected response."
      );
    }

    return text;
  }

  // ---------- IMAGE PREVIEW / COMPOSER ----------
  let pendingUpload = null;

  function closeUploadComposer(
    restoreText
  ) {
    const previous =
      pendingUpload;

    if (
      previous &&
      previous.previewUrl
    ) {
      URL.revokeObjectURL(
        previous.previewUrl
      );
    }

    pendingUpload = null;

    const overlay =
      document.getElementById(
        "room-upload-overlay"
      );

    if (overlay) {
      overlay.remove();
    }

    const chatline =
      document.getElementById(
        "chatline"
      );

    if (
      restoreText &&
      previous &&
      previous.originalText &&
      chatline &&
      !chatline.value
    ) {
      chatline.value =
        previous.originalText;
    }

    if (chatline) {
      chatline.focus();
    }
  }

  function openUploadComposer(file) {
    if (
      !file ||
      !file.type ||
      !file.type.startsWith(
        "image/"
      )
    ) {
      return;
    }

    closeUploadComposer(false);

    const chatline =
      document.getElementById(
        "chatline"
      );

    const originalText =
      chatline
        ? chatline.value
        : "";

    if (chatline) {
      chatline.value = "";
    }

    const previewUrl =
      URL.createObjectURL(file);

    pendingUpload = {
      file: file,
      previewUrl: previewUrl,
      originalText: originalText,
      uploading: false
    };

    const overlay =
      document.createElement(
        "div"
      );

    overlay.id =
      "room-upload-overlay";

    const card =
      document.createElement(
        "div"
      );

    card.id =
      "room-upload-card";

    const previewWrap =
      document.createElement(
        "div"
      );

    previewWrap.id =
      "room-upload-preview-wrap";

    const preview =
      document.createElement(
        "img"
      );

    preview.id =
      "room-upload-preview";

    preview.src =
      previewUrl;

    preview.alt =
      "Image preview";

    previewWrap.appendChild(
      preview
    );

    const comment =
      document.createElement(
        "textarea"
      );

    comment.id =
      "room-upload-comment";

    comment.placeholder =
      "Add a comment or additional text...";

    comment.value =
      originalText;

    const status =
      document.createElement(
        "div"
      );

    status.id =
      "room-upload-status";

    const actions =
      document.createElement(
        "div"
      );

    actions.id =
      "room-upload-actions";

    const cancel =
      document.createElement(
        "button"
      );

    cancel.type =
      "button";

    cancel.textContent =
      "Cancel";

    const send =
      document.createElement(
        "button"
      );

    send.type =
      "button";

    send.id =
      "room-upload-send";

    send.textContent =
      "Send";

    actions.append(
      cancel,
      send
    );

    card.append(
      previewWrap,
      comment,
      status,
      actions
    );

    overlay.appendChild(
      card
    );

    document.body.appendChild(
      overlay
    );

    cancel.addEventListener(
      "click",
      function () {
        closeUploadComposer(true);
      }
    );

    overlay.addEventListener(
      "click",
      function (event) {
        if (
          event.target === overlay &&
          pendingUpload &&
          !pendingUpload.uploading
        ) {
          closeUploadComposer(true);
        }
      }
    );

    comment.addEventListener(
      "keydown",
      function (event) {
        if (
          (
            event.ctrlKey ||
            event.metaKey
          ) &&
          event.key === "Enter"
        ) {
          event.preventDefault();
          send.click();
        }
      }
    );

    send.addEventListener(
      "click",
      async function () {
        if (
          !pendingUpload ||
          pendingUpload.uploading
        ) {
          return;
        }

        pendingUpload.uploading =
          true;

        send.disabled =
          true;

        cancel.disabled =
          true;

        comment.disabled =
          true;

        status.textContent =
          "Uploading to Catbox...";

        try {
          const url =
            await uploadToCatbox(
              pendingUpload.file
            );

          const extraText =
            comment.value.trim();

          const message =
            extraText
              ? extraText +
                "\n" +
                url
              : url;

          sendChatMessage(
            message
          );

          closeUploadComposer(
            false
          );
        } catch (error) {
          status.textContent =
            error &&
            error.message
              ? error.message
              : "Upload failed.";

          pendingUpload.uploading =
            false;

          send.disabled =
            false;

          cancel.disabled =
            false;

          comment.disabled =
            false;
        }
      }
    );

    setTimeout(
      function () {
        comment.focus();
      },
      0
    );
  }

  // ---------- PASTE: PREVIEW, NEVER AUTO-SEND ----------
  document.addEventListener(
    "paste",
    function (event) {
      if (
        !event.target ||
        event.target.id !==
          "chatline"
      ) {
        return;
      }

      const items =
        event.clipboardData &&
        event.clipboardData.items;

      if (!items) {
        return;
      }

      for (const item of items) {
        if (
          item.kind === "file" &&
          item.type &&
          item.type.startsWith(
            "image/"
          )
        ) {
          const file =
            item.getAsFile();

          if (!file) {
            return;
          }

          event.preventDefault();
          event.stopPropagation();

          openUploadComposer(
            file
          );

          return;
        }
      }
    },
    true
  );

  // ---------- DRAG/DROP: PREVIEW, NEVER AUTO-SEND ----------
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
      chatline.dataset.roomDropHandler ===
      "1"
    ) {
      return;
    }

    chatline.dataset.roomDropHandler =
      "1";

    chatline.addEventListener(
      "dragover",
      function (event) {
        if (
          event.dataTransfer &&
          Array.from(
            event.dataTransfer.types ||
            []
          ).includes(
            "Files"
          )
        ) {
          event.preventDefault();
        }
      }
    );

    chatline.addEventListener(
      "drop",
      function (event) {
        const files =
          event.dataTransfer &&
          event.dataTransfer.files;

        if (!files) {
          return;
        }

        for (const file of files) {
          if (
            file.type &&
            file.type.startsWith(
              "image/"
            )
          ) {
            event.preventDefault();
            event.stopPropagation();

            openUploadComposer(
              file
            );

            return;
          }
        }
      }
    );
  }

  setupDragAndDrop();

  // ---------- INLINE MEDIA ----------
  function getExtension(url) {
    try {
      const parsed =
        new URL(url);

      const file =
        parsed.pathname
          .split("/")
          .pop() ||
        "";

      const dot =
        file.lastIndexOf(".");

      return dot >= 0
        ? file
            .slice(dot + 1)
            .toLowerCase()
        : "";
    } catch (_) {
      return "";
    }
  }

  function getYouTubeId(url) {
    try {
      const parsed =
        new URL(url);

      const host =
        parsed.hostname
          .replace(
            /^www\./i,
            ""
          )
          .toLowerCase();

      if (
        host ===
        "youtu.be"
      ) {
        return (
          parsed.pathname
            .split("/")
            .filter(Boolean)[0] ||
          ""
        );
      }

      if (
        host ===
          "youtube.com" ||
        host ===
          "m.youtube.com"
      ) {
        if (
          parsed.pathname ===
          "/watch"
        ) {
          return (
            parsed.searchParams.get(
              "v"
            ) ||
            ""
          );
        }

        const parts =
          parsed.pathname
            .split("/")
            .filter(Boolean);

        if (
          [
            "embed",
            "shorts",
            "live"
          ].includes(parts[0])
        ) {
          return (
            parts[1] ||
            ""
          );
        }
      }
    } catch (_) {
    }

    return "";
  }

  function embedImage(
    link,
    url
  ) {
    const wrapper =
      document.createElement(
        "a"
      );

    wrapper.className =
      "room-media";

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

    image.addEventListener(
      "error",
      function () {
        if (
          wrapper.parentNode
        ) {
          wrapper.replaceWith(
            link
          );
        }
      },
      {
        once: true
      }
    );

    wrapper.appendChild(
      image
    );

    link.replaceWith(
      wrapper
    );
  }

  function embedVideo(
    link,
    url
  ) {
    const wrapper =
      document.createElement(
        "div"
      );

    wrapper.className =
      "room-media";

    const video =
      document.createElement(
        "video"
      );

    video.src =
      url;

    video.controls =
      true;

    video.preload =
      "metadata";

    video.playsInline =
      true;

    video.addEventListener(
      "error",
      function () {
        if (
          wrapper.parentNode
        ) {
          wrapper.replaceWith(
            link
          );
        }
      },
      {
        once: true
      }
    );

    wrapper.appendChild(
      video
    );

    link.replaceWith(
      wrapper
    );
  }

  function embedYouTube(
    link,
    id
  ) {
    if (
      !/^[A-Za-z0-9_-]{6,20}$/.test(
        id
      )
    ) {
      return;
    }

    const wrapper =
      document.createElement(
        "div"
      );

    wrapper.className =
      "room-youtube";

    const iframe =
      document.createElement(
        "iframe"
      );

    iframe.src =
      "https://www.youtube-nocookie.com/embed/" +
      encodeURIComponent(id);

    iframe.loading =
      "lazy";

    iframe.allow =
      "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share";

    iframe.allowFullscreen =
      true;

    iframe.referrerPolicy =
      "strict-origin-when-cross-origin";

    wrapper.appendChild(
      iframe
    );

    link.replaceWith(
      wrapper
    );
  }

  function convertMediaLink(
    link
  ) {
    if (
      !(
        link instanceof
        HTMLAnchorElement
      )
    ) {
      return;
    }

    if (
      link.dataset.roomMediaProcessed ===
      "1"
    ) {
      return;
    }

    if (
      link.closest(
        ".room-media, .room-youtube"
      )
    ) {
      return;
    }

    link.dataset.roomMediaProcessed =
      "1";

    const url =
      link.href;

    if (!url) {
      return;
    }

    const youtubeId =
      getYouTubeId(url);

    if (youtubeId) {
      embedYouTube(
        link,
        youtubeId
      );

      return;
    }

    const extension =
      getExtension(url);

    if (
      IMAGE_EXTS.has(
        extension
      )
    ) {
      embedImage(
        link,
        url
      );

      return;
    }

    if (
      VIDEO_EXTS.has(
        extension
      )
    ) {
      embedVideo(
        link,
        url
      );
    }
  }

  function renderMedia(root) {
    if (!root) {
      return;
    }

    if (
      root instanceof
      HTMLAnchorElement
    ) {
      convertMediaLink(
        root
      );
    }

    if (
      root.querySelectorAll
    ) {
      root
        .querySelectorAll(
          "a[href]"
        )
        .forEach(
          convertMediaLink
        );
    }
  }

  // ---------- CHAT OBSERVER ----------
  function processChatNode(node) {
    if (
      !(
        node instanceof
        HTMLElement
      )
    ) {
      return;
    }

    if (
      node.classList.contains(
        "timestamp"
      )
    ) {
      applyCustomTimestamp(
        node
      );
    }

    node
      .querySelectorAll(
        ".timestamp"
      )
      .forEach(
        applyCustomTimestamp
      );

    renderMedia(
      node
    );
  }

  function setupChatObserver() {
    const buffer =
      document.getElementById(
        "messagebuffer"
      );

    if (!buffer) {
      setTimeout(
        setupChatObserver,
        500
      );

      return;
    }

    if (
      buffer.dataset.roomObserver ===
      "1"
    ) {
      return;
    }

    buffer.dataset.roomObserver =
      "1";

    /*
     * Existing media links can safely be embedded.
     *
     * Existing timestamps are intentionally not rewritten on page load,
     * because after a reload there is no reliable way to know what episode
     * was playing when an old buffered message was originally sent.
     */
    renderMedia(
      buffer
    );

    const observer =
      new MutationObserver(
        function (mutations) {
          for (
            const mutation of
            mutations
          ) {
            for (
              const node of
              mutation.addedNodes
            ) {
              if (
                node instanceof
                HTMLElement
              ) {
                processChatNode(
                  node
                );
              }
            }
          }
        }
      );

    observer.observe(
      buffer,
      {
        childList: true,
        subtree: true
      }
    );
  }

  setupChatObserver();
})();
