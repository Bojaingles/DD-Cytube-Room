/* American-Dad room enhancements. Original MOTD remains the source of truth. */
(function () {
  'use strict';
  if (window.DDRoom) return;
  const version = '1.0.0';
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
    const stick = buffer && buffer.scrollHeight - buffer.clientHeight - buffer.scrollTop < 50;
    action();
    if (stick) requestAnimationFrame(() => { if (buffer) buffer.scrollTop = buffer.scrollHeight; });
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
  function carousel() {
    const motd = document.getElementById('motd');
    const wrap = document.getElementById('motdwrap');
    const banners = motd?.querySelector('.motd-banners');
    if (!wrap || !banners?.querySelector('a')) {
      document.getElementById('dd-channel-bar')?.remove();
      document.documentElement.classList.remove('dd-motd-ready');
      return;
    }
    if (motd.innerHTML === motdSource && document.getElementById('dd-channel-bar')) return;
    const expanded = document.querySelector('#dd-channel-bar details')?.open || false;
    motdSource = motd.innerHTML;
    const bar = document.createElement('section');
    bar.id = 'dd-channel-bar';
    bar.setAttribute('aria-label', 'Channel selector');
    const head = document.createElement('div');
    head.className = 'dd-bar-head';
    const title = document.createElement('strong');
    title.textContent = 'CHANNEL SELECT';
    const hint = document.createElement('span');
    hint.className = 'dd-bar-hint';
    hint.textContent = 'Scroll · select · watch';
    const count = document.createElement('span');
    count.className = 'dd-count';
    const previous = button('‹', 'Previous channels');
    const next = button('›', 'Next channels');
    head.append(title, hint, count, previous, next);
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
    function controls() {
      previous.disabled = rail.scrollLeft <= 2;
      next.disabled = rail.scrollLeft + rail.clientWidth >= rail.scrollWidth - 2;
    }
    function move(direction) {
      rail.scrollBy({ left: direction * Math.max(240, rail.clientWidth * .75), behavior: reducedMotion() ? 'auto' : 'smooth' });
    }
    previous.addEventListener('click', () => move(-1));
    next.addEventListener('click', () => move(1));
    rail.addEventListener('scroll', controls, { passive: true });
    rail.addEventListener('keydown', e => {
      if (e.key === 'ArrowRight' || e.key === 'ArrowLeft') { e.preventDefault(); move(e.key === 'ArrowRight' ? 1 : -1); }
      if (e.key === 'Home' || e.key === 'End') { e.preventDefault(); rail.scrollTo({ left: e.key === 'Home' ? 0 : rail.scrollWidth, behavior: 'auto' }); }
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
    document.getElementById('dd-channel-bar')?.remove();
    wrap.insertAdjacentElement('beforebegin', bar);
    document.documentElement.classList.add('dd-motd-ready');
    requestAnimationFrame(() => {
      const selected = rail.querySelector('.dd-current');
      if (selected) rail.scrollLeft = selected.offsetLeft - rail.offsetLeft - (rail.clientWidth - selected.clientWidth) / 2;
      controls();
    });
    if (api.railResize) api.railResize.disconnect();
    if ('ResizeObserver' in window) { api.railResize = new ResizeObserver(controls); api.railResize.observe(rail); }
  }
  function init() {
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
    if (motd && !motd.dataset.ddObserved) {
      motd.dataset.ddObserved = '1';
      carousel();
      new MutationObserver(carousel).observe(motd, { childList: true, subtree: true, characterData: true });
    }
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
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init, { once: true });
  // Bounded startup retry for asynchronously constructed CyTube controls.
  let attempts = 0;
  const ready = setInterval(() => {
    init();
    if (++attempts >= 30 || (buffer && document.getElementById('motd') && window.formatChatMessage?.ddRoom)) clearInterval(ready);
  }, 500);
})();
