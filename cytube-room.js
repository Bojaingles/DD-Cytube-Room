/* American-Dad room enhancements. Original MOTD remains the source of truth. */
(function () {
  'use strict';
  if (window.DDRoom) return;
  const version = '1.11.4';
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

  function footerCredit() {
    const footer=document.querySelector('footer');
    if (!footer || document.getElementById('dd-design-credit')) return;
    const credit=document.createElement('span');credit.id='dd-design-credit';
    credit.append(document.createTextNode('Channel design and features by '));
    const name=document.createElement('button');name.type='button';name.className='dd-credit-name';name.textContent='Orange';
    const portrait=document.createElement('img');portrait.src='data:image/jpeg;base64,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';portrait.alt='Orange';portrait.className='dd-credit-portrait';
    const wrap=document.createElement('span');wrap.className='dd-credit-person';wrap.append(name,portrait);credit.append(wrap);
    const powered=Array.from(footer.querySelectorAll('p')).find(p=>p.textContent.includes('Powered by CyTube'));
    const github=powered?.querySelector('a[href*="github.com/calzoneman"]');
    const separator=document.createTextNode(' · ');
    if(github) github.after(separator,credit); else (powered || footer).append(separator,credit);
    const sound=document.createElement('audio');sound.src='https://storage.instantsbutton.com/mortal-kombat-toasty.mp3';sound.preload='none';sound.volume=.65;sound.hidden=true;credit.append(sound);
    name.title='Toasty!';
    name.addEventListener('click',()=>{sound.currentTime=0;sound.play().catch(()=>{});const visible=wrap.classList.toggle('dd-credit-open');name.setAttribute('aria-expanded',String(visible));});
    name.setAttribute('aria-expanded','false');
    name.addEventListener('keydown',e=>{if(e.key==='Escape'){wrap.classList.remove('dd-credit-open');name.setAttribute('aria-expanded','false');name.blur();}});
    document.addEventListener('pointerdown',e=>{if(!wrap.contains(e.target)){wrap.classList.remove('dd-credit-open');name.setAttribute('aria-expanded','false');}});
  }

  function init() {
    footerCredit();
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
