---
name: feedback_favicon
description: SVG favicons render inconsistently — use raster PNGs/ICO. Sans-serif bold fonts for small icon text.
type: feedback
---

SVG data URI favicons render smaller/inconsistently compared to raster favicons across browsers. Serif fonts look mushy at 16x16.

**Why:** User compared against Google/Reddit favicons and the SVG approach consistently looked smaller and lower quality.

**How to apply:** For favicons, generate high-res (256x256) with bold sans-serif font, Lanczos downscale to 32x32 and 16x16 PNGs, plus ICO. Avoid SVG data URI favicons. Use `replace_all` carefully — it caught the profile image container when only icon containers were intended.
