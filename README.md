# Yifan Lin's personal website

Static HTML website intended for GitHub Pages at https://www.yifanl.com/.
No build step is required. `.nojekyll` disables Jekyll processing.

## Hosting and editing

GitHub Pages publishes the `main` branch from the repository root.
The custom domain is declared in `CNAME`.

Edit the bio, papers, awards, and professional service directly in `index.html`.
Recent News is hidden until there are updates. Styles are in `res/css/site.css`;
`res/js/theme.js` manages appearance. Roboto is self-hosted in `res/fonts/`,
with its license included. No build step or third-party runtime is required.

## Appearance and responsive layout

First visits follow the device/browser's `prefers-color-scheme` setting, including
live changes while the page is open. The sun/moon appearance button saves an explicit choice
in local storage and synchronizes it across tabs. It applies before CSS loads to
avoid a flash of the wrong appearance; blocked storage still permits switching.
An explicit choice overrides the system setting. Without JavaScript, CSS follows
the system setting and hides the control.

Semantic CSS tokens draw on [Apple's color guidance](https://developer.apple.com/design/human-interface-guidelines/color):
system gray 6 for the dark canvas and the published
increased-contrast blue variants for link hover and focus. Links otherwise inherit
the surrounding text color and use thin, dotted underlines, made solid and thicker
on hover and focus. Dotted underlines are a visual preference; the persistent
underline and stronger hover treatment are informed by [GOV.UK's link readability guidance](https://designnotes.blog.gov.uk/2021/07/07/making-links-easier-to-see-and-read-on-gov-uk/).
These are web palette references,
not native dynamic UIKit colors. Text, secondary text, focus, selection, and
controls each have appropriate light and dark values. Photos are never inverted.
The site supports increased contrast, forced colors, keyboard navigation, and
light printing; it uses no theme animations.

Desktop and tablet use two-column profile/publication layouts, with narrower
image columns on tablets. At 680px and below they stack with 24px page margins.
The appearance controls and publication links have at least 44px touch heights.

## Local preview

Run `python3 -m http.server 8000` from this directory, then open http://localhost:8000/.

## Credit

The Agentic Reset Synthesis title comes from `AgenticResetSynthesis-RSS/main.tex`;
the author list was supplied by Yifan Lin. Its preview uses the latest five-task
studio rollout from `agentic-locomanip/outputs/studio-five-diagonal-20261117/`,
including the diagonal shelf transfer.
The source is resized from 1920 × 1080 to 960 × 540 and compressed as H.264,
preserving its 50 fps, 7.44-second duration, and 16:9 composition. The poster is
from 2.5 seconds. Playback is user-controlled; the entry is On Going.

The PATOF title and author order come from `root.tex` in the supplied
`2026_PATOF.zip` (the author list is commented out in the anonymous manuscript).
Its thumbnail uses `figures/fig_exp_splits_obstacles.jpg`, cropped to 16:9 and
resized to 800 × 450. It is listed as In Submission with a link to the
[public paper](https://arxiv.org/pdf/2603.04305).

The FastNMPC title and author order were checked against the supplied LaTeX source
and IEEE submission printout. Its thumbnail uses the original
`figures/cybflight-quadrotor-with-fc.png` from the Cybflight paper source as the
reference for an AI-recomposed 16:9 thumbnail, selected by the site owner.
The orange-propeller drone and upper-right controller inset fill an 800 × 450
image without padding. This illustrative thumbnail is not an unaltered research photograph.
The entry is listed as
In Submission; the private submission printout and manuscript source are not published.

The BoT publication details and preview video come from [Bowen Li's website](https://jaraxxus-me.github.io/).
The [original video](https://jaraxxus-me.github.io/img/headers/bot.mp4) is compressed
to 800 pixels wide in `res/videos/bot.mp4`, with a still poster in `res/figs/bot.jpg`.
Playback is user-controlled and does not autoplay. The paper is listed as On Going;
no public paper or project URL was available when added.

Adapted from [Haozhi Qi's website source](https://github.com/HaozhiQi/haozhiqi.github.io).

The time-optimal quadrotor thumbnail is a resized copy of the red Split-S flight
figure from the authors’ [preprint](https://arxiv.org/abs/2407.17944), sourced from
[the arXiv HTML figure](https://arxiv.org/html/2407.17944v1/figures/fig_splits.jpg).

The ACDC banner (`res/figs/acdc.png`) is derived from Figure 7 of the
[paper](https://arxiv.org/abs/2509.16176), using the original physical-arena,
virtual-scene, and five waypoint images supplied by the author.
Its editable layout is retained in `source/acdc-banner.svg`; the website uses a
1088 × 612 (16:9) transparent PNG rendered from it. The canvas
and spacing are transparent; dark label backgrounds keep text readable on light
and dark pages. The original research imagery and trajectory annotations are preserved.
The banner includes at least a 64-unit transparent margin on all sides so the site's shared
rounded image corners do not clip its labels or panels at small display sizes.
Banner labels are rasterized into the PNG, so rendering does not depend on
fonts being available on the visitor's platform.

The Cybflight thumbnail is a resized copy of Figure 1 from the
[paper](https://arxiv.org/abs/2609.31232), sourced from
[the arXiv HTML figure](https://arxiv.org/html/2609.31232v1/figures/outdoor-light-trail.jpg).
