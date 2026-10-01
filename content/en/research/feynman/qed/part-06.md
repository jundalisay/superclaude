6 RADIATIVE CORRECTIONS TO SCATTERING

We can now complete the discussion of the radiative corrections to
scattering. In the integrals we include the convergence factor C(k2), so that
they converge for large k. Integral (12) is also not convergent because of the
well-known infrared catastrophy. For this reason we calculate (as discussed
in B) the value of the integral assuming the photons to have a small mass
λmin  m  λ. The integral (12) becomes
(e2/πi) ∫ γμ(p2 − k − m)−1a(p1 − k − m)−1
×γμ(k2 − γ2
min)−1d4kC(k2 − λ2
min),
which when integrated (see Appendix B) gives (e2/2π) times
[
2
(
ln m
λmin − 1
) (
1 − 2θ
tan2θ
)
+ θtanθ
+ 4
tan2θ
θ∫
0
α tanαdα
]
a + 1
4m (qa − aq) 2θ
sin 2θ + ra,
(22)
where (q2)1/2 = 2m and we have assumed the matrix to operate between
states of momentum p1 and p2 = p1 + q and have neglected terms of order
λmin/m, m/λ, and q2/λ2. Here the only dependence on the convergence
factor is in the term ra, where
r = ln(λ/m) + 9/4 − 2 ln(m/λmin). (23)
20
As we shall see in a moment, the other terms (13), (14) give contributions
which just cancel the ra term. The remaining terms give for small q,
(e2/4π)
( 1
2m (qa − aq) + 4q2
3m2 a
(
ln m
λmin
− 3
8
))
, (24)
which shows the change in magnetic moment and the Lamb shift as inter-
preted in more detail in B.15
We must now study the remaining terms (13) and (14). The integral on
k in (13) can be performed (after multiplication by C(k2)) since it involves
nothing but the integral (19) for the self-energy and the result is allowed
to operate on the initial state u1, (so that p1u1 = mu1). Hence the factor
following a(p1 − m)−1 will be just ∆m. But, if one now tries to expand
1/(p1 − m) = (p1 + m)/(p2
1 − m2) one obtains an infinite result, since
p2
1 = m2. This is, however, just what is expected physically. For the
quantum can be emitted and absorbed at any time previous to the scattering.
Such a process has the effect of a change in mass of the electron in the state
1. It therefore changes the energy by ∆E and the amplitude to first order
in ∆E by −i∆E · t where t is the time it is acting, which is infinite. That
is, the major effect of this term would be canceled by the effect of change of
mass ∆m.
The situation can be analyzed in the following manner. We suppose that
the electron approaching the scattering potential a has not been free for an
infinite time, but at some time far past suffered a scattering by a potential b.
If we limit our discussion to the effects of ∆m and of the virtual radiation of
one quantum between two such scatterings each of the effects will be finite,
though large, and their difference is determinate. The propagation from b
to a is represented by a matrix
a(p′ − m)−1b, (25)
15That the result given in B in Eq. (19) was in error was repeatedly pointed out to the
author, in private communication, by V. F. Weisskopf and J. B. French, as their calcu-
lation, completed simultaneously with the author’s early in 1948, gave a different result.
French has finally shown that although the expression for the radiationless scattering B,
Eq. (18) or (24) above is correct, it was incorrectly joined into Bethe’s non-relativistic
result. He shows that the relation ln 2kmax − 1 = ln λmin used by the author should have
been ln 2kmax − 5/6 = ln λmin. This results in adding a term −(1/6) to the logarithm in
B, Eq. (19) so that the result now agrees with that of J. B. French and V. F. Weisskopf,
Phys. Rev. 75, 1240 (1949) and N. H. Kroll and W. E. Lamb, Phys. Rev. 75, 388 (1949).
The author feels unhappily responsible for the very considerable delay in the publication
of French’s result occasioned by this error. This footnote is appropriately numbered.
21
in which one is to integrate possibly over p′ (depending on details of the
situation). (If the time is long between b and a, the energy is very nearly
determined so that p′2 is very nearly m2.)
We shall compare the effect on the matrix (25) of the virtual quanta and
of the change of mass ∆m. The effect of a virtual quantum is
(e2/πi)
∫
a(p′ − m)−1γμ(p′ − k − m)−1 × γμ(p′ − m)−1bk−2d4kC(k2), (26)
while that of a change of mass can be written
a(p′ − m)−1∆m(p′ − m)−1b, (27)
and we are interested in the difference (26)-(27). A simple and direct method
of making this comparison is just to evaluate the integral on k in (26) and
subtract from the result the expression (27) where ∆m is given in (21).
The remainder can be expressed as a multiple −r(p′2) of the unperturbed
amplitude (25);
−r(p′2)a(p′ − m)−1b. (28)
This has the same result (to this order) as replacing the potentials a and b in
(25) by (1− 1
2 r(p′2))a and (1− 1
2 r(p′2))b. In the limit, then, as p′2 → m2 the
net effect on the scattering is − 1
2 ra where r, the limit of r(p′2) as p′2 → m2
(assuming the integrals have an infrared cut-off), turns out to be just equal
to that given in (23). An equal term − 1
2 ra arises from virtual transitions
after the scattering (14) so that the entire ra term in (22) is canceled.
The reason that r is just the value of (12) when q2 = 0 can also be seen
without a direct calculation as follows: Let us call p the vector of length m
in the direction of p′ so that if p′2 = m(1 + )2 we have p′ = (1 + 0p and
we take  as very small, being of order T −1 where T is the time between the
scatterings b and a. Since (p′ −m)−1 = (p′ +m)/(p′2 −m2) ≈ (p+m)/2m2,
the quantity (25) is of order −1 or T . We shall compute corrections to it
only to its own order (−1) in the limit  → 0. The term (27) can be written
approximately16 as
(e2/πi)
∫
a(p′ − m)−1γμ(p − k − m)−1 × γμ(p′ − m)−1bk−2d4kC(k2),
16The expression is not exact because the substitution of ∆m by the integral in (19) is
valid only if p operates on a state such that p can be replaced by m. The error, however,
is of order a(p′ − m)−1(p − m)(p′ − m)−1b which is a((1 + )p + m)(p − m) × ((1 + )p +
m)p(2 + 2)−2m−4. But since 2 = m2 we have p(p − m) = −m(p − m) = (p − m)p so
the net result is approximately a(p − m)b/4m2 and is not of order 1/ but smaller, so
that its effect drops out in the limit.
22
using the expression (19) for ∆m. The net of the two effects is therefore
approximately17
−(e2/πi) ∫ a(p′ − m)−1γμ(p − k − m)−1p(p − k − m)−1
×γμ(p′ − m)−1bk−2d4kC(k2),
a term now of order 1/ (since (p′ − m)−1 ≈ (p + m) × (2m2)−1) and
therefore the one desired in the limit. Comparison to (28) gives for r the
expression
(p1 + m/2m) ∫ γμ(p1 − k − m)−1(p1m−1)(p1 − k − m)−1
×γμk−2d4kC(k2).
(29)
The integral can be immediately evaluated, since it is the same as the
integral (12), but with q = 0, for a replaced by p1/m. The result is therefore
r · (p1/m) which when acting on the state u1 is just r, as p1u1 = mu1. For
the same reason the term (p1 + m)/2m in (29) is effectively 1 and we are
left with −r of (23).18
In more complex problems starting with a free electron the same type of
term arises from the effects of a virtual emission and absorption both previ-
ous to the other processes. They, therefore, simply lead to the same factor r
so that the expression (23) may be used directly and these renormalization
integrals need not be computed afresh for each problem.
In this problem of the radiative corrections to scattering the net result
is insensitive to the cut-off. This means, of course, that by a simple rear-
rangement of terms previous to the integration we could have avoided the
use of the convergence factors completely (see for example Lewis19). The
problem was solved in the manner here in order to illustrate how the use of
17We have used, to first order, the general expansion (valid for any operators A, B)
(A + B0−1 = A−1 − A−1BA−1 + A−1BA−1BA−1 − . . .
with A = p − k − m and B = p′ − p = p to expand the difference of (p′ − k − m)−1 and
(p − k − m)−1.

18The renormalization terms appearing B, Eqs. (14), (15) when translated directly into
the present notation do not give twice (29) but give this expression with the central p1m−1
factor replaced by mγ4/E1 where E1 = p1μ, for μ = 4. When integrated it therefore gives
ra((p1 + m)/2m)(mγ4/E1) or ra − ra(mγ4/E1)(p1 − m)/2m. (Since p1γ4 + γ4p1 = 2E1)
which gives just ra, since p1u1 = mu1.
19H.W. Lewis, Phys. Rev. 73, 173 (1948).

such convergence factors, even when they are actually unnecessary, may fa-
cilitate analysis somewhat by removing the effort and ambiguities that may
be involved in trying to rearrange the otherwise divergent terms.
The replacement of δ+ by f+ given in (16), (17) is not determined by the
analogy with the classical problem. In the classical limit only the real part
of δ+ (i.e., just δ) is easy to interpret. But by what should the imaginary
part, 1/(πs2), of δ+ be replaced? The choice we have made here (in den-
ning, as we have, the location of the poles of (17)) is arbitrary and almost
certainly incorrect. If the radiation resistance is calculated for an atom, as
the imaginary part of (8), the result depends slightly on the function f+.
On the other hand the light radiated at very large distances from a source is
independent of f+. The total energy absorbed by distant absorbers will not
check with the energy loss of the source. We are in a situation analogous to
that in the classical theory if the entire f function is made to contain only
retarded contributions (see A, Appendix). One desires instead the analogue
of 〈F 〉ret of A. This problem is being studied.
One can say therefore, that this attempt to find a consistent modification
of quantum electrodynamics is incomplete (see also the question of closed
loops, below). For it could turn out that any correct form of f+ which will
guarantee energy conservation may at the same time not be able to make
the self-energy integral finite. The desire to make the methods of simplifying
the calculation of quantum electrodynamic processes more widely available
has prompted this publication before an analysis of the correct form for f+
is complete. One might try to take the position that, since the energy dis-
crepancies discussed vanish in the limit λ → ∞, the correct physics might
be considered to be that obtained by letting λ → ∞ after mass renormal-
ization. I have no proof of the mathematical consistency of this procedure,
but the presumption is very strong that it is satisfactory. (It is also strong
that a satisfactory form for f+ can be found.)
7 THE PROBLEM OF VACUUM
POLARIZATION
In the analysis of the radiative corrections to scattering one type of
term was not considered. The potential which we can assume to vary as
aμexp(−iq·x) creates a pair of electrons (see Fig. 6), momenta pa, −pb. This
pair then reannihilates, emitting a quantum q = qb − qa, which quantum
scatters the original electron from state 1 to state 2. The matrix element
for this process (and the others which can be obtained by rearranging the
24
order in time of the various events) is
−(e2/πi)(˜u2γμu1) ∫ Sp[(pa + q − m)−1
×γμ(pa − m)−1γμ]d4paq−2C(q2)aν .
(30)
This is because the potential produces the pair with amplitude proportional
to aν γν the electrons of momenta pa, and −(pa + q) proceed from there
to annihilate, producing a quantum (factor γμ) which propagates (factor
q−2C(q2)) over to the other electron, by which it is absorbed (matrix ele-
ment of γμ, between states 1 and 2 of the original electron (˜u2γμu1)). All
momenta pa and spin states of the virtual electron are admitted, which
means the spur and the integral on d4pa are calculated.
One can imagine that the closed loop path of the positron-electron pro-
duces a current
4πJμaν , (31)
which is the source of the quanta which act on the second electron. The
quantity
Jμν = −(e2/πi) ∫ Sp[(p + q − m)−1
×γμ(p − m)−1γμ]d4p,
(32)
is then characteristic for this problem of polarization of the vacuum.
One sees at once that Jμν diverges badly. The modification of δ to f
alters the amplitude with which the current jμ, will affect the scattered
electron, but it can do nothing to prevent the divergence of the integral (32)
and of its effects.
One way to avoid such difficulties is apparent. From one point of view
we are considering all routes by which a given electron can get from one
region of space-time to another, i.e., from the source of electrons to the
apparatus which measures them. From this point of view the closed loop
path leading to (32) is unnatural. It might be assumed that the only paths
of meaning are those which start from the source and work their way in a
continuous path (possibly containing many time reversals) to the detector.
Closed loops would be excluded. We have already found that this may be
done for electrons moving in a fixed potential.
Such a suggestion must meet several questions, however. The closed
loops are a consequence of the usual hole theory in electrodynamics. Among
other things, they are required to keep probability conserved. The proba-
bility that no pair is produced by a potential is not unity and its deviation
from unity arises from the imaginary part of Jμν . Again, with closed loops
25
Figure 6: Vacuum polarization effect on scattering, Eq. (30).
excluded, a pair of electrons once created cannot annihilate one another
again, the scattering of light by light would be zero, etc. Although we are
not experimentally sure of these phenomena, this does seem to indicate that
the closed loops are necessary. To be sure, it is always possible that these
matters of probability conservation, etc., will work themselves out as simply
in the case of interacting particles as for those in a fixed potential. Lack-
ing such a demonstration the presumption is that the difficulties of vacuum
polarization are not so easily circumvented.20
An alternative procedure discussed in B is to assume that the function
K+(2, 1) used above is incorrect and is to be replaced by a modified function
K′
+ having no singularity on the light cone. The effect of this is to provide a
convergence factor C(p2 − m2) for every integral over electron momenta.21
This will multiply the integrand of (32) by C(p2 − m2)C((p + q)2 − m2),
since the integral was originally δ(pa − pb + q)d4pad4pb and both pa and
pb get convergence factors. The integral now converges but the result is
unsatisfactory.22
One expects the current (31) to be conserved, that is qμjμ = 0 or
20It would be very interesting to calculate the Lamb shift accurately enough to be sure
that the 20 megacycles expected from vacuum polarization are actually present.
21This technique also makes self-energy and radiationless scattering integrals finite even
without the modification of δ+ to f+ for the radiation (and the consequent convergence
factor C(k2) for the quanta). See B.
22Added to the terms given below (33) there is a term 1
4 (λ3 −2μ2 + 1
3 q2)δμν for C(k2) =
−λ2(k2 − λ2)−1 , which is not gauge invariant. (In addition the charge renormalization
has −7/6 added to the logarithm.)
26
qμJμν = 0. Also one expects no current if a is a gradient, or aν = qν , times
a constant. This leads to the condition Jμν qν = 0 which is equivalent to
qμJμν = 0 since Jμν is symmetrical. But when the expression (32) is in-
tegrated with such convergence factors it does not satisfy this condition.
By altering the kernel from K to another, K′, which does not satisfy the
Dirac equation we have lost the gauge invariance, its consequent current
conservation and the general consistency of the theory.
One can see this best by calculating Jμν qν directly from (32). The ex-
pression within the spur becomes (p + q − m)−1q(p − m)−1γμ which can be
written as the difference of two terms: (p − m)−1γμ − (p + q − m)−1γμ Each
of these terms would give the same result if the integration d4p were without
a convergence factor, for the first can be converted into the second by a shift
of the origin of p, namely p′ = p + q. This does not result in cancelation
in (32) however, for the convergence factor is altered by the substitution.
A method of making (32) convergent without spoiling the gauge in-
variance has been found by Bethe and by Pauli. The convergence fac-
tor for light can be looked upon as the result of superposition of the ef-
fects of quanta of various masses (some contributing negatively). Like-
wise if we take the factor C(p2 − m2) = −λ2(p2 − m2 − λ2)−1 so that
(p2 − m2)−1C(p2 − m2) = (p2 − m2)−1 − (p2 − m2 − λ2)−1 we are taking
the difference of the result for electrons of mass m and mass (λ2 + m2)1/2.
But we have taken this difference for each propagation between interactions
with photons. They suggest instead that once created with a certain mass
the electron should continue to propagate with this mass through all the
potential interactions until it closes its loop. That is if the quantity (32),
integrated over some finite range of p, is called Jμν (m2) and the correspond-
ing quantity over the same range of p, but with m replaced by (m2 + λ2)1/2
is Jμν (m2 + λ2) we should calculate
JP
μν =
∞∫
0
[Jμν (m2) − Jμν (m2 + λ2)]G(λ)dλ, (32′)
the function G(λ) satisfying ∫ ∞
0 G(λ)dλ = 1 and ∫ ∞
0 G(λ)λ2dλ = 0. Then
in the expression for JP
μν the range of p integration can be extended to
infinity as the integral now converges. The result of the integration using
27
this method is the integral on dλ over G(λ) of (see Appendix C)
JP
μν = − e2
π (qμqν − δμν q2)
(
− 1
3 ln λ2
m2
−
[ 4m2 + 2q2
3q2
(
1 − θ
tanθ
)
− 1
9
])
,
(33)
with q2 = 4m2 sin2 θ.
The gauge invariance is clear, since qμ(qμqν −q2δμν ) = 0. Operating (as it
always will) on a potential of zero divergence the (qμqν − δμν q2)aν , is simply
−q2aμ, the D’Alembertian of the potential, that is, the current producing the
potential. The term − 1
3 (ln(λ2/m2))(qμqν − q2δμν ) therefore gives a current
proportional to the current producing the potential. This would have the
same effect as a change in charge, so that we would have a difference ∆(e2)
between e2 and the experimentally observed charge, e2 + ∆(e2), analogous
to the difference between m and the observed mass. This charge depends
logarithmically on the cut-off, ∆(e2)/e2 = −(2e2/3π) ln(λ/m). After this
renormalization of charge is made, no effects will be sensitive to the cut-off.
After this is done the final term remaining in (33), contains the usual
effects23 of polarization of the vacuum. It is zero for a free light quan-
tum (q2 = 0). For small q2 it behaves as (2/15)q2 (adding − 1
5 to the
logarithm in the Lamb effect). For q2 > (2m)2 it is complex, the imagi-
nary part representing the loss in amplitude required by the fact that the
probability that no quanta are produced by a potential able to produce
pairs ((q2)1/2 > 2m) decreases with time. (To make the necessary analytic
continuation, imagine m to have a small negative imaginary part, so that
(1 − q2/4m2 − 1)1/2 becomes −i(q2/4m2 − 1)1/2 as q2 goes from below to
above 4m2. Then θ = π/2 + iu where sin hu = +(q2/4m2 − 1)1/2, and
−1/tanθ = itanhu = +i(q2 − 4m2)1/2(q2)−1/2).
Closed loops containing a number of quanta or potential interactions
larger than two produce no trouble. Any loop with an odd number of inter-
actions gives zero (I, reference 9). Four or more potential interactions give
integrals which are convergent even without a convergence factor as is well
known. The situation is analogous to that for self-energy. Once the sim-
ple problem of a single closed loop is solved there are no further divergence
difficulties for more complex processes.24
23E. A. Uehling, Phys. Rev. 48, 55 (1935), R. Serber, Phys. Rev. 48, 49 (1935).
24There are loops completely without external interactions. For example, a pair is
created virtually along with a photon. Next they annihilate, absorbing this photon. Such
28
8 LONGITUDINAL WAVES
In the usual form of quantum electrodynamics the longitudinal and
transverse waves are given separate treatment. Alternately the condition
(∂Aμ/∂xμ)Ψ = 0 is carried along as a supplementary condition. In the
present form no such special considerations are necessary for we are dealing
with the solutions of the equation −2Aμ = 4πjμ, with a current jμ, which
is conserved ∂jμ/∂xμ = 0. That means at least 2(∂Aμ/∂xμ) = 0 and in
fact our solution also satisfies ∂Aμ/∂xμ = 0.
To show that this is the case we consider the amplitude for emission
(real or virtual) of a photon and show that the divergence of this amplitude
vanishes. The amplitude for emission for photons polarized in the μ direction
involves matrix elements of γμ. Therefore what we have to show is that the
corresponding matrix elements of qμγμ = q vanish. For example, for a first
order effect we would require the matrix element of q between two states p1
and p2 = p1 +q. But since q = p2 −p1 and (˜u2p1u1) = m(˜u2u1) = (˜u2p2u1)
the matrix element vanishes, which proves the contention in this case. It
also vanishes in more complex situations (essentially because of relation (34),
below) (for example, try putting e2 = q2 in the matrix (15) for the Compton
Effect).
To prove this in general, suppose ai, i = 1 to N are a set of plane wave
disturbing potentials carrying momenta qi, (e.g., some may be emissions or
absorptions of the same or different quanta) and consider a matrix for the
transition from a state of momentum p0 to pN such as aN ΠN −1
t=1 (pi −m)−1ai,
where pi = pi−1 + qi (and in the product, terms with larger i are written to
the left). The most general matrix element is simply a linear combination of
these. Next consider the matrix between states p0 and pN + q in a situation
in which not only are the ai, acting but also another potential a exp(−iq · x)
where a = q. This may act previous to all ai in which case it gives aN Π(pi +
q − m)−1ai(p0 + q − m)−1q which is equivalent to +aN Π(pi + q − m)−1ai
since +(p0 + q − m)−1q is equivalent to (p0 + q − m)−1 × (p0 + q − m) as
p0 is equivalent to m acting on the initial state. Likewise if it acts after all
the potentials it gives q(pN − m)−1aN Π(pi − m)−1ai which is equivalent to
−aN Π(pi − m)−1ai since pN + q − m gives zero on the final state. Or again
loops are disregarded on the grounds that they do not interact with anything and are
thereby completely unobservable. Any indirect effects they may have via the exclusion
principle have already been included.
29
it may act between the potential ak and ak+1 for each k. This gives
N −1∑
k=1
aN ΠN −1
i=k+1(pi + q − m)−1ai(pk + q − m)−1
×q(pk − m)−1ak Πk−1
j=1 (pj − m)−1aj .
However,
(pk + q − m)−1q(pk − m)−1 = (pk − m)−1 − (pk + q − m)−1, (34)
so that the sum breaks into the difference of two sums, the first of which
may be converted to the other by the replacement of k by k − 1. There
remain only the terms from the ends of the range of summation,
+aN
N −1
Π
i=1 (pi − m)−1ai − aN
N −1
Π
i=1 (pi + q − m)−1ai.
These cancel the two terms originally discussed so that the entire effect is
zero. Hence any wave emitted will satisfy ∂Aμ/∂xμ = 0. Likewise lon-
gitudinal waves (that is, waves for which Aμ = ∂φ/∂xμ or a = q cannot
be absorbed and will have no effect, for the matrix elements for emission
and absorption are similar. (We have said little more than that a poten-
tial Aμ = ∂ϕ/∂xμ has no effect on a Dirac electron since a transformation
ψ′ = exp(−iφ)ψ removes it. It is also easy to see in coordinate representa-
tion using integrations by parts.)
This has a useful practical consequence in that in computing probabil-
ities for transition for unpolarized light one can sum the squared matrix
over all four directions rather than just the two special polarization vectors.
Thus suppose the matrix element for some process for light polarized in
direction eμ, is eμMμ. If the light has wave vector qμ, we know from the
argument above that qμMμ = 0. For unpolarized light progressing in the
z direction we would ordinarily calculate M 2
x + M 2
y . But we can as well
sum M 2
x + M 2
y + M 2
z − M 2
t for qμMμ implies Mt = Mz since qt = qz for free
quanta. This shows that unpolarized light is a relativistically invariant con-
cept, and permits some simplification in computing cross sections for such
light.
Incidentally, the virtual quanta interact through terms like γμ . . . γμk−2d4k.
Real processes correspond to poles in the formulae for virtual processes. The
pole occurs when k2 = 0, but it looks at first as though in the sum on all
four values of μ, of γμ . . . γμ we would have four kinds of polarization instead
of two. Now it is clear that only two perpendicular to k are effective.
30
The usual elimination of longitudinal and scalar virtual photons (leading
to an instantaneous Coulomb potential) can of course be performed here too
(although it is not particularly useful). A typical term in a virtual transition
is γμ . . . γμk−2d4k where the . . . represent some intervening matrices. Let us
choose for the values of μ, the time t, the direction of vector part K, of k, and
two perpendicular directions 1, 2. We shall not change the expression for
these two 1, 2 for these are represented by transverse quanta. But we must
find (γt . . . γt) − (γK . . . γK). Now k = k4γt − KγK, where K = (K · K)1/2,
and we have shown above that k replacing the γμ. gives zero.25 Hence KγK
is equivalent to k4γt and
(γt . . . γt) − (γK . . . γK) = ((K2 − k2
4 )/K2)(γt . . . γy),
so that on multiplying by k−2d4k = d4k(k2
4 − K2)−1 the net effect is
−(γt . . . γt)d4k/K2. The γt means just scalar waves, that is, potentials pro-
duced by charge density. The fact that 1/K2 does not contain k4 means that
k4 can be integrated first, resulting in an instantaneous interaction, and the
d3K/K2 is just the momentum representation of the Coulomb potential,
1/r.
25A little more care is required when both γμ’s act on the same particle. Define x =
k4γt + KγK, and consider (k . . . x) + x . . . k). Exactly this term would arise if a system,
acted on by potential x carrying momentum −k, is disturbed by an added potential k
of momentum +k (the reversed sign of the momenta in the intermediate factors in the
second term x . . . k has no effect since we will later integrate over all k). Hence as shown
above the result is zero, hut since (k . . . x) + (x . . . k) = k2
4 (γt . . . γt) − K2(γK . . . γK) we
can still conclude (γK . . . γK) = k2
4 K−2(γt . . . γt).
31
9 KLEIN GORDON EQUATION
The methods may be readily extended to particles of spin zero satisfying
the Klein Gordon equation,26
2ψ − m2ψ = i∂(Aμψ)/∂xμ + iAμ∂ψ/∂xμ − AμAμψ. (35)
The important kernel is now I+(2, 1) denned in (I, Eq. (32)). For a free
particle, the wave function ψ(20 satisfies +2ψ − m2ψ = 0. At a point, 2,
inside a space time region it is given by
ψ(2) =
∫
[ψ(1)∂I+(2, 1)/∂x1μ − (∂ψ/∂x1μ)I+(2, 1)]Nμ(1)d3V1,
(as is readily shown by the usual method of demonstrating Green’s the-
orem) the integral being over an entire 3-surface boundary of the region
(with normal vector Nμ). Only the positive frequency components of ψ con-
tribute from the surface preceding the time corresponding to 2, and only
negative frequencies from the surface future to 2. These can be interpreted
as electrons and positrons in direct analogy to the Dirac case.
The right-hand side of (35) can be considered as a source of new waves
and a series of terms written down to represent matrix elements for processes
of increasing order. There is only one new point here, the term in AμAμ by
which two quanta can act at the same time. As an example, suppose three
quanta or potentials, aμexp(−iqa · x), bμexp(−iqb · x), and cμexp(iqe · x)
are to act in that order on a particle of original momentum p0μ, so that
pa = p0 + qa, and pb = pa + qb; the final momentum being pc = pb + qc.
26The equations discussed in this section were deduced from the formulation of the Klein
Gordon equation given in reference 5, Section 14. The function ψ in this section has only
one component and is not a spinor. An alternative formal method of making the equations
valid for spin zero and also for spin 1 is (presumably) by use of the Kemmer-Duffin matrices
βμ satisfying the commutation relation
βμβν βσ + βσ βν βμ = δμν βσ + δσν βμ.
If we interpret a to mean aμβμ, rather than aμγμ, for any aμ, all of the equations in mo-
mentum space will remain formally identical to those for the spin 1/2; with the exception
of those in which a denominator (p − m)−1 has been rationalized to (p + m)(p2 − m2)−1
since p2 is no longer equal to a number, p · p. But p3 does equal (p · p)p that
(p − m)−1 may now be interpreted as (mp + m2 + p2 − p · p)(p · p − m2)−1. This im-
plies that equations in coordinate space will be valid of the function K+(2, 1) is given as
K+(2, 1) = [(iO2 + m) − m−1(O2 + 2
2)]iI+(2, 1) with O2 = βμ∂/∂x2μ. This is all in virtue
of the fact that the many component wave function ψ (5 components for spin 0, 10 for
spin 1) satisfies (iO − m)ψ = aψ which is formally identical to the Dirac Equation. See
W. Pauli, Rev. Mod. Phys. 13, 203 (1940).
32
The matrix element is the sum of three terms (p2 = pμpμ) (illustrated in
Fig. 7)
(pc · c + pb · c)(p2
b − m2)−1(pb · b + pa · b) × (p2
a − m2)−1(pa · a + p0 · a)
−(pc · c + pb · c)(p2
b − m2)−1(b · a) − (c · b)(p2
a − m2)−1(pa · a + p0 · a).
(36)
The first comes when each potential acts through the perturbation
i∂(Aμψ)/∂xμ + iAμ∂ψ/∂xμ. These gradient operators in momentum space
mean respectively the momentum after and before the potential Aμ oper-
ates. The second term comes from bμ and aμ acting at the same instant
and arises from the AμAμ term in (a). Together bμ and aμ carry momentum
qbμ + qaμ so that after b · a operates the momentum is p0 + qa + qb or pb.
The final term comes from cμ and bμ operating together in a similar manner.
The term AμAμ thus permits a new type of process in which two quanta can
be emitted (or absorbed, or one absorbed, one emitted) at the same time.


There is no a · c term for the order a, b, c we have assumed. In an actual
problem there would be other terms like (36) but with alterations in the
order in which the quanta a, b, c act. In these terms a · c would appear.
As a further example the self-energy of a particle of momentum pμ is
(e2/2πim)
∫
[(2p − k)μ((p − k)2 − m2)−1 × (2p − k)μ − δμμ]d4kk−2C(k2),
where the δμμ comes from the AμAμ term and represents the possibility of
the simultaneous emission and absorption of the same virtual quantum. This
integral without the C(k2) diverges quadratically and would not converge if
C(k2) = −λ2/(k2 − λ2). Since the interaction occurs through the gradients
of the potential, we must use a stronger convergence factor, for example
C(k2) = λ4(k2 − λ2)−2, or in general (17) with ∫ ∞
0 λ2G(λ)dλ = 0. In this

case the self-energy converges but depends quadratically on the cut-off λ
and is not necessarily small compared to m. The radiative corrections to
scattering after mass renormalization are insensitive to the cut-off just as
for the Dirac equation.

When there are several particles one can obtain Bose statistics by the
rule that if two processes lead to the same state but with two electrons ex-
changed, their amplitudes are to be added (rather than subtracted as for
Fermi statistics). In this case equivalence to the second quantization treat-
ment of Pauli and Weisskopf should be demonstrable in a way very much
like that given in I (appendix) for Dirac electrons. The Bose statistics mean
that the sign of contribution of a closed loop to the vacuum polarization is
33
the opposite of what it is for the Fermi case (see I). It is (pb = pa + q)
Jμν = e2
2πim
∫ [(pbμ + paμ)(pbν + paν )(p2
a − m2)−1
×(p2
b − m2)−1 − δμν (p2
a − m2)−1 − δμν (p2
b − m2)−1]d4pa
giving,
JP
μν = e2
π (qμqν − δμν q2)
[ 1
6 ln λ2
m2 + 1
9 − 4m2 − q2
3q2
(
1 − θ
tanθ
)]
,
the notation as in (33). The imaginary part for (q2)1/2 > 2m is again
positive representing the loss in the probability of finding the final state
to be a vacuum, associated with the possibilities of pair production. Fermi
statistics would give a gain in probability (and also a charge renormalization
of opposite sign to that expected).

Figure 7: Klein-Gordon particle in three potentials, Eq, (36). The coupling
to the electromagnetic field is now, for example, p0 · a + pa · a, and a new
possibility arises, (b), of simultaneous interaction with two quanta a · b. The
propagation factor is now (p · p − m2)−1 for a particle of momentum pμ.


