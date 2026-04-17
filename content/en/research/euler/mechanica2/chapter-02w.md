---
heading: Chapter 2w
title: "Proposition 36"
date: 2025-03-20
weight: 76
description: ""
author: "Euler"
c: "firebrick"
---


## PROPOSITION 36. Problem.

328. With a uniform force g acting downwards everywhere, to find all the curves AMC (Fig. 41), upon which a body descends from rest at A in a given time to a straight line BC inclined at any angle to the horizontal.

### Solution

The applied line BD of the curve AND
expresses the time, in which the body from A
reaches the line straight BC, and from any
point M the straight line MQ is drawn parallel
to the given line BC, on cutting the vertical AB
at Q, and QN expresses the time in which the
body has traversed the part AM . 

Whereby, if an infinitude of curves AND are considered,
which all have the same applied line BD at B,
all these generate curves AMC, upon which the
body in the given time arrives at BC from A.
Moreover the curves AND, as advised above,
must concur at A with the vertical AB and as far
as D must diverge from AB. Now putting the tangent of the angle ABC = k, and putting .. AP = x, PM = y, AQ = u, QN = t and AB = a; then PQ = k and thus x + k = u . 

Moreover since the speed at M must correspond to the height gx, the time to traverse AM ... which has to be equal to QN = t ; therefore we have exactly ... and gxdt 2 = dx 2 + dy 2 . But on account of the given curve AND, t is ... given in terms of u, and since u is given by u = x + k , t is given by x and y ; on account of which the equation is obtained between x and y for the curve sought AMC. Or since
we have y = ku − kx , then the equation becomes :

... gxdt 2 = ( k 2 + 1 )dx 2 − 2k 2dudx + k 2du 2
and ... it is allowed to find x in terms of u . In order to do this, let dt = pdu , [i.e. p is
the gradient of the AND curve with the abscissa u vertical] then
gxp 2du 2 = ( k 2 + 1 )dx 2 − 2k 2dudx + k 2du 2
and dx = k 2 du ± (( g ( k 2 +1 ) p 2 x − k 2 )du 2 )
.
k 2 +1
Therefore the curve AND must be taken everywhere such that [the gradient] p is greater
k
than
. Moreover that equation must be integrated thus, so that on making u =
2
gx( k +1 )
0 it becomes x = 0. With which done, the equation between x and y for the curve sought
can be obtained. Q.E.I

### Corollary 1

329. The curve AMC is a tangent to the straight line AB at A, if dy = 0 on putting x = 0;
now it must then be the case that du = dx and 1 = ( g ( k 2 + 1 ) p 2 x − k 2 ) . 

Whereby this comes about, if on making ppx = 1g on making x = 0. Moreover since in this case y is
infinitely smaller than x, in the beginning x = u; from which it follows that the curve
AMC is a tangent to the vertical AB at A, if ppu = 1g with u = 0. 

[Note that this degenerates to the equation dx = gdt 2 in the neighbourhood of A, on setting du = dx,
recognisable as an equation of motion; the customery 12 is missing as usual, as all such
expressions involving free fall are compared against each other by Euler, rather than dealt
with in an absolute manner, which could not be done at the time, due to the lack of an
adequate set of units. The reader has no doubt observed that two curves are always used
in these demonstrations : AND is the vertical displacement x versus time t, while AMD is
the vertical displacement x versus horizontal displacement y. ]


### Corollary 2

330. Then the normal to the curve AMC is along QM, if PQ = k = dx or ... dx = kdy = k 2du − k 2dx or dx = k 2 du . 

This eventuates [from above] ... 

### Corollary 3

331. At the point A, the expression ppx either has a finite value and that is greater than kk .. the value
it has on making x = 0 [one presumes that Euler has in mind by this
2
g ( k +1 ) statement, taking the limit as x tends towards zero], or it is infinitely great. In the latter
dy 2
case [ dx = k 2 du ] becomes dx = ± ∝ du , and since du = dx + k , then dy = −kdx , [as
k +1
du = 0 ; p. 153] In which cases, the tangent to the curve AMC at A is parallel to the line
dx
BC.

Example.
332. Let the curve AND be any parabola, so that thus
t = 2α u ;
g
then
dt = αdu and p = α ,
gu
hence this equation is obtained [from dx =
gu
k 2 du ± (( g ( k 2 +1 ) p 2 x − k 2 )du 2 )
]:
k 2 +1
The integral of this equation is :
with
with
[Clearly a convenient way to demonstate this integral is to assume the final form, and to
differentiate the logarithms of this product, at which point an attempt is made to generate
the given differential equation by equating coefficients and making use of partial
fractions. Note that the l.h.s. of the differential equation is the derivative of part of the
numerator of the r.h.s., while the rest is du . Euler concerns himself with this aspect
u
below.]
[If α < 1 , then B and hence also the number ρ is a positive number.] Therefore since
the number π is a negative number, then
where C denotes a constant, which is effected so that on putting x = 0, u = 0 also.
Moreover it is clear, whatever the constant should be, that always u = 0 on
making ρ or π to disappear. But it is not possible for π to vanish, and in this case ρ now
vanishes, since α = 1 ; therefore in this case it must be that C =∝ and the equation
becomes ... or u = x and y = 0; whereby in this case the condition for the vertical line AB is satisfied.
For the remaining cases, since C is now an arbitrary quantity, from one curve AND
innumerable curves AMC can be found.
Again the single case has to be treated on its own, if A = B or
for then it becomes : ...
with arising

Consequently for this case this equation is obtained : [p. 154]
where C too does not have to be found.
If α > 1 , then B and hence ρ too becomes a negative number; then it follows that
C =∝ . Hence in this case either
or
Which two equations are for straight lines inclined in a certain manner and passing
through A and these also are satisfactory in general. So if we have α = 1 , then A = 1 and
B = 0 and hence these equations
which is a straight line perpendicular to BC; for this is traversed by a body in the same
time as the vertical AB.


### Corollary 4

332a. [Numbering error] Therefore other than α > 1 or α = 1 , innumerable curved lines
can be found that satisfy the problem; hence all are completed in a smaller time than the
perpendicular AB.
Corollary 5.
333. Therefore since an infinitude of curves AMC are able to arise from the one curve
AND, it is readily understood that infinitely more curves satisfying this question than in
the preceeding.EULER'S MECHANICA VOL. 2.
Chapter 2e.
Translated and annotated by Ian Bruce.
page 242
Corollary 6. [p. 155]
334. If α < 1 then the determination of the constant C can be brought about, so that the
curve sought passes through a given point on the line BC. The for other assumed curves
AND in a similar manner an infinitude of curves can be found, upon which the body ont
only reaches the given line BC in a given time, but reaches some given point C on that
line.
Scholium 1.
335. In this example two cases occur in which α = 1 ; indeed in the first in turn only the
vertical line satisfying the problem has been found, and in the other besides this line the
other inclined straight line has been found, yet we have used both in the same way in the
general equation. Moreover now more often cases of this kind are touched upon, in which
the differential equations contain amongst themselves the integral equations, which
nevertheless cannot be expressed by integration. As in the case α = 1 , this has the
differential equation
which on integration gives x = u. Yet meanwhile it is evident that this equation
k 2u = ( k 2 + 1 )x is contained in that too, even if it cannot be produced by integration.
And on this account the equation is equally satisfied by the latter integral as the former
x = u. Hence it is permitted generally to gather together the differential equation into the
form
dt = Vdu ,
T
in which T is such a function of t, which vanishes on putting t = 0, and V is some function
of u, equally understood that this integration vanishes when t = 0 and this [p. 156]
dt = Vdu ,
T
∫
∫
is is elicited by integration. Indeed generally the case t = 0 can be disregarded if t a
simple quantity; but if t is a composit quantity as in our case, it is wrongly omitted. We
had a similar case above (300) in the equation
where we observed the equation x = a to be contained in that, even if it could not be
integrated by integration. For on putting a − x = t then − dx = dt and
is a function of t, which becomes equal to zero, if we make t = 0 or x = a; in as much as
Pdx is thus prescribed to be accepted, so that it vanishes on putting x = a. Hence on
∫
putting this function of t equal to T the equation becomes ds = dtT b , hence in which
equation it is allowed to conclude without risk that the equation t = 0 or x = a is satisfied,EULER'S MECHANICA VOL. 2.
Chapter 2e.
Translated and annotated by Ian Bruce.
page 243
and thus the circle to satisfy that problem, as we agreed upon there (303). More generally
, if T does not vanish on putting t = 0, it is understood that
now in this equation Vdu = dt
T
the equation T = 0, from which t is equal to some constant quantity and thus dt = 0.
. And
Hence it is understood that T = 0 is contained in the proposed equation Vdu = dt
T
hence, if t should be a composite quantity for argument's sake from u and x, then the
equation of the integral is not likely to be had at once by integration.
Scholium 2.
336. Here the case remains, which requires a particular resolution, [p. 157] when the
straight line BC meets the line BA above the point A, and when it is parallel. But we
consider only the case in the following problem, in which BC is made parallel to the
vertical line AB and put at a given distance ; from which in a similar manner the case of
the line inclined at some angle can be deduced.


