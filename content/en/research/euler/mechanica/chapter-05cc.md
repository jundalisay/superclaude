---
heading: Chapter 5c
title: "The Rectilinear Motion Of A Free Point Acted On By Absolute Forces"
date: 2025-03-20
weight: 4
description: "Motion is the translation of a body from the place it occupies to another place. True rest is a body remaining at the same place."
author: "Euler"
c: "firebrick"
draft: true
---



PROPOSITION 72. PROBLEM.

564. If there is a constant force the direction of which is normal everywhere to the right
line AB (Fig. 49) and if a body is projected from A with a given speed along the direction
AH, then it is required to find the curve AMDB described by the body, and the motion of
the body on this curve.


## SOLUTION

The force acting is called g, and the
speed with which the body is projected from
A corresponds to the height c and the cosine
of the angle HAB = λ, with the whole sine
taken equal to 1. Now with the body
travelling through the element Mm = ds , the
speed at M corresponds to the height v,
and PM = y and likewise the radius of
osculation at M = r. On account of which
Mr = dx and mr = dy , and it is apparent that
this case can be referred to Fig. 48, where
the motion of the body is slowing down.
[Note however that the elemental triangle in
Fig. 48 has been rotated counterclockwise about M, resulting in x and y being
interchanged in the diagram, but not in the equations.]
Therefore we have : dv = − gdy and grdx = 2vds (557). From the first of these equations
there arises : v = C − gy , and C must
be found from this, that with y = 0, it
must become v = c. Therefore we
have : [p. 233]
v = c − gy .

[Note also that v and c are actually
multiplied by 1, which is the assumed
acceleration of gravity in Euler's units
on earth, in order that the equation has
the correct dimensions of L2/T2. Thus,
g also is one on earth, but it has been made more general in the equation. It is probably a
good idea to refresh our memory of the derivation of the radius of curvature for a
function y(x) at some regular point. In the extra sketch, the component of the force or
acceleration along the normal to the curve shown is g cosθ = gdx / ds , while the
component along the tangent is g sinθ = gdy / ds . Hence the equation grdx = 2vds can be
reduced to the familiar form V 2 / r = gdx / ds . The radius of curvature is given

2
2
2
by r = ds / dθ = ( ds / dx )( dx / dθ ; now the element of arc ds = dx + dy , and
dy / dx = tanθ , leading to d 2 y / dx 2 = sec 2 θ .dθ / dx and hence
dθ / dx = ( d 2 y / dx 2 ) /( 1 + tan 2 θ ) = ddy / ds 2 . From which it follows
that r = ( ds / dx )( ds 2 / ddy ) = ds 3 / dxddy . The negative sign is applied for a convex
curve as we have here. ]

Now from the other equation, this value found is put in place of v and the equation is
produced :
grdx
= c − gy .
2ds
3
ds
with constant dx put in place [i. e. x is an independent variable], with

Truly, r = − dxddy
− gds 2
which substituted, the equation becomes : 2ddy = c − gy or
2cddy = 2 gyddy − gdx 2 − gdy 2
with dx 2 + dy 2 in place of ds 2 . The integral of this equation can be found:
dx =
ds
C .
c − gy
[This can be shown be assuming ( ds / dx )2 = p( y ) , differentiating w.r.t. x, and
− gds 2
substituting in the original equation 2ddy = c − gy . ]
= λ c −cgy and
Moreover with y = 0 we designate C = λ2c . We therefore have : dx
ds
hence
λdy c
= dx .
( c( 1− λ2 )− gy )
The integral of which is :
C − 2λ ( c( 1 − λ2 ) − gy ) =
gx
= 2λ c( 1 − λ2 ) − 2λ ( c( 1 − λ2 ) − gy ) ,
c

with the constant C determined, so that y vanishes by putting x = 0. For the sake of
brevity, the sine of the angle HAB or ( 1 − λ2 ) = μ , then
gx = 2λμc − 2λ ( μ 2c 2 − gcy )
and hence,
μx
y= λ −gx 2
.
4λ2 c
μgxg 2 x2
4λ2 c
Hence also we have :
v=c− λ +
and


μgx
g 2 x2
g 2 x2
μ 2 μgx
ds 2 = dx 2 ( 1 + 2 − 3 + 4 2 ) = dx2 ( 1 − λc + 4 2 ) .
λ
λ c 4λ c
λ
4λ c
page 311
2
2

Consequently the equation arises : dsv = dx2 and
∫
λc
ds = x
v
λ c
is equal to the time, in which the arc AM is travelled through. Q.E.I.


### Corollary 1

565. Therefore the body falls back on the horizontal line AB at the point B with

4λμc
AB = g . Indeed the time, in which the body is turning above AB and the curve ADB
is completed, is given by
4μ c
.
g


### Corollary 2

566. Moreover 2λμ denotes the sine of the angle, which is twice the sine of the angle
2χ c
HAB. 

Whereby, if the sine of this angle is called χ, [p. 234] then AB = g . From which it is apparent that the distance AB to be a maximum, if χ = 1 and thus the angle HAB is
half a right angle, if indeed the body is projected with the same speed c .

### Corollary 3.

567. It is also understood that the horizontal motion of the body is uniform. For the times,
in which any arc is described, are proportional to the corresponding abscissa on the line
AB.

Corollary 4.

568. If the body is always projected with the same speed c , but at different angles with
AB, the times in which the motion above AB is completed, are to each other as the sines
of the angles HAB (565).

Corollary 5.

569. The maximum height DE, to which the body can reach, is the vertical line through
2λμc
the point E, taken from AE = g . From which it is apparent that AE is half of AB.
μ 2c
Truly the maximum height itself DE is equal to g , which hence is in proportion to the
square of the sine of the angle HAB.


### Corollary 6

gx 2
μx
570. From the equation y = λ − 2 it is seen that the curve ADB is a parabola, the axis
4λ c
2
2
of which is the line DE and the parameter is equal to AE = 4λ c . Therefore the
DE
g
parameter is proportional to the square of the cosine of the angle HAB. [p. 235]
Corollary 8.
571. Hence the vertex of this parabola is the point D, and the distance DF of the focus F
from the vertex D is equal to λgc . Whereby if the line MF is drawn, this will be
2
MF = DQ + DF from the nature of the parabola. [For MF 2 = ( y − a )2 + y 2 = ( y + a )2 . ]
Corollary 8.
c − gy

572. Moreover also MF = DE − MP + DF [= gc − ( y − a ) + a] = gc − y = g . Since truly
v = c − gy is the height corresponding to the speed at M = g .MF . Therefore it is also
apparent that AF = gc , [as c = g .AF ].
Corollary 9.
573. Therefore it is evident that the body describing this parabola has the same speed at
some point M, as the same body acted on by the same uniform force falling straight down
can acquire from that height, which is equal to the distance of the point M from the focus
of the parabola.
Corollary 10.
AE = 2λμ = χ . From which it is evident that
574. The cosine of the angle FAE is equal to AF
the angle FAE is equal to the complement of twice the angle HAE to the right angle or
rather the excess of twice the angle over the right angle. [ cos FAE = 2λμ = sin 2 HAB ;
FAE = 90 - 2HAB or 2HAB - 90]
Corollary 11.
575. Since the angle AFD is the supplement of the angle AFE, then the angle AFD is
twice the angle HAB. [p. 236] [AFD = 180 - AFE = 90 + FAE = 2HAB. ]
Scholium 1.
576. Therefore the construction of the parabola is easily deduced from these, that
describes the projection of the body with a given speed in a given direction. For with AG
drawn normal to AB, and the angle GAF taken equal to twice the angle HAE, and in this
direction AF is taken equal to the height, from which the same body falling in a straight
line acquires the speed equal to this, with which it is projected from A, from which the
focus point F of the parabola sought is found (573, 575). Again the normal DE through FEULER'S MECHANICA VOL. 1.
Chapter Five (part a).
Translated and annotated by Ian Bruce.
page 313
drawn to the line AB is the axis of this parabola, and the vertex D is found by taking
DF = AF 2− FE . Therefore when the parameter is equal to 4DF, the description of the
parabola is brought into view.
Scholium 2.
577. If g = 1, then we have the case of terrestrial gravity. Concerning which, if there
should be no air present, which might impede the motion of the body on account of
resistance, all projected bodies move in parabolas. Galileo first elicited this truth, and
after him all the writers of mechanics have demonstrated this fact. And indeed it can be
arrived at in a much shorter way without differential equations and differentiation, but we
have preferred to use a general method, which can be widely extended, rather than apply
ourselves too much with the particular solutions, which can only be adapted to that one
case. 


