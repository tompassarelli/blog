+++
title = "Why Fennec"
date = 2026-03-13T17:41:00+07:00
tags = ["public"]
draft = false
+++

> Framework note: This essay applies the carry-through criterion to
> software configuration. The question is what essential value-add
> could not be achieved through existing tools. Command palette ---
> Vimium already exists. Vertical tab sidebar --- Sideberry already
> exists. Tiling and split views --- your operating system already does
> this. The only thing missing was the CSS that makes these tools feel
> like a single, cohesive browser. That is what Fennec is --- and
> nothing more. See _What Carries Through_ for the structural claim.


## The Single-File Principle {#the-single-file-principle}

Jeremy Howard proves the viability of shipping simple. A single Python
file backed by a tiny on-disk database. FastHTML scales down to six
lines. The entire aplication --- auth, routes, database, templates ---
lives in one file you can read top to bottom. There is no build step,
no bundler, no deployment pipeline, no ops. You look at the file. You
understand it. You change it. You ship it.

This is not a limitation. It is a design decision. The single-file
constraint is load-bearing. It means the application is legible to its
author six months from now. It means there is no dependency graph that
rots while you are not looking. It means the maintenance cost
asymptotically approaches zero rather than compounding toward infinity.

Fennec applies this principle to browser configuration.


## The Landscape {#the-landscape}

There are three approaches to making Firefox usable in 2026.

The first is to use a fork. Zen Browser is a full fork of Firefox with
vertical tabs, workspaces, split views, theming, a command palette,
glance previews, and a mod store. It has 40,000 stars on GitHub, an
aggressive release cadence, and a community that genuinely cares about
the product. Zen is good software. It has also been working through
real challenges --- performance regressions that required removing
features like rounded corners on Linux, and DRM content issues with
Widevine licensing that have made streaming services unreliable. These
are not criticisms. They are the inherent costs of maintaining a fork.
Every fork accumulates the surface area of its own ambition, and Zen is
ambitious.

{{< figure src="/zen-browser.webp" >}}

The second is to use an elaborate userChrome.css modification. FF-Ultima
is the flagship here --- a theme with tab size options, autohiding
options, spacing options, accessibility options, color scheme options,
Sidebery integration options, Auto Tab Color integration options, and a
settings surface in about:config that rivals some applications. Its own
tagline is "the Firefox theme with too many options." FF-Ultima is
honest about what it is. It is a configuration system for people who
want to configure.

{{< figure src="/ff-ultima.webp" >}}

The third is Fennec.

{{< figure src="/fennec-with-sidebar.webp" >}}

{{< figure src="/fennec-without-sidebar.webp" >}}


## What Fennec Is {#what-fennec-is}

Fennec is a userChrome.css file that moves the URL bar into Sideberry's
sidebar, hides the rest of the chrome, and provides a toggle that
switches between full UI and zen mode. There is a companion CSS file for
Sideberry's style editor. That is the entire project.

There is no settings surface. There is no theme store. There are no
layout modes. There is no command palette. There is no about:config
integration. There is no autohide system. There is no installer script.

You copy a CSS file into your profile's chrome folder. You paste another
CSS file into Sideberry's style editor. You restart Firefox. You are
done.

There is no user.js. This is not a trivial omission. Most userChrome
themes ship a user.js that modifies Firefox's internal about:config
preferences --- flags that control security behavior, TLS settings,
certificate handling, safe browsing, and update mechanisms. The user.js
is typically deleted after first launch, but the settings it wrote
persist silently in prefs.js. You are trusting someone else's
about:config modifications without necessarily understanding each flag,
and you are trusting that none of them weaken Firefox's security model
in ways you did not intend.

Fennec accomplishes with CSS alone what most other projects have required
user.js modifications to achieve --- sidebar toggling, UI reordering,
the URL bar relocation into Sideberry's panel. This was a deliberate
design decision. Solving these problems in pure CSS is harder upfront.
It requires more careful planning, more knowledge of Firefox's internal
DOM structure, and more willingness to find creative solutions within
the constraint. But the constraint is the point. CSS can change how
Firefox looks. It cannot change how Firefox behaves. The security
boundary between presentation and configuration is preserved entirely.
Your Firefox installation, with Fennec applied, has exactly the same
security profile as your Firefox installation without it.


## The Tiling Problem {#the-tiling-problem}

The zen mode toggle is not a convenience feature. It solves a structural
gap in Firefox.

The only built-in way to hide all of Firefox's chrome --- the tab bar,
the URL bar, the navigation buttons --- is fullscreen mode. Fullscreen
mode is mutually exclusive with tiling. If you run a tiling window
manager, or if you simply want your browser occupying half the screen
with a terminal next to it, Firefox gives you no option. You see the
chrome, or you go fullscreen and lose the ability to tile. There is no
middle state.

Fennec's zen mode is that middle state. The UI disappears, the window
remains tiled, and the content occupies every pixel of the window's
allocated space. Toggle Sideberry off and the browser becomes a content
pane. Toggle it back on and the tabs and URL bar return. The window
never changes size, never leaves the tiling layout, never disrupts
whatever is running next to it.

{{< figure src="/fennec-tiled-comparison.png" >}}


## Why Complexity Is the Failure Mode {#why-complexity-is-the-failure-mode}

The failure mode of browser customization is not the initial setup. The
initial setup is fun. You find the perfect CSS, you tune it, you
screenshot it, you post it to r/unixporn. The failure mode is month
four, when Firefox updates and something breaks, and you open a
directory full of CSS imports that reference about:config flags you do
not remember setting, and you realize the cost of your configuration
exceeds the cost of the problem it solved. You abandon it. You go back
to stock Firefox. You feel vaguely defeated.

FF-Ultima has a wiki. It has a gituserChrome automation tool. It has
video installation tutorials. It has a settings surface with dozens of
configurable flags.

([FF-Ultima's getting started guide](https://ff-ultima.github.io/docs/getting-started) gives a sense of the configuration surface.)

Every one of these is a symptom of the same underlying condition: the
project has accumulated enough complexity that it now requires its own
support infrastructure. The support infrastructure is well-built --- the
maintainer clearly cares about the experience --- but it exists because
the thing being supported is complex enough to need it.

Zen is a fork. A fork means you are running someone else's build of
Firefox. You are downstream of both Mozilla's decisions and Zen's
decisions. When Zen updates multiple times per week, you update multiple
times per week. When Zen makes a UI choice you disagree with, you file
an issue or you live with it. When performance requires removing visual
features to stay usable, you lose them whether you had the problem or
not. When Mozilla ships a breaking change, you wait for Zen to absorb
it. The fork is a dependency. The dependency has a bus factor. The bus
factor is a single maintainer.

But the deeper issue is what Zen is building. Zen reimplements a command
palette --- Vimium already exists. Zen reimplements a vertical tab
sidebar --- Sideberry already exists. Zen reimplements split views ---
your window manager already tiles. Each of these reimplementations is a
new surface that must be maintained, debugged, and kept compatible with
upstream Firefox. Each is a feature that could instead be delegated to a
mature, standalone tool with its own maintainer and its own track record.
The maintenance cost of a fork is proportional to the distance between
the fork and upstream. Zen maximizes that distance by rebuilding what
already works elsewhere. Fennec minimizes it by building only the glue.

Fennec has none of these problems because Fennec has almost nothing. You
are running Firefox. You are running Sideberry, a mature and
well-maintained extension. On top of that sits a CSS file you can read
in five minutes. When Firefox updates, the CSS either still works or it
does not, and if it does not, you fix it in the same file you already
understand because you have read the whole thing. The recovery path from
any breakage is: open one file, find the broken selector, fix it.

In four months of daily use across Firefox updates, Fennec has required
exactly one patch --- a single CSS fix.

That is the maintenance cost of a project with almost no surface area.
No dependency chain. No upstream maintainer whose schedule you are
beholden to. No settings state to debug.


## The Carry-Through Test {#the-carry-through-test}

The question for any tool is not "does it work today?" The question is
"will I still be running it in two years, and at what cost?"

A Zen installation carries through only if Zen does. An FF-Ultima
installation carries through only if you are willing to maintain a
relationship with its configuration surface indefinitely. Both are
conditions external to you or costs that compound over time.

A Fennec installation carries through because there is almost nothing to
maintain. One CSS file. One extension. Firefox. The surface area of
possible breakage is small. The surface area of your own comprehension
covers the entire project. There is nothing you do not understand about
your own browser.

That is the value proposition. Not features. Not options. Not
configuration depth. Comprehension. The entire system fits in your head,
which means you own it in a way that no amount of features can
substitute for.


## What Fennec Is Not {#what-fennec-is-not}

Fennec is not for everyone. If you want workspaces, a command palette,
and split views built into your browser --- rather than letting your
operating system handle tiling, which is what an operating system is
for --- use Zen. If you want a settings surface that lets you
tune every pixel, use FF-Ultima. Both are good projects solving real
problems for people who have those problems.

Fennec is for people who want vertical tabs, a clean toggle between UI
and zen mode, and a keyboard-driven workflow --- and who want those
things delivered by the tools that already do them best, held together
by the thinnest possible integration layer. Sideberry, Vimium
(optionally, to complement the keyboard-driven flow), and a CSS file.
That is the browser. There is nothing else to manage, nothing else to
break, and nothing else to understand.

The smallest thing that works is not the worst version. It is the
version that carries through.
