4 EXPRESSION IN MOMENTUM AND ENERGY SPACE

The evaluation of (9), as well as all the other more complicated expres-
sions arising in these problems, is very much simplified by working in the
momentum and energy variables, rather than space and time. For this we
shall need the Fourier Transform of δ+(s2
21) which is
−δ+(s2
21) = π−1
∫
exp(−ik · x21)k−2d4k, (10)
which can be obtained from (3) and (5) or from I, Eq. (32) noting that
I+(2, 1) for m2 = 0 is δ+(s2
21) from I, Eq. (34). The k−2 means (k · k)−1
Figure 4: Radiative correction to scattering, momentum space.
or more precisely the limit as δ → 0 of (k · k + iδ)−1. Further d4k means
(2π)−2dk1dk2dk3dk4. If we imagine that quanta are particles of zero mass,
then we can make the general rule that all poles are to be resolved by
considering the masses of the particles and quanta to have infinitesimal
negative imaginary parts.
Using these results we see that the self-energy (9) is the matrix element
between u and u of the matrix
(e2/πi)
∫
γμ(p − k − m)−1γμk−2d4k, (11)
15
where we have used the expression (I, Eq. (31)) for the Fourier transform
of K+. This form for the self-energy is easier to work with than is (9).
The equation can be understood by imagining (Fig. 3) that the electron
of momentum p emits (γμ) a quantum of momentum k, and makes its way
now with momentum p − k to the next event (factor (p − k − m)−1) which
is to absorb the quantum (another γμ). The amplitude of propagation of
quanta is k−2. (There is a factor e2/πi for each virtual quantum). One inte-
grates over all quanta. The reason an electron of momentum p propagates
as 1/(p − m) is that this operator is the reciprocal of the Dirac equation
operator, and we are simply solving this equation. Likewise light goes as
1/k2, for this is the reciprocal D’Alembertian operator of the wave equation
of light. The first γμ, represents the current which generates the vector po-
tential, while the second is the velocity operator by which this potential is
multiplied in the Dirac equation when an external field acts on an electron.
Using the same line of reasoning, other problems may be set up directly
in momentum space. For example, consider the scattering in a potential
A = Aμγμ varying in space and time as a exp(−iq · x). An electron initially
in state of momentum p1 = p1μγμ will be deflected to state p2 where p2 =
p1 + q. The zero-order answer is simply the matrix element of a between
states 1 and 2. We next ask for the first order (in e2) radiative correction
due to virtual radiation of one quantum. There are several ways this can
happen. First for the case illustrated in Fig. 4(a), find the matrix:
Figure 5: Compton scattering, Eq. (15).
(e2/πi)
∫
γμ(p2 − k − m)−1a(p1 − k − m)−1γμk−2d4k. (12)
16
For in this case, first13 a quantum of momentum k is emitted (γμ), the
electron then having momentum p1 − k and hence propagating with factor
(p1 − k − m)−1. Next it is scattered by the potential (matrix a) receiv-
ing additional momentum q, propagating on then (factor (p2 − k − m)−1)
with the new momentum until the quantum is reabsorbed (γμ). The quan-
tum propagates from emission to absorption (k−2) and we integrate over all
quanta (d4k), and sum on polarization μ. When this is integrated on k4,
the result can be shown to be exactly equal to the expressions (16) and (17)
given in B for the same process, the various terms coming from residues of
the poles of the integrand (12).
Or again if the quantum is both emitted and reabsorbed before the
scattering takes place one finds (Fig. 4(b))
(e2/πi)
∫
a(p1 − m)−1γμ(p1 − k − m)−1γμk−2d4k, (13)
or if both emission and absorption occur after the scattering, (Fig. 4(c))
(e2/πi)
∫
γμ(p2 − k − m)−1γμ(p2 − m)−1ak−2d4k. (14)
These terms are discussed in detail below.
We have now achieved our simplification of the form of writing matrix
elements arising from virtual processes. Processes in which a number of real
quanta is given initially and finally offer no problem (assuming correct nor-
malization). For example, consider the Compton effect (Fig. 5(a)) in which
an electron in state p1 absorbs a quantum of momentum q1, polarization
vector e1μ so that its interaction is e1μγμ = e1, and emits a second quantum
of momentum −q2 polarization e2 to arrive in final state of momentum p2.
The matrix for this process is e2(p1 + q1 − m)−1e1. The total matrix for
the Compton effect is, then,
e2(p1 + q1 − m)−1e1 + e1(p1 + q2 − m)−1e3, (15)
the second term arising because the emission of e2, may also precede the ab-
sorption of e1 (Fig. 5(b)). One takes matrix elements of this between initial
and final electron states (p1 + q1 = p2 − q2), to obtain the Klein Nishina
formula. Pair annihilation with emission of two quanta, etc., are given by
the same matrix, positron states being those with negative time component
of p. Whether quanta are absorbed or emitted depends on whether the time
component of q is positive or negative.
13First, next, etc., here refer not to the order in true time but to the succession of events
along the trajectory of the electron. That is, more precisely, to the order of appearance
of the matrices in the expressions.
17
5 THE CONVERGENCE OF PROCESSES WITH
VIRTUAL QUANTA
These expressions are, as has been indicated, no more than a re-expression
of conventional quantum electrodynamics. As a consequence, many of them
are meaningless. For example, the self-energy expression (9) or (11) gives
an infinite result when evaluated. The infinity arises, apparently, from the
coincidence of the δ–function singularities in K+(4, 3) and δ+(s2
43). Only
at this point is it necessary to make a real departure from conventional
electrodynamics, a departure other than simply rewriting expressions in a
simpler form.
We desire to make a modification of quantum electrodynamics analogous
to the modification of classical electrodynamics described in a previous arti-
cle, A. There the δ(s2
12) appearing in the action of interaction was replaced
by f (s2
12) where f (x) is a function of small width and great height.
The obvious corresponding modification in the quantum theory is to
replace the δ+(s2) appearing the quantum mechanical interaction by a new
function f=(s2). We can postulate that if the Fourier transform of the
classical f (s2
12) is the integral over ail k of F (k2)exp(−ik · x12)d4k, then the
Fourier transform of f+(s2) is the same integral taken over only positive
frequencies k4 for t2 > t1 and over only negative ones for t2 < t1 in analogy
to the relation of δ+(s2) to δ(s2). The function f (s2) = f (x · x) can be
written 14 as
f (x · x) = (2π)−2 ∞∫
k4=0
∫ sin(k4|x4|)
× cos(K · x)dk4d3Kg(k · k),
where g(k · k) is k−1
4 times the density of oscillators and may be expressed
for positive k4 as (A, Eq. (16))
g(k2) =
∞∫
0
(δ(k2) − δ(k2 − λ2))G(λ)dλ,
where
∞∫
0
G(λ)dλ = 1 and G involves values of λ large compared to m. This
simply means that the amplitude for propagation of quanta of momentum
14This relation is given incorrectly in A, equation just preceding 16.
18
k is
−F+(k3) = π−1
∫ ∞
0
(k−2 − (k2 − λ2)−1)G(λ)dλ,
rather than k−2. That is, writing F+(k2) = −π−1k−2C(k2),
−f+(s2
12) = π−1
∫
exp(−ik · x12)k−2C(k2)d4k. (16)
Every integral over an intermediate quantum which previously involved a
factor d4k/k2 is now supplied with a convergence factor C(k2) where
C(k2) =
∫ ∞
0
−λ2(k2 − λ2)−1G(λ)dλ. (17)
The poles are defined by replacing k2 by k2 + iδ in the limit δ → 0. That is
λ2 may be assumed to have an infinitesimal negative imaginary part.
The function f+(s2
12) may still have a discontinuity in value on the light
cone. This is of no influence for the Dirac electron. For a particle satisfying
the Klein Gordon equation, however, the interaction involves gradients of
the potential which reinstates the δ function if f has discontinuities. The
condition that f is to have no discontinuity in value on the light cone implies
k2C(k2) approaches zero as k2 approaches infinity. In terms of G(λ) the
condition is ∞∫
0
λ2G(λ)dλ = 0. (18)
This condition will also be used in discussing the convergence of vacuum
polarization integrals.
The expression for the self-energy matrix is now
(e2/πi)
∫
γμ(p − k − m)−1γμk−2d4kC(k2), (19)
which, since C(k2) falls off at least as rapidly as 1/k2, converges. For prac-
tical purposes we shall suppose hereafter that C(k2) is simply −λ2/(k2 −λ2)
implying that some average (with weight G(λ)dλ) over values of λ may be
taken afterwards. Since in all processes the quantum momentum will be
contained in at least one extra factor of the form (p − k − m)−1 represent-
ing propagation of an electron while that quantum is in the field, we can
expect all such integrals with their convergence factors to converge and that
the result of ail such processes will now be finite and definite (excepting the
19
processes with closed loops, discussed below, in which the diverging integrals
are over the momenta of the electrons rather than the quanta).
The integral of (19) with C(k2) = −λ2(k2 − λ2)−1 noting that p2 = m2,
λ  m and dropping terms of order m/λ is (see Appendix A)
(e2/2π)[4m(ln(λ/m) + 1
2 ) − p(ln(λ/m) + 5/4)]. (20)
When applied to a state of an electron of momentum p satisfying pu = mu,
it gives for the change in mass (as in B, Eq. (9))
∆m = m(e2/2π)(3 ln(λ/m) + 3
4 ). (21)


