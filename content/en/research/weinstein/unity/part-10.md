---
heading: "Part 10"
title: "Deformation Complex"
description: ""
c: "darkgoldenrod"
weight: 46
date: 2025-05-30
---


The expected way to have our field equations arise naturally as the obstruction to a cohomology theory, is to first ask about the moduli space of solutions to
the equations. That is, if ω

represents a solution to the equations of motion
with Υω∗ = 0, in what are essentially different directions, may we perturb ω

to obtain new solutions? To that end we begin first with the purely Bosonic fields on Y and linearize our Tedhe action of the gauge group H on the group
G = H n N via the τ0 homomorphism by linearizing both the groups and the exponential map of the action:

<!-- δ
ω
1
z}|{
δ
ω
2
z}|{
Ω
1
(ad) −→ Ω
d−1
(ad) −→ 0
% ⊕ %
0 −→ Ω
0
(ad)
| {z } -->

Symmetries:

<!-- TeH
−→ Ω
0
(ad)
| {z }
Fields:
TωG
| {z }
Equations:
T
∗
ωGd−1
(10.1)
—— -->

In a certain sense, one can view the usual (twisted) DeRahm complex as the square root of the of the curvature as dA ◦ dAφ = [FA ∧ φ]. The same is true for the Υ-Spinor-Tensor so we may ask if there is a complex with a co-chain operator such that:

<!-- √
Υω = δ
ω
(10.2)
where the individual operators are configured so that:
δ
ω
1
: Ω0
(ad) −→
Ω
1
(ad)
⊕
Ω
0
(ad)
δ
ω
2
:
Ω
1
(ad)
⊕
Ω
0
(ad)
−→ Ω
d−1
(ad) (10.3) -->


and in fact this will give our assemblage11 the structure of a (Bosonic) deformation complex. 11Many years ago, while thinking about this, the author passed through Iceland and was amused to find that a ‘Thing’ in Icelandic was a ‘Governing Assembly’ and as such took to referring to this governing assemblage for deformations as a Thing with operators Things 1 and 2.

To expand the concept from purely integral spin fields to include those of fractional spin, we are led to linearize equations of the form:

<!-- χ =

ζ
ν

(10.4)
δ
ω
2 ◦ δ
ω
1 = Υω =

D/ ωχ
}· ωFAω + ∗kTω + σ(}· ω, Ψ, Ψ) ¯

= 0 (10.5) -->

The first step then for us is to examine what we mean by ‘essentially different directions’ of perturbation as regards the symmetry built into the problem. As we have endeavored to keep our metric theory gauge theoretic, let us first try to remove the uninteresting redundancy that is merely due to the gauge symmetry of the H action.

The effect of an infinitesimal gauge transformation γ ∈ TeH on a point

<!-- g = (ε, $) ∈ G = PH is given by:
d
ds g · τA0
(exp(sγ)) = d
ds (ε, $) · τA0
(exp(sγ)) (10.6)
=
d
ds ((ε, $) · (exp(sγ), exp(sγ)
−1
dA0
exp(sγ)))
= (DLεγ, dA0 γ − [γ, $]) = (DLεγ, dA$ γ)
so that we have:
δ
ω
1 =


δ
ω
1,a
⊕
δ
ω
1,b

 =


dAω
⊕
DLεω

 (10.7) -->

As for the second operator, we can search for it in the linearization of the
equations of motion. To this end we posit:

<!-- δ
ω
2 =

δ
ω
2,a ⊕ δ
ω
2,b 
(10.8)
δ
ω
2,a = }· ω ◦ dAω
(·) + κ1 ∗ (·) (10.9)
δ
ω
2,b = FAω ∧ }·(·) − κ1 ∗ dBω
(·) -->

Putting this Bosonic piece together with the Spinor deformations gives a dia4
gram that looks something like:

<!-- Ω
1


/S
⊕
ad


( ∗d
∗
A ζ
∗c )

∗

0 ¯ν
ν¯ 0

)
}· ε
 dAω
ζ¯
ζ d ¯ Aω

/Ω
d−1


/S
⊕
ad


⊕ ⊕
Ω
0
(ad)

ζ
dAω

@
BB

ν
Adε

/Ω
0


/S
⊕
ad



− ∗ dAω
0
∗ζ¯ − ∗ ε−1d0

>A
( ∗κ2 0 )
/Ω
d
(/S)
(10.10) -->

[Note: This diagram is carried over from an older version and may contain some inconsistancies until it is stabilized. Caveat Emptor.]

