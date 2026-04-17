---
heading: Chapter 3a
title: "Proposition 53"
# title: "The Motion Of A Point On A Given Line In A Medium With Resistance"
date: 2025-03-20
weight: 113
description: ""
author: "Euler"
c: "firebrick"
---


## PROPOSITION 53. Problem

465. If a body is acted on by a given force g in a medium with whatever resistance, to determine the motion of the body descending on a given curve AM (Fig.57), and the compressive force sustained by the curve at particular points.

### Solution

The abscissa AP = x is placed along the vertical
AP , the applied line PM = y and the arc AM = s; let
the height corresponding to the speed of the body at
M be equal to v, and the resistance at M is equal to R.

Therefore, if there is no resistance, then [the differential of the height becomes]
dv = gdx.

The resistance has lessened this increment of the
speed and is equivalent to a tangential force R; and
the effect of this force alone consists of this, that [the
increment] becomes
dv = − Rds.

On account of which, if both the force g and the resistance are both likewise acting on
the body, then this equation becomes
dv = gdx − Rds ,
and from which equation the speed of the body at any point M is to be elicited.

[We have remarked on Euler's basic equations occasionally, which resemble but are
not identical with certain modern equations describing the same phenomena. We note
that no mention is made of mass, so presumably we are to assume that unit mass is used
throughout, or that the forces or accelerations are organised so that the masses always
cancel. In addition, one cannot perform a dimensional analysis on these equations,
without accepting that certain physical quantities have been set equal to 1. Thus, terms
such as gdx and – Rds may be viewed in the modern context as the increments of work done on the body by gravity and against the body by friction, thus increasing or decreasing the kinetic energy of the body; however, the concepts of work and energy were in their infancy in Euler's day, although Johan Bernoulli and others had written
some papers on what was then termed the vis viva.

Euler did not enter into this matter, and adhered to experimental facts when setting
down his equations. 

Thus we should not view these equations from the modern
physicist's conventional viewpoint, but rather from the mathematician's viewpoint. The
idea that a moving body had something in common with the same body at rest at a greater
height could perhaps best be explained at the time by referring to Galileo's experiments
concerning bodies descending from rest down an inclined plane : from these
observations a height v could be made proportional to the square of the speed at the end
of the descent.

This gave Euler the idea of replacing squares of speeds with heights : he
had no hesitation in ascribing such a function v equal to the height above the earth, for
which v was related to the speed of the body. 

In the first equation above, the force g is
the force of gravity somewhere, while on the earth's surface it has the value g = 1. Thus,
1.dv = gdx is simply a proportionality between two forces or accelerations per unit mass,
while dv = dx for vertical motion near the surface or the earth. Such a proportionality is
seen to be true under the circumstances that if V is the speed at the respective heights x
and v in the locations where uniform gravity is g and 1, then
V 2 = 2 gx = 2.1.v gives VΔV = gΔx = 1.Δv , here assumed at rest initially. In addition, we
have seen that even horizontal speeds are ascribed by such heights, which is thus little
more than a mathematical convenience.

If we view such equations as energy equations,
then a factor of 2 or 12 is missing; hence these are not energy equations, for instead they
are equations used to relate accelerations, and to transform squares of speeds into
corresponding heights under the earth's gravity, and which has the great advantage of
removing all speed and hence time dependence from the equations, which are thus
rendered homogeneous for integration, etc. 

When the need arises, as in centripetal force
below, the factor of 2 is inserted to deal with the absolute acceleration. In other places,
where actual numbers are required, Euler referred to Huygens pendulum experiments to
get the correct length of the pendulum for a swing of one second.

{Recall that Huygens proposed the idea of measuring lengths in terms of seconds via his
pendulum, were the second was an arbitrary constant time interval}. In a word then, view
Euler's dynamical equations above and elsewhere as mathematically expedient
transformations for solving dynamical problems, but realise that these transformations are
not motivated by potential/kinetic energy conservation, although these can now be
viewed as analogous to Euler's pioneering work. We return to the text : ]
And if the body descends from rest at A, the integration is thus to be put in place so
that on placing x = 0 the height v = 0 also. Now if the body starts the descent at A with a
given speed, on putting x = 0 in the integration, v must be made equal to the height of that
initial speed. Moreover since the speed of the body is found, likewise the time is
obtained, in which any arc AM you please is completed, by taking ds . 

As for the force ∫ v .. sustained by the curve at M, it is observed that the curve at M is pressed on by two forces,
clearly the centrifugal force and the normal force. We put the curve to be convex  downwards and the element dx constant; the length of the radius of osculation directed along the opposite normal MN is equal to ds 3 ,
dxddy
and thus the centrifugal force is equal to
2vdxddy
,
ds 3
which is pressing on the curve along the direction MN . Now the curve is pressed upon by
a normal force along the same direction which is given by
gdy
;
ds
for the normal force arises only from the absolute force acting g, since the direction of the
force of resistance is placed along the tangent and thus does not generate a normal force.
Consequently the total force, which presses on the curve at M along the direction of the
normal MN , is equal to .. Q.E.I

### Corollary 1

466. Therefore the expression of the force pressing the curve agrees with that which we
found in the case of the vacuum (83). Yet the curve is pressed in a medium with
resistance by the same force as in a vacuum on account of the speed, upon which the
centrifugal force depends, which is not varies by the resistance of the medium.


### Corollary 2

467. In this descent the body does not have the maximum speed as in a vacuum in which
the tangent is horizontal at the point B, but at the place where dv = 0 at which it has the
maximum speed, is found from this equation :
in that point, where the sine of the angle, that the tangent to the curve makes with the line
to the horizontal, is to the whole sine as the absolute force g to the resistance R at that
place.

### Corollary 3

468. Therefore the speed of the body is increased as far as this point, in which the speed
is a maximum; now beyond this point the speed decreases again since then Rds exceeds
gdx and on this account makes dv negative.

### Corollary 4

469. If the resistance is as some power of the speed of which the exponent is 2m, and if
the resisting medium is uniform, the exponent of this is k, where k is the height
corresponding to the speed with which the body is moving, the resistance is allowed be
made equal to the force of gravity; in this case

..

and this equation is obtained defining the motion [note : the speed corresponds to the
square root of the height always, hence vm is proportional to the speed] : p. 236]
m
dv = gdx − v mds .
k


### Corollary 5

470. But if abscissae in taken on the axis BQ and we put BQ =
x, QM = y and BM = s, on account of these a differential
quantity negative with respect to the former is obtained :
dv = − gdx + Rds .

Which equation is thus to be integrated, so that on putting x = 0
makes v = b, if indeed the body has acquired a certain speed at
B to which the height b corresponds. But the force pressing
gdy
along MN, that the curve sustains, is equal to ds −
2vdxddy
.
ds 3

### Corollary 6.

471. If the medium is uniform, and the exponent of this is k, the resistance is now
proportional to some function of v, which is V, and such a function K of k is taken, as V
is of v; the resistance is given by R = VK and thus this equation is obtained :
dv = − gdx + Vds
K
with the axis BQ taken.

## Scholium 1

472. I have given this formula twice for the increment of the speed for the two axes AP
and BQ, since that is soon to be used in what follows. [p. 237] Clearly when the descent
is made from the fixed point A, we use the first formula by taking AP for the axis. But if
on the same curve several descents as far as the fixed point B are to be considered, as
usually comes about in oscillatory motion, we use the second formula, in which BQ is
had for the axis.

## Scholium 2

473. Since the formula, from which the motion of the body on the given line must be
determined, has thus been prepared, in order that a few indeterminate cases can be
separated from each other, often nothing can be concluded from that about the motion
considered. On account of which it is agreed to pursue only these cases, for which the
equation
dv = ± gdx m Vds
K
can be either separated or integrated. Moreover all these cases can be reduced to three
general cases. The first is, when the line on which the body is moving is straight ; for then
on account of ds = ndx the equation is changed into this

± Kdv = dx ,
gK − nV

in which the indeterminates are separated from each other. The second case is, when V is
present as a first power of v; for then the equation admits to integration. The third case is
when v has thus been prepared in the equation, that in the equation v and x everywhere
constitute a number of the same power ; for then by the rule noted by Bernoulli the
indeterminates can be separated from each other. [Concerning the integration of
differential equations, where an example of a method of integration is presented without
the previous separation of the indeterminates. Comment. acad. sc. Petrop. 1 (1726),
1728, p. 168; Opera Omnia Tom. 3, Lausannae et Geverae 1742, p. 108.] Moreover this
comes about, if Vds is a single power of v and x. Besides these there are two other cases
that permit integration, but these are not relevant here. [p. 238] The first is, if the
resistance vanishes, which case has indeed been set out sufficiently in the previous
chapter. 

The other case is, if the force g vanishes; concerning which there is no need that
we treat this, since the motion on any given line agrees with the motion on a straight line,
about which enough has been said in the previous book. Besides also the equation can be
separated in many more cases if it is the case that V = v 2 , clearly whenever the equation
for the curve has thus been prepared, so that the equation can be reduced to the case that
formerly Com. Riccati proposed. Now generally it is also possible to show the speed by a
series in this case and for a finite expression to be defined, as I have given a general
solution of the Riccati equation. [E31 in this series of translations] Therefore as the
solution of a problem may be required, in addition to these three cases set out,
immediately afterwards we explain this case also, in which the resistance is proportional
to the fourth power of the speed.

## Scholium 3

474. Since this tract on the motion in a resisting medium is by all accounts difficult and
complex, we will not apply ourselves to many hypotheses of the forces acting, as we did
in the previous chapter, but the force acting shall be uniform and directed downwards and
we do not elicit many centripetal forces to be acting. And when the force acting is put
uniform, [p. 239] the resistance of the medium also can be put to agree with that ; for a
fluid, that generates resistance, diminishes the force of gravity itself, and if that was not
uniform, the absolute force cannot be put to be uniform in a straight line. Then also for
that reason we can assume that the curve in which the body is moving lies in the same
plane, by which we are able to remove many useless difficulties.


