+++
title = "Role-Arity and the Structure of Emergence"
date = 2026-02-23T00:32:00+07:00
tags = ["essay", "public"]
draft = false
+++

---

_Some questions fail because they demand more functional structure than
the target can supply, or because they demand less and force a false
dichotomy._

---


## The Claim {#the-claim}

Structural capabilities emerge at specific thresholds of role-arity ---
the minimum number of functionally distinct roles required for an
operation to be well-typed. Role-arity here is not argument-arity; it is
the number of functionally distinct slots required for an operation to
count as an instance of its operation class. Invariance requires one
role. Difference requires two. Evaluation requires three. Each threshold
is fundamental at its own level: irreducible within that arity, and
insufficient to produce what the next arity makes possible.

A question's role-arity is the minimum number of functional roles that
must be instantiated to answer it. A target's role-arity is the minimum
roles it supplies without importing external structure. When a
question's arity exceeds its target's, the surplus generates phantom
structure --- foils, criteria, modal spaces --- that the target cannot
ground. When a question's arity falls short, it forces flattening: false
dichotomies imposed on a subject with more internal structure than the
question can represent.

Arity mismatch is a sufficient condition for specific failure modes
(phantom depth from overspecification; forced dichotomy from
underspecification), not a necessary-and-sufficient criterion for
question well-formedness. Questions can be ill-posed for other reasons.
But when the mismatch is present, the failure mode is predictable.

---


## The Table {#the-table}

| Arity | What's Fundamental | Formal Expression                                                                                               | What It Makes Possible                                                                                                                          | What It Cannot Do                                                                                                                                                                 |
|-------|--------------------|-----------------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **1** | Invariance         | E(x) = x. More broadly: any structure unchanged under evolution --- fixed point, attractor, conserved quantity. | Persistence. Stability. Something remaining itself across operations. The minimum structural content of "being."                                | Cannot produce difference. Has no second role. No comparison, no distinction, no "other."                                                                                         |
| **2** | Difference         | A ≠ B. Two roles: this and not-this.                                                                            | Partition. Boundary. Information (a difference that makes a difference --- Bateson). Two states. The origin of binary structure.                | Cannot produce evaluation or classification. Partitions exist as structure; determining membership in a partition requires a criterion/rule slot --- a third functional position. |
| **3** | Self-reference     | Input → Evaluator → Output, where output can feed back as input. Three functionally distinct roles.             | Evaluation. Computation. Feedback. A system that can observe its own state and act on the observation. The threshold for meaningful complexity. | (This is the threshold. Everything beyond is elaboration within arity ≥ 3.)                                                                                                       |


### Notes on formal objects {#notes-on-formal-objects}

**Arity 1:** Invariance is the core concept: some structure unchanged
under evolution or operation. The simplest formal expression is E(x) = x
--- a fixed point under a unary operator. But invariance is broader than
literal fixed points. Limit cycles, attractors, conserved quantities,
and symmetries are all invariant structures at some description level.
What matters is that the substrate admits something that persists ---
some aspect that remains itself across operations. The identity function
of lambda calculus is a specific instance: I(I) = I, a fixed point of
self-application in the untyped setting. But self-application is itself
a binary operation (applying something _to_ something), so it is an
illustration of invariance, not its definition.

**Arity 3:** The claim is that _evaluation_ --- the specific operation
class that includes computation, explanation, and self-reference ---
requires three functionally distinct roles: something to be evaluated
(input), something that evaluates against a criterion (process), and a
result (output). These are functional positions, not necessarily
distinct entities. One object can occupy multiple positions --- a Turing
machine's read head, rule table, and write head can be instantiated in
the same physical substrate. The operation type still has three slots.
What matters is that the slots are functionally irreducible: removing
any one of the three causes the operation to degenerate into a lower
arity. Without input, there is nothing to evaluate. Without a
criterion/process, there is no evaluation, only a pair of things (arity
2). Without output, evaluation produces no result and cannot feed back.

---


## Arity 1: Invariance {#arity-1-invariance}

E(x) = x. Something unchanged under an operation. A fixed point. More
broadly: any structure that persists under evolution --- a fixed point,
an attractor, a conserved quantity, a symmetry. The specific form of
invariance matters less than the fact of it. The minimum structural
content of being anything at all.

This is what consistency _is_ at maximum compression. If nothing is
invariant --- if no structure persists under any operation at any
description level --- nothing survives across operations. There is no
"across." There is no "operations." There is nothing stable enough to be
operated on. A substrate capable of supporting further structure must
admit some invariant, even if that invariant is not a literal fixed
point but a cycle or a conserved quantity.

At arity 1, you have one role. One functional position. There is nothing
to compare against, nothing to distinguish from, nothing to evaluate.
This is not impoverished. It is complete at its own level. The question
of whether it "should" be more is itself an arity-3 operation (it
evaluates arity 1 against a criterion and finds it wanting --- but the
criterion and the judgment are imported, not resident in the subject).


### What arity 1 cannot do {#what-arity-1-cannot-do}

Produce difference. For difference you need two roles: this and
not-this. One role has no "not-this." There is no outside. There is no
boundary between inside and outside because boundary is a 2-arity
concept. Arity 1 is total. Everything is itself.

---


## Arity 2: Difference {#arity-2-difference}

Two roles. Two things that are not the same. A and not-A. True and
false. 0 and 1. Inside and outside.

The jump from 1 to 2 is the origin of information. Information is
difference --- a difference that makes a difference. At arity 1 there
are no differences. At arity 2, difference is all there is. The entire
binary apparatus --- negation, boundary, the bit --- lives here. Two
states exist. True and false exist as a partition. But nothing at this
level _determines_ which state obtains. Determination is arity 3.

A - A = 0 bridges the arities. The invariance operation (arity 1)
expressed across a difference (arity 2) yields zero --- the measurement
that invariance holds. A - B ≠ 0 is the measurement that it doesn't.
Every nonzero value is a degree of difference. Mathematics lives in the
gap between zero and not-zero.


### Partition vs. classification {#partition-vs.-classification}

This distinction matters and protects the framework from an internal
contradiction. Arity 2 supports partitions --- structural differences
that exist. True and false as two states. Inside and outside as two
regions. Food and not-food as two categories. The partition is there.
The difference is real.

What arity 2 does not support is _determination_ --- reading the
partition, applying a criterion, and producing a verdict about which
side a thing falls on. "Does A match B?" introduces an irreducible third
functional position: a criterion or rule slot. R(A, B) → result.
Difference is a 2-role relation. Classification is a 3-role schema
because it requires a rule that operates on the two things and produces
a result. This is not a claim that the world must contain a third
object. It is a claim that the operation class adds a third functional
slot.

A bit has two states but no rule that reads them. A membrane has an
inside and an outside but no process that decides which molecules belong
where --- the differential behavior is a structural property, not an
evaluation. The moment something _reads_ the bit, _classifies_ the
molecule, or _determines_ which side of a boundary a thing falls on, you
have arity 3.


### Paraconsistency as arity inflation {#paraconsistency-as-arity-inflation}

Priest's dialetheia --- the claim that some propositions are both true
and false --- is interesting precisely because it reveals an arity
constraint.

Arity 2 is an exclusive partition. Two roles, disjoint. A thing occupies
one role or the other. True or false. This or that. The structural
content of arity 2 is that the roles don't overlap.

The moment you allow overlap --- a proposition that is both true and
false --- you have introduced a third functional position: overlap
membership, or consistency status, or whatever you want to call the
track that determines whether a given proposition sits in one role, the
other, or both. That third position is not acknowledged in the
paraconsistent framework, but it is present. It is doing work. It is
what distinguishes a "merely true" proposition from a
"true-and-also-false" one. Without it, you cannot tell dialetheia apart
from ordinary truths, which means you cannot operate the system.

So paraconsistency does not break arity 2. It inflates beyond it. The
phenomenon Priest is modeling genuinely requires more than two
functional roles, and his system smuggles in the extra role without
acknowledging it as a structural commitment. Even if the extra status is
definable within the formalism, its functional role is irreducible: it
is exactly what makes "both" behave differently from "true-only" and
"false-only" under consequence. This is not a refutation of
paraconsistent logic as a formal tool. It is the observation that the
formal tool is operating at arity 3 while claiming to extend arity 2.

---


## Arity 3: Self-Reference {#arity-3-self-reference}

Three functionally distinct roles in a directed relationship: input,
evaluator, output. This is the minimum architecture for self-reference,
because the output can feed back as input --- and the system can
evaluate its own products.

This is where meaningful complexity becomes structurally possible:

-   A Turing machine: reads input, applies rules, writes output, continues
    reading. Three functional positions.
-   A compiler: takes source (input), checks consistency (evaluation),
    produces an executable or rejection (output). Three functional
    positions.
-   The halting limit: arises because a self-referential evaluator is
    asked whether its own process terminates --- the output of evaluation
    is fed back as input to the same evaluator.
-   Gödel's incompleteness: a formal system (axioms → inference rules →
    theorems) is asked to evaluate a statement about itself.
    Self-reference within the system generates specifications whose
    evaluative dependencies cycle without ground.

_(Both cases are revisited below as applications of the role-arity
diagnostic. The stronger claim --- that these results are artifacts of
non-executable input reaching an ungated engine --- is developed in
Passarelli 2026, The Executability Gate.)_

None of this is possible at arity 2. You can have true and false at
arity 2, but you cannot have a _process_ that determines which one
obtains. Determination is evaluation. Evaluation is arity 3.
Classification is evaluation where the output is a membership verdict
with respect to a partition --- it is the simplest arity-3 operation,
the one that reads arity-2 structure.


### The evaluation loop {#the-evaluation-loop}

| Role      | In the universe model            | In lambda calculus | In explanation   |
|-----------|----------------------------------|--------------------|------------------|
| Input     | Noise (candidate strings)        | Argument           | Explanandum      |
| Evaluator | Compiler (consistency check)     | Function           | Criterion / rule |
| Output    | Persistent programs or rejection | Return value       | Justification    |

The evaluator is not imposed from outside. It emerges from the same
substrate as the things it evaluates. The compiler is itself a program.
The criterion is itself a proposition. Self-reference is what you get
when the output includes the cycle itself as a possible input. And
undecidability is what you get when that self-reference is unavoidable.

---


## The Diagnostic: Question-Arity vs. Target-Arity {#the-diagnostic-question-arity-vs.-target-arity}


### Definitions {#definitions}

A **question's role-arity** is the minimum number of functional roles that
must be instantiated to count as answering it.

A **target's role-arity** is the minimum roles it supplies without
importing structure from outside itself.

**Overspecification:** question arity &gt; target arity. The surplus roles
(foils, criteria, modal spaces, alternative branches) are generated by
the question's own structure, not found in the subject. The apparent
depth is a projection of the question's complexity, not the subject's.

**Underspecification:** question arity &lt; target arity. The question forces
the subject into fewer roles than it actually occupies. False
dichotomies. Forced flattening.

Arity mismatch is a sufficient condition for these specific failure
modes. It is not the only way a question can be ill-posed, and matching
arity does not guarantee a question is well-formed. Additional
conditions matter: the foil must be a live alternative in the target's
own modal space, and the criterion slot must be grounded by the target's
internal structure rather than imported. The diagnostic catches a
specific class of failures, not all failures.


### Application: "Why is there something rather than nothing?" {#application-why-is-there-something-rather-than-nothing}

This is a contrastive why-question by construction. "Rather than"
explicitly introduces a foil. A contrastive why-question has the
following role structure:

1.  **Explanandum** --- the thing to be explained (something exists)
2.  **Foil** --- the alternative (nothing)
3.  **Criterion** --- what selects between them (the demanded "why")
4.  **Justificatory output** --- the answer
5.  **Modal space** --- the domain in which the foil is a live alternative

That is arity 5 at minimum. The target --- if the framework's analysis
is correct --- is invariance. E(x) = x. Arity 1.

The question does not just exceed the target by one role. It exceeds it
by four. The foil ("nothing"), the criterion ("why this rather than
that"), the justificatory output ("because..."), and the modal space
("in a world where either could obtain") are all generated by the
question's own contrastive structure. The target --- persistence,
invariance, something unchanged under operation --- supplies exactly one
role. It has no foil, no criterion, no modal alternatives. It does not
have the structural content to ground any of those things.

The claim is not that "invariance is the subject." The claim is that the
only candidate for a non-derivative stopping point --- the only thing
that cannot be further reduced without the act of reduction presupposing
it --- is 1-role invariance. And a contrastive why-question demands more
structure than any 1-role stopping point can supply. The foil
("nothing") is not found at the target level. It is fabricated by the
contrastive structure of the question itself --- the question introduces
an alternative that the target's own domain does not contain and cannot
adjudicate.

The question is not unanswerable. It is overspecified relative to its
target. The depth people sense is the question's own structural
complexity, mistaken for depth in the subject.

This is distinct from the earlier "the question presupposes its own
answer" argument. That argument is valid but reads as circular to a
hostile reader. The arity-mismatch argument is structural: the question
has more moving parts than the thing it's asking about. The gap between
them is the gap between the question's architecture and the target's,
and no operation within the question's architecture can reduce its own
arity to match.


### Application: A contrastive why that resolves (the "passes" case) {#application-a-contrastive-why-that-resolves-the-passes-case}

"Why does water expand when it freezes rather than contract?"

Contrastive. Has a foil (contraction). Demands a criterion (what selects
expansion over contraction). So it deploys at minimum arity 4:
explanandum, foil, criterion, output.

The target --- molecular structure and thermodynamics --- has rich
internal structure. Hydrogen bonding geometry, crystalline lattice
formation, energy states, phase transition dynamics. The target supplies
distinct functional roles: molecular configuration (input),
thermodynamic constraints (criterion), resulting volume change (output).
The foil (contraction) is a genuine alternative within the same physical
domain --- most liquids do contract when they freeze. The modal space is
licensed: the question asks about this substance relative to the class
of substances where the foil is the norm.

The question's arity does not exceed the target's. The foil is grounded.
The criterion is available. The answer resolves: ice forms a relatively
open hydrogen-bonded lattice, lowering density compared to liquid water.
The contrastive why is well-formed because the target has enough
internal structure to host the comparison.

This is what a well-formed contrastive why looks like: the target
supplies enough roles to ground the foil and criterion the question
demands. The diagnostic does not dissolve this question. It predicts it
should resolve. And it does.


### Application: Underspecification --- "Is the universe deterministic or random?" {#application-underspecification-is-the-universe-deterministic-or-random}

This is an arity-2 question. Two roles, presented as exhaustive:
deterministic or random. The binary conflates ontic rule type with
epistemic computability.

The subject requires at least a 2×2 description --- two independent
axes, not one binary:

-   **Axis 1 (generative rule):** deterministic vs. stochastic. Is the
    process rule-governed with unique successor states, or does it involve
    genuine probability?
-   **Axis 2 (epistemic access):** decidable vs. undecidable. Can an
    embedded observer compute the system's trajectory, or does
    self-reference create principled limits on prediction?

A system can be deterministic and undecidable (a Turing machine running
a non-halting program --- fully rule-governed, trajectory unpredictable
from within). A system can be stochastic and decidable (a fair coin ---
genuinely random, but the distribution is fully characterizable). The
two axes are independent.

The binary question "deterministic or random?" collapses both axes into
one. It forces a subject that varies along two independent dimensions
into a single 2-role slot. This is underspecification. The answer cannot
be represented in the question's format because the question does not
have enough functional positions to capture the subject's structure.

The result is a false dichotomy. People argue endlessly about whether
the universe is "really deterministic" or "really random" because the
question forces a choice between two options that do not exhaust the
space. The answer may be "deterministic on one axis and undecidable on
the other" --- a description that requires more roles than the question
provides.


### Application: The Halting Limit as Overspecification {#application-the-halting-limit-as-overspecification}

"Can we build a computable function that determines, for any arbitrary
program, whether it halts?"

The target is a running program. What it supplies is one functional
role: a process that is either sustaining itself or not. F(x) = x.
Invariance. Arity 1.

The question demands at minimum five functional roles:

1.  **The program** --- the thing being evaluated. The target supplies
    this.
2.  **An external evaluator** --- something distinct from the program,
    outside it, examining it from a position the target does not supply.
    Imported by the question.
3.  **A binary criterion** --- "halts" versus "loops forever." Halting is
    grounded: it is a transition from running to not running. "Loops
    forever" is not grounded: no physical or mental process instantiates
    infinite non-termination. One leg of the criterion is real. The other
    is a non-executable verdict category (Passarelli 2026, _Why Is There
    Something Rather Than Nothing_).
4.  **A finiteness constraint** --- the evaluator must return its verdict
    in finite time. But finiteness is a property of completed processes,
    not of procedures considered in advance. The constraint is circular.
5.  **Universal scope** --- the evaluator must handle all programs,
    including adversarial self-referential constructions engineered to
    exploit the evaluator's own process. The target is one program
    running. Universality is imposed by the question.

The target supplies one role. The question demands five. Four are
fabricated by the question's own structure. The perceived depth of the
"halting problem" is the question's structural complexity, mistaken for
depth in the subject.

The well-formed version of the question is: "Is this program currently
running?" Arity 2 at most. The target supplies both roles. It resolves
trivially. Or: run the program and observe. F(x) = x. The program is
its own halting oracle. The overspecification is the entire source of
the "limit."

The formal validator that catches the specific non-executable input
Turing's proof constructs --- D(D), the adversarial program fed to
itself --- is specified in Passarelli (2026), _The Executability Gate_.
The role-arity diagnostic identifies _why_ the specification fails: it
demands more roles than the target supplies. The executability gate
identifies _where_ the specification fails: the evaluative request
⟨D(D), halting, F⟩ generates a dependency cycle with no grounded exit.


### Application: Gödelian Incompleteness as Overspecification {#application-godelian-incompleteness-as-overspecification}

"Is there a consistent formal system, sufficiently powerful to express
arithmetic, that can prove all true statements about arithmetic?"

The target is a formal system. What it supplies: axioms (input),
inference rules (evaluator), theorems (output). Arity 3.

The question demands that the system evaluate its own completeness from
within itself. This requires the system to simultaneously occupy two
roles: the object being assessed and the assessor. Operator and operand
collapse into one entity --- the same structural move as Turing's D(D).
The completeness criterion further demands that the system contain a
verdict on every sentence in its domain, including sentences constructed
to reference the system's own proving behavior.

The Gödel sentence G --- "this sentence is not provable in S" --- is
the non-executable expression these demands generate. It is constructed
such that its provability verdict routes through itself: proving G
requires determining whether a sentence that denies its own provability
is provable. The provability of G is defined as a function of the
content of G, and the content of G is defined as a function of G's
provability. The specification cycles without ground.

The "incompleteness" is not discovered in the formal system. It is
manufactured by the question's demand that the system evaluate its own
completeness --- a demand that forces self-referential constructions the
system cannot host without generating non-executable input.

The formal analysis --- showing that the evaluative request
⟨G, provability, S⟩ fails V₂ by generating a dependency cycle via
definitional expansion, negation, and the provability predicate --- is
specified in Passarelli (2026), _The Executability Gate_. The
role-arity diagnostic identifies the structural reason: arity collapse
between operator and operand generates specifications that cycle without
ground.


### The Unification: Non-Executable Input as a Single Pattern {#the-unification-non-executable-input-as-a-single-pattern}

Three canonical results across three domains:

| Result                  | Domain      | Role-Arity Diagnosis                                               | Formal Diagnosis (Executability Gate)                                |
|-------------------------|-------------|--------------------------------------------------------------------|----------------------------------------------------------------------|
| Explosion (ECQ)         | Logic       | N/A --- contradictory premises, not an overspecified question      | V₁: substrate-cancellation. {P, ¬P} cancels discriminative substrate |
| Halting limit           | Computation | Overspecified: 5 roles aimed at arity-1 target                     | V₂: anchor-failure. ⟨D(D), halting, F⟩ cycles via Rules 4(a), 4(b)   |
| Gödelian incompleteness | Mathematics | Overspecified: arity collapse forces non-executable self-reference | V₂: anchor-failure. ⟨G, provability, S⟩ cycles via Rules 3, 1, 2     |

These are not three separate results. They are three instances of one
pattern: a formally correct derivation from non-executable input,
producing a result that does not refer to anything, interpreted as a
fundamental limit on the domain in which it was derived.

The role-arity framework provides the diagnostic: when a question's
arity exceeds its target's, or when operator and operand are collapsed
into one entity, the surplus or collapsed roles generate specifications
that cycle without ground. The executability gate (Passarelli 2026)
provides the formal mechanism that catches these specifications before
the engine processes them.

A note on the existing essay's treatment of these results: the arity-3
section above describes the halting problem and Gödel's incompleteness
as cases where "self-reference within the system produces undecidable
propositions." That description is correct within an ungated framework
--- it is what happens when non-executable input reaches an engine with
no executability validator. The stronger claim, developed in _The
Executability Gate_, is that the ungated framework is architecturally
wrong to admit those specifications at all. Undecidability is the
symptom. Non-executable input reaching the engine is the cause.

---


## The Arity Progression Applied to Artificial Life {#the-arity-progression-applied-to-artificial-life}

The cell-to-dwarf design problem maps onto arity thresholds:

| Agent arity | What it does                                                                                                                  | Emergent analog                                             | Design criterion                                                                                           |
|-------------|-------------------------------------------------------------------------------------------------------------------------------|-------------------------------------------------------------|------------------------------------------------------------------------------------------------------------|
| **1**       | Persists. Maintains energy. Re-instantiates each tick.                                                                        | Stable particles. Chemical bonds. Structural elements.      | Energy physics: does this configuration persist under the update rule?                                     |
| **2**       | Exhibits stable differences. Boundary behavior. Differential response to environment --- inside vs. outside, toward vs. away. | Membranes. Chemotaxis. Tropisms. Differential permeability. | Partition rules: structural differences that affect dynamics without explicit rule-application.            |
| **3**       | Evaluates. Models its own state. Predicts outcomes. Modifies behavior based on past evaluation.                               | Decision-making. Communication. Pack behavior. Tool use.    | Feedback loops: the agent's output feeds back into its own input. Self-reference under selection pressure. |

The design question --- "how far from authored behavior can you get
while keeping emergence legible?" --- becomes: at what arity threshold
does the system start producing arity-3 agents from arity-1 and arity-2
rules? That is the phase transition. That is where something happens
that looks like a decision being made by an entity you did not design.

---


## Compact Summary {#compact-summary}

Role-arity is the minimum number of functionally distinct roles required
for an operation. Invariance: 1. Difference: 2. Evaluation: 3.

Contrastive why-questions have high arity (explanandum, foil, criterion,
output, modal space). When aimed at a target whose arity is lower, the
surplus roles are generated by the question, not the subject. The
perceived depth is in the question, not the answer.

"Why something rather than nothing" is overspecified. The only
non-derivative stopping point --- invariance, some structure that
persists under evolution --- has arity 1. The question has arity ≥ 4.
The foil and criterion cannot be grounded at the target level. The
question dissolves not because it is too hard but because it does not
fit.

"Is the universe deterministic or random" is underspecified. The subject
varies along at least two independent axes (generative rule and
epistemic access). The question provides one binary. The answer cannot
be expressed in the question's format.

Well-formed contrastive questions have targets with enough internal
structure to ground the foil and criterion. "Why does water expand when
it freezes?" resolves because the target's molecular structure hosts the
comparison.

Arity mismatch is a sufficient condition for these failure modes, not a
universal test for question well-formedness.

One role: something persists. Two roles: things differ. Three roles: a
system can observe itself.

---


## Formal Adjacencies {#formal-adjacencies}

| Concept                                       | Arity                                                                                                                                        | Reference                         |
|-----------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------|
| Fixed points / invariance                     | 1                                                                                                                                            | Brouwer, 1911; lambda calculus    |
| Spencer-Brown's primary distinction           | 1 → 2 transition (the mark yields a partition --- arity 2; the act of drawing is an operation with criterion/application/result --- arity 3) | Laws of Form, 1969                |
| Shannon information (bit)                     | 2                                                                                                                                            | Information theory, 1948          |
| Bateson: "difference that makes a difference" | 2                                                                                                                                            | Steps to an Ecology of Mind, 1972 |
| Peirce's sign/interpretant/object triad       | 3                                                                                                                                            | Collected Papers, 1931--58        |
| Turing machine (read/process/write)           | 3                                                                                                                                            | Turing, 1936                      |
| Halting limit                                 | Overspecification of arity-1 target; V₂ anchor-failure on D(D)                                                                               | Turing, 1936; Passarelli 2026     |
| Gödelian incompleteness                       | Arity collapse (operator/operand); V₂ anchor-failure on G                                                                                    | Gödel, 1931; Passarelli 2026      |
| Executability gate (V₁+V₂)                    | Pre-formal validation layer; catches substrate-cancellation and anchor-failure                                                               | Passarelli, 2026                  |
| Autopoiesis                                   | 3 (self-producing systems)                                                                                                                   | Maturana &amp; Varela, 1972       |
| Contrastive explanation theory                | Variable                                                                                                                                     | Lipton, 1990; van Fraassen, 1980  |

---


## What's Novel {#whats-novel}

The specific move: treating the arity mismatch between a question's
structure and its target's structure as a diagnostic for when
explanation-seeking is ill-posed. Two symmetric failure modes ---
overspecification (phantom depth from surplus roles) and
underspecification (false dichotomies from insufficient roles). Applied
to dissolve "why something rather than nothing" as structural
overspecification of a contrastive why-question. Applied to diagnose
"deterministic or random" as structural underspecification via axis
collapse. Applied to predict which contrastive questions resolve and
which do not, based on whether the target's internal structure can
ground the foil and criterion.

The paraconsistency observation: that allowing overlap between truth
values inflates beyond arity 2 by introducing an unacknowledged third
functional role (overlap membership / consistency status), making
paraconsistent logic evidence for the arity framework rather than
evidence against it.

The arity thresholds (1: invariance, 2: difference, 3: self-reference)
as a structure for emergence in artificial life systems --- each
threshold marks a qualitative phase transition in what kind of agent
behavior becomes structurally possible.

The unification: the same role-arity framework that dissolves the
metaphysical question also diagnoses the logic, specifies the design
criteria for artificial life, and predicts the failure modes of
philosophical questions generally.

The halting limit and Gödelian incompleteness as overspecification: the
same diagnostic that dissolves "why something rather than nothing"
identifies the halting limit as a five-role question aimed at an
arity-1 target, and incompleteness as an arity collapse that forces
non-executable self-reference. Both are diagnosed by the role-arity
framework and formally caught by the executability gate (Passarelli
2026, _The Executability Gate_), which specifies a typed validator over
evaluative requests that detects dependency cycles without grounded
exits. The three canonical "limits" of logic (explosion), computation
(halting), and mathematics (incompleteness) are shown to be instances of
one pattern: formally correct derivations from non-executable input.
