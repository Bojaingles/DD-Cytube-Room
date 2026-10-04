/* American-Dad room enhancements. Original MOTD remains the source of truth. */
(function () {
  'use strict';
  if (window.DDRoom) return;
  const version = '1.4.0';
  // Original room HTML, unchanged; hosted inside JS to keep CyTube editors empty.
  const ORIGINAL_MOTD = "\r\n\r\n<br />\r\n<br />\r\n\r\n<br />\r\n\r\n<div class=\"motd-rocksalt\">\r\n<center><font size=\"5\">\r\nThis channel is a proud part of:<br /></font></center>\r\n\r\n<br />\r\n\r\n\r\n</div>\r\n\r\n\r\n<center>\r\n<img class=\"responsive-banner\" src=\"https://bit.ly/4pBPNII\" width=\"500\" />\r\n  \r\n</center>\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n<br />\r\n<br />\r\n\r\n\r\n\r\n<div class=\"motd-banners\">\r\n\r\n  \r\n    <div class=\"column\"><a href=\"So-Bad-They-Are-Good\"><img src=\"https://bit.ly/457B3Kv\" /></a></div>\r\n    <div class=\"column\"><a href=\"TheAsylumMovies\"><img src=\"https://bit.ly/4pxbkSV\" /></a></div>\r\n    <div class=\"column\"><a href=\"The-Breenverse\"><img src=\"https://bit.ly/4qKFKSS\" /></a></div>\r\n    <div class=\"column\"><a href=\"SlasherTV\"><img src=\"https://bit.ly/4sG3SaU\" /></a></div>\r\n    <div class=\"column\"><a href=\"SaturdayMorningCartoonsChannel\"><img src=\"https://bit.ly/3NmtOZ2\" /></a></div>\r\n\r\n    <div class=\"column\"><a href=\"Best-of-SNL\"><img src=\"https://bit.ly/49mQL78\" /></a></div>\r\n    <div class=\"column\"><a href=\"Nothing-But-Commercials\"><img src=\"https://bit.ly/4qYpIoB\" /></a></div>\r\n    <div class=\"column\"><a href=\"South-Park-Show\"><img src=\"https://bit.ly/4sQ5Ci7\" /></a></div>\r\n    <div class=\"column\"><a href=\"crayon-shin-chan\"><img src=\"https://bit.ly/49A392k\" /></a></div>\r\n    <div class=\"column\"><a href=\"Bobs-Burgers\"><img src=\"https://bit.ly/45hfWW5\" /></a></div>\r\n\r\n    <div class=\"column\"><a href=\"Classic-Simpsons\"><img src=\"https://bit.ly/3LCYlkS\" /></a></div>\r\n    <div class=\"column\"><a href=\"futurama-show\"><img src=\"https://bit.ly/4qq6uZa\" /></a></div>\r\n    <div class=\"column\"><a href=\"American-Dad\"><img src=\"https://bit.ly/49G9E3C\" /></a></div>\r\n    <div class=\"column\"><a href=\"Best-of-Adult-Swim\"><img src=\"https://bit.ly/4jL8XL1\" /></a></div>\r\n    <div class=\"column\"><a href=\"Home-Movies\"><img src=\"https://bit.ly/4qx6wP2\" /></a></div>\r\n\r\n    <div class=\"column\"><a href=\"Metal-Maniacs\"><img src=\"https://bit.ly/4qsAQds\" /></a></div>\r\n    <div class=\"column\"><a href=\"Joe-Pera-Talks-With-You\"><img src=\"https://bit.ly/48eksWS\" /></a></div>\r\n    <div class=\"column\"><a href=\"Anthology-Horror\"><img src=\"https://bit.ly/4vOwlNy\" /></a></div>\r\n    <div class=\"column\"><a href=\"Star-Trek-TNG\"><img src=\"https://bit.ly/4pgHSk9\" /></a></div>\r\n    <div class=\"column\"><a href=\"Its-Always-Sunny\"><img src=\"https://bit.ly/3LCp9BD\" /></a></div>\r\n\r\n    <div class=\"column\"><a href=\"Tales-From-The-Crypt\"><img src=\"https://bit.ly/3LKZ0AH\" /></a></div>\r\n    <div class=\"column\"><a href=\"Malcolm-in-the-Middle\"><img src=\"https://bit.ly/49j4mfC\" /></a></div>\r\n    <div class=\"column\"><a href=\"Dragon-Ball-Z\"><img src=\"https://bit.ly/45MtZTL\" /></a></div>\r\n    <div class=\"column\"><a href=\"Workaholics\"><img src=\"https://bit.ly/49rvWG8\" /></a></div>\r\n    <div class=\"column\"><a href=\"The-Office\"><img src=\"https://bit.ly/3YAzp0j\" /></a></div>\r\n\r\n    <div class=\"column\"><a href=\"Twilight-Zone\"><img src=\"https://bit.ly/4cJCZ03\" /></a></div>\r\n    <div class=\"column\"><a href=\"the-cleveland-show\"><img src=\"https://bit.ly/3LiztPn\" /></a></div>\r\n    <div class=\"column\"><a href=\"Eastbound-and-Down\"><img src=\"https://bit.ly/49pQ90e\" /></a></div>\r\n    <div class=\"column\"><a href=\"breaking-bad\"><img src=\"https://bit.ly/4jYVGil\" /></a></div>\r\n    <div class=\"column\"><a href=\"Better-Call-Saul\"><img src=\"https://bit.ly/4pEu8jk\" /></a></div>\r\n\r\n    <div class=\"column\"><a href=\"Treehouse-Of-Horror\"><img src=\"https://bit.ly/4pedcjp\" /></a></div>\r\n    <div class=\"column\"><a href=\"The-3-Stooges\"><img src=\"https://bit.ly/4pGwAG4\" /></a></div>\r\n    <div class=\"column\"><a href=\"Dr-Katz-Professional-Therapist\"><img src=\"https://bit.ly/4d6h3Lw\" /></a></div>\r\n    <div class=\"column\"><a href=\"True-Detective\"><img src=\"https://bit.ly/4f56WJf\" /></a></div>\r\n    <div class=\"column\"><a href=\"Married-with-Children\"><img src=\"https://bit.ly/4qwPAb2\" /></a></div>\r\n\r\n    <div class=\"column\"><a href=\"RickandMortyTV\"><img src=\"https://bit.ly/4jGbqGx\" /></a></div>\r\n    <div class=\"column\"><a href=\"phineas-and-ferb\"><img src=\"https://bit.ly/49A4aaE\" /></a></div>\r\n    <div class=\"column\"><a href=\"Spider-Man-Channel\"><img src=\"https://bit.ly/45hhnDX\" /></a></div>\r\n    <div class=\"column\"><a href=\"BeavisandButt-Head\"><img src=\"https://bit.ly/4qW0c31\" /></a></div>\r\n    <div class=\"column\"><a href=\"Attack-on-Titan-Channel\"><img src=\"https://bit.ly/49qkcFm\" /></a></div>\r\n\r\n    <div class=\"column\"><a href=\"arrested-development\"><img src=\"https://bit.ly/49Z4LTJ\" /></a></div>\r\n    <div class=\"column\"><a href=\"The-Whitest-Kids-U-Know\"><img src=\"https://bit.ly/4jFLT07\" /></a></div>\r\n    <div class=\"column\"><a href=\"kids-in-the-hall\"><img src=\"https://bit.ly/4sGoIXQ\" /></a></div>\r\n    <div class=\"column\"><a href=\"Aqua-Teen-Hunger-Force-Show\"><img src=\"https://bit.ly/49zSw0d\" /></a></div>\r\n    <div class=\"column\"><a href=\"king-of-the-hill\"><img src=\"https://bit.ly/4qpj0YV\" /></a></div>\r\n\r\n    <div class=\"column\"><a href=\"ren-and-stimpy\"><img src=\"https://bit.ly/45cFp2Z\" /></a></div>\r\n    <div class=\"column\"><a href=\"Regular-Show\"><img src=\"https://bit.ly/3LlCG0y\" /></a></div>\r\n    <div class=\"column\"><a href=\"Classic-Nickelodeon\"><img src=\"https://bit.ly/4b4Dhy9\" /></a></div>\r\n    <div class=\"column\"><a href=\"Animation-For-Adults\"><img src=\"https://bit.ly/49YkCm2\" /></a></div>\r\n    <div class=\"column\"><a href=\"Cinco-Cinema-Experience\"><img src=\"https://bit.ly/4e5r6B3\" /></a></div>\r\n\r\n    <div class=\"column\"><a href=\"Archer-Show\"><img src=\"https://bit.ly/4e6t0RS\" /></a></div>\r\n    <div class=\"column\"><a href=\"ColumboTV\"><img src=\"https://bit.ly/4pP5fle\" /></a></div>\r\n\r\n\r\n\r\n\r\n  \r\n\r\n\r\n</div>\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n<br />\r\n<br />\r\n<div class=\"motd-rocksalt\">\r\n<center><font size=\"5\">\r\nIf you'd like to help support this channel, you have 3 options:<br /></font></center>\r\n\r\n\r\n\r\n\r\n</div>\r\n\r\n\r\n<br />\r\n<center><a href=\"https://cash.app/$ddbciv\"><img src=\"https://i.ibb.co/h2vRWY3/Donate-with-CASH-APP.png\" alt=\"Donate with Cash App!\" width=\"150\" /></a></center>\r\n\r\n<center><a href=\"https://www.paypal.com/donate/?hosted_button_id=WF9SLMEYRKFSJ\"><img src=\"https://i.ibb.co/RTWzjSh/Donate-Now-With-Paypal.png\" alt=\"Donate with Cash App!\" width=\"150\" /></a></center>\r\n\r\n<center><a href=\"https://amzn.to/49AvDYI\"><img src=\"https://i.ibb.co/mFVjCJG/Order-on-Amazon.png\" alt=\"Donate with Cash App!\" width=\"150\" /></a></center>\r\n\r\n<br />\r\n<center><span style=\"font-size:xx-small\">**As an Amazon Associate, this channel earns from qualifying purchases. When you click on the banner above <br />or a link in the poll and make a purchase, this can result in a small commission for this channel.**</span></center>\r\n\r\n\r\n<br />\r\n\r\n\r\n<br />\r\n<br /> \r\n\r\n\r\n\r\n<center>\r\n  <a href=\"https://discord.gg/DTtBeKg5tF\">\r\n    <img class=\"responsive-banner\" src=\"https://bit.ly/49K4owa\" />\r\n  </a>\r\n</center>\r\n\r\n\r\n\r\n<br />\r\n<br /> \r\n\r\n\r\n";
  const started = Date.now();
  const pad = n => String(n).padStart(2, '0');
  const reducedMotion = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const storageKey = 'dd-room-episodes:' + location.pathname;
  let history = {};
  try { history = JSON.parse(sessionStorage.getItem(storageKey) || '{}'); } catch (_) {}
  if (!history || typeof history !== 'object' || Array.isArray(history)) history = {};
  let saveTimer;
  function remember(key, code) {
    history[key] = code;
    clearTimeout(saveTimer);
    saveTimer = setTimeout(() => {
      history = Object.fromEntries(Object.entries(history).slice(-600));
      try { sessionStorage.setItem(storageKey, JSON.stringify(history)); } catch (_) {}
    }, 300);
  }
  function episode(title) {
    const match = String(title || '').match(/\bS(\d{1,3})\s*E(\d{1,3})\b/i)
      || String(title || '').match(/\bSeason\s+(\d{1,3})\s+Episode\s+(\d{1,3})\b/i);
    return match ? 's' + pad(Number(match[1])) + 'e' + pad(Number(match[2])) : '';
  }
  function dateText(time) {
    const d = new Date(time);
    if (!Number.isFinite(d.getTime())) return '';
    return `${d.getMonth() + 1}/${d.getDate()}/${pad(d.getFullYear() % 100)} ${pad(d.getHours())}:${pad(d.getMinutes())}`;
  }
  function currentEpisode() {
    return episode(document.getElementById('currenttitle')?.textContent);
  }
  function classify(value) {
    let u;
    try { u = new URL(value); } catch (_) { return null; }
    if (!['https:', 'http:'].includes(u.protocol) || u.username || u.password) return null;
    const host = u.hostname.toLowerCase().replace(/^www\./, '');
    let id = '';
    if (host === 'youtu.be') id = u.pathname.split('/')[1];
    if (['youtube.com', 'm.youtube.com', 'youtube-nocookie.com'].includes(host)) {
      id = u.searchParams.get('v') || u.pathname.match(/^\/(?:shorts|embed|live)\/([^/]+)/)?.[1] || '';
    }
    if (/^[\w-]{11}$/.test(id)) {
      const embed = new URL('https://www.youtube-nocookie.com/embed/' + id);
      embed.searchParams.set('autoplay', '0');
      embed.searchParams.set('playsinline', '1');
      const t = u.searchParams.get('t') || u.searchParams.get('start') || '';
      const parts = t.match(/^(?:(\d+)h)?(?:(\d+)m)?(?:(\d+)s)?$/);
      const seconds = /^\d+$/.test(t) ? Number(t) : parts ? Number(parts[1] || 0) * 3600 + Number(parts[2] || 0) * 60 + Number(parts[3] || 0) : 0;
      if (seconds > 0) embed.searchParams.set('start', String(Math.min(seconds, 86400)));
      return { type: 'frame', src: embed.href, name: 'YouTube video' };
    }
    if (host === 'vimeo.com' || host === 'player.vimeo.com') {
      const v = u.pathname.match(/^\/(?:video\/)?(\d+)(?:\/([a-f\d]+))?\/?$/i);
      if (v) return { type: 'frame', src: `https://player.vimeo.com/video/${v[1]}?autoplay=0` + (v[2] ? '&h=' + v[2] : ''), name: 'Vimeo video' };
    }
    if (/\.(?:png|jpe?g|gif|webp|avif|bmp|svg)(?:$)/i.test(u.pathname) || /^(?:image\/)?(?:png|jpe?g|gif|webp|avif)$/i.test(u.searchParams.get('format') || '')) return { type: 'image', src: u.href };
    if (/\.(?:mp4|webm|og[gv]|m4v|mov)$/i.test(u.pathname)) return { type: 'video', src: u.href };
    if (host === 'imgur.com' && /^\/[a-z\d]+\/?$/i.test(u.pathname)) return { type: 'image', src: 'https://i.imgur.com/' + u.pathname.split('/')[1] + '.jpg' };
    // Ordinary pages cannot be framed reliably. Probe only media elements;
    // they cannot execute HTML, and failed probes leave the original link.
    return { type: 'probe', src: u.href };
  }
  const api = window.DDRoom = { version, episode, dateText, classify };
  let buffer;
  function keepScroll(action) {
    // CyTube owns follow mode. Media can grow before its load callback runs,
    // so the distance from the bottom at that point is not a reliable signal.
    const stick = buffer && (typeof window.SCROLLCHAT === 'boolean'
      ? window.SCROLLCHAT
      : buffer.scrollHeight - buffer.clientHeight - buffer.scrollTop <= 2);
    action();
    if (stick) {
      // Use CyTube's ignored-scroll-event handling; don't queue a scroll that
      // could pull someone back down after they start reading older messages.
      if (typeof window.scrollChat === 'function') window.scrollChat();
      else buffer.scrollTop = buffer.scrollHeight;
    }
  }
  function makeMedia(link, spec) {
    if (!link.isConnected) return;
    const card = document.createElement('span');
    card.className = 'dd-media';
    card.setAttribute('data-dd-media', spec.type);
    link.insertAdjacentElement('afterend', card);
    const fail = () => keepScroll(() => card.remove());
    if (spec.type === 'frame') {
      const frame = document.createElement('iframe');
      frame.src = spec.src;
      frame.title = spec.name;
      frame.loading = 'lazy';
      frame.allow = 'fullscreen; picture-in-picture; encrypted-media';
      frame.allowFullscreen = true;
      frame.referrerPolicy = 'strict-origin-when-cross-origin';
      card.append(frame);
      return;
    }
    function video(probe) {
      const el = document.createElement('video');
      el.controls = true;
      el.autoplay = false;
      el.loop = false;
      el.playsInline = true;
      el.preload = 'metadata';
      if (probe) el.hidden = true;
      el.addEventListener('loadedmetadata', () => keepScroll(() => { el.hidden = false; }), { once: true });
      el.addEventListener('error', fail, { once: true });
      card.replaceChildren(el);
      el.src = spec.src;
    }
    if (spec.type === 'video') { video(false); return; }
    const image = document.createElement('img');
    image.alt = 'Shared image';
    image.decoding = 'async';
    image.referrerPolicy = 'no-referrer';
    image.hidden = spec.type === 'probe';
    image.addEventListener('load', () => keepScroll(() => { image.hidden = false; }), { once: true });
    image.addEventListener('error', () => spec.type === 'probe' ? video(true) : fail(), { once: true });
    const original = document.createElement('a');
    original.href = link.href;
    original.target = '_blank';
    original.rel = 'noopener noreferrer';
    original.append(image);
    card.append(original);
    image.src = spec.src;
  }
  const pending = new WeakMap();
  const visibility = 'IntersectionObserver' in window ? new IntersectionObserver(entries => {
    for (const entry of entries) if (entry.isIntersecting) {
      visibility.unobserve(entry.target);
      const spec = pending.get(entry.target);
      pending.delete(entry.target);
      if (spec) keepScroll(() => makeMedia(entry.target, spec));
    }
  }, { rootMargin: '200px' }) : null;
  function media(root) {
    if (!root?.querySelectorAll || root.closest?.('.dd-media')) return;
    const links = root.matches?.('a[href]') ? [root] : root.querySelectorAll('a[href]');
    for (const link of links) {
      if (link.dataset.ddChecked || link.closest('.dd-media') || link.querySelector('img,video,iframe')) continue;
      link.dataset.ddChecked = '1';
      const row = link.closest('#messagebuffer > div');
      if (row && row.querySelectorAll('[data-dd-embed]').length >= 6) continue;
      const spec = classify(link.href);
      if (!spec) continue;
      link.dataset.ddEmbed = '1';
      if (visibility) { pending.set(link, spec); visibility.observe(link); }
      else makeMedia(link, spec);
    }
  }
  function hookFormatter() {
    const original = window.formatChatMessage;
    if (typeof original !== 'function' || original.ddRoom) return;
    function format(data) {
      const rendered = original.apply(this, arguments);
      const row = rendered?.[0];
      if (row && data && Number.isFinite(Number(data.time))) {
        row.dataset.ddTime = String(data.time);
        const key = String(data.time) + ':' + String(data.username || '');
        let code = history[key] || '';
        // Never label replayed history with whichever episode happens to be on.
        if (!code && Number(data.time) >= started && Math.abs(Date.now() - Number(data.time)) < 15000) {
          code = currentEpisode();
          if (code) remember(key, code);
        }
        row.dataset.ddEpisode = code;
        // Finish wrapping the timestamp before addChatMessage measures and
        // scrolls the row. Private-message formatters use a separate lastchat.
        if (typeof window.LASTCHAT === 'undefined' || arguments[1] === window.LASTCHAT) stamp(row);
      }
      return rendered;
    }
    format.ddRoom = true;
    window.formatChatMessage = format;
  }
  function stamp(row) {
    if (!row?.dataset?.ddTime || row.dataset.ddStamped) return;
    const stamp = row.querySelector('.timestamp');
    if (!stamp) return; // Respect the viewer's timestamp preference.
    const text = dateText(Number(row.dataset.ddTime));
    if (!text) return;
    const code = row.dataset.ddEpisode;
    stamp.textContent = (code ? '[' + code + ']' : '') + '[' + text + '] ';
    stamp.title = new Date(Number(row.dataset.ddTime)).toLocaleString() + (code ? ' · ' + code : ' · Episode unavailable for this message');
    row.dataset.ddStamped = '1';
  }
  function process(root) {
    if (!(root instanceof Element) || root.closest('.dd-media')) return;
    stamp(root);
    root.querySelectorAll('[data-dd-time]').forEach(stamp);
    media(root);
  }
  function button(text, label) {
    const el = document.createElement('button');
    el.type = 'button';
    el.textContent = text;
    el.setAttribute('aria-label', label);
    return el;
  }
  let motdSource = '';
  let navigationHome;
  function integrateNavigation(bar) {
    const nav = document.querySelector('nav.navbar');
    if (!nav || !bar) return;
    if (!navigationHome) { navigationHome = document.createComment('Original CyTube navigation position'); nav.before(navigationHome); }
    if (nav.parentElement !== bar) bar.prepend(nav); // Move, never clone: retain native handlers and IDs.
    nav.classList.add('dd-room-navigation');
    document.documentElement.classList.add('dd-integrated-navigation');
    if (api.navigationResize) api.navigationResize.disconnect();
    const measure = () => {
      bar.style.setProperty('--dd-navigation-height', nav.getBoundingClientRect().height + 'px');
      fitViewingArea();
    };
    measure();
    if ('ResizeObserver' in window) {
      api.navigationResize = new ResizeObserver(measure);
      api.navigationResize.observe(nav);
      api.navigationResize.observe(bar);
    }
  }
  function restoreNavigation() {
    const nav = document.querySelector('nav.dd-room-navigation');
    if (nav && navigationHome?.isConnected) { navigationHome.after(nav); nav.classList.remove('dd-room-navigation'); }
    document.documentElement.classList.remove('dd-integrated-navigation');
    api.navigationResize?.disconnect();
  }
  function roomWatermark() {
    if (!document.body || document.getElementById('dd-room-watermark')) return;
    const watermark = document.createElement('div');
    watermark.id = 'dd-room-watermark';
    watermark.setAttribute('aria-hidden', 'true');
    const logo = document.createElement('img');
    logo.src = 'https://i.postimg.cc/d3zdJNSr/The-DBN-(Doodoo-Buttchump-Network)-SPELLED-OUT.png';
    logo.alt = '';
    logo.draggable = false;
    logo.decoding = 'async';
    watermark.append(logo);
    document.body.prepend(watermark);
    document.documentElement.classList.add('dd-branded-room');
  }
  function carousel() {
    const motd = document.getElementById('motd');
    const wrap = document.getElementById('motdwrap');
    const banners = motd?.querySelector('.motd-banners');
    if (!wrap || !banners?.querySelector('a')) {
      restoreNavigation();
      document.getElementById('dd-channel-bar')?.remove();
      document.documentElement.classList.remove('dd-motd-ready');
      return;
    }
    if (motd.innerHTML === motdSource && document.getElementById('dd-channel-bar')) return;
    api.stopCarousel?.();
    const expanded = document.querySelector('#dd-channel-bar details')?.open || false;
    motdSource = motd.innerHTML;
    const bar = document.createElement('section');
    bar.id = 'dd-channel-bar';
    bar.setAttribute('aria-label', 'Channel selector');
    const head = document.createElement('div');
    head.className = 'dd-bar-head';
    const count = document.createElement('span');
    count.className = 'dd-count';
    const previous = button('‹', 'Previous channels');
    const next = button('›', 'Next channels');
    const pause = button('Ⅱ', 'Pause channel scrolling');
    head.append(count, pause, previous, next);
    const rail = banners.cloneNode(true);
    rail.id = 'dd-channel-rail';
    rail.tabIndex = 0;
    rail.setAttribute('aria-label', 'Shows; use left and right arrow keys to browse');
    const cards = Array.from(rail.querySelectorAll('.column'));
    count.textContent = cards.length + ' channels';
    for (const card of cards) {
      const link = card.querySelector('a');
      const img = card.querySelector('img');
      const label = decodeURIComponent(new URL(link.href, location.href).pathname.split('/').pop()).replace(/-/g, ' ');
      if (!link.getAttribute('aria-label')) link.setAttribute('aria-label', label);
      if (new URL(link.href, location.href).pathname.toLowerCase() === location.pathname.toLowerCase()) {
        card.classList.add('dd-current');
        link.setAttribute('aria-current', 'page');
      }
      if (img) { img.loading = 'lazy'; img.decoding = 'async'; }
    }
    // Identical copies on either side let the viewport cross the seam without
    // changing what is visible. Only original cards enter the keyboard order.
    const copy = card => {
      const clone = card.cloneNode(true);
      clone.dataset.ddLoopCopy = '1';
      clone.setAttribute('aria-hidden', 'true');
      clone.querySelectorAll('[id]').forEach(e => e.removeAttribute('id'));
      clone.querySelectorAll('a').forEach(a => { a.tabIndex = -1; a.removeAttribute('aria-current'); });
      return clone;
    };
    rail.prepend(...cards.map(copy));
    rail.append(...cards.map(copy));
    let start = 0, period = 0, autoX = 0, frame = 0, lastFrame = 0;
    let keyboardInput = false, lastPointerType = 'mouse', paused = false, idleUntil = 0;
    const heldPointers = new Set();
    const interactions = new AbortController();
    const listen = (target, type, handler, options = {}) => target.addEventListener(type, handler, { ...options, signal: interactions.signal });
    function controls() {
      if (!cards.length) return;
      start = cards[0].offsetLeft;
      period = rail.querySelectorAll('[data-dd-loop-copy]')[cards.length].offsetLeft - start;
      previous.disabled = next.disabled = period <= rail.clientWidth;
    }
    function wrapPosition() {
      if (!period) return;
      let x = rail.scrollLeft;
      if (x < start) x += period;
      else if (x >= start + period) x -= period;
      if (Math.abs(x - rail.scrollLeft) > 1) { rail.scrollLeft = x; autoX = x; }
    }
    function interact(delay = 1200) { idleUntil = performance.now() + delay; autoX = rail.scrollLeft; }
    function move(direction) {
      interact();
      rail.scrollBy({ left: direction * Math.max(240, rail.clientWidth * .75), behavior: reducedMotion() ? 'auto' : 'smooth' });
    }
    previous.addEventListener('click', () => move(-1));
    next.addEventListener('click', () => move(1));
    rail.addEventListener('scroll', wrapPosition, { passive: true });
    // Mouse clicks leave buttons/links focused. Only keyboard focus inside the
    // moving rail should stop motion; don't latch focus until an outside click.
    listen(document, 'keydown', e => {
      if (['Tab', 'ArrowLeft', 'ArrowRight', 'Home', 'End'].includes(e.key)) keyboardInput = true;
    }, { capture: true });
    listen(document, 'pointerdown', e => {
      keyboardInput = false;
      lastPointerType = e.pointerType || 'mouse';
      if (rail.contains(e.target)) { heldPointers.add(e.pointerId); interact(); }
    }, { capture: true, passive: true });
    listen(document, 'pointermove', e => { lastPointerType = e.pointerType || 'mouse'; }, { passive: true });
    function releasePointer(e) {
      if (heldPointers.delete(e.pointerId)) interact(lastPointerType === 'touch' ? 2500 : 1200);
    }
    listen(window, 'pointerup', releasePointer, { passive: true });
    listen(window, 'pointercancel', releasePointer, { passive: true });
    listen(rail, 'lostpointercapture', releasePointer);
    listen(rail, 'pointerleave', () => interact());
    listen(rail, 'wheel', () => interact(2000), { passive: true });
    listen(bar, 'focusout', () => interact());
    function resetInteraction() { heldPointers.clear(); keyboardInput = false; lastFrame = 0; interact(); }
    listen(window, 'blur', resetInteraction);
    listen(document, 'visibilitychange', resetInteraction);
    pause.addEventListener('click', () => {
      paused = !paused;
      pause.textContent = paused ? '▶' : 'Ⅱ';
      pause.setAttribute('aria-label', paused ? 'Resume channel scrolling' : 'Pause channel scrolling');
      pause.setAttribute('aria-pressed', String(paused));
      interact();
    });
    pause.setAttribute('aria-pressed', 'false');
    rail.addEventListener('keydown', e => {
      if (e.key === 'ArrowRight' || e.key === 'ArrowLeft') { e.preventDefault(); move(e.key === 'ArrowRight' ? 1 : -1); }
      if (e.key === 'Home' || e.key === 'End') { e.preventDefault(); interact(); rail.scrollTo({ left: e.key === 'Home' ? start : start + period - rail.clientWidth, behavior: 'auto' }); }
    });
    const details = document.createElement('details');
    details.open = expanded;
    const summary = document.createElement('summary');
    summary.textContent = 'Info & support';
    const info = motd.cloneNode(true);
    info.removeAttribute('id');
    info.removeAttribute('style');
    info.classList.add('dd-original-info');
    info.querySelector('.motd-banners')?.remove();
    details.append(summary, info);
    bar.append(head, rail, details);
    const navigation = document.querySelector('nav.navbar');
    if (navigation && !navigationHome) { navigationHome = document.createComment('Original CyTube navigation position'); navigation.before(navigationHome); }
    if (navigation) bar.prepend(navigation);
    document.getElementById('dd-channel-bar')?.remove();
    wrap.insertAdjacentElement('beforebegin', bar);
    integrateNavigation(bar);
    document.documentElement.classList.add('dd-motd-ready');
    requestAnimationFrame(() => {
      controls();
      const selected = cards.find(card => card.classList.contains('dd-current')) || cards[0];
      rail.scrollLeft = selected.offsetLeft - (rail.clientWidth - selected.clientWidth) / 2;
      wrapPosition();
      autoX = rail.scrollLeft;
    });
    if (api.railResize) api.railResize.disconnect();
    if ('ResizeObserver' in window) { api.railResize = new ResizeObserver(controls); api.railResize.observe(rail); }
    function drift(now) {
      if (!bar.isConnected) return;
      const elapsed = Math.min(50, now - (lastFrame || now));
      lastFrame = now;
      // Query current hover/focus state instead of trusting a pointerleave or
      // focusout event that can be lost when switching tabs or dragging outside.
      const hovered = lastPointerType !== 'touch' && rail.matches(':hover');
      const focused = keyboardInput && rail.contains(document.activeElement);
      if (!paused && !hovered && !focused && !heldPointers.size && !details.open && !document.hidden && !reducedMotion() && now > idleUntil && period > rail.clientWidth) {
        autoX += elapsed * .025; // 25 pixels per second, independent of frame rate.
        rail.scrollLeft = autoX;
        wrapPosition();
      } else autoX = rail.scrollLeft;
      frame = requestAnimationFrame(drift);
    }
    frame = requestAnimationFrame(drift);
    api.stopCarousel = () => { interactions.abort(); cancelAnimationFrame(frame); api.railResize?.disconnect(); };
  }
  function fitViewingArea() {
    const main = document.getElementById('main');
    const chat = document.getElementById('chatwrap');
    const video = document.getElementById('videowrap');
    if (!main || !chat || !video) return;
    document.documentElement.classList.add('dd-fit-view');
    const top = main.getBoundingClientRect().top + window.scrollY;
    const toolbar = document.getElementById('controlsrow')?.getBoundingClientRect().height || 36;
    const available = Math.max(240, (window.visualViewport?.height || window.innerHeight) - top - toolbar - 12);
    main.style.setProperty('--dd-view-height', available + 'px');
    const chatHeight = chat.clientHeight;
    const headerHeight = document.getElementById('chatheader')?.getBoundingClientRect().height || 0;
    const formHeight = chat.querySelector('form')?.getBoundingClientRect().height || 38;
    const messagesHeight = Math.max(60, chatHeight - headerHeight - formHeight);
    keepScroll(() => {
      chat.style.setProperty('--dd-message-height', messagesHeight + 'px');
    });
  }
  // TVmaze data is CC BY-SA; the panel links to its source and license.
  const episodeCacheKey = 'dd-american-dad-guide-v1';
  let guideCache, guideRequest, guideRetryAt = 0;
  function validGuide(value) {
    return Array.isArray(value) && value.length > 0 && value.every(e => e && typeof e.name === 'string' && Number.isInteger(e.id));
  }
  async function episodeGuide() {
    if (!guideCache) {
      try {
        const cached = JSON.parse(localStorage.getItem(episodeCacheKey) || 'null');
        if (cached && validGuide(cached.episodes)) guideCache = cached;
      } catch (_) {}
    }
    if (guideCache && Date.now() - guideCache.saved < 86400000) return guideCache.episodes;
    if (guideRequest) return guideRequest;
    if (Date.now() < guideRetryAt) {
      if (guideCache) return guideCache.episodes;
      throw new Error('Guide temporarily unavailable');
    }
    guideRequest = (async () => {
      const controller = new AbortController();
      const timeout = setTimeout(() => controller.abort(), 8000);
      try {
        const response = await fetch('https://api.tvmaze.com/shows/215/episodes?specials=1', { signal: controller.signal, credentials: 'omit', referrerPolicy: 'no-referrer' });
        if (!response.ok) throw new Error('Guide unavailable');
        const episodes = await response.json();
        if (!validGuide(episodes)) throw new Error('Invalid guide');
        guideCache = { saved: Date.now(), episodes };
        try { localStorage.setItem(episodeCacheKey, JSON.stringify(guideCache)); } catch (_) {}
        guideRetryAt = 0;
        return episodes;
      } catch (error) {
        guideRetryAt = Date.now() + 60000;
        if (guideCache) return guideCache.episodes;
        throw error;
      } finally { clearTimeout(timeout); }
    })();
    try { return await guideRequest; } finally { guideRequest = null; }
  }
  function titleKey(value) {
    return String(value).normalize('NFKD').toLowerCase().replace(/&/g, 'and').replace(/[^a-z0-9]/g, '');
  }
  function playingEpisode(raw) {
    const title = String(raw || '').replace(/^Currently Playing:\s*/i, '').trim();
    if (!/^American[ ._-]+Dad\b/i.test(title)) return null;
    const code = episode(title);
    const name = title.replace(/^American[ ._-]+Dad!?\s*/i, '')
      .replace(/\bS\d{1,3}\s*E\d{1,3}\b|\bSeason\s+\d{1,3}\s+Episode\s+\d{1,3}\b/i, '')
      .replace(/\.(mp4|mkv|webm|avi)$/i, '').replace(/^[\s:._–—-]+|[\s_–—-]+$/g, '').trim();
    return { code, name, title };
  }
  function guideMatch(info, entries) {
    // Season numbering varies by provider. Never fall back to a conflicting
    // season/episode number when a title cannot be confidently matched.
    if (!info?.name) return null;
    const matches = entries.filter(e => titleKey(e.name) === titleKey(info.name));
    return matches.length === 1 ? matches[0] : null;
  }
  Object.assign(api, { playingEpisode, guideMatch });
  let episodePanel, episodeTitleNode, episodeObserver, episodeRaw, episodeRevision = 0;
  function panelText(selector, text) { episodePanel.querySelector(selector).textContent = text; }
  async function updateEpisodePanel(force) {
    const raw = document.getElementById('currenttitle')?.textContent || '';
    if (!episodePanel || (!force && raw === episodeRaw)) return;
    episodeRaw = raw;
    const revision = ++episodeRevision;
    const info = playingEpisode(raw);
    const source = episodePanel.querySelector('.dd-episode-source');
    source.hidden = true;
    panelText('.dd-episode-meta', info?.code.toUpperCase() || '');
    panelText('.dd-episode-title', info?.name || info?.title || 'Episode information');
    panelText('.dd-episode-synopsis', info ? 'Loading episode information…' : 'Episode information appears when an American Dad! episode is playing.');
    episodePanel.dataset.state = info ? 'loading' : 'idle';
    if (!info) return;
    try {
      const entries = await episodeGuide();
      if (revision !== episodeRevision || raw !== document.getElementById('currenttitle')?.textContent) return;
      const match = guideMatch(info, entries);
      if (!match) {
        panelText('.dd-episode-synopsis', 'No synopsis available for this episode yet.');
        episodePanel.dataset.state = 'unmatched';
        return;
      }
      panelText('.dd-episode-title', match.name);
      const meta = [info.code.toUpperCase()];
      if (/^\d{4}-\d{2}-\d{2}$/.test(match.airdate || '')) {
        const [y,m,d] = match.airdate.split('-').map(Number);
        meta.push('First aired ' + new Date(y,m-1,d).toLocaleDateString(undefined, { year: 'numeric', month: 'short', day: 'numeric' }));
      }
      panelText('.dd-episode-meta', meta.filter(Boolean).join(' · '));
      const template = document.createElement('template');
      template.innerHTML = String(match.summary || '').replace(/<\/(p|div)>|<br\s*\/?\s*>/gi, ' ');
      template.content.querySelectorAll('script,style').forEach(e => e.remove());
      panelText('.dd-episode-synopsis', template.content.textContent.trim() || 'No synopsis available for this episode yet.');
      source.querySelector('a').href = 'https://www.tvmaze.com/episodes/' + match.id;
      source.hidden = false;
      episodePanel.dataset.state = 'ready';
    } catch (_) {
      if (revision !== episodeRevision) return;
      panelText('.dd-episode-synopsis', 'Episode details are temporarily unavailable. They’ll retry automatically.');
      episodePanel.dataset.state = 'error';
    }
  }
  let playlistExpanded = false;
  try { playlistExpanded = sessionStorage.getItem('dd-playlist-expanded') === '1'; } catch (_) {}
  function episodeUI() {
    const title = document.getElementById('currenttitle');
    const host = document.getElementById('rightpane');
    const poll = document.getElementById('pollwrap');
    if (!episodePanel && title && (host || poll)) {
      episodePanel = document.createElement('section');
      episodePanel.id = 'dd-episode-info';
      episodePanel.setAttribute('aria-label', 'Current episode information');
      episodePanel.innerHTML = '<div class="dd-episode-eyebrow">NOW PLAYING</div><h3 class="dd-episode-title"></h3><p class="dd-episode-meta"></p><details open><summary>Synopsis</summary><p class="dd-episode-synopsis"></p><small class="dd-episode-source" hidden>Episode details: <a target="_blank" rel="noopener noreferrer">TVmaze</a> · <a href="https://creativecommons.org/licenses/by-sa/4.0/" target="_blank" rel="noopener noreferrer">CC BY-SA</a></small></details>';
      if (host) host.prepend(episodePanel); else poll.before(episodePanel);
    }
    if (episodePanel && title !== episodeTitleNode) {
      episodeObserver?.disconnect();
      episodeTitleNode = title;
      if (title) {
        episodeObserver = new MutationObserver(() => updateEpisodePanel());
        episodeObserver.observe(title, { childList: true, subtree: true, characterData: true });
      }
    }
    updateEpisodePanel(episodePanel?.dataset.state === 'error' && Date.now() >= guideRetryAt);
    // Presentation only: native CyTube permissions continue to govern actions.
    const staff = Number(window.CLIENT?.rank) >= 2;
    document.documentElement.classList.toggle('dd-viewer', !staff);
    document.documentElement.classList.toggle('dd-playlist-folded', !playlistExpanded);
    const controls = document.getElementById('rightcontrols');
    if (controls && !document.getElementById('dd-playlist-toggle')) {
      const button = document.createElement('button');
      button.id = 'dd-playlist-toggle';
      button.type = 'button';
      button.className = 'btn btn-sm btn-default';
      button.setAttribute('aria-controls', 'rightpane-inner plcontrol');
      button.addEventListener('click', () => {
        playlistExpanded = !playlistExpanded;
        try { sessionStorage.setItem('dd-playlist-expanded', playlistExpanded ? '1' : '0'); } catch (_) {}
        episodeUI();
      });
      controls.prepend(button);
    }
    const toggle = document.getElementById('dd-playlist-toggle');
    if (toggle) {
      toggle.hidden = !staff;
      toggle.setAttribute('aria-expanded', String(playlistExpanded));
      toggle.textContent = playlistExpanded ? '▾ Playlist controls' : '▸ Playlist controls';
    }
  }
  function init() {
    roomWatermark();
    episodeUI();
    fitViewingArea();
    hookFormatter();
    buffer = document.getElementById('messagebuffer');
    if (buffer && !buffer.dataset.ddObserved) {
      buffer.dataset.ddObserved = '1';
      process(buffer);
      new MutationObserver(mutations => {
        for (const m of mutations) for (const node of m.addedNodes) process(node);
      }).observe(buffer, { childList: true, subtree: true });
    }
    const motd = document.getElementById('motd');
    if (motd && !motd.querySelector('.motd-banners')) motd.innerHTML = ORIGINAL_MOTD;
    if (motd && !motd.dataset.ddObserved) {
      motd.dataset.ddObserved = '1';
      carousel();
      new MutationObserver(carousel).observe(motd, { childList: true, subtree: true, characterData: true });
    }
    const channelBar = document.getElementById('dd-channel-bar');
    if (channelBar && !channelBar.querySelector('nav.navbar')) integrateNavigation(channelBar);
    let icon = document.querySelector('link[rel~="icon"]');
    if (!icon) { icon = document.createElement('link'); icon.rel = 'icon'; document.head.append(icon); }
    icon.href = 'https://i.postimg.cc/5N5W08N0/Stan-Smith-Head.png';
  }
  // Delegation works for existing and subsequently edited MOTD anchors.
  document.addEventListener('click', e => {
    const link = e.target.closest?.('a[href="#videowrap"]');
    const video = document.getElementById('videowrap');
    if (link && video) { e.preventDefault(); video.scrollIntoView({ block: 'center', behavior: reducedMotion() ? 'auto' : 'smooth' }); }
  });
  init();
  // Detect login/rank changes and replacement title nodes without touching polls.
  api.episodeMonitor = setInterval(episodeUI, 2000);
  window.addEventListener('resize', fitViewingArea, { passive: true });
  window.visualViewport?.addEventListener('resize', fitViewingArea, { passive: true });
  if ('ResizeObserver' in window) {
    api.viewResize = new ResizeObserver(fitViewingArea);
    ['main', 'dd-channel-bar', 'controlsrow', 'chatheader'].forEach(id => {
      const node = document.getElementById(id); if (node) api.viewResize.observe(node);
    });
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init, { once: true });
  // Bounded startup retry for asynchronously constructed CyTube controls.
  let attempts = 0;
  const ready = setInterval(() => {
    init();
    if (++attempts >= 30 || (buffer && document.getElementById('motd') && window.formatChatMessage?.ddRoom)) clearInterval(ready);
  }, 500);
})();
