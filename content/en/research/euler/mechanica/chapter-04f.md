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


PROPOSITION 53. PROBLEM.

419. With a uniform absolute force and medium resistance put in place, to determine the
speed of descent of the body at individual points, if the resistance is proportional to the
square of the speed. [p. 175]


### SOLUTION.

Keeping as before AP = x (Fig. 39), with the speed at P = v , let the uniform force be
equal to g, and the exponent of the resistance equal to k. Since the resistance law is v, the
strength of the resistance is equal to kv . From which it follows that
kdv ; the integral of which is x = kl C . Let the initial speed at

dv = gdx − vdx
or dx = gk
k
−v
gk − v
gk − c

A corresponding to the height c, the constant C = gk − c and x = kl gk −v . In place of the
x
gk − c
logarithms numbers are taken : e k = gk − v ; from which the equation arises :
x
x
−x
−x
−x
e k v = c + gk ( e k v − 1) or v = e k c + gk ( 1 − e k ) = e k ( c − gk ) + gk . Q.E.I.


## Corollary 1

420. If the motion of the body starts from rest at A, then c = 0. In this case we have

−x
v = gk ( 1 − e k ) , which expression, when a greater x is taken, is also made larger, yet a
certain limit can never be exceeded. For by taking x =∝ then it is found that v = gk.EULER'S MECHANICA VOL. 1.
Chapter Four (part a).
page 209
Therefore gk is the asymptotic speed of descent of the body, that it had not acquired
before, as it was required to fall an infinite distance.


### Corollary 2

421. If the initial speed c is equal to this asymptotic value gk , the motion of the
descending body is uniform; indeed it shall be v = gk = c. It is apparent also from this
. [p. 176] For if once v = gk, the increments in the speed is
equation dv = gdx − vdx
k
always zero.

Corollary 3.

422. If it is the case that c < gk , the falling body will accelerate, as long as it has not yet
gk unless it has traversed an infinite distance.
fallen far enough to acquire the speed
−x
For if c < gk , the quantity e k ( c − gk ) + gk is always negative, and on account of this v
is always less than gk.
Corollary 4.
−x
423. If the initial speed c is greater than gk , then e k ( c − gk ) is a positive quantity,
and thus v is always greater than gk. Indeed by traversing an infinite distance it becomes
v = gk. From which it is evident that in this case the body falls with a retarding motion. e.
Scholion 1.
−x
424. It must be understood in the equation v = e k ( c − gk ) + gk also in the case, in
which the body falls in a vacuum only under the action of an absolute force. And indeed
here the resistance is put to vanish or the exponent k is made infinite ; then indeed the
v
acceleration associated with the resistance k vanishes. But it is seen that there is a
difficulty with the determination, as to what the value for the altitude v should be for
−x
k =∝ . In order that this can be found it is most useful to change e k into an equivalent
series :
23
2k6k
1 − kx + x 2 − x 3 + etc. , [p. 177] of which, if k is ∝ , in its place it suffices to put 1 − kx .
−x
+ gx = c + gx on account of the
With this value put in place of e k we have v = c − cx
k
. Which equation agrees with that, as we found above (239) ;
vanishing of the term cx
k
g
for that everywhere is A , for us here it is only g. Since g is not only the absolute force,
but shows the acceleration of this force.EULER'S MECHANICA VOL. 1.
Chapter Four (part a).
Translated and annotated by Ian Bruce.
page 210
[Thus, if the force acts on unit mass, then the variables for the force and the
acceleration have the same magnitude. As we have mentioned previously, the Latin vi
can be a general term for force, strength, or power, and can also be used to express
acceleration as the force on a unit mass. The use of the word potentia is usually more
explicit, and requires the force to be defined by some formula. This is contrary to
accepted wisdom, which regards the words vi and potentia to relate to absolute and
relative forces, at least as defined by D. Speiser in his analysis of the works of Daniel
Bernoulli. However, this does not seem to be the case for Euler's works, who seems
occasionally to use the words as synonyms, and at other times as we have said here. In
the final analysis you the reader must make up your own mind as to what Euler is saying;
any comments made by me are my own views at the time, which can change as more of
the work is examined.]
Scholium 2.
425. If k does not indeed have an infinite value, but yet is extremely large, thus as it
happens, when extremely heavy bodies are held and released in a fluid, the use of the
above series is outstanding, with as many as the three first terms taken of the above series
23
2k6k
−x
1 − kx + x 2 − x 3 in place of e k : indeed the error is negligible. Therefore in this case, if
gx 2
the body is released from rest, thus as c = 0. then the height v = gx − 2k . From which
equation an approximate value of v is extracted. But if again we do not wish to ignore
gx 2
anything, then the height is given by : v = gx − 2k +
gx 3
gx 4
gx 5
− etc., from which
2 −
3 +
6k
24k
120k 4
infinite series the value of v is expressed.
PROPOSITION 54.
PROBLEM.
426. To determine the time, in which a body in a medium with a uniform resistance
present in proportion to the square of the speed, descends through a given interval AP,
acted on by a uniform absolute force (Fig. 39) . [p. 178]
SOLUTION.
As above by placing AP = x, with the speed at A = c , and the speed at P =
with the exponent of the resistance k, the corresponding distance is given by :
−x
v = gk + e k ( c − gk ) (419). From which the element of the time is :
dx =
v
dx
−x
k
( gk + e ( c − gk ))
.
v , andEULER'S MECHANICA VOL. 1.
Chapter Four (part a).
Translated and annotated by Ian Bruce.
page 211
x
−
In order to integrate this expression I put e k = z and c – gk = b, and for the sake of
brevity; this becomes dx =
v
r − gk
− kdz
. Again by making gk + bz = r 2 , then z = b
z ( gk + bz )
2
and
k
k
dx = − 2kdr = dr g − dr g .
r 2 − gk
v
r + gk
r − gk
On account of which :
r + gk
∫ dxv = C + kg l r − gk .
−x
gk + e k ( c − gk ) , and the time is obtained to travel
In place of r, its value is restored:
through the interval AP :
−x
k
k l e ( c − gk )+ gk + gk .
g
−x
e k ( c − gk )+ gk − gk
=C+
Because the time vanishes on making x = 0, the constant must be
c + gk
. From these the time to descend through AP is put together
C = − kg l
c − gk
−x
=
k
k l e ( c − gk )+ gk + gk −
g
−x
e k ( c − gk )+ gk − gk
k l c + gk .
g
c − gk
Which expression can in turn be simplified in order to give :
−x
k
x + 2 k l e ( c − gk )+ gk + gk ,
g
gk
c + gk
and to which the descent time through AP is equal. Q.E.I. [p. 179]
Corollary 1.
427. If the initial speed is equal to 0 and thus c = 0, then the time in which the body
descends through AP,
x + 2 k l(
g
gk
= 2 kg l
(1 − e
1
x
k
x
k
e − ( e −1 )
− kx
) + 1) =
x − 2 k l 1− ( 1− e
−x
g
gk
e k
x
x
= 2 kg l e k + ( e k − 1 ) .
−x
k
)EULER'S MECHANICA VOL. 1.
Chapter Four (part a).
Translated and annotated by Ian Bruce.
page 212
Scholium 1.
428. Also the formula for the general time to travel through AP with the initial speed
can be changed with 2 kg le
x
2k
in place of
x
gk
into this :
x
2
c
x
k
k
k l ( e gk + c − gk ) + e gk .
g
c + gk
From which this, as in the manner we found for the case c = 0, freely follows; giving
indeed :
x
x
2 gk l e k + ( e k − 1 ) .
Corollary 2.
429. If we put c = gk, in which case the motion in descend is uniform (421), the time of
descent through the interval AP is produced in this final form:
x
2 kg l e k = x
gk
,
as is also found from the nature of the uniform motion too. For the time must be
expressed from the distance x travelled through divided by the speed divided by the speed
gk .
Scholium 2.
430. Moreover these times can be obtained in minutes and seconds, if the expressions
found are divided by [p. 180] 250 and the lines c, k, x are shown in scruples of Rhenish
feet. (222)
Scholium 3.
431. With the initial speed put as c = 0, if the time is given, in which the interval AP is
traversed in the descent, the distance AP can also be found. For if the time t is given in
seconds and both k and x are given in scruples of Rhenish feet, then the time is :
k l e kx + ( e kx − 1 ) .
1
t = 125
gEULER'S MECHANICA VOL. 1.
Chapter Four (part a).
page 213
Translated and annotated by Ian Bruce.
Scholion 4.
432. If k is an exceedingly large quantity and yet the time is to be found as closely as
possible for the distance AP, with the initial speed being c = 0, I assume this formula :
x + 2 k l(
g
gk
( 1 − e− k ) + 1 ) .
x
In which, since ( 1 − e − k ) nearly disappears, if k is very large, the time becomes :
x
l( 1 + ( 1 − e
− kx
) ) = (1 − e
− kx
−x
x
−x
3
−x
5
−
k
( 1− e k ) 2 ( 1− e k )2 ( 1− e k ) 2
) − 1−2e +
−
+
3
4
5
[p. 181]
Indeed it is the closest :
2
x
( 1 − e− k ) = x − x x + 5 x 2 x .
k
4k k
96 k
k
From which it arises :
2
x
l( 1 + ( 1 − e − k ) ) = x − 2xk + x x + x 2 x .
k
12 k k
480 k k
On account of which the descent time to pass through the interval AP
=2 x+ x x +
g
6k g
x2 x
.
240 k 2 g
Corollary 3.
433. When the resistance also vanishes, and thus k becomes equal to ∝ , the descent time
for the body to pass through AP by the absolute force g acting alone. Truly the descent
time from this last formula, on account of all the terms vanishing except the first, is found
to equal 2 x , as now has been found above (218), by ignoring the number m and with g
g
g
put in place of A , as we have established here.EULER'S MECHANICA VOL. 1.
Chapter Four (part a).
Translated and annotated by Ian Bruce.
page 214
PROPOSITION 55.
PROBLEM.
434. If a body in a medium with uniform resistance, which resists in the
square ratio, is projected up again from B with a given speed, and is acted
upon by a given uniform force g, (Fig. 40), it is required to determine the
speed of the body at individual places.
SOLUTION.
Let the speed at B = c and the speed at P = v , put BP = x and the
exponent of the resistance equal to k. [p. 182] Since now the motion is
retarded by the absolute force g and by the resistance kv , then
− kdv
dv = − gdx − vdx
. Hence dx = gk
and x = kl gkC+ v , where it is necessary that
+v
k
gk + c
C = gk + c , when v = c by making x = 0. On account of which we have x = kl gk + v ;
from which
v = e − k ( c + gk ) − gk ,
from which the speed can be found at any point P. Q.E.I.
x
Corollary 1.
435. In this way the body can reach as far as A on being projected up, and let the speed at
A = 0. On which account the total height BA can be found by setting v = 0, in which case
it becomes :
−x
e k = c +gkgk or x = kl c +gkgk , which quantity is equal to the height BA.
Corollary 2.
436. The resistance can vanish or by making k =∝ , in order that the motion in a vacuum
is given by :
−x
e k = 1 − kx . Therefore in this case, v = c − gx. And the same equation is
found, if the body is considered to be acted on by the absolute force g alone.
Corollary 3.
437. If the resisting medium is very rare, so that thus the number k indicates a very large
−x
23
2k6k
number, in place of e k , 1 − kx + x 2 − x 3 is taken . From which arises
2
2
3
v = c − cxk + cx 2 − gx + gx2 k − gx 2 as an approximation.
2k
6kEULER'S MECHANICA VOL. 1.
Chapter Four (part a).
Translated and annotated by Ian Bruce.
page 215
Moreover when the value of this quantity is to be shown as an approximation of v, [p.
183] it is not only necessary that the number k is very large, but the height x is much
−x
smaller than k, in which case e k is not very different from 1.
Scholium 1.
438. Now we turn our attention to the case where the descent of the body through AB is
not similar to the ascent, if the medium in each case can be resisting. Yet the descent
along AB can be conceived by thinking about the case which is similar in a straight
forwards way to the ascent, thus as the body in the ascent so in the descent at the point P
has the same speed and the medium is one that propels [rather than retards; a purely
hypothetical case obviously for mechanical systems, though energy can be removed and
then restored in electrical systems if we are talking about electric currents]. For since in
the ascent it is necessary that both the forces oppose the motion, as in the descent, each
force is set up following the motion, from which the motion is completely backwards.
Corollary 4.
439. Therefore with the height AP = y and with the speed in this descent equal to
then
v,
y
vdy
k
dv = gdy + k . From which by integration is produced v = gk( e − 1 ).
Scholium 2.
440. This equation agrees with the previous, as we elicited on contemplating the ascent.
For it is :
x
x
c + gk
c + gk − k
k
y = AB-x = kl gk − x and thus e = gk .e .
−x
v = e k ( c + gk ) − gk , as [p. 184] we found above in
Therefore from this there arises :
the solution of the problem. Therefore it is apparent in this descent that the body has the
same speeds at the individual points that it had at the same point in the ascent. Therefore
likewise it is also necessary that the time of descent can be found to be considered in this
method, as came about from the ascent.


