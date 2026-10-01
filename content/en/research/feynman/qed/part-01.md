---
heading: "Abstract"
title: "COMPARISON WITH THE HAMILTONIAN METHOD"
date: 2026-09-30
weight: 3
a: "Feynman"
c: "darkgoldenrod"
---


Electrodynamics can be looked upon in two equivalent and complemen-
tary ways. One is as the description of the behavior of a field (Maxwell’s
equations). The other is as a description of a direct interaction at a dis-
tance (albeit delayed in time) between charges (the solutions of Lienard and
Wiechert). From the latter point of view light is considered as an interaction
of the charges in the source with those in the absorber. This is an imprac-
tical point of view because many kinds of sources produce the same kind
of effects. The field point of view separates these aspects into two simpler
problems, production of light, and absorption of light. On the other hand,
the field point of view is less practical when dealing with close collisions of
particles (or their action on themselves). For here the source and absorber
are not readily distinguishable, there is an intimate exchange of quanta.
The fields are so closely determined by the motions of the particles that it is
just as well not to separate the question into two problems but to consider
the process as a direct interaction. Roughly, the field point of view is most
practical for problems involving real quanta, while the interaction view is
best for the discussion of the virtual quanta involved. We shall emphasize
the interaction viewpoint in this paper, first because it is less familiar and
therefore requires more discussion, and second because the important aspect in the problems with which we shall deal is the effect of virtual quanta.

The Hamiltonian method is not well adapted to represent the direct
action at a distance between charges because that action is delayed. The
Hamiltonian method represents the future as developing out of the present.

If the values of a complete set of quantities are known now, their values can
be computed at the next instant in time. If particles interact through a de-
layed interaction, however, one cannot predict the future by simply knowing
the present motion of the particles. One would also have to know what the
motions of the particles were in the past in view of the interaction this may
have on the future motions. This is done in the Hamiltonian electrodynam-
ics, of course, by requiring that one specify besides the present motion of the
particles, the values of a host of new variables (the coordinates of the field
oscillators) to keep track of that aspect of the past motions of the particles
which determines their future behavior. The use of the Hamiltonian forces
one to choose the field viewpoint rather than the interaction viewpoint.

In many problems, for example, the close collisions of particles, we are
not interested in the precise temporal sequence of events. It is not of interest
to be able to say how the situation would look at each instant of time during a
collision and how it progresses from instant to instant. Such ideas are only
useful for events taking a long time and for which we can readily obtain
information during the intervening period. For collisions it is much easier
to treat the process as a whole.7 The M∅ller interaction matrix for the
the collision of two electrons is not essentially more complicated than the
nonrelativistic Rutherford formula, yet the mathematical machinery used to
obtain the former from quantum electrodynamics is vastly more complicated
than Schr¨odinger’s equation with the e2/r12 interaction needed to obtain the
latter. The difference is only that in the latter the action is instantaneous
so that the Hamiltonian method requires no extra variables, while in the
former relativistic case it is delayed and the Hamiltonian method is very
cumbersome.

We shall be discussing the solutions of equations rather than the time
differential equations from which they come. We shall discover that the so-
lutions, because of the over-all space-time view that they permit, are as easy
to understand when interactions are delayed as when they are instantaneous.
As a further point, relativistic invariance will be self-evident. The Hamil-
tonian form of the equations develops the future from the instantaneous
present. But for different observers in relative motion the instantaneous
present is different, and corresponds to a different 3-dimensional cut of space-time. 


<!-- 7This is the viewpoint of the theory of the S matrix of Heisenberg. -->


Thus the temporal analyses of different observers is different and their
Hamiltonian equations are developing the process in different ways. These
differences are irrelevant, however, for the solution is the same in any space
time frame. By forsaking the Hamiltonian method, the wedding of relativity
and quantum mechanics can be accomplished most naturally.
We illustrate these points in. the next section by studying the solution
of Schr¨odinger’s equation for non-relativistic particles interacting by an in-
stantaneous Coulomb potential (Eq. 2). When the solution is modified to
include the effects of delay in the interaction and the relativistic properties
of the electrons we obtain an expression of the laws of quantum electrody-
namics (Eq. 4).

2 THE INTERACTION BETWEEN CHARGES

We study by the same methods as in I, the interaction of two particles
using the same notation as I. We start by considering the non-relativistic
case described by the Schr¨dinger equation (I, Eq. 1). The wave function at
a given time is a function ψ(xa, xb, t) of the coordinates xa and xb of each
particle. Thus call K(xa, xb, t; x′a, x′b, t′) the amplitude that particle a at
x′a at time t′ will get to xa at t while particle b at x′b at t′ gets to xb at t.

If the particles are free and do not interact this is
K(xa, xb, t; x′
a, x′
b, t′) = K0a(xa, t; x′
a, t′)K0b(xb, t; x′
b, t′)
where K0a is the K0 function for particle a considered as free. In this case
we can obviously define a quantity like K, but for which the time t need not
be the same for particles a and b (likewise for t′); e.g.,
K0(3, 4; 1, 2) = K0a(3, 1)K0b(4, 2) (1)

can be thought of as the amplitude that particle a goes from x1 at t1 to x3
at t3 and that particle b goes from x2 at t2 to x4 at t4.

When the particles do interact, one can only define the quantity
K(3, 4; 1, 2) precisely if the interaction vanishes between t1 and t2 and also
between t3 and t4. In a real physical system such is not the case. There is
such an enormous advantage, however, to the concept that we shall continue
to use it, imagining that we can neglect the effect of interactions between t1
and t2 and between t3 and t4. For practical problems this means choosing
such long time intervals t3 − t1 and t4 − t2 that the extra interactions near
the end points have small relative effects. 

As an example, in a scattering problem it may well be that the particles are so well separated initially and
finally that the interaction at these times is negligible. Again energy values
can be defined by the average rate of change of phase over such long time
intervals that errors initially and finally can be neglected. Inasmuch as any
physical problem can be defined in terms of scattering processes we do not
lose much in a general theoretical sense by this approximation. If it is not
Figure 1: The fundamental interaction Eq. (4). Exchange of one quantum
between two electrons.

made it is not easy to study interacting particles relativistically, for there is
nothing significant in choosing t1 = t3 if x1 6 = x3 as absolute simultaneity of
events at a distance cannot be defined invariantly. It is essentially to avoid
this approximation that the complicated structure of the older quantum
electrodynamics has been built up. We wish to describe electrodynamics as
a delayed interaction between particles. If we can make the approximation
of assuming a meaning to K(3, 4; 1, 2) the results of this interaction can be
expressed very simply.

To see how this may be done, imagine first that the interaction is simply
that given by a Coulomb potential e2/r where r is the distance between the
particles. If this be turned on only for a very short time ∆t0 at time t0 the
first order correction to K(3, 4; 1, 2) can be worked out exactly as was Eq.
(9) of I by an obvious generalization to two particles:
K(1)(3, 4; 1, 2) = −ie2 ∫ ∫ K0a(3, 5)K0b(4, 6)r−1
56
×K0a(5, 1)K0b(6, 2)d3x5d3x6∆t0,
8
where t5 = t6 = t0. If now the potential were on at all times (so that strictly
K is not defined unless t4 = t3 and t1 = t2), the first-order effect is obtained
by integrating on t0, which we can write as an integral over both t5 and t6
if we include a delta-function δ(t5 − t6) to insure contribution only when
t5 = t6 Hence, the first-order effect of interaction is (calling t5 − t6 = t56):
K(1)(3, 4; 1, 2) = −ie2 ∫ ∫ K0a(3, 5)K0b(4, 6)r−1
56
×δ(t56)K0a(5, 1)K0b(6, 2)dτ5dτ6,
(2)
where dτ = d3xdt.

We know, however, in classical electrodynamics, that the Coulomb po-
tential does not act instantaneously, but is delayed by a time r56, taking the
speed of light as unity. This suggests simply replacing r−1
56 δ(t56) in (2) by
something like r−1
56 δ(t56 − r56) to represent the delay in the effect of b on a.
This turns out to be not quite right,8 for when this interaction is repre-
sented by photons they must be of only positive energy, while the Fourier
transform of δ(t56 −r56) contains frequencies of both signs. It should instead
be replaced by δ+(t56 − r56) where
δ+(x) =
∞∫
0
e−iωxdω/π = lim
→0
(πi)−1
x − i = δ(x) + (πix)−1. (3)
This is to be averaged with r−1
56 δ+(−t56 − r56) which arises when t5 < t6
and corresponds to a emitting the quantum which b receives. Since
(2r)−1(δ+(t − r) + δ+(−t − r)) = δ+(t2 − r2),
this means r−1
56 δ(t56) is replaced by δ+(s2
56) where s2
56 = t2
56 −r2
56 is the square
of the relativistically invariant interval between points 5 and 6. Since in clas-
sical electrodynamics there is also an interaction through the vector poten-
tial, the complete interaction (see A, Eq. (I)) should be (1 − (v5 · v6)δ+(s2
56),
or in the relativistic case,
(1 − αa · αb)δ+(s2
56) = βaβbγaμγbμδ+(s2
56).
8It and a like term for the effect of a on b, leads to a theory which, in the classical limit,
exhibits interaction through half-advanced and half-retarded potentials. Classically, this
is equivalent to purely retarded effects within a closed box from which no light escapes
(e.g., see A, or J. A. Wheeler and R. P. Feynman, Rev. Mod. Phys. 17, 157 (1945)).
Analogous theorems exist in quantum mechanics but it would lead us too far astray to
discuss them now.


Hence we have for electrons obeying the Dirac equation,
K(1)(3, 4; 1, 2) = ie2 ∫ ∫ K+a(3, 5)K+b(4, 6)γaμγbμ
×δ+(s2
56)K+a(5, 1)K+b(6, 2)dτ5dτ6,
(4)
where γaμ and γbμ, are the Dirac matrices applying to the spinor correspond-
ing to particles a and b, respectively (the factor βaβb being absorbed in the
definition, I Eq. (17), of K+).
This is our fundamental equation for electrodynamics. It describes the
effect of exchange of one quantum (therefore first order in e2) between two
electrons. It will serve as a prototype enabling us to write down the corre-
sponding quantities involving the exchange of two or more quanta between
two electrons or the interaction of an electron with itself. It is a consequence
of conventional electrodynamics. Relativistic invariance is clear. Since one
sums over μ it contains the effects of both longitudinal and transverse waves
in a relativistically symmetrical way.
We shall now interpret Eq. (4) in a manner which will permit us to
write down the higher order terms. It can be understood (see Fig. 1) as
saying that the amplitude for “a” to go from 1 to 3 and “b” to go from 2 to
4 is altered to first order because they can exchange a quantum. Thus, “a”
can go to 5 (amplitude (K+(5, 1)) emit a quantum (longitudinal, transverse,
or scalar γaμ) and then proceed to 3 (K+(3, 5)). Meantime “b” goes to 6
(K+(6, 2)), absorbs the quantum (γbμ) and proceeds to 4 (K+(4, 6)). The
quantum meanwhile proceeds from 5 to 6, which it does with amplitude
δ+(s256). We must sum over all the possible quantum polarizations it and
positions and times of emission 5, and of absorption 6. Actually if t5 > t6
it would be better to say that “a” absorbs and “b” emits but no attention
need be paid to these matters, as all such alternatives are automatically
contained in (4).
The correct terms of higher order in e2 or involving larger numbers of
electrons (interacting with themselves or in pairs) can be written down by
the same kind of reasoning. They will be illustrated by examples as we
proceed. In a succeeding paper they will all be deduced from conventional
quantum electrodynamics.

Calculation, from (4), of the transition element between positive energy
free electron states gives the M∅ller scattering of two electrons, when ac-
count is taken of the Pauli principle.
The exclusion principle for interacting charges is handled in exactly the
same way as for noninteracting charges (I). For example, for two charges
it requires only that one calculate K(3, 4; 1, 2) − K(4, 3; 1, 2) to get the net
10
amplitude for arrival of charges at 3 and 4. It is disregarded in intermedi-
ate states. The interference effects for scattering of electrons by positrons
discussed by Bhabha will be seen to result directly in this formulation. The
formulas are interpreted to apply to positrons in the manner discussed in I.
As our primary concern will be for processes in which the quanta are
virtual we shall not include here the detailed analysis of processes involving
real quanta in initial or final state, and shall content ourselves by only stating
the rules applying to them.9 The result of the analysis is, as expected, that
they can be included by the same line of reasoning as is used in discussing
the virtual processes, provided the quantities are normalized in the usual
manner to represent single quanta. For example, the amplitude that an
electron in going from 1 to 2 absorbs a quantum whose vector potential,
suitably normalized, is cμexp(−ik · x) = Cμ(x) is just the expression (I,
Eq. (13)) for scattering in a potential with A (3) replaced by C (3). Each
quantum interacts only once (either in emission or in absorption), terms like
(I, Eq. (14)) occur only when there is more than one quantum involved. The
Bose statistics of the quanta can, in all cases, be disregarded in intermediate
states. The only effect of the statistics is to change the weight of initial or
final states. If there are among quanta, in the initial state, some a which are
identical then the weight of the state is (1/n!) of what it would be if these
quanta were considered as different (similarly for the final state).

