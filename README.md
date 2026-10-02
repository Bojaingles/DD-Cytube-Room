# American-Dad room enhancements

`cytube-room.js` and `cytube-room.css` enhance the existing CyTube room. The original MOTD is stored verbatim in the JavaScript file and original CSS is preserved at the start of the stylesheet. All three built-in editors are empty. No external HTML or backend is required.

## Features

- A Now Playing panel beside the poll shows the current American Dad episode title, room season/episode code, original air date, and a collapsible synopsis. It follows title changes automatically, including playlist skips. Polls and announcements are unchanged.
- The playlist is hidden from regular viewers. Moderators and admins (CyTube rank 2+) get a Playlist controls toggle, initially collapsed, with the choice remembered in the tab. This is presentation only; CyTube's existing permissions still control access and playback.
- Episode information is fetched from TVmaze's public HTTPS API and cached locally for 24 hours. Matching uses the episode title because season numbering differs between providers; ambiguous, missing, and unrelated titles do not receive guessed synopses. TVmaze attribution and its CC BY-SA license are linked in the panel. Failed requests retry after a minute, and a late response cannot overwrite a newer episode.

- New chat messages show `[s06e08][9/30/26 23:07]` using the server-provided message time and the viewer's local timezone. Episode titles accept both S06E08 and Season 6 Episode 8.
- Previously observed episode associations survive reloads in the same browser tab. Historical messages with no known episode are never assigned a guessed episode. Messages rendered before this script loaded retain their original timestamp.
- Direct images and videos, signed Discord attachment URLs, YouTube (including Shorts), Vimeo, and simple Imgur image pages render inline. Extensionless URLs are tried as image/video resources, never arbitrary HTML frames. Original links remain available when a host blocks embedding, expires a URL, requires authentication, or the browser lacks the codec. Discord message permalinks are not attachment URLs.
- Videos have controls and no autoplay. Provider frames explicitly disable autoplay and do not receive autoplay permission. Media loads as links approach the visible viewport, with a limit of six previews per message.
- The original 52 show banners scroll gently in a seamless circular rail. Previous/next buttons, keyboard navigation, touch scrolling, a pause button, and the current-channel highlight remain available. Motion pauses for hover/focus, interaction, an open support menu, hidden tabs, and reduced-motion preferences.
- The top-centered Info & support dropdown contains the original remaining MOTD artwork, typography, support links, affiliate disclosure, and Discord link. Original source markup is retained verbatim inside the JavaScript file.

## Installation

Use commit-pinned jsDelivr GitHub URLs in Channel Settings > General Settings > External CSS and External Javascript:

`https://cdn.jsdelivr.net/gh/Bojaingles/DD-Cytube-Room@COMMIT/cytube-room.css`

`https://cdn.jsdelivr.net/gh/Bojaingles/DD-Cytube-Room@COMMIT/cytube-room.js`

After both external files load, clear the built-in MOTD, CSS, and Javascript editors under Edit. The JavaScript supplies the original MOTD markup, favicon, and video-anchor behavior; the external stylesheet includes all original CSS.

## Rollback

To roll back, restore the backed-up original MOTD, CSS, and inline JavaScript, clear both external URLs, and refresh. Git commit `bd5d65f7e04aad394defad009757a9025e79b703` contains the old repository script, which was not connected to the live room at the time of this rewrite.

## Validation

Version 1.3.0 adds the continuous channel rail, top-centered support dropdown, and viewport-fitting chat/player layout. Boundary wrapping, pause, preserved links/artwork, support placement, and chat/player bounds are checked in an isolated Chrome fixture. Desktop uses side-by-side panes and narrow screens stack the video above chat.


Version 1.2.0 adds the episode panel and staff playlist toggle. Chrome checks cover title changes, differing season numbers, concurrent requests, unknown and ambiguous titles, role changes, playlist expansion/collapse, title-node replacement, poll preservation, caching, and guide failure/retry. The real TVmaze endpoint was also checked in Chrome.

Version 1.1.1 fixes chat follow scrolling: timestamps are formatted before CyTube measures new messages, and media updates use CyTube's follow mode and scroll helper. An isolated Chrome regression fixture reproduces the old wrapped-line and delayed-image failures and passes all 10 checks with the fix, including preserving the reader's position and private-message formatting.

Checked in an isolated Chrome fixture using the original MOTD and CSS: 25 assertions covering timestamps, episode changes, historical messages, signed URLs, unsafe URL schemes, autoplay attributes, duplicate loading, and exact preservation of original links/images/text. Carousel buttons and a 390px mobile viewport were also checked. Tests do not post messages to the live channel.

