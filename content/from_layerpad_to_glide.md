+++
title = "From Layerpad to Glide"
date = 2026-03-17T03:56:00+07:00
tags = ["software", "linux", "input"]
draft = false
aliases = ["/software/from_layerpad_to_glide/"]
+++

The project did not start as a Kanata fork.

It started as Layerpad: a standalone experiment in using touchpad
activity as a modifier signal. The source lives at
[github.com/tompassarelli/glide](https://github.com/tompassarelli/glide).

The original idea was simple. When I got the Framework 13, I
immediately missed the ThinkPad touchpad buttons. Modern touchpads
may look cleaner, and Apple-style trackpads have clearly pushed
that direction hard, but I think the ThinkPad design gets
something important right: clicking and gliding are different
actions, and the ergonomics should reflect that. It feels better
to actuate a real button with your fingers than to press down on
the same surface you use for motion. Gestures help, but they
still often feel slower and less consistent than keys when you
are moving quickly.

That was the seed of the project. I wanted some of that
separation back. If my right hand was actively using the
touchpad, that state should be able to change what the keyboard
does. Not in some vague gesture-heavy way. Just a clean binary
signal: the touchpad is meaningfully active right now, so treat
that as a modifier-like source.

That idea existed before Kanata entered the picture.

The earliest version of Layerpad was written in Python. That made
sense at first. It was fast to experiment in, easy to iterate
on, and good enough to prove the concept. But once the project
stopped being a toy and started feeling like something I actually
wanted to use seriously, the tradeoffs changed. I wanted the
fastest possible input resolution, tighter control over timing,
and a more credible long-running systems implementation. So
Layerpad moved from Python to Rust.

That was the actual starting point.

Only after that did the Kanata question emerge.


## The tempting middle phase: maybe this should just be a Kanata feature {#the-tempting-middle-phase-maybe-this-should-just-be-a-kanata-feature}

Once Layerpad already existed and had already moved into Rust, it
became natural to ask whether the behavior should live inside
Kanata instead of beside it.

The temptation was obvious. Kanata already has virtual keys,
layers, fake-key machinery, and a TCP interface for external
control. On paper, the integration looked clean. If touchpad
activity could press a virtual key, then Kanata could take it
from there. That virtual key could hold a layer, trigger remaps,
or drive whatever other behavior I wanted using machinery that
already existed.

That was the attractive version of the idea.

And importantly, it was not a crazy idea. This was not me trying
to duct tape an unrelated concept onto Kanata. There really was a
plausible architectural fit. In Kanata terms, the clean
abstraction was never “invent a weird special touchpad layer
feature.” It was something more native than that: touchpad
activity drives a virtual key, and the rest stays inside
Kanata’s existing model.

So for a while, the thought process was basically: Layerpad
already exists, it is already in Rust, maybe I should just port
the implementation into Kanata and upstream it properly.

That was the middle phase of the project.


## Thinking like a maintainer changed the answer {#thinking-like-a-maintainer-changed-the-answer}

The more I thought about that path, the less the question became
“can this be implemented?” and the more it became “does this
belong here?”

That distinction mattered.

Technically, I think a Kanata-native implementation was viable.
You could monitor touchpad activity, translate it into fake key
press/release events, and route those through the existing
virtual key machinery. It was not impossible. It was not even
obviously ugly.

But maintainership is not just about whether something can be
made to work.

It is also about scope. It is about the conceptual center of the
tool. It is about whether a feature strengthens the boundary of
the project or quietly blurs it.

And once I looked at it from that angle, I started feeling
uneasy.

Kanata’s center of gravity is keyboard remapping. Even if it has
some adjacent capabilities, the identity of the tool is still
clear. It takes keyboard-oriented input, transforms it through a
remapping model, and emits keyboard-oriented behavior, with some
related output actions around the edges.

Touchpad-intent detection started to feel like one step too far
outside that boundary.

Not because the use case was illegitimate. Not because the
integration was necessarily messy. But because the responsibility
itself felt slightly off.

As a maintainer, I would be suspicious too. I would look at a
feature like this and think: this is interesting, but is this
really part of the core problem the tool is supposed to own? Or
is this one of those things that should live beside the project
and communicate through an interface the project already exposes?

That was the real turning point.

Not rejection. Clarification.


## The project was never “touchpad support for Kanata” {#the-project-was-never-touchpad-support-for-kanata}

Once I stopped treating Kanata as the natural home for the logic,
the actual shape of the project became much clearer.

The real thing I was building was not “touchpad support inside a
remapper.”

It was a touchpad-intent daemon.

That is the cleaner abstraction.

The core problem is not remapping. The core problem is observing
noisy touchpad contact and motion and deciding whether it should
count as intentional activation. That decision is useful on its
own. Kanata can consume it. Other tools could consume it too. But
the value is in the signal, not in the specific remapper that
happens to use it first.

This was the point where the project stopped looking like “a
feature that belongs upstream somewhere else” and started looking
like its own tool.

That is also where the name Glide started to make more sense than
the earlier project framing.

Layerpad was a good working name for the original experiment
because it described the use case directly: touchpad activity
controlling a layer-like behavior. But as the architecture got
cleaner, that name started feeling too tied to one consumer and
one policy. Glide was broader and more honest. It described the
character of the signal without hardcoding the exact backend or
downstream behavior.

That shift in naming reflected a real shift in understanding.


## The abstraction got cleaner when I stopped centering press/release {#the-abstraction-got-cleaner-when-i-stopped-centering-press-release}

One of the more useful conceptual upgrades was realizing that
press/release is not the actual idea.

Active/inactive is the idea.

That sounds small, but it changes the design.

If I think of the tool as “something that presses a virtual key
when the touchpad is active,” then I am already thinking from
Kanata’s point of view. That makes Kanata feel like the center of
the system and the daemon feel like a specialized adapter.

But if I think of the tool as “something that detects meaningful
touchpad engagement and emits activation/deactivation
transitions,” then Kanata becomes just one backend.

That is much better.

It means the internal model can stay consumer-agnostic:

-   inactive
-   active

And then a backend can map those state transitions however it
wants:

-   Kanata fake key press/release
-   stdout events
-   JSON
-   a socket
-   anything else later

That was when the project stopped feeling like a remapping hack
and started feeling like a signal generator.

Glide should generate signal. It should not absorb policy. It
should not become its own full remapping engine. It should not
reimplement what Kanata already does well.

That boundary is one of the healthiest things that happened to
the project.


## The first algorithmic trap: tuning by feel {#the-first-algorithmic-trap-tuning-by-feel}

Even after the project boundary got cleaner, the implementation
still had a problem.

The early live algorithm was not stupid. It was actually pretty
reasonable. Poll the touchpad every few milliseconds. Measure
displacement. If the displacement at a poll exceeds some
threshold, count that poll as motion-positive. Then activate when
enough motion-positive polls occur within some total time window,
maybe expressed as a ratio like 90 percent over 200 milliseconds.

That is a perfectly respectable first heuristic.

The problem is what comes after.

Once you have a live rule like that, every imperfection invites
another knob: poll interval, motion threshold, activation window,
activation ratio, maybe debounce, maybe another suppression
condition.

At that point, the project starts drifting into the classic
small-systems trap: it becomes a pile of adjustable constants
that feels like it is getting more sophisticated while actually
getting harder to understand.

I could feel that happening.

The system was close enough to useful that it was tempting to
keep nudging it by instinct. But that is a dangerous stage. When
a project almost works, it is very easy to start worshipping
knobs instead of improving the model.


## The second turning point: stop tuning by vibe and collect data {#the-second-turning-point-stop-tuning-by-vibe-and-collect-data}

The project got much better the moment I stopped asking “what
heuristic feels right?” and started asking “what actually
separates intentional touchpad use from incidental contact?”

That was the real move out of vibes.

The first conceptual improvement was recognizing that the
per-poll sample was the wrong thing to focus on.

A single 7 ms or 10 ms sample is not what I care about. What I
care about is whether a short touch interaction was intentional.

That means the right unit of analysis is not the poll. It is the
episode.

An episode has structure. It has duration. It has total
displacement. It has a ratio of motion-positive samples. It has
an onset shape. It has sustainedness. It has a longest run of
consecutive above-threshold motion. It may eventually have
contextual features nearby too, like keyboard activity.

Once the problem is framed that way, the whole development
process changes.

Instead of endlessly mutating the online activation loop and
hoping it feels better, the system can be split into clearer
layers:

-   raw sampling
-   online activation logic
-   trace logging
-   offline analysis
-   backend emission

That separation was huge. It meant the daemon no longer had to
“understand everything” in real time just to make progress. It
could be good at producing structured traces, and those traces
could teach the next algorithm.

That is real engineering. Not because it sounds more academic,
but because it lets the signal explain itself.


## What the data actually showed {#what-the-data-actually-showed}

Once labeled traces existed, the useful features became much
easier to inspect.

Some of the early metrics were decent. Total sample count was
informative. Motion ratio had signal. The rolling-window approach
was not random. It was just not the cleanest expression of what
intentional use actually looked like.

Then one feature stood out hard:

longest consecutive run of motion-positive samples

That feature cleanly separated intentional episodes from
accidental ones in the data I collected.

That was the killer result.

Not because it proved universal truth forever. But because it
exposed a much simpler live algorithm than the one I had been
tuning by feel.

The best rule was not: activate when a rolling window contains
enough motion-positive samples at a high enough ratio.

It was: activate when I have seen N consecutive motion-positive
samples.

That is a streak detector.

And it is better.

It is simpler to explain. It is simpler to implement. It matches
the actual intuition better: sustained engagement, not scattered
motion. And it explained the weakness of the earlier
rolling-window rule, which tended to miss shorter intentional
episodes because the fixed time window wanted more history than
the real gesture required.

This was the most satisfying moment in the whole project.

The data did not tell me to add complexity. It told me I was
allowed to remove complexity.

That is a great outcome.


## Live testing mattered too {#live-testing-mattered-too}

This is the other half of the story.

The streak result was not just an offline curiosity. It
translated immediately into better live behavior.

Once I switched from the rolling ratio model to the
consecutive-motion model, false activations while typing
basically disappeared during real use. I was literally running
the thing in a side window, watching activation events while
typing, and it simply stopped making the class of mistake I cared
about most.

That mattered.

At some point, “collect more data” stops being rigor and starts
being procrastination. If the traces reveal a cleaner separating
feature and the live behavior now matches the intended use case
during actual typing, that is enough to move forward.

Not enough to claim that the problem is universally solved for
all hardware forever. Enough to say the project has crossed out
of speculative heuristics and into something that works.

That is a meaningful threshold.


## This is a palm-rejection-shaped problem {#this-is-a-palm-rejection-shaped-problem}

One of the interesting realizations that came out of Glide is
that the problem is more general than it first sounds.

At first glance, Glide looks niche: detect intentional touchpad
use well enough to drive a modifier-style signal.

But structurally, that is very close to the family of problems
that palm rejection lives in.

You have touch contact. You want to reject almost all of it
except the kind you actually care about. You are trying to
distinguish intentional engagement from incidental contact.

That is the same shape.

It is not identical to the full problem that laptop vendors
solve. They have a much broader downstream contract: preserve
normal pointer behavior, gestures, clicks, scrolling, latency,
cross-device robustness, and a general sense that the whole
touchpad feels right for ordinary users.

Glide is narrower than that. It only has to answer one binary
question well: should this touch sequence count as intentional
activation?

That narrower target is exactly why a specialized tool can
sometimes do unusually well. It is allowed to optimize for one
crisp positive class instead of trying to preserve the entire
touchpad experience for every user and every posture.

So no, Glide is not “generic palm rejection.”

But it is very much a palm-rejection-shaped classifier. And the
underlying idea absolutely generalizes more than the initial use
case might suggest.


## Why existing input stacks did not already solve this for me {#why-existing-input-stacks-did-not-already-solve-this-for-me}

A natural reaction to this kind of project is: shouldn’t some
higher-level input stack already provide the event I want?

In a broad sense, yes. It feels like the point of an input
library should be to take noisy hardware-level behavior and
expose useful abstractions.

But this is where product boundaries matter.

A library like libinput is trying to solve a lower-layer problem.
It wants to make touchpads behave properly as pointing devices.
That includes gesture handling, pointer behavior, tapping, palm
rejection heuristics, disable-while-typing, and so on. It is not
really trying to export a high-level app-facing event meaning
“this touch sequence now counts as intentional engagement for use
as a modifier-like signal.”

If that API existed cleanly, Glide might be much smaller, or
maybe unnecessary.

But I do not think that event really exists in the form I
needed.

That is not a failure of libinput. It is just a different layer
of abstraction.

Libinput tells you what the touchpad is doing as an input device.
Glide tries to answer when that behavior should count as active
intent.

That is the gap the project lives in.


## Why Rust still made sense {#why-rust-still-made-sense}

This project also reinforced something I care about a lot: the
language that is best for exploratory thought is not always the
language that is best for the thing you actually want to run.

Layerpad started in Python for good reasons. It was fast to test
ideas. It was flexible. It got the concept moving.

But once the project became “a real daemon I want low-latency
trust in,” Rust was the more correct implementation language.

This is a Linux systems utility. It reads input devices. It
maintains timing-sensitive state. It should eventually be a small
reliable binary.

That is a Rust-shaped job.

That does not mean every part of the project needs to happen in
Rust. The analysis work can live elsewhere. The exploratory
feature comparison can live elsewhere. But the daemon itself
being in Rust stopped feeling like overengineering once the
project’s actual role became clear.

It is not a thought experiment anymore. It is infrastructure.


## Why the name Glide survived {#why-the-name-glide-survived}

The naming story ended up following the design story.

Layerpad was the right name for the original experiment because
it described the immediate use case directly. But the more the
project clarified itself as a standalone signal generator rather
than “the thing that makes layers happen,” the more that name
felt too tied to one downstream consumer.

Other names had the opposite problem. Some had decent
Linux-daemon energy but implied the wrong gesture entirely. A
name like tapd sounds plausible until you realize the daemon is
not about taps at all. It is about sustained touch engagement
and meaningful activation.

Glide ended up being the right answer because it stayed close to
the behavior without lying about the mechanism.

It evokes touchpad use. It does not falsely imply tap detection.
It is broad enough to survive if the project ever grows beyond
one backend or one platform. And it fits the actual abstraction
better than the more literal names did.

The project became more honest, and the name got better with it.


## What actually happened here {#what-actually-happened-here}

Looking back, the development arc is clearer than it felt while I
was inside it.

First there was Layerpad: a standalone experiment, initially in
Python, then moved to Rust for performance and seriousness.

Then there was the Kanata phase: not the origin of the idea, but
the phase where it became tempting to collapse the project into
an upstreamable feature because the implementation language and
integration surface lined up.

Then there was the maintainership correction: the realization
that even if the feature could be made to work well, it was not
obviously the right responsibility boundary for Kanata.

That pushed the project back toward standalone form, but now with
a cleaner understanding of what the standalone thing actually
was.

Then the same refinement happened again at the algorithmic level:
the early live heuristic was plausible but increasingly
knob-heavy, structured trace logging shifted the process from
tuning by instinct to looking at real separation, episode-level
analysis exposed a much cleaner feature, and the resulting
algorithm got simpler, not more complicated.

That is the part I like most.

The project improved twice in the same way: once when it escaped
the wrong host boundary, and once when it escaped the wrong style
of reasoning.

In both cases, the better version came from narrowing the problem
until the right abstraction became visible.


## The real lesson {#the-real-lesson}

A project gets better when you stop forcing it to live in the wrong boundary, and when you stop pretending that one more heuristic is the same thing as understanding the signal.

Layerpad was not a mistake. The Kanata phase was not a mistake
either. The early rolling-window algorithm was not a mistake.
Those were all useful stages.

But they were intermediate stages.

What survived those stages was Glide: a standalone daemon with a
cleaner conceptual boundary, a consumer-agnostic active/inactive
signal, and an activation rule that came out of actual trace
separation rather than just gut feel.
