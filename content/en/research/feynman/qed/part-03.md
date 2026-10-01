---
heading: "Part 3"
title: "The Self–Energy Problem"
date: 2026-09-30
weight: 3
a: "Feynman"
c: "darkgoldenrod"
---



Having a term representing the mutual interaction of a pair of charges, we
must include similar terms to represent the interaction of a charge with itself.
For under some circumstances what appears to be two distinct electrons
9Although in the expressions stemming from (4) the quanta are virtual, this is not
actually a theoretical limitation. One way to deduce the correct rules for real quanta from
(4) is to note that in a closed system all quanta can be considered as virtual (i.e., they
have a known source and are eventually absorbed) so that in such a system the present
description is complete and equivalent to the conventional one. In particular, the relation
of the Einstein A and B coefficients can be deduced. A more practical direct deduction
of the expressions for real quanta will be given in the subsequent paper. It might be
noted that (4) can be rewritten as describing the action on a, K(1)(3, 1) = i ∫ K+(3, 5) ×
A(5)K+(5, 1)dτ5 of the potential Aμ(5) = e2 ∫ K+(4, 6)δ+(s2
56)γμ × K+(6, 2)dτ6 arising from Maxwell’s equations −2Aμ = 4πjμ from a “current” jμ(6) = e2K+(4, 6)γμK+(6, 2)
produced by particle b in going from 2 to 4. This is virtue of the fact that δ+ satisfies
−2
2δ+(s2
21) = 4πδ(2, 1). (5)


may, according to I, be viewed also as a single electron (namely in case
one electron was created in a pair with a positron destined to annihilate
the other electron). Thus to the interaction between such electrons must
correspond the possibility of the action of an electron on itself.10
This interaction is the heart of the self energy problem. Consider to
first order in e2 the action of an electron on itself in an otherwise force free
region. The amplitude K(2, 1) for a single particle to get from 1 to 2 differs
from K+(2, 1) to first order in e2 by a term
K(1)(2, 1) = −ie2 ∫ ∫ K+(2, 4)γμK+(4, 3)γμ
×K+(3, 1)dτ3dτ4δ+(s2
43).
(6)

It arises because the electron instead of going from 1 directly to 2, may go (Fig. 2) first to 3, (K+(3, 1)), emit a quantum (γμ), proceed to 4, (K+(4, 3)),
absorb it (γμ), and finally arrive at 2 (K+(2, 4)). The quantum must go from
3 to 4 (δ+(s2
43)).
This is related to the self-energy of a free electron in the following man-
ner. Suppose initially, time t1, we have an electron in state f (1) which we
imagine to be a positive energy solution of Dirac’s equation for a free parti-
cle. After a long time t2 − t1 the perturbation will alter the wave function,
which can then be looked upon as a superposition of free particle solutions
(actually it only contains f ). The amplitude that g(2) is contained is calcu-
lated as in (I, Eq. (21)). The diagonal element (g = f ) is therefore
∫ ∫
˜f (2)βK(1)(2, 1)βf (1)d3x1d3x2. (7)
The time interval T = t2 − t1 (and the spatial volume V over which
one integrates) must be taken very large, for the expressions are only ap-
proximate (analogous to the situation for two interacting charges).11 This
is because, for example, we are dealing incorrectly with quanta emitted just
before t2 which would normally be reabsorbed at times after t2.
If K(1)(2, 1) from (6) is actually substituted into (7) the surface integrals
can be performed as was done in obtaining I, Eq. (22) resulting in
−ie2
∫ ∫
˜f (4)γμK+(4, 3)γμf (3)δ+(s2
43)dτ3dτ4. (8)

10These considerations make it appear unlikely that the contention of J. A. Wheeler and
R. P. Feynman, Rev. Mod. Phys. 17, 157 (1945), that electrons do not act on themselves,
will be a successful concept in quantum electrodynamics.
11This is discussed in reference 5 in which it is pointed out that the concept of a wave
function loses accuracy if there are delayed self-actions.

Figure 2: Interaction of an electron with itself, Eq. (6).
Putting for f (1) the plane wave u exp(−ip · x1) where pμ is the energy (p4)
and momentum of the electron (p2 = m2), and u is a constant 4-index
symbol, (8) becomes
−ie2 ∫ ∫ (˜uγμK+(4, 3)γμu)
×exp(ip · (x4 − x2))δ+(s2
43)dτ3dτ4,
the integrals extending over the volume V and time interval T . Since
K+(4, 3) depends only on the difference of the coordinates of 4 and 3, x43μ,
the integral on 4 gives a result (except near the surfaces of the region) in-
dependent of 3. When integrated on 3, therefore, the result is of order V T .
The effect is proportional to V , for the wave functions have been normal-
ized to unit volume. If normalized to volume V , the result would simply
be proportional to T . This is expected, for if the effect were equivalent to
a change in energy ∆E, the amplitude for arrival in f at t2 is altered by
a factor exp(−i∆E(t2 − t1)), or to first order by the difference −i(∆E)T .
13
Figure 3: Interaction of an electron with itself. Momentum space, Eq. (11).
Hence, we have
∆E = e2
∫
(˜uγμK+(4, 3)γμu)exp(ip · x43)δ+(s2
43)dτ4, (9)
integrated over all space-time dτ4. This expression will be simplified
presently. In interpreting (9) we have tacitly assumed that the wave func-
tions are normalized so that (u∗u = (˜uγ4u) = 1. The equation may there-
fore be made independent of the normalization by writing the left side as
(∆E)(˜uγ4)u), or since (˜uγ4u) = (E/m)(˜uu) and m∆m = E∆E, as ∆m(˜uu)
where ∆m is an equivalent change in mass of the electron. In this form
invariance is obvious.
One can likewise obtain an expression for the energy shift for an electron
in a hydrogen atom. Simply replace K+ in (8), by K(V )
+ , the exact kernel
for an electron in the potential, V = βe2/r, of the atom, and f by a wave
function (of space and time) for an atomic state. In general the ∆E which
results is not real. The imaginary part is negative and in exp(−i∆ET )
produces an exponentially decreasing amplitude with time. This is because
we are asking for the amplitude that an atom initially with no photon in the
field, will still appear after time T with no photon. If the atom is in a state
which can radiate, this amplitude must decay with time. The imaginary
part of ∆E when calculated does indeed give the correct rate of radiation
from atomic states. It is zero for the ground state and for a free electron.
In the non-relativistic region the expression for ∆E can be worked out
as has been done by Bethe.12 In the relativistic region (points 4 and 3 as
12H. A. Bethe, Phys. Rev. 72, 339 (1947).
14
close together as a Compton wave-length) the K(V )
+ which should appear
in (8) can be replaced to first order in V by K+ plus K(1)
+ (2, 1) given in I,
Eq. (13). The problem is then very similar to the radiationless scattering
problem discussed below.


