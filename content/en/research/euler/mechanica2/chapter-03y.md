---
heading: Chapter 3y
title: "Proposition 80"
date: 2025-03-20
weight: 197
description: ""
author: "Euler"
a: Euler
c: "firebrick"
draft: true
---


## PROPOSITION 80. Problem

707. In a uniform medium, which resists in the ratio of the squares of the speeds, and with an absolute force acting downwards, to compare the speeds between themselves at the point A (Fig.80), which are acquired in different descents of the body on the
curve MA.

### Solution

Let the speed at A, acquired in one descent, correspond to the height b, and the
speed at M correspond to the height v. Put AP = x, AM = s, the force acting at M,
which is variable in some way, is equal to P and the exponent of the resistance is equal
to k. With these in position, we have : ...

which equation integrated gives :

..

with the integral e k Pdx thus taken, so that it
vanishes on putting x = 0. Now let M be the starting
point of the descent, where v = 0; this point is found
from the equation

...

Another descent is put in place to come from a neighbouring point m and the speed acquired at A corresponds to the height b + db.
Hence we have 

...

equal to the sum of all the terms e Pdx from A as far as m; now in the first equation,

... k Pdx signifies the sum of all the terms e k Pdx only as far as from A to M .

Hence the first sum is greater than this sum by the final element e k Pdx , with AM = s
and Pp = dx. [p. 387] Hence we have
−s
db = e k Pdx.
From which equation the relation is given between the arc traversed in the descent MA
and the speed acquired at the lowest point A. Q.E.I

### Corollary 1

708. Hence from the given arc of the descent AM = s, the height corresponding to the
speed acquired by the speed at A is given by : ...

Or if the point M and the speed at A are considered as the only variable quantities, then
there is this equation between them : ...

### Corollary 2

709. Hence from this equation, if some ratio was proposed between the arc of the
descent and the speeds acquired at the point A, the equation is found for the curve AM
satisfying the proposed conditions.

### Corollary 3

710. If the medium is not uniform, but dissimilar in some way with the exponent of
this arising set equal to q, in place of the equation found there is produced this
equation : ...

which is of similar use.

### Corollary 4

711. Because the value of e is greater than unity, clearly 2,7182818284, then e ∫ q or

...

e k is less than unity and on this account db < Pdx. In vacuo now it is the case that
db = Pdx.

## Scholium 1

712. In a similar manner in ascending it occurs that, when the body rises from A along
the arc AM = s to a corresponding height b. Then indeed it becomes :
s
db = e k Pdx.
or in a non-uniform medium :
db = e ∫ q Pdx .
Which formulas from the descents are found to be made serviceable on putting – s in
place of + s ; with which put in place the descent is always changed into the ascent.
Hence it is apparent, as for the descent always it is the case that db < Pdx, thus for the
ds
ascents it is always the case that db > Pdx, since e k or e ∫ q is greater than one.

### Corollary 5

713. Hence in a medium it will not be possible for an ascent of descent if b = Pdx or

... b = α Pdx ; for then we have e = α or s = const., in which equation no line is
continued.

### Corollary 6

714. Neither can a curve be found, for which we can write, either in the ascent or
descent, b = Qdx , with Q denoting some function of s and x, unless Q can be
∫
Q
prepared thus, so that P becomes equal to 1 on putting s and x = 0. Indeed it happens
that e ∫ q P = Q and e ∫ q has the value 1 on putting s = 0.


## Scholium 2

715. The reason for this is that we have put s to vanish with x vanishing; and on this
account the equation

...

thus must be integrated, so that b vanishes on putting x = 0. Moreover if b is given
thus, so that db is expressed in terms of dx , the equation can be divided by dx. On
which account it may not be possible to apply this condition to that equation, unless
perhaps the equation freely has this pleasing property. But if such a value of b is
given, in order that db = Rds or b = Rds with b vanishing on making s = 0, then the
∫
equation for the curve sought becomes :
Rds = e ∫ q Pdx ,

..

which is always for a real curve, provided Rds has a positive value, and gives rise to

..

### Example 1

716. Let the uniform force acting or P = g and the medium resists uniformly and the
curve MA has this required property, that the body in individual descents, descends
from A until it has acquires speeds which are in the square root ratio of the descended
arcs traversed. . Hence b is as s or b = αs ; thus the equation becomes : [p. 390]
−s
s
αds = ge k dx or αe k ds = gdx ,
the integral of which is :
s
αk (e k − 1) = gx
with a constant added, in order that s vanishes on making x = 0. There is hence had
s
αk + gx
e k = αk
and ks = l (αk + gx) − lαk .EULER'S MECHANICA VOL. 2.
Chapter 3f.
page 569
Translated and annotated by Ian Bruce.
Which differentiated gives :
ds = gdx ;
k
αk + gx
from which it is understood that the curve is tractrix for a thread of length k on a
horizontal base at a distance down from the point
A by the interval αgk . Hence the curve can be
constructed in this manner : upon the horizontal
base CE (Fig. 81) and with the string BC = k the
tractrix BA is described; then the horizontal line
DA is drawn at a distance DC = αgk from CE ;
with which done the part of the curve BA sought
is satisfied. Moreover we can place the vertical
line BC and B the highest point of the tractrix; from which it is understood that by
necessity α must be less than g. If indeed it should be greater, then it follows that CD
> CB and thus the point A becomes imaginary. But if it is the case that α = g , then
the point A falls on B and thus is the only satisfactory point. If it is the case that α = 0 ,
then the point A is at an infinite distance and the descending body loses all its speed.
Therefore since it must be the case that α < g , then b < gs.

### Example 2

717. As according to the above hypothesis of resistance and force acting, the curve
AMF (Fig. 82) is sought, upon which all the
ascents made from the point A thus have in
common, that the whole arcs for each of the
individual complete ascents are proportional to the
squares of the speeds of the motion starting from
A. [p. 391] Hence as before we have b = αs and
s
db = αds . But since for the ascents, db = ge k dx ,
−s
then αe k ds = gdx and on integrating,
−s
αk (1 − e k ) = gx.
Hence therefore it is found that
−s
αk − gx
e k = αk
and
ds = gdx or ( αk - x) ds = k .
k
αk − gx
g
dx
From which it is apparent that the satisfying curve is again a tractrix upon the
horizontal base CE made by a line of length k, but considered downwards, the cusp of
which is at B with BC becoming equal to k. Moreover taking CD = αgk ; and with DA
drawn to the horizontal then A is the point, in which all the ascents must begin. HenceEULER'S MECHANICA VOL. 2.
Chapter 3f.
Translated and annotated by Ian Bruce.
page 570
therefore it is also understood that α cannot be greater than g, as previously the point
A becomes imaginary. But if α = g or b = gs, then A falls on B and the arc traversed
for any ascent is equal to bg .
Scholium 3.
718. Many examples of this kind I omit here, since they can be resolved so easily from
the general formula ; nor do I report also on questions of this kind for other hypothesis
of the resistance, for which the solution of these are able to be found, since such
questions are now neither subject to discussion nor are considered curious enough
that the solutions of these are required. Therefore we proceed to more worthy
problems, in which the curves sought are tautochrones, upon which either all the
ascents or descents are completed in equal times.

