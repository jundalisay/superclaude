---
heading: Chapter 4d
title: "The Exponent of Resistance"
date: 2025-03-20
weight: 75
description: "Motion is the translation of a body from the place it occupies to another place. True rest is a body remaining at the same place."
author: "Euler"
c: "firebrick"
draft: true
---



PROPOSITION 56. PROBLEM.
441. To determine the time of ascent through BP (Fig. 40) of a body in a medium with
resistance in the ratio of the square of the speed from B to be projected up with a given
speed, and meanwhile to be acted on by an absolute force g pulling downwards.
SOLUTION.
With the speed at B equal to c and at P equal to
v , then put BP = x and with the
−x
exponent of the resistance equal to k, then the distance v = e k ( c + gk ) − gk (434). From
which the element of the time arises :
dx
=
v
dx
.
−x
( e k ( c + gk )− gk )
In order that this can be integrated, I put as above :
−x
e k = z and c + gk = b, for the sake of brevity, from
which completed we have : dx =
v
bz − gk = r 2 , then z =
r 2 + gk
and
b
− kdz
. Let
z ( bz − gk )
dx = −2kdr , the
r 2 + gk
v
integration of which depends on the quadrature of the
circle. Therefore to this end, it is necessary to construct the quadrant of a circle abc (Fig.
41), the radius of which ac is equal to 1, the tangent line is taken to that radius : at = r ,
gk
and the arc length am =
∫
dr gk
r 2 + gk
, which can be designated in this manner A r .
gk
[For if t = tan θ, then dθ = dt2 , from which the result follows by substitution; θ has
1+ t
been added to the diagram][p. 185] Clearly an expression of the kind A.t denotes the arc
of the circle for us, the tangent of which is t, with the radius being 1. Hence because of
this :
dr gk
∫ r−2+kdrgk = −2 kg ∫ r + gk = C − 2 kg A. rgk .
2
2
Moreover since r = ( e− k ( c + gk ) − gk ) , then
x
∫
−x
k
dx = C − 2 k A. ( e ( c + gk )− gk ) .
g
gk
vEULER'S MECHANICA VOL. 1.
Chapter Four (part a).
Translated and annotated by Ian Bruce.
page 217
c .
Which quantity since it must vanish by making x = 0, gives C = 2 kg A. gk
Therefore the time of the ascent through the interval BP is found :
−x
k
c − 2 k A. ( e ( c + gk )− gk )
= 2 kg A. gk
g
gk
⎛
⎞
−x
k
c − A. ( e ( c + gk )− gk ) ⎟
= 2 kg ⎜ A. gk
gk
⎟
⎜
⎠
⎝
−x
cgk − ( gke k ( c + gk )− g 2 k 2 )
= 2 kg A.
.
−x
gk + ( ce k ( c + gk )− cgk )
Q.E.I.
Corollary 1.
442. Since the total height AB, to which the body is able to reach, is obtained by making
c + gk
x = kl gk
2
k
A.
g
−x
gk
, in which case e k = c + gk , and the total time for the ascent is equal to
c
gk
Corollary 2.
443. Whereby if c = gk, the total time to ascend through BA = 2 kg A.1 .
But the arc, of which the tangent is equal to the radius, is the 8th part of the periphery.
With the quarter part of the periphery amb = π , the ascent time through BA = = π gk . [p.
186; note that π was not yet established in its present meaning, as the ratio of the
circumference to the diameter of a circle; in which case Euler's formula needs to be
divided by 2.]
Corollary 3.
444. From this it is also understood, that if the body is projected up with an infinite speed
from B, the ascent time is to be no less finite ; indeed it becomes equal to 2 kg A. ∝ ;
which when the quarter part of the periphery is equal to π, then the total ascent time is
2π kg .
Corollary 4.
445. If in place of the initial speed
c + gk
reaches, since it is a = kl gk
c the total height is given BA = a, to which the body
a
and therefore c = gk ( e k − 1 ) , the total time is found for
a
the ascent through BA, = 2 kg A. ( e k − 1 ) .EULER'S MECHANICA VOL. 1.
Chapter Four (part a).
page 218
Translated and annotated by Ian Bruce.
Scholium 1.
446. if the ascent in the medium is changed into a descent, as we have assumed above
(438), and by calling AP = y, the time of descent through AP
y
= 2 k A. ( e k − 1 ) ,
g
with y substituted in place of a in the above formula. Here indeed a denotes the height
traversed in the ascent, this indeed is the height y from integration, to which the body
with the speed that it has at P is able to reach.
Scholium 2.
447. The fundamental equation for a descent of this kind to be considered is
vdy
vdy
dv = gdy + k (439), which from the equation for a true descent is dv = gdy − k (419)
which can be formed with y in place of x and –k in place of k. Whereby also the
approximate expression for the time truly [p. 187] for the interval AP from that, as we
found above (432) for the true descent, can be adapted to this imaginary descent the
inverse of the ascent, also by putting y in place of x and – k in place of k. And thus in this
way the time can be found for the descent through the interval AP , equal to
2 y
y y
− 6k g +
g
y2 y
240 k 2 g
y
, as an approximation, provided k is a number smaller than one.
Corollary 5.
448. If the resistance of the medium completely disappears, as happens if k =∝ , then the
total time of the ascent through BA = 2 a . Which expression comes about from above
g
with a in place of y :
2 y
g
−
y y
6k g
+
y
2
y
240k 2 g
; indeed all the terms except the first vanish.
Corollary 6.
449. Hence also from the given time of the ascent t from the integration the height
a
traversed a can be found. For since the time is given by t = 2 k A. ( e k − 1 ) , the
g
tangent of the arc 2t
a
g
=
k
a
( e k − 1 ) . That tangent is called T, it satisfies the equation
T 2 + 1 = e k and a = kl( T 2 + 1 ) 