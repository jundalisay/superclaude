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



PROPOSITION 75. PROBLEM.

601. The nature of the curve AM (Fig. 52), that a body acted upon by some centripetal
force is to be described, in order the equation between the orthogonal coordinates CP
and PM referred to fixed axes AC can be defined.
SOLUTION.
As before with the initial speed at A = c ,
AC = a and with the perpendicular from C
dropped to the tangent at A equal to h and in
addition CM = y, CT = p and the centripetal
force at M is equal to P, which is a certain
function of y, then CP is called equal to x
and PM = z, then
CM = ( x 2 + z 2 ) = y or z = ( y 2 − x 2 ) ; for
we keep y in place of z in the calculation,
since in this manner the calculation is easier and shorter, and after handling the whole
operation, with z in readiness to be introduced in place of y. With these in place :
Mm = ( dx 2 + dz 2 ) =
( y 2 dy 2 − 2 yxdydx + y 2 dx 2 )
( y −x )
2
2
and Mr =
− ydx + xdy .
( y2 − x2 )
[This use of this auxillary coordinate y, which is just the radial distance of the body from
the centre of force, eases the calculation, where dz2 is found from z 2 = y 2 − x 2 and mr =
dy, giving Mr 2 = Mm2 − dy 2 , leading to Mr.] Therefore we have [see Prop. 74 and
following sketch for the similar triangles]:EULER'S MECHANICA VOL. 1.
Chapter Five (part a).
page 321
Translated and annotated by Ian Bruce.
− ydx + xdy .
Mr = p =
[cos(θ ) =] Mm
2
2
y
( y dy − 2 yxdydx + y 2 dx 2 )
and consequently
p=
yxdy − y 2 dx
( y 2 dy 2 − 2 yxdydx + y 2 dx 2 )
.
But for the curve AM , we have elicited the
equation previously (591) : Pdy =
2ch 2 dp
.
p3
Moreover we set Y for the integral of Pdy
thus assumed, [Y is related to the work
done by the centripetal force as the body
moves along y, and hence is the potential
energy function for unit mass and gravity;]
so that it vanishes with y = a. With this
2
done, then Y = C − ch2 , where the
p
constant C on account of p = h, if y = a,
must be equal to c. Hence there comes
about : Y =
cp 2 − ch 2
, [p. 247] from which
p2
there is produced :
p=
h c
.
( c −Y )
[We note that h c is the initial angular momentum of unit mass at the point in the orbit
where the speed and the distance from C are perpendicular; while Y is the height
corresponding to the change in the potenial energy of unit mass in a uniform field of g =
1, and hence c − Y is the speed elsewhere corresponding to the perpendicular distance
p, giving the same angular momentum. ]
Which quantity, when Y is a function of y, is also a certain function of y. Hence for this
reason, we have this equation :
[ p =]
We put x = uy and h c
( c −Y )
h c
=
( c −Y )
yxdy − y 2 dx
( y 2 dy 2 − 2 yxdydx + y 2 dx 2 )
= Q for the sake of brevity, then Q =
.
− y 2 dx
( dy 2 −u 2 dy 2 + y 2 du 2 )
,
from which there arises :
Qdy
hdy c
du
=
=
2
2
2
( 1−u )
y ( y −Q )
y ( cy 2 − ch 2 − y 2Y )
with
h c
restored in place of Q. Therefore which equation, when the variables u
y ( c −Y )
and y in that equation are separated [note that u is the cosine of the angle θ' between MC
and PC; thus y and θ' are the polar coordinates of M as noted in the next cor.], can always
be constructed. Q.E.I.EULER'S MECHANICA VOL. 1.
Chapter Five (part a).
page 322
Translated and annotated by Ian Bruce.
Corollary 1.
602. Since u = xy , u expresses the cosine of the angle MCA. And for this reason, this final
equation is separated into the distance of the body from the centre and the cosine of the
angle ACM. Indeed from this equation there emerges immediately the equation between
x and z. [Thus, in this remarkable manner, the equation has been separated into angular
and radial components for the general case. ]
Corollary 2.
603. Truly the equation cannot be algebraic, unless
a circle commensurable with the arc
hdy c
∫ y ( cy −ch − y Y ) denotes the arc of
2
2
2
∫ ( 1du−u ) . [Note that on putting u = cosθ' , this
2
integrand becomes –dθ'.]
Corollary 3.
604. Therefore whenever
hdy c
y ( cy 2 − ch 2 − y 2Y )
can be reduced to a form of the kind
λdZ
and λ is a rational number, so an algebraic equation for the curve sought can
( A2 − Z 2 )
be shown. [p. 248]
Scholium 1.
605. But if
du
is equal to a quantity of the kind
( 1−u 2 )
λdZ
( A2 − Z 2 )
, with the integration
carried put with imaginary logarithms, this equation is obtained :
λ
λ
⎛ ( A 2 −C 2 ) −C −1 ⎞ ⎛ ( A 2 − Z 2 ) + Z −1 ⎞
⎜
⎟ ⎜
⎟ .
=
( 1−u 2 ) −u −1 ⎜⎝ ( A 2 −C 2 ) + C −1 ⎟⎠ ⎜⎝ ( A 2 − Z 2 ) − Z −1 ⎟⎠
[Note that if u = cos θ , where we have now taken the angle MCA = θ, then
( 1−u 2 ) + u −1
( 1−u 2 ) + u −1
( 1−u ) −u −1
2
θ + i cos θ = −ei .− 2θ ; similarly, if Z = A cos θ , then
= sin
sin θ −i cos θ
λ
(
)
⎛ ( A2 − Z 2 ) + Z −1 ⎞
A sin θ + Ai cos θ λ = ( −1 )λ ei .− 2λθ , and similarly, if C = A cos α ,
⎟
⎜⎜
=
⎟
2
2
A sin θ − Ai cos θ
⎝ ( A − Z ) − Z −1 ⎠
λ
⎛ ( A2 −C 2 ) −C −1 ⎞
⎟⎟ = ( −1 )λ ei .2λα . Hence, the result of the integration can be
then ⎜⎜
2
2
1
−
+
−
(
A
C
)
C
⎠
⎝
written in the convenient form : ei .θ = i( Aei .θ )λ .( Aei .−α )λ / A2λ ; hence, u = cos θ gives
the expression for u subsequently quoted below.EULER'S MECHANICA VOL. 1.
Chapter Five (part a).
page 323
Translated and annotated by Ian Bruce.
Note also that the angle θ in the original integral can be written as
θ + i cos θ .]
2iθ = iθ + iθ = log eiθ − log e −iθ = log sin
sin θ −i cos θ
Truly here C is a constant quantity to be determined from this equation, since if
CM ( y ) = CA( a ) , then likewise too, x = a or u = 1. Moreover from the above equation,
this equation can be constructed :
( ( A −C ) −C −1) ( ( A − Z ) + Z −1) −( ( A −C ) +C −1) ( ( A − Z ) − Z −1) .
u=
2
λ
2
2
λ
2
2
λ
2
2
λ
2
2 A2 λ −1
Which, whenever λ is a rational number, it is free to be returned from the affects of the
imaginary − 1 and transformed into an algebraic equation of a certain order. [Various
values of λ corrrespond to well-known curves to be investigated; e. g. λ = 12 ,1 and
correspond to ellipses with different centripetal forces.]
Corollary 4.
606. Since x = uy , this equation is put in place :
( ( A −C ) −C −1) ( ( A − Z ) + Z −1) y −( ( A −C ) +C −1) ( ( A − Z ) − Z −1) y ,
x=
2
λ
2
2
λ
2
2
2
λ
2
2
λ
2 A 2 λ −1
which, since Z is a function of y and y = ( x 2 + z 2 ) ,can easily be changed into an
equation between x and z.
Scholium 2.
607. The above equation can also be transformed into this :
1
1
⎡⎛
λ
λ
⎞
⎛
⎞
⎛
⎞
⎛
⎞⎤
2
2
2
2
2
2
1
Z=
⎢⎜ ( 1 − u ) + u − 1 ⎟ ⎜ ( A − C ) + C − 1 ⎟ − ⎜ ( 1 − u ) − u − 1 ⎟ ⎜ ( A − C ) − C − 1 ⎟⎥ ,
2 −1 ⎢⎝
⎠ ⎝
⎠ ⎝
⎠ ⎝
⎠⎥⎦
⎣
[p. 249] which is more convenient, if λ1 is a positive whole number.
[Thus, from ei .θ = i( Aei .θ )λ .( Aei .−α )λ / A2λ , we have eiθ = ei( θ +π / 2 ) / λ .eiα ; from
which Z = A cos θ can be found.]
Scholion 3.
608. But if λ is a negative number, equal to = − μ , we have :
( ( A −C ) +C −1) ( ( A − Z ) − Z −1) −( ( A −C ) −C −1) ( ( A − Z ) + Z −1) = u
2
μ
2
2
2
μ
2
2
μ
2
2
μ
2 A 2 μ −1
From which it is apparent, if λ is negative, the value of u can only be negative, indeed
that which is understood from the differential equation. Truly in a similar manner,
⎡
Z = 1 ⎢⎛⎜
2 −1 ⎢⎝
⎣
1
1
⎤
μ
μ
⎞
⎛
⎞
⎛
⎞
2
2
2
( 1 − u ) − u − 1 ⎟ ⎜ ( A − C ) + C − 1 ⎟ − ⎜ ( 1 − u ) + u − 1 ⎟ ⎛⎜ ( A2 − C 2 ) − C − 1 ⎞⎟⎥ .
⎠ ⎝
⎠ ⎝
⎠ ⎝
⎠⎥⎦
2EULER'S MECHANICA VOL. 1.
Chapter Five (part a).
Translated and annotated by Ian Bruce.
page 324
Corollary 5.
609. If λ = 1 , then u =
Z ( A −C ) −C ( A 2 − Z 2 )
Zy ( A2 −C 2 ) −Cy ( A 2 − Z 2 )
and x =
.
2
A
A2
2
2
If λ = −1 , also u or x has to be taken negative.
Corollary 6.
610. If λ = 2 , then
u=
2 Z ( A2 − 2C 2 ) ( A 2 − Z 2 ) − 2C ( A2 − 2 Z 2 ) ( A2 −C 2 )
.
A4
But if λ = 12 , then Z = C − 2Cu 2 + 2u ( A2 − C 2 )( 1 − u 2 ). [p. 250]
