/* American-Dad room enhancements. Original MOTD remains the source of truth. */
(function () {
  'use strict';
  if (window.DDRoom) return;
  const version = '1.11.2';
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
  // Colors travel only with a user's own ordinary messages. The room filter
  // turns the bounded suffix into an empty span before broadcasting the message.
  const nameColors = new Map();
  const nameColorKey = 'dd-name-color:' + location.pathname + ':';
  const validNameColor = value => /^(?:[a-f0-9]{6}|default)$/i.test(value || '');
  function defaultNameColor(name) {
    const palette = ['ff8585', 'ffb36b', 'e3cd59', 'a8d96e', '61d5a5', '67d8d8', '78b9ff', '9ca6ff', 'c799ff', 'f397d1', 'e594b0', 'd4ac76'];
    let hash = 2166136261;
    for (const char of name.toLowerCase()) hash = Math.imul(hash ^ char.charCodeAt(0), 16777619);
    return palette[(hash >>> 0) % palette.length];
  }
  function ownNameColor() {
    try { const value = localStorage.getItem(nameColorKey + (window.CLIENT?.name || '').toLowerCase()); return validNameColor(value) ? value.toLowerCase() : ''; } catch (_) { return ''; }
  }
  function paintName(node, name) {
    if (!node) return;
    const ranked = node.matches('.userlist_op,.userlist_owner,.userlist_siteadmin') || node.parentElement?.matches('.userlist_op,.userlist_owner,.userlist_siteadmin');
    if (ranked && !node.dataset.ddGlitter) {
      node.dataset.ddGlitter = '1';
      for (const layer of ['a', 'b']) {
        const dots = Array.from({ length: 7 }, () => {
          const x = Math.round(3 + Math.random() * 94), y = Math.round(Math.random() * 100);
          return `radial-gradient(circle at ${x}% ${y}%, rgba(255,244,220,.65) 0 .55px, transparent 1.25px)`;
        });
        node.style.setProperty('--dd-glitter-' + layer, dots.join(','));
        node.style.setProperty('--dd-glitter-time-' + layer, (1.7 + Math.random() * 1.6).toFixed(2) + 's');
        node.style.setProperty('--dd-glitter-delay-' + layer, (-Math.random() * 4).toFixed(2) + 's');
      }
    }

    const own = name.toLowerCase() === (window.CLIENT?.name || '').toLowerCase() ? ownNameColor() : '';
    const color = own || nameColors.get(name.toLowerCase())?.color;
    if (!ranked) node.style.setProperty('color', '#' + (color && color !== 'default' ? color : defaultNameColor(name)));
    else node.style.removeProperty('color');
  }
  function refreshNames() {
    document.querySelectorAll('#messagebuffer > div').forEach(row => {
      const node = row.querySelector('.username');
      const name = row.dataset.ddName || node?.textContent.replace(/:\s*$/, '').trim();
      if (name) paintName(node, name);
    });
    document.querySelectorAll('#userlist .userlist_item').forEach(row => {
      const node = row.children[1];
      if (node) { paintName(node, node.textContent.trim()); node.title = node.textContent.trim(); }
      const afk = row.querySelector('.glyphicon-time');
      if (afk) { afk.title = 'Away from keyboard'; afk.setAttribute('aria-label', 'Away from keyboard'); }
    });
  }
  function seasonalAFK(date = new Date()) {
    const parts = new Intl.DateTimeFormat('en-US', { timeZone: 'America/Chicago', month: 'numeric', day: 'numeric' }).formatToParts(date);
    const month = Number(parts.find(p => p.type === 'month').value), day = Number(parts.find(p => p.type === 'day').value);
    return (month === 12 && day >= 29) || (month === 1 && day <= 4) ? 'firework' : month === 10 ? 'pumpkin' : month === 11 ? 'turkey' : month === 12 ? 'snowflake' : 'moon';
  }
  function roomPresentation() {
    document.documentElement.dataset.ddAfkSeason = seasonalAFK();
    const native = document.getElementById('currenttitle');
    if (!native) return;
    let label = document.getElementById('dd-video-title');
    if (!label || label.parentElement !== native.parentElement) {
      label?.remove(); label = document.createElement('span'); label.id = 'dd-video-title'; native.after(label);
    }
    const raw = native.textContent.replace(/^Currently Playing:\s*/i, '').trim();
    const match = raw.match(/\b(s\d+e\d+(?:e\d+)?)\b\s*[-–—:]?\s*(.*)$/i);
    const longCode = raw.match(/\bSeason\s+\d{1,3}\s+Episode\s+\d{1,3}\b\s*[-–—:]?\s*(.*)$/i);
    const text = match ? match[1].toUpperCase() + (match[2] ? ' · ' + match[2] : '') : longCode ? episode(raw).toUpperCase() + (longCode[1] ? ' · ' + longCode[1] : '') : raw.replace(/^American Dad!?\s*[-–—:]?\s*/i, '');
    if (label.textContent !== text) { label.textContent = text; label.title = text; fitViewingArea(); }
  }
  function receiveNameColor(row, data) {
    if (!row || !data?.username) return;
    row.dataset.ddName = data.username;
    const markers = row.querySelectorAll('span.dd-namecolor[data-color]');
    const color = markers.length ? markers[markers.length - 1].getAttribute('data-color') : '';
    const name = data.username.toLowerCase();
    const time = Number(data.time) || 0;
    if (validNameColor(color) && time >= (nameColors.get(name)?.time || 0)) {
      if (nameColors.size >= 500 && !nameColors.has(name)) nameColors.delete(nameColors.keys().next().value);
      nameColors.set(name, { color: color.toLowerCase(), time });
      queueMicrotask(refreshNames);
    }
    paintName(row.querySelector('.username'), data.username);
  }
  function repairColorEmotes(row) {
    if (!row.querySelector('span.dd-namecolor') || typeof window.execEmotes !== 'function') return;
    const walker = document.createTreeWalker(row, NodeFilter.SHOW_TEXT);
    const texts = [];
    while (walker.nextNode()) {
      const node = walker.currentNode;
      if (!node.parentElement.closest('.username,.timestamp,a,code,pre,.dd-media,.dd-namecolor')) texts.push(node);
    }
    for (const node of texts) {
      const escaped = document.createElement('span');
      escaped.textContent = node.nodeValue;
      const output = window.execEmotes(escaped.innerHTML);
      if (output === escaped.innerHTML) continue; // Also respects Disable chat emotes.
      const fragment = document.createElement('template');
      fragment.innerHTML = output;
      if (fragment.content.querySelector('img.channel-emote')) node.replaceWith(fragment.content);
    }
  }
  function hookNameColorSending() {
    const socket = window.socket;
    if (!socket?.emit || socket.emit.ddNameColors) return;
    const original = socket.emit;
    function emit(...args) {
      const [event, data] = args;
      const color = ownNameColor();
      // Never change commands, PMs, empty messages, or long messages. The latter
      // keep their learned color without risking a partially truncated suffix.
      if (event === 'chatMsg' && color && typeof data?.msg === 'string' && data.msg.trim() &&
          !data.msg.trimStart().startsWith('/') && data.msg.length <= 280 && !/\[ddnc:/.test(data.msg)) {
        args[1] = { ...data, msg: data.msg + ' [ddnc:' + color + ']' };
      }
      return original.apply(this, args);
    }
    emit.ddNameColors = true;
    socket.emit = emit;
  }
  function nameColorUI() {
    hookNameColorSending();
    const header = document.getElementById('chatheader');
    if (!header || document.getElementById('dd-name-button')) return;
    const trigger = button('Name style', 'Choose your name color');
    trigger.id = 'dd-name-button';
    trigger.setAttribute('aria-expanded', 'false');
    trigger.setAttribute('aria-controls', 'dd-name-settings');
    const panel = document.createElement('section');
    panel.id = 'dd-name-settings'; panel.hidden = true;
    panel.setAttribute('aria-label', 'Name appearance');
    panel.innerHTML = '<label>My name color <input type="color" id="dd-name-picker" value="#91bded"></label>' +
      '<p><span class="dd-name-preview" id="dd-own-preview">Your name</span></p>' +
      '<button type="button" id="dd-save-name">Save color</button><button type="button" id="dd-reset-name">Default color</button>' +
      '<p>Everyone using the room script sees your color from your next regular chat message. Your choice is remembered on this browser.</p>' +
      '<p>Staff badge on: <span class="dd-name-preview dd-mod">Moderator</span> · <span class="dd-name-preview dd-admin">Admin</span></p>' +
      '<label><input type="checkbox" id="dd-animate-names" checked> Animate staff names on my screen</label>' +
      '<p id="dd-name-status" role="status"></p><button type="button" id="dd-close-names">Close</button>';
    header.append(trigger, panel);
    const picker = panel.querySelector('#dd-name-picker');
    const preview = panel.querySelector('#dd-own-preview');
    const status = panel.querySelector('#dd-name-status');
    const animate = panel.querySelector('#dd-animate-names');
    try { animate.checked = localStorage.getItem('dd-animate-names') !== 'false'; } catch (_) {}
    document.documentElement.classList.toggle('dd-still-names', !animate.checked);
    function close() { panel.hidden = true; trigger.setAttribute('aria-expanded', 'false'); }
    trigger.addEventListener('click', () => {
      panel.hidden = !panel.hidden;
      trigger.setAttribute('aria-expanded', String(!panel.hidden));
      if (!panel.hidden) {
        const color = ownNameColor(); picker.value = '#' + (color && color !== 'default' ? color : defaultNameColor(window.CLIENT?.name || 'Your name'));
        preview.textContent = window.CLIENT?.name || 'Your name'; preview.style.color = picker.value;
        status.textContent = window.CLIENT?.name ? '' : 'Sign in or choose a guest name to save a color.';
      }
    });
    picker.addEventListener('input', () => { preview.style.color = picker.value; });
    function save(value) {
      const name = window.CLIENT?.name;
      if (!name) { status.textContent = 'Sign in or choose a guest name first.'; return; }
      try { localStorage.setItem(nameColorKey + name.toLowerCase(), value); }
      catch (_) { status.textContent = 'Your browser blocked saving this preference.'; return; }
      refreshNames(); status.textContent = 'Saved. Others will see it with your next regular message.';
    }
    panel.querySelector('#dd-save-name').addEventListener('click', () => save(picker.value.slice(1)));
    panel.querySelector('#dd-reset-name').addEventListener('click', () => save('default'));
    animate.addEventListener('change', () => {
      document.documentElement.classList.toggle('dd-still-names', !animate.checked);
      try { localStorage.setItem('dd-animate-names', String(animate.checked)); } catch (_) {}
    });
    panel.querySelector('#dd-close-names').addEventListener('click', () => { close(); trigger.focus(); });
    panel.addEventListener('keydown', event => { if (event.key === 'Escape') { close(); trigger.focus(); } });
    document.addEventListener('click', event => { if (!panel.contains(event.target) && !trigger.contains(event.target)) close(); });
    const list = document.getElementById('userlist');
    if (list) new MutationObserver(refreshNames).observe(list, { childList: true, subtree: true, attributes: true, attributeFilter: ['class'] });
    document.querySelectorAll('#messagebuffer > div').forEach(row => {
      repairColorEmotes(row);
      const name = row.querySelector('.username')?.textContent.replace(/:\s*$/, '').trim() || Array.from(row.classList).find(c => c.startsWith('chat-msg-'))?.slice(9);
      if (name) receiveNameColor(row, { username: name, time: Number(row.dataset.ddTime) || 0 });
    });
    refreshNames();
  }

  function hookFormatter() {
    const original = window.formatChatMessage;
    if (typeof original !== 'function' || original.ddRoom) return;
    function format(data) {
      // CyTube's fast emote matcher splits on whitespace. A filtered color span
      // attached to the final word otherwise makes that word unrecognizable.
      const marker = typeof data?.msg === 'string' && data.msg.match(/<span class="dd-namecolor" data-color="([a-f0-9]{6}|default)"><\/span>\s*$/i);
      const args = Array.from(arguments);
      if (marker) args[0] = { ...data, msg: data.msg.slice(0, marker.index) };
      const rendered = original.apply(this, args);
      const row = rendered?.[0];
      if (row && marker) {
        const color = document.createElement('span');
        color.className = 'dd-namecolor'; color.setAttribute('data-color', marker[1]);
        row.append(color);
      }
      receiveNameColor(row, data);
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
    const controls = bar.querySelector(':scope > .dd-bar-head');
    const account = nav.querySelector('#logoutform, .navbar-text');
    if (controls && account) {
      nav.querySelector('.dd-bar-head')?.remove();
      account.before(controls);
      const search = controls.querySelector('.dd-channel-search');
      const menu = Array.from(nav.querySelectorAll('.navbar-nav')).find(list => Array.from(list.querySelectorAll('a')).some(a => a.textContent.trim() === 'Layout'));
      if (search && menu) { nav.querySelector('.dd-channel-search')?.remove(); menu.after(search); }
    }
    nav.classList.add('dd-room-navigation');
    const brand = nav.querySelector('.navbar-brand');
    if (brand && !brand.querySelector('.dd-network-logo')) {
      const logo = document.createElement('img'); logo.className = 'dd-network-logo';
      logo.src = 'https://i.postimg.cc/d3zdJNSr/The-DBN-(Doodoo-Buttchump-Network)-SPELLED-OUT.png';
      logo.alt = 'Doodoo Buttchump Network'; brand.replaceChildren(logo); brand.setAttribute('aria-label', 'Doodoo Buttchump Network · channel directory');
    }
    if (!nav.querySelector('.dd-discord-link')) {
      const discord = document.querySelector('#motd a[href*="discord.gg"]');
      if (discord) { const link = discord.cloneNode(true); link.className = 'dd-discord-link'; link.setAttribute('aria-label', 'Join the network Discord'); link.target = '_blank'; link.rel = 'noopener noreferrer'; nav.querySelector('.navbar-collapse')?.append(link); }
    }
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
    if (!wrap || !banners) {
      restoreNavigation();
      document.getElementById('dd-channel-bar')?.remove();
      document.documentElement.classList.remove('dd-motd-ready');
      return;
    }
    if (motd.innerHTML === motdSource && document.getElementById('dd-channel-bar')) return;
    api.stopCarousel?.();
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
    const collapse = button('Hide channels ▴', 'Hide channels');
    collapse.id = 'dd-channel-toggle';
    collapse.setAttribute('aria-controls', 'dd-channel-rail');
    const search = document.createElement('input');
    search.type = 'search'; search.className = 'dd-channel-search';
    search.placeholder = 'Search ' + banners.querySelectorAll('.column').length + ' channels'; search.setAttribute('aria-label', search.placeholder);
    search.autocomplete = 'off'; search.maxLength = 200;
    const empty = document.createElement('p'); empty.className = 'dd-search-empty';
    empty.textContent = 'No channels match your search.'; empty.hidden = true;
    let searching = false, searchPosition = 0;
    head.append(search, collapse, pause, previous, next);
    const rail = banners.cloneNode(true);
    rail.id = 'dd-channel-rail';
    rail.tabIndex = 0;
    rail.setAttribute('aria-label', 'Shows; use left and right arrow keys to browse');
    const donationLinks = Array.from(motd.querySelectorAll('a')).filter(a => /cash\.app|paypal\.com\/donate|amzn\.to/.test(a.href));
    if (donationLinks.length) {
      const card = document.createElement('div'); card.className = 'column dd-support-card';
      const caption = document.createElement('p');
      caption.textContent = Array.from(motd.querySelectorAll('font')).find(x => x.textContent.includes("If you'd like"))?.textContent.trim() || 'Support the network';
      const slides = document.createElement('div'); slides.className = 'dd-support-slides';
      donationLinks.forEach((a,i) => { const link = a.cloneNode(true); link.dataset.ddSupportSlide = i; link.setAttribute('aria-label', ['Donate with Cash App','Donate with PayPal','Support through Amazon'][i] || 'Support the network'); link.target = '_blank'; link.rel = 'noopener noreferrer'; slides.append(link); });
      const nextSupport = button('›', 'Next support option'); nextSupport.className = 'dd-support-next';
      card.append(caption, slides, nextSupport);
      // Scatter occasional support cards through the primary loop. They remain
      // presentation-only and never enter the saved channel list or its count.
      const channelCards = Array.from(rail.querySelectorAll('.column'));
      let slot = Math.min(channelCards.length - 1, 4 + Math.floor(Math.random() * 5));
      if (!channelCards.length) rail.append(card);
      else while (slot < channelCards.length) {
        const ad = card.cloneNode(true); ad.dataset.ddSupportOffset = Math.floor(Math.random() * donationLinks.length);
        channelCards[slot].after(ad); slot += 8 + Math.floor(Math.random() * 6);
      }
    }
    const cards = Array.from(rail.querySelectorAll('.column'));
    if (!cards.length) { previous.disabled = next.disabled = pause.disabled = true; rail.setAttribute('aria-label', 'No channels added'); }
    count.textContent = banners.querySelectorAll('.column').length + ' channels';
    for (const card of cards) {
      if (card.classList.contains('dd-support-card')) continue;
      const link = card.querySelector('a');
      const img = card.querySelector('img');
      const label = decodeURIComponent(new URL(link.href, location.href).pathname.split('/').pop()).replace(/-/g, ' ');
      if (!link.getAttribute('aria-label')) link.setAttribute('aria-label', label);
      card.dataset.ddSearchName = (label + ' ' + link.getAttribute('aria-label') + ' ' + (img?.alt || '')).normalize('NFKC').toLowerCase().replace(/[-_]+/g, ' ');
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
      clone.querySelectorAll('button').forEach(b => b.tabIndex = -1);
      clone.querySelectorAll('a').forEach(a => { a.tabIndex = -1; a.removeAttribute('aria-current'); });
      return clone;
    };
    rail.prepend(...cards.map(copy));
    rail.append(...cards.map(copy));
    let supportIndex = 0;
    function rotateSupport(step = 0) {
      if (!donationLinks.length) return;
      supportIndex = (supportIndex + step) % donationLinks.length;
      rail.querySelectorAll('[data-dd-support-slide]').forEach(a => { const index = (supportIndex + Number(a.closest('.dd-support-card').dataset.ddSupportOffset || 0)) % donationLinks.length; const active = Number(a.dataset.ddSupportSlide) === index; a.classList.toggle('dd-support-active', active); a.setAttribute('aria-hidden', String(!active)); a.inert = !active; });
    }
    rotateSupport();
    rail.querySelectorAll('.dd-support-next').forEach(b => b.addEventListener('click', () => rotateSupport(1)));
    const supportTimer = setInterval(() => {
      if (!rail.hidden && !document.hidden && !reducedMotion() && !rail.querySelector('.dd-support-card:hover,.dd-support-card:focus-within')) rotateSupport(1);
    }, 6000);
    let start = 0, period = 0, autoX = 0, frame = 0, lastFrame = 0;
    let keyboardInput = false, lastPointerType = 'mouse', paused = false, idleUntil = 0;
    let railPositioned = false;
    const heldPointers = new Set();
    const interactions = new AbortController();
    const listen = (target, type, handler, options = {}) => target.addEventListener(type, handler, { ...options, signal: interactions.signal });
    function controls() {
      if (searching) {
        previous.disabled = next.disabled = rail.scrollWidth <= rail.clientWidth;
        return;
      }
      if (!cards.length || rail.hidden) return;
      start = cards[0].offsetLeft;
      period = rail.querySelectorAll('[data-dd-loop-copy]')[cards.length].offsetLeft - start;
      previous.disabled = next.disabled = period <= rail.clientWidth;
    }
    function wrapPosition() {
      if (searching || !period) return;
      let x = rail.scrollLeft;
      if (x < start) x += period;
      else if (x >= start + period) x -= period;
      if (Math.abs(x - rail.scrollLeft) > 1) { rail.scrollLeft = x; autoX = x; }
    }
    function interact(delay = 1200) { idleUntil = performance.now() + delay; autoX = rail.scrollLeft; }
    function positionRail() {
      if (rail.hidden) return;
      controls();
      if (searching) return;
      if (!period) return;
      if (!railPositioned) {
        const selected = cards.find(card => card.classList.contains('dd-current')) || cards[0];
        rail.scrollLeft = selected.offsetLeft - (rail.clientWidth - selected.clientWidth) / 2;
        railPositioned = true;
      }
      wrapPosition();
      autoX = rail.scrollLeft;
    }
    const collapseKey = 'dd-channels-collapsed:' + location.pathname;
    let collapsed = api.carouselCollapsed || false;
    try { collapsed = localStorage.getItem(collapseKey) === 'true'; } catch (_) {}
    function setCollapsed(value, save = false) {
      collapsed = value;
      api.carouselCollapsed = value;
      rail.hidden = value;
      bar.classList.toggle('dd-channels-collapsed', value);
      collapse.textContent = value ? 'Show channels ▾' : 'Hide channels ▴';
      collapse.setAttribute('aria-label', value ? 'Show channels' : 'Hide channels');
      collapse.setAttribute('aria-expanded', String(!value));
      [previous, next].forEach(control => { control.hidden = value; });
      pause.hidden = value || searching;
      heldPointers.clear();
      lastFrame = 0;
      interact();
      if (save) { try { localStorage.setItem(collapseKey, String(value)); } catch (_) {} }
      if (bar.isConnected) requestAnimationFrame(() => { positionRail(); fitViewingArea(); });
    }
    search.addEventListener('input', () => {
      const words = search.value.normalize('NFKC').toLowerCase().replace(/[-_]+/g, ' ').trim().split(/\s+/).filter(Boolean);
      const active = words.length > 0;
      if (active && !searching) searchPosition = rail.scrollLeft;
      searching = active;
      bar.classList.toggle('dd-searching', active);
      let matches = 0;
      rail.querySelectorAll('.column').forEach(card => {
        const match = !card.classList.contains('dd-support-card') && !card.dataset.ddLoopCopy && words.every(word => (card.dataset.ddSearchName || '').includes(word));
        card.hidden = active && !match;
        if (match) matches++;
      });
      empty.hidden = !active || matches > 0;
      count.textContent = active ? matches + (matches === 1 ? ' channel' : ' channels') : banners.querySelectorAll('.column').length + ' channels';
      rail.setAttribute('aria-label', active ? matches + ' matching channels; use left and right arrow keys to browse' : 'Shows; use left and right arrow keys to browse');
      if (active && collapsed) setCollapsed(false);
      pause.hidden = collapsed || active;
      rail.scrollLeft = active ? 0 : searchPosition;
      controls(); autoX = rail.scrollLeft; interact();
      if (!active) positionRail();
      fitViewingArea();
    });
    search.addEventListener('keydown', e => {
      if (e.key === 'Escape') { e.preventDefault(); search.value = ''; search.dispatchEvent(new Event('input')); }
    });
    collapse.addEventListener('click', () => setCollapsed(!collapsed, true));
    setCollapsed(collapsed);
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
      if (e.key === 'Home' || e.key === 'End') { e.preventDefault(); interact(); rail.scrollTo({ left: e.key === 'Home' ? (searching ? 0 : start) : (searching ? rail.scrollWidth - rail.clientWidth : start + period - rail.clientWidth), behavior: 'auto' }); }
    });
    bar.append(head, rail, empty);
    const navigation = document.querySelector('nav.navbar');
    if (navigation && !navigationHome) { navigationHome = document.createComment('Original CyTube navigation position'); navigation.before(navigationHome); }
    if (navigation) bar.prepend(navigation);
    document.getElementById('dd-channel-bar')?.remove();
    wrap.insertAdjacentElement('beforebegin', bar);
    integrateNavigation(bar);
    document.documentElement.classList.add('dd-motd-ready');
    requestAnimationFrame(positionRail);
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
      if (!searching && !rail.hidden && !paused && !hovered && !focused && !heldPointers.size && !document.hidden && !reducedMotion() && now > idleUntil && period > rail.clientWidth) {
        autoX += elapsed * .025; // 25 pixels per second, independent of frame rate.
        rail.scrollLeft = autoX;
        wrapPosition();
      } else autoX = rail.scrollLeft;
      frame = requestAnimationFrame(drift);
    }
    frame = requestAnimationFrame(drift);
    api.stopCarousel = () => { clearInterval(supportTimer); interactions.abort(); cancelAnimationFrame(frame); api.railResize?.disconnect(); };
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
    const columns = Math.min(9, Math.max(3, Number(video.className.match(/\bcol-md-(\d+)\b/)?.[1]) || 7));
    const narrow = window.matchMedia('(max-width: 991px)').matches;
    const player = video.querySelector('video');
    const aspect = player?.videoWidth > 0 && player.videoHeight > 0 ? player.videoWidth / player.videoHeight : 16 / 9;
    const frameWidth = video.querySelector('.embed-responsive')?.clientWidth || video.clientWidth;
    const videoHeader = document.getElementById('videowrap-header')?.getBoundingClientRect().height || 22;
    // Native +/- changes Bootstrap columns. Let that choice change height as
    // well: default fits the viewport; larger choices may extend below it.
    const baseVideoHeight = narrow ? available * .45 : available;
    const chosenHeight = columns > 7
      ? Math.max(baseVideoHeight * columns / 7, frameWidth / aspect + videoHeader)
      : Math.max(100, baseVideoHeight * columns / 7);
    const height = narrow ? chosenHeight + available * .55 : chosenHeight;
    main.style.setProperty('--dd-view-height', height + 'px');
    main.style.setProperty('--dd-mobile-video-height', chosenHeight + 'px');
    main.style.setProperty('--dd-mobile-chat-height', available * .55 + 'px');
    if (!video.dataset.ddSizeObserved) {
      video.dataset.ddSizeObserved = '1';
      new MutationObserver(fitViewingArea).observe(video, { attributes: true, attributeFilter: ['class'] });
      video.addEventListener('loadedmetadata', fitViewingArea, true);
    }
    const videoTitle = document.getElementById('videowrap-header');
    if (videoTitle && !document.getElementById('dd-fit-video')) {
      const fit = button('Fit', 'Fit video and chat to window');
      fit.id = 'dd-fit-video';
      fit.title = 'Restore the window-fitting video size';
      fit.addEventListener('click', () => {
        const current = Number(video.className.match(/\bcol-md-(\d+)\b/)?.[1]) || 7;
        if (window.CyTube?.ui?.changeVideoWidth && !document.body.classList.contains('hd')) window.CyTube.ui.changeVideoWidth(7 - current);
        fitViewingArea();
      });
      videoTitle.insertBefore(fit, document.getElementById('currenttitle'));
    }
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
    roomPresentation(); channelManagerUI(); episodeEditorUI();
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
        episodeObserver = new MutationObserver(() => { roomPresentation(); updateEpisodePanel(); });
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
  // Room-wide carousel editing uses CyTube's permission-checked MOTD save.
  let channelManager, managerEntry;
  function managerAllowed() { return Number(window.CLIENT?.rank) >= 3; }
  function managerURL(value, image = false) {
    const raw = value.trim();
    if (!raw || raw.length > 1500) throw new Error('Please enter a valid ' + (image ? 'image' : 'channel') + ' link.');
    const url = new URL(raw, location.href);
    if (!['https:', 'http:'].includes(url.protocol) || url.username || url.password || (image && !/^https?:\/\//i.test(raw))) throw new Error('Use a full http or https ' + (image ? 'image' : 'channel') + ' link.');
    return url.href;
  }
  function openChannelManager() {
    if (!managerAllowed() || !window.socket?.emit) return;
    channelManager?.remove();
    const motd = document.getElementById('motd');
    if (!motd?.querySelector('.motd-banners')) return;
    const base = motd.innerHTML;
    const source = motd.cloneNode(true);
    let cards = Array.from(source.querySelectorAll('.motd-banners > .column')).map(x => x.cloneNode(true));
    let editing = -1, saving = false, dirty = false;
    const modal = document.createElement('dialog'); channelManager = modal;
    modal.id = 'dd-channel-manager'; modal.setAttribute('aria-labelledby', 'dd-manager-title');
    modal.innerHTML = '<header><h2 id="dd-manager-title">Manage channels</h2><button type="button" class="dd-manager-close" aria-label="Close channel manager">×</button></header><p>Add a banner image and choose where clicking it goes. Changes appear for everyone after saving.</p><form id="dd-card-form"><label>Channel name<input name="name" maxlength="100" required placeholder="e.g. American Dad"></label><label>Channel link<input name="channel" required placeholder="https://cytu.be/r/Channel-Name"></label><label>Hosted image link<input name="image" required placeholder="https://…/banner.png"></label><div class="dd-manager-form-actions"><button type="submit" id="dd-card-add">Add channel</button><button type="button" id="dd-card-reset" hidden>Cancel edit</button></div></form><p id="dd-manager-status" role="status"></p><div id="dd-manager-list"></div><footer><span id="dd-manager-count"></span><button type="button" id="dd-manager-cancel">Cancel</button><button type="button" id="dd-manager-save">Save to room</button></footer>';
    document.body.append(modal);
    const form = modal.querySelector('form'), fields = form.elements;
    const status = modal.querySelector('#dd-manager-status'), list = modal.querySelector('#dd-manager-list'), save = modal.querySelector('#dd-manager-save');
    const tell = text => { status.textContent = text; };
    const reset = () => { editing = -1; form.reset(); modal.querySelector('#dd-card-add').textContent = 'Add channel'; modal.querySelector('#dd-card-reset').hidden = true; };
    function label(card) { const a = card.querySelector('a'), img = card.querySelector('img'); return a?.getAttribute('aria-label') || img?.alt || decodeURIComponent(new URL(a.href).pathname.split('/').pop()).replace(/-/g, ' '); }
    function render() {
      list.replaceChildren();
      cards.forEach((card, index) => {
        const row = document.createElement('div'); row.className = 'dd-manager-card';
        const image = document.createElement('img'); image.src = card.querySelector('img').src; image.alt = ''; image.loading = 'lazy'; image.referrerPolicy = 'no-referrer';
        image.addEventListener('error', () => { image.classList.add('dd-image-error'); image.alt = 'Image unavailable'; });
        const info = document.createElement('div'), name = document.createElement('strong'), link = document.createElement('a');
        name.textContent = label(card); link.textContent = card.querySelector('a').getAttribute('href'); link.href = card.querySelector('a').href; link.target = '_blank'; link.rel = 'noopener noreferrer'; info.append(name, link);
        const edit = button('Edit', 'Edit ' + label(card)), remove = button('Remove', 'Remove ' + label(card));
        edit.disabled = remove.disabled = saving;
        edit.addEventListener('click', () => { editing = index; fields.namedItem('name').value = label(card); fields.namedItem('channel').value = card.querySelector('a').href; fields.namedItem('image').value = card.querySelector('img').src; modal.querySelector('#dd-card-add').textContent = 'Update channel'; modal.querySelector('#dd-card-reset').hidden = false; fields.namedItem('name').focus(); });
        remove.addEventListener('click', () => { cards.splice(index, 1); dirty = true; reset(); render(); tell('Channel removed from your draft. Save to apply, or Cancel to keep the current list.'); });
        row.append(image, info, edit, remove); list.append(row);
      });
      modal.querySelector('#dd-manager-count').textContent = cards.length + ' channels';
      save.disabled = saving || !dirty;
    }
    form.addEventListener('submit', e => {
      e.preventDefault(); if (saving || !managerAllowed()) return;
      try {
        const name = fields.namedItem('name').value.trim(); if (!name) throw new Error('Please enter a channel name.');
        const href = managerURL(fields.namedItem('channel').value), src = managerURL(fields.namedItem('image').value, true);
        if (cards.some((c, i) => i !== editing && c.querySelector('a').href === href)) throw new Error('That channel is already in the carousel. Use Edit to change its banner.');
        const card = document.createElement('div'); card.className = 'column'; const link = document.createElement('a'), img = document.createElement('img');
        link.href = href; link.setAttribute('aria-label', name); img.src = src; img.alt = name; link.append(img); card.append(link);
        if (editing >= 0) cards[editing] = card; else cards.push(card);
        dirty = true; reset(); render(); tell('Draft updated. Save to room when ready.');
      } catch (error) { tell(error.message); }
    });
    modal.querySelector('#dd-card-reset').addEventListener('click', reset);
    const close = () => { if (!saving) modal.close(); };
    modal.querySelector('.dd-manager-close').addEventListener('click', close); modal.querySelector('#dd-manager-cancel').addEventListener('click', close);
    modal.addEventListener('cancel', e => { if (saving) e.preventDefault(); });
    modal.addEventListener('close', () => { modal.remove(); if (channelManager === modal) channelManager = null; managerEntry?.querySelector('a')?.focus(); });
    save.addEventListener('click', () => {
      if (saving || !dirty || !managerAllowed()) return;
      if (typeof window.hasPermission === 'function' && !window.hasPermission('motdedit')) { tell('Your account does not have permission to edit the room banner.'); return; }
      if (form.elements.namedItem('name').value || form.elements.namedItem('channel').value || form.elements.namedItem('image').value) { tell('Add or update the channel above before saving, or use Cancel edit to clear the form.'); return; }
      if (document.getElementById('motd')?.innerHTML !== base) { tell('The room was updated by another admin. Reopen this editor to load the latest list before saving.'); return; }
      source.querySelector('.motd-banners').replaceChildren(...cards.map(x => x.cloneNode(true)));
      const html = source.innerHTML;
      if (new TextEncoder().encode(html).length > 20000) { tell('This list exceeds the room limit. Shorter image links or fewer channels will fit.'); return; }
      saving = true; render(); form.querySelectorAll('input,button').forEach(x => x.disabled = true); tell('Saving to room…');
      let timer;
      const finish = (ok, text) => { clearTimeout(timer); window.socket.off?.('setMotd', ack); saving = false; form.querySelectorAll('input,button').forEach(x => x.disabled = false); if (ok) { dirty = false; modal.close(); } else { render(); tell(text); } };
      const ack = html => {
        const parsed = document.createElement('div'); parsed.innerHTML = typeof html === 'string' ? html : '';
        const received = Array.from(parsed.querySelectorAll('.motd-banners > .column')).map(c => [c.querySelector('a')?.getAttribute('href'),c.querySelector('img')?.getAttribute('src')]);
        const expected = cards.map(c => [c.querySelector('a')?.getAttribute('href'),c.querySelector('img')?.getAttribute('src')]);
        finish(JSON.stringify(received) === JSON.stringify(expected), 'The room returned a different list. Reopen the editor to check the latest changes.');
      };
      if (!window.socket.on || !window.socket.off) { saving = false; render(); tell('Room connection unavailable. Reconnect and try again.'); return; }
      window.socket.on('setMotd', ack);
      timer = setTimeout(() => finish(false, 'Save was not confirmed. Reopen the editor to check the room before retrying.'), 10000);
      window.socket.emit('setMotd', { motd: html });
    });
    render(); modal.showModal(); fields.namedItem('name').focus();
  }
  function channelManagerUI() {
    if (!managerAllowed()) { managerEntry?.remove(); managerEntry = null; channelManager?.close(); return; }
    const menu = Array.from(document.querySelectorAll('nav.navbar .dropdown')).find(x => x.querySelector(':scope > a')?.textContent.trim() === 'Layout')?.querySelector('.dropdown-menu');
    if (!menu || managerEntry?.isConnected) return;
    managerEntry = document.createElement('li'); managerEntry.id = 'dd-channel-manager-entry';
    const link = document.createElement('a'); link.href = '#'; link.textContent = 'Manage channels'; link.addEventListener('click', e => { e.preventDefault(); openChannelManager(); }); managerEntry.append(link); menu.append(managerEntry);
  }

  let episodeEditor, episodeEditBusy = false, episodeButtonsObserved;
  function episodeEditAllowed() {
    return Number(window.CLIENT?.rank) >= 2 && typeof window.hasPermission === 'function' && ['playlistadd','playlistmove','playlistdelete'].every(p => window.hasPermission(p));
  }
  function queueItem(row) {
    const data = window.$?.(row).data();
    return data?.media && Number.isFinite(Number(data.uid)) ? { uid:Number(data.uid),media:{...data.media},temp:!!data.temp } : null;
  }
  function playlistItems() { return Array.from(document.querySelectorAll('#queue > li')).map(queueItem).filter(Boolean); }
  function waitPlaylist(event, predicate, action, timeout = 25000) {
    return new Promise((resolve,reject) => {
      const socket = window.socket;
      let timer;
      const clean = () => { clearTimeout(timer); socket.off(event, receive); socket.off('queueFail', fail); socket.off('disconnect', disconnected); };
      const receive = data => { if (predicate(data)) { clean(); resolve(data); } };
      const fail = data => { if (event === 'queue') { clean(); reject(new Error(data?.msg || 'CyTube could not add the replacement.')); } };
      const disconnected = () => { clean(); reject(new Error('Connection lost. Check the playlist before trying again.')); };
      socket.on(event,receive); socket.on('queueFail',fail); socket.on('disconnect',disconnected);
      timer = setTimeout(() => { clean(); reject(new Error('No confirmation received. Check the playlist before trying again.')); },timeout);
      try { action(); } catch (error) { clean(); reject(error); }
    });
  }
  function openEpisodeEditor(row) {
    if (!episodeEditAllowed() || episodeEditBusy) return;
    const original = queueItem(row); if (!original) return;
    episodeEditor?.remove();
    const modal = document.createElement('dialog'); episodeEditor = modal; modal.id = 'dd-episode-editor'; modal.setAttribute('aria-labelledby','dd-edit-episode-title');
    modal.innerHTML = '<h2 id="dd-edit-episode-title">Edit episode</h2><p>The replacement keeps this playlist position and its temporary/permanent setting.</p><form><label>Episode name<input name="title" maxlength="300" required></label><label>Episode link<input name="url" required></label><p id="dd-edit-provider-note"></p><p id="dd-edit-status" role="status"></p><footer><button type="button" id="dd-edit-cancel">Cancel</button><button type="submit">Save episode</button></footer></form>';
    document.body.append(modal);
    const form=modal.querySelector('form'), fields=form.elements, status=modal.querySelector('#dd-edit-status'), note=modal.querySelector('#dd-edit-provider-note');
    fields.namedItem('title').value=original.media.title;
    fields.namedItem('url').value=window.formatURL(original.media);
    function providerNote() {
      try { const p=window.parseMediaLink(fields.namedItem('url').value.trim()); fields.namedItem('title').disabled=p.type!=='fi'; note.textContent=p.type==='fi'?'You can rename this direct video file.':'This video service supplies its own title.'; } catch (_) { fields.namedItem('title').disabled=false; note.textContent='Paste a valid episode link.'; }
    }
    providerNote(); fields.namedItem('url').addEventListener('input',providerNote);
    modal.querySelector('#dd-edit-cancel').addEventListener('click',()=>{if(!episodeEditBusy)modal.close();});
    modal.addEventListener('cancel',e=>{if(episodeEditBusy)e.preventDefault();});
    modal.addEventListener('close',()=>{modal.remove();if(episodeEditor===modal)episodeEditor=null;});
    form.addEventListener('submit',async e=>{
      e.preventDefault(); if(episodeEditBusy||!episodeEditAllowed())return;
      let deletedOriginal=false; const trackDelete=d=>{if(d?.uid===original.uid)deletedOriginal=true;};
      try {
        const items=playlistItems(), position=items.findIndex(x=>x.uid===original.uid), live=items[position];
        if(!live || live.media.id!==original.media.id || live.media.title!==original.media.title)throw new Error('This episode changed. Reopen its editor.');
        if(original.uid===window.PL_CURRENT)throw new Error('This episode is playing. Edit it after playback moves to the next episode.');
        const url=managerURL(fields.namedItem('url').value), parsed=window.parseMediaLink(url);
        if(!parsed?.id||!parsed.type||['yp','cu'].includes(parsed.type))throw new Error('Use a link to one playable episode.');
        if(items.some(x=>x.uid!==original.uid&&x.media.id===parsed.id&&x.media.type===parsed.type))throw new Error('That video is already elsewhere in the playlist.');
        const title=fields.namedItem('title').value.trim(); if(parsed.type==='fi'&&!title)throw new Error('Enter an episode name.');
        if(parsed.id===original.media.id&&parsed.type===original.media.type&&(parsed.type!=='fi'||title===original.media.title)){modal.close();return;}
        const before=position?items[position-1].uid:'prepend', oldIDs=new Set(items.map(x=>x.uid));
        episodeEditBusy=true; form.querySelectorAll('input,button').forEach(x=>x.disabled=true); window.socket.on('delete',trackDelete);
        status.textContent='Adding and checking the replacement…';
        const added=await waitPlaylist('queue',d=>d?.item&&!oldIDs.has(d.item.uid)&&d.item.media?.id===parsed.id&&d.item.media?.type===parsed.type&&d.item.queueby===window.CLIENT.name,()=>window.socket.emit('queue',{id:parsed.id,type:parsed.type,pos:'next',title:parsed.type==='fi'?title:false,temp:original.temp}));
        const replacement=added.item;
        if(replacement.temp!==original.temp||(parsed.type==='fi'&&replacement.media.title!==title))throw new Error('CyTube changed the replacement settings. Check both entries before continuing.');
        if(before!=='prepend'&&!playlistItems().some(x=>x.uid===before))throw new Error('The playlist position changed during saving. Replacement added; check its position.');
        if(window.PL_CURRENT===original.uid)throw new Error('The original started playing. Both entries are kept to avoid interrupting playback.');
        status.textContent='Restoring playlist position…';
        await waitPlaylist('moveVideo',d=>d?.from===replacement.uid&&d.after===before,()=>window.socket.emit('moveMedia',{from:replacement.uid,after:before}));
        if(!deletedOriginal){
          if(window.PL_CURRENT===original.uid)throw new Error('The original started playing. Both entries are kept to avoid interrupting playback.');
          status.textContent='Removing the old entry…';
          await waitPlaylist('delete',d=>d?.uid===original.uid,()=>window.socket.emit('delete',original.uid));
        }
        modal.close();
      } catch(error){status.textContent=error.message;}
      finally{window.socket.off('delete',trackDelete);episodeEditBusy=false;if(modal.isConnected){form.querySelectorAll('input,button').forEach(x=>x.disabled=false);providerNote();}}
    });
    modal.showModal();
    if(original.uid===window.PL_CURRENT)status.textContent='Currently playing: save is available after the room moves to the next episode.';
  }
  function episodeEditorUI() {
    const queue=document.getElementById('queue');if(!queue)return;
    const decorate=()=>{
      const allowed=episodeEditAllowed();
      queue.querySelectorAll(':scope > li').forEach(row=>{
        let edit=row.querySelector('.dd-edit-episode');
        if(!allowed){edit?.remove();return;}
        if(!edit){edit=button('Edit episode','Edit this episode');edit.className='btn btn-xs btn-default dd-edit-episode';edit.addEventListener('click',()=>openEpisodeEditor(row));(row.querySelector('.btn-group')||row).append(edit);}
      });
    };
    decorate();
    if(episodeButtonsObserved!==queue){episodeButtonsObserved=queue;new MutationObserver(decorate).observe(queue,{childList:true,subtree:true});}
    if(!episodeEditAllowed()&&!episodeEditBusy)episodeEditor?.close();
  }

  // PM history stays in this browser, scoped to the signed-in account and room.
  function privateMessages() {
    const host = document.getElementById('pmbar');
    const owner = window.CLIENT?.name;
    if (!owner && api.pmOwner) { api.pmStop?.(); host?.querySelectorAll('.pm-panel,.pm-panel-placeholder').forEach(p => p.remove()); api.pmOwner = null; }
    if (!host || !owner || typeof window.initPm !== 'function' || !window.$) return;
    if (api.pmOwner === owner) return;
    api.pmStop?.();
    const key = 'dd-pm-v1:' + location.pathname + ':' + owner.toLowerCase();
    let records = Object.create(null), stopped = false, timer = 0;
    const windows = new Map();
    try {
      const saved = JSON.parse(localStorage.getItem(key) || '{}');
      for (const [name, value] of Object.entries(saved).slice(-30)) {
        if (value && Array.isArray(value.lines)) records[name] = { ...value, lines: value.lines.filter(x => typeof x === 'string').slice(-200).map(x => x.slice(0,2400)) };
      }
    } catch (_) {}
    if (api.pmOwner && api.pmOwner !== owner) host.querySelectorAll('.pm-panel,.pm-panel-placeholder').forEach(p => p.remove());
    api.pmOwner = owner;
    const base = window.initPm.ddBase || window.initPm;
    function write() {
      if (stopped || window.CLIENT?.name !== owner) return;
      for (const [name, entry] of windows) {
        if (!entry.panel.isConnected) { entry.state.open = false; continue; }
        entry.state.lines = Array.from(entry.buffer.children).slice(-200).map(e => e.textContent.slice(0,2400));
        entry.state.draft = entry.input.value.slice(0,320);
        if (!entry.state.minimized) { entry.state.width = entry.panel.offsetWidth || entry.state.width; entry.state.height = entry.panel.offsetHeight || entry.state.height; }
        records[name] = entry.state;
      }
      const names = Object.keys(records);
      while (names.length > 30) delete records[names.shift()];
      try { localStorage.setItem(key, JSON.stringify(records)); }
      catch (_) { host.title = 'PM history could not be saved in this browser.'; }
    }
    function schedule() { clearTimeout(timer); timer = setTimeout(write,120); }
    function initials(name) { return (name.match(/[A-Z]/g)?.slice(0,2).join('') || name.slice(0,2)).toUpperCase(); }
    function updateAvatar(entry, name) {
      let raw = entry.state.avatar || '';
      try {
        const user = window.findUserlistItem?.(name);
        if (user?.length) raw = user.data('profile')?.image || '';
      } catch (_) {}
      let url = '';
      try { const parsed = new URL(raw,location.href); if(raw && ['https:','http:'].includes(parsed.protocol) && !parsed.username && !parsed.password) url=parsed.href; } catch (_) {}
      if (entry.avatarURL === url) return;
      entry.avatarURL=url; entry.state.avatar=url;
      entry.bubble.replaceChildren(document.createTextNode(initials(name)));
      if (url) {
        const img=document.createElement('img');img.className='dd-pm-avatar';img.alt='';img.decoding='async';img.referrerPolicy='no-referrer';
        img.addEventListener('error',()=>{if(entry.avatarURL===url) entry.bubble.replaceChildren(document.createTextNode(initials(name)));},{once:true});
        entry.bubble.replaceChildren(img);img.src=url;
      }
      schedule();
    }
    function place(entry) {
      const {panel,state} = entry;
      const vw = document.documentElement.clientWidth, vh = window.innerHeight;
      const visible = Array.from(windows.values()).filter(e => e.panel.isConnected);
      const index = Math.max(0,visible.indexOf(entry));
      panel.classList.toggle('dd-pm-minimized', !!state.minimized);
      panel.classList.toggle('dd-pm-docked', !!state.docked);
      panel.classList.toggle('dd-pm-floating', !state.docked);
      if (state.minimized) {
        panel.style.cssText = 'position:fixed;right:auto;top:auto;bottom:18px;left:'+(18+index*58)+'px;width:48px;height:48px';
      } else {
        const w = Math.min(Math.max(250,Number(state.width)||340),Math.max(250,vw-24));
        const h = Math.min(Math.max(220,Number(state.height)||380),Math.max(220,vh-24));
        let x = Number(state.x), y = Number(state.y);
        if (state.docked) {
          const chat = document.getElementById('chatwrap')?.getBoundingClientRect();
          x = (chat?.right || vw-12)-w-index*24; y = Math.min(chat?.bottom || vh-12,vh-12)-h-index*24;
        }
        if (!Number.isFinite(x)) x = vw-w-24-index*24;
        if (!Number.isFinite(y)) y = vh-h-24-index*24;
        x = Math.max(12,Math.min(vw-w-12,x)); y = Math.max(12,Math.min(vh-h-12,y));
        panel.style.cssText = 'position:fixed;bottom:auto;right:auto;left:'+x+'px;top:'+y+'px;width:'+w+'px;height:'+h+'px';
        state.x=x; state.y=y;
      }
      entry.body.style.display = state.minimized ? 'none' : 'flex';
      entry.dock.textContent = state.docked ? '↗' : '↙';
      entry.dock.setAttribute('aria-label',state.docked ? 'Detach private message window' : 'Attach private message window to chat');
      entry.bubble.hidden = !state.minimized;
      entry.heading.hidden = !!state.minimized;
    }
    function decorate(panel,name) {
      const old = windows.get(name);
      if (old?.panel === panel) return;
      if (old) old.observer.disconnect();
      const body=panel.querySelector('.panel-body'), heading=panel.querySelector('.panel-heading'), buffer=panel.querySelector('.pm-buffer'), input=panel.querySelector('.pm-input');
      if (!body || !heading || !buffer || !input) return;
      const state = records[name] || {lines:[],docked:true,minimized:false,width:340,height:380};
      const restoring = !buffer.children.length;
      if (restoring) for (const text of state.lines) { const row=document.createElement('div'); row.className='dd-pm-saved-line'; row.textContent=text; buffer.append(row); }
      if (restoring && state.draft && !input.value) input.value=state.draft;
      state.open=true; records[name]=state;
      panel.classList.add('dd-pm-window'); panel.setAttribute('aria-label','Private messages with '+name);
      window.$(heading).off('click'); heading.replaceChildren();
      const title=document.createElement('span'); title.className='dd-pm-title'; title.textContent=name; title.title=name;
      const dock=button('↗','Detach private message window');
      const minimize=button('−','Minimize private message window');
      const close=button('×','Close private message window');
      heading.append(title,dock,minimize,close);
      const bubble=button(initials(name),'Open private messages with '+name); bubble.className='dd-pm-bubble'; bubble.title=name;
      panel.append(bubble);
      const grip=document.createElement('div'); grip.className='dd-pm-resize'; grip.tabIndex=0; grip.setAttribute('role','button'); grip.setAttribute('aria-label','Resize private message window with arrow keys'); panel.append(grip);
      const entry={panel,body,heading,buffer,input,state,dock,bubble}; windows.set(name,entry);
      updateAvatar(entry,name);
      const observer=new MutationObserver(() => { if(state.minimized && buffer.children.length > (state.lines?.length||0)) bubble.classList.add('dd-pm-unread'); schedule(); });
      entry.observer=observer; observer.observe(buffer,{childList:true,subtree:true,characterData:true});
      input.addEventListener('input',schedule); input.addEventListener('keydown',()=>setTimeout(schedule,0));
      dock.addEventListener('click',()=>{state.docked=!state.docked;place(entry);schedule();});
      minimize.addEventListener('click',()=>{state.minimized=true;write();place(entry);schedule();});
      bubble.addEventListener('click',()=>{state.minimized=false;place(entry);bubble.classList.remove('dd-pm-unread');panel.classList.remove('panel-primary');panel.classList.add('panel-default');buffer.scrollTop=buffer.scrollHeight;input.focus();schedule();});
      close.addEventListener('click',()=>{write();state.open=false;observer.disconnect();panel.remove();document.getElementById('pm-placeholder-'+name)?.remove();schedule();});
      function gesture(handle,resizing) {
        handle.addEventListener('pointerdown',e=>{
          if (e.button!==0 || (!resizing && e.target.closest('button'))) return;
          e.preventDefault(); const r=panel.getBoundingClientRect();
          const ox=e.clientX,oy=e.clientY; state.docked=false; state.x=r.x;state.y=r.y;state.width=r.width;state.height=r.height;
          handle.setPointerCapture(e.pointerId);
          const move=ev=>{if(resizing){state.width=Math.max(250,r.width+ev.clientX-ox);state.height=Math.max(220,r.height+ev.clientY-oy);}else{state.x=r.x+ev.clientX-ox;state.y=r.y+ev.clientY-oy;}place(entry);};
          const end=()=>{handle.removeEventListener('pointermove',move);handle.removeEventListener('pointerup',end);handle.removeEventListener('pointercancel',end);handle.removeEventListener('lostpointercapture',end);schedule();};
          handle.addEventListener('pointermove',move);handle.addEventListener('pointerup',end);handle.addEventListener('pointercancel',end);handle.addEventListener('lostpointercapture',end);
        });
      }
      gesture(heading,false);gesture(grip,true);
      grip.addEventListener('keydown',e=>{if(!['ArrowLeft','ArrowRight','ArrowUp','ArrowDown'].includes(e.key))return;e.preventDefault();const r=panel.getBoundingClientRect();state.width=r.width+(e.key==='ArrowRight'?20:e.key==='ArrowLeft'?-20:0);state.height=r.height+(e.key==='ArrowDown'?20:e.key==='ArrowUp'?-20:0);place(entry);schedule();});
      place(entry); buffer.scrollTop=buffer.scrollHeight; schedule();
    }
    const wrapped=function(name){const result=base.apply(this,arguments);decorate(result[0],name);return result;};wrapped.ddBase=base;window.initPm=wrapped;
    host.querySelectorAll('.pm-panel').forEach(p=>decorate(p,p.id.slice(3)));
    for (const [name,state] of Object.entries(records)) if(state.open) wrapped(name);
    const hostObserver=new MutationObserver(()=>{host.querySelectorAll('.pm-panel').forEach(p=>decorate(p,p.id.slice(3)));schedule();});hostObserver.observe(host,{childList:true});
    const resize=()=>windows.forEach(e=>{if(e.panel.isConnected)place(e);});
    const avatarTimer=setInterval(()=>windows.forEach((entry,name)=>{if(entry.panel.isConnected)updateAvatar(entry,name);}),2000);
    window.addEventListener('resize',resize); window.addEventListener('pagehide',write);
    api.pmStop=()=>{write();stopped=true;clearTimeout(timer);clearInterval(avatarTimer);hostObserver.disconnect();windows.forEach(e=>e.observer.disconnect());window.removeEventListener('resize',resize);window.removeEventListener('pagehide',write);};
  }

  function init() {
    privateMessages();
    roomWatermark();
    nameColorUI();
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
  api.episodeMonitor = setInterval(() => { episodeUI(); privateMessages(); }, 2000);
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
