---
heading: Chapter 2g
title: "The Motion Of A Point On A Given Line In A Vacuum"
date: 2025-03-20
weight: 106
description: "Motion is the translation of a body from the place it occupies to another place. True rest is a body remaining at the same place."
author: "Euler"
draft: true
c: "firebrick"
---



### PROPOSITION 49. Problem.

430. If a body is acted on by any forces, to find the curve AM (Fig. 53), upon which all
the descents are made in equal times as far as to the point A.

Solution.

Whatever the forces should be acting, all these can be reduced to two forces, of which
the first now always pulls the body downwards along MQ, and the other pulls the body
horizontally along MP. Let the force which pulls along
MQ be equal to P, and the force which pulls along MP be equal to Q; call AP = x, PM = y, AM = s ; let the
speed at the point A correspond to the height b, and the
speed at M correspond to the height v. With these in
place, the equation arises v = b − Pdx − Qdy .


Whereby if we put h = b and

∫
∫ Pdx + ∫ Qdy = z , then v

is a function of one dimension of h and z, and therefore
m = 1 (408). On this account, this equation is obtained
for the curve sought :


s = 2 a z = 2 a( Pdx + Qdy )

or

ds =
aPdx + aQdy
.
a( ∫ Pdx + ∫ Qdy )

But since we have ds = ( dx 2 + dy 2 )

Therefore at the starting point A , where Pdx + Qdy = 0 , then Pdx + Qdy = 0 or

dy : dx = − P : Q.

The time of this descent is equal to the time, [p. 212] according to the hypothesis of gravity equal to
1, in which a pendulum of length 2a completes the descent. Q.E.I.

### Scholium

431. If a curve is obtained, upon which all the descents are made in the same time, it is
easy to give the curves, upon which all the oscillations are performed in the same time.

For since in a vacuum the ascents are similar to the descents, every curve, which is a
tautochrone for the descents is such too for the ascents. Whereby two tautochrone curves
joined at the point A give a curve, upon which all the oscillations are isochrones. But yet
by this reason the other problem, in which all the isochronous oscillations produced are
required, is not perfectly resolved ; for it is possible to give an infinitude of curves
satisfying this question, yet the parts of which are not suited to bringing about isochrones
in the descents alone. Moreover the problem can be proposed in this manner : given any
curve to find another, which joined with that curve produces all oscillations of equal
times. 

Before we advance to this problem, we bring forwards another problem, in which a curve is sought adjoined to a given curve, so that
all the descents on this composite curve are completed in equal times. Which problem has
given me the most difficulty since it was proposed to me by the most celebrated Dan.
Bernoulli. 

Yet this problem can also be solved by this method, which I use in the investigation of tautochrones.


## PROPOSITION 50. Problem

432. According to the hypothesis of gravity acting uniformly downwards, if the curve ANB is given (Fig. 54), to find the curve BMF adjoined to that curve, so that all the descents upon the composite curve as far as A are completed in equal times, the descent
starting from any point of the curve BMF.

### Solution

If the descent starts from the lowest point B of the curve
sought, the descent is made along the given curve BNA only;
hence the time of that, which is also given, must be equal to the
times of all the descents. Let AD = a, AQ = u, AN = t and the
equation is given between u and t. Moreover, for the curve
sought, let BP = x, and BM = s. Now in any descent, let the
speed at the point B correspond to the height b; the speed at the
point M corresponds to the height b − x and the speed at N
corresponds to the height a + b − u . Therefore the descent time
ds
along the unknown curve is equal to .. thus integrated, ... ∫ ( b− x ) so that it vanishes on putting x = 0, and on putting x = b in place after the integration.

Thus integrated, so ...

The time along the known curve BNA is given by ∫ ( a + b −u ) that it vanishes on putting u = 0, and putting u = a after the integration. [p. 214]
ds , after making x = b, must thus be arranged in order 

Therefore the expression
∫ ( b− x )
that, if it is added to the expression of the time along BNA, then the letter b is not present
within the sum ; for then the total time of the descent is a constant quantity and does not
depend on b, or on the point of the curve BMF at which the descent started. Let the
dt
, after putting u = a, be equal to this series :
integral
∫ ( a + b −u )
Whereby, if the descent starts from the point B, the time of the whole descent is equal to
k, as b vanishes. Therefore k itself must be equal to the time of the whole descent along
the composite curve, the start of the descent being taken from any point of the curve
BMF. Now let the nature of the curve sought BMF be expressed by the following series :
ds = − Adx x − Bxdx x − Cx 2dx x − Dx3dx x − etc.
− Fdx − Gxdx − Hx 2dx − Ix3dx − etc.
The ratio of the periphery to the diameter is put as π : 1 , which in fact is l − 1 : − − 1,
thus so that it becomes :EULER'S MECHANICA VOL. 2.
Chapter 2g
page 334
Translated and annotated by Ian Bruce.
π = − l −1 = − 1 • l − 1.
−1
Now after integration, on putting x = b,
∫
Adx x
= 12 π Ab ,
( b− x )
∫
Bxdx x
= 12..34 π Bb 2 ,
( b− x )
∫
Cx 2 dx x
= 12..34..56 π Cb3
( b− x )
etc.
and
∫ ( b− x ) = 2F b , ∫ ( b− x ) = 23 2Gb b , ∫ Hx( b−dxx ) = 32..54 2Hb b etc.
[We give an elementary working of the first integration here : ∫ Adx x = 12 π Ab .
( b− x )
dx x
. Let X = x − A and A = b2 , then
∫ ( b− x ) = ∫ ( bxxdx− x ) = ∫ −xdx
( x− )
Fdx x
2
∫
xdx
b2
4
−( x − b2 )
2
length, since
=
2
Gdx x
b2
4
b
2
2
2
( X + A )dX
∫ A − X = ∫ AXdX− X + ∫ AAdX− X . The second integral is just the arc
2
2
2
2
2
2
∫ AdX− X = arcsin( XA ) , for on substituting X = A sinθ , and noting that the
2
2
π
2
limits are 0 and b, or – A and A, the integral becomes A dθ = b2π A , on inserting the
∫
−π
2
limits; note that Euler specified the limits each time, as the notion of a definite integral
had not yet been formed, and the process of integration was viewed by him as the
solution of a first order differential equation, which of course is correct. The first integral
XdX is zero as it is an odd function, and the other integrations follow on integrating
2
2
∫ A −X
by parts successively. It is also possible, of course, to write the second integral as
∫ AAdX− X = − 1∫ XAdX− A = − 1.log X + X − A This has been done, as Euler has
2
2
2
2
2
2
performed the integration in this way using logarithms; which can be examined below in
Example 1, (438), in which it is necessary to make the connection π = − l −1 = − 1 • l − 1
−1
to relate the logarithmic result with the elementary derivation. Whether or not this is how
Euler came upon this formula for π is still an open question, but here he has at least used
the result to obtain the correct value of an integral, which is highly suggestive.]
Since therefore the time for BNA is equal to k, from the expression of these terms taken
jointly with these other terms, the homogeneous terms involving b must be removed.
Therefore the series becomes :
1 π A = α or A = 2 • α
2
1 π
in a like manner,
β
γ
B = 12..34 • π , C = 12..34..56 • π , etc.EULER'S MECHANICA VOL. 2.
Chapter 2g
Translated and annotated by Ian Bruce.
and
ξ
page 335
η
F = 2 , G = 32 • 2 , H = 32..54 • θ2 , I = 32..54..76 • ι2 etc. [p. 215]
On this account, since α , β , γ , δ etc, ξ , η , θ , ι etc are known quantities as the curve ANB
is given, this equation is obtained for the curve sought BMF :
ds = −πdx ( 12 α x + 12..34 • β x x + 12..34..56 γx 2 x + etc.)
- dx
(ξ + 32 ηx + 32..54 • θx 2 + 32..54..76 ιx3 + etc.)
2
the integral of which is
s = −π2 ( 23 αx x + 32..54 • β x 2 x + 32..54..76 γx3 x + etc.)
- 12 (ξx + 34 ηx 2 + 34..56 • θx3 + 34..56..78 ιx 4 + etc.)
I give the construction of this series: [The first integral is the time to fall the distance BN
from rest at B; the second integral is the time to fall the total distance MBN starting from
rest at M.]
dt
dt
−
,
∫ ( a −u ) ∫ ( a + b −u )
the integral is taken thus, so that it vanishes on setting u = 0 [For the time to slide down
AB is the same as the time to slide down the whole curve AB + BM, as the curve is a
tautochrone]; then [after integrating] on making u = a a certain function of b is produced.
Now x( 1 − z ) is put in place of b, and what is produced is to be called R. Then integrate
Rdz , while x is considered as constant, thus as by putting z = 0. Then put z = 1 and a
z
function of x is produced, which is equal to πs . And in this way an equation is produced
x
for the curve sought. Q.E.I

### Scholium 1

433. Clearly this singular but yet easy construction follows from that method which I
have used in solving a former proposition by C. Riccati, [E 31: Constructio aequationis
differentialis ax n dx = dy + y 2dx , Comment. acad. sc. Petrop. 6 (1732/3), 1738, p. 231;
O.O., series I, vol. 22. P. St.] and this previous solution gives the greatest joy, since,
whatever the curve given should be, that sought can always be constructed with the help
of this method, even if the equation itself, for which the curve is found, often can barely
be handled. Besides it gives at once a finite equation, that otherwise would be found from
the sum of the series.

### Corollary 1
−ξdx
434. If in the equation found for the curve BMF , put x = 0, then ds = 2 , hence the
inclination of the curve at B to the vertical BP is known. Since therefore it is apparent
how these two curves touch each other, it is also required to determine the position of the
tangent to the curve ANB at B.
Corollary 2.
435. Let DQ = p and BN = q (Fig. 54) ; then dt = −dq and a − u = p. Hence the time to
traverse BNA is equal to
∫ ( b+ p ) with p = a put in this integral. Let dq = Ldp be the
dq
relation [between p and q] at the point B, and generally it is of the form dq = Ldp + Pdp
with P being a function of p, such that it vanishes on putting p = 0. Therefore we may
consider, with p vanishing, what kind of terms this equation
∫ ( b+ p ) = ∫ ( b+ p ) produces. Moreover on putting p = a it produces :
dq
Ldp
2 L ( b + a ) − 2 L b , [on integrating between 0 and a,] thus in the series taken, at the
beginning it produces the term − 2 L b (436), which agrees with ξ b ; hence this makes
ξ
−ξdp
L = − 2 and dq = 2 . From which it is understood that the given curve and that sought
have a common tangent at the joining point B.
Scholium 2.
436. I have said that 2 L ( b + a ) − 2 L b [expanded] in a series gives this term − 2 L b ;
a + b + etc. with other comparable
for the first term ( b + a ) gives these terms
2 a
terms. [p. 217] Moreover here, only the term Ldp gives a term of this form ξ b .
Whereby from that alone, the inclination of the curve at B can be concluded.
Scholium 3.
437. The construction of the curve sought that I have given, can also be changed in this
dt
dt
way : after putting u = a in the [evaluated] integral
−
, and on
∫ ( a −u ) ∫ ( a + b −u )
writing xz in place of b, and the expression produced is called R, then
Rdz is
( 1− z )
integrated, in which x is treated as a constant quantity [i. e., the height of the point on the
upper curve is fixed meantime], thus so that it vanishes on putting z = 0. Then on putting
z = 1, that which comes about is equal to πs ; and by this arrangement a more convenient
x
equation is obtained for the curve sought.

### Example 1

438. Let the given curve ANB be a cycloid, thus so that the equation of the cycloid
becomes t = 2 cu or dt = cdu [note that this form of the inverted cycloid with upward
cu pointing cusps is given in E001, p. 3 in this series, where c here denotes the diameter of
the generating circle, is taken as 2a there, while u = y = 2a sin 2 ψ or sinψ = uc , and the
arc s = t = 4a sinψ = 2 uc , where 2ψ is the angle turned through by the generating
circle, and the origin is taken at the lowest point on the curve; note in the integral below,
which can be verified by differentiation, that Euler has changed the sign under the square
root to introduce the − 1 in the numerator and used a form of logarithmic integration; a
is simply the constant of integration.]; then [considering the whole curve as a cycloid]
On putting u = a, there is obtained :

Put xz in place of b, then the expression becomes :
which multiplied by
dz , gives
( 1− z )
the integral of which is : [p. 218]
which with the two final terms are equal to each other since π = − 1.l − 1.
Now put z = 1; and there is obtained  .... π,
x
which must be put equal to πs . Hence this equation comes about :
x
s = −2 ac + 2 c( a + x )
or
s + ANB = ANBM = 2 c( AD + BP ) .

From which it is apparent that the curve BMF is continuous with the given curve AND,
thus, so that joined together they make a whole cycloid ; which itself follows from the
nature of tautochronism, which the cycloid has been found to satisfy.

Example 2.

439. Let the given right line ANB be inclined at some angle to the horizontal ; the
equivalent to the arc length is given by dt = ndu and
Placing u = a and b = xz; then we have

On account of which : ...

Now,
on integration, putting z = 1. But
, if after integration we put z = 1,
∫ ( a −adzaz++xzdz
xz − xz )
2
gives a + a + x A. 2a +ax
with A. 2a +ax
denoting the arc of a circle of radius equal to 1, the
x
x
2 x
. 

On this account, 
sine of which is 2a +ax
x
and hence [p. 219]
The differential of this equation is :EULER'S MECHANICA VOL. 2.
Chapter 2g
Translated and annotated by Ian Bruce.
page 339
Moreover this curve cannot ascend beyond a certain height, but only as far as in F, where
we have ds = dx. Therefore on putting ds = dx we have nn−1 = π1 A. 2a +ax
.
x
Hence the ratio becomes : as n : n − 1 thus the semi periphery of the circle, of which the
radius is 1, to the arc of the same circle, of which the cosine is m; then aa +− xx = m and
a( 1− m )
x = a + m . So that, if the DAB is 600, then n = 2 and m = 0 and thus BE = a = AD. From
which it follows, if the angle DAB is greater than 600, then x > a, but if that angle is less
than 600, then x < a. Moreover from the differential equation it is required that now as we
have noted at the point B to be ds = ndx, then now always as far as F, to become ds <
ndx, where it is ds = dx.
Corollary 3.
440. If the right line BNA is horizontal, then n =∝ and a = 0. Moreover if n a =
then ds = sdx
−
x
f ,
2 dx fx
, found from the differential equation, of which the integral is
πx
s = − 2 dx f = 4 f
x
π
x x
π x
∫
and thus
s = π4
fx .
Therefore the curve is a cycloid, of which the lowest element of the given curve is kept in
place.
Corollary 4. [p. 220]
441. If the differential equation ds = ndx − ndx
A. 2a +ax
is again differentiated with dx put
π
x
constant, there is produced : dds =
− nadx 2 . From which equation it follows that the
π ( a + x ) ax
radius of osculation of the curve at B becomes infinitely small.
Scholium 4.
442. From the general differential equation
it always follows to be the case that dds =∝ on putting x = 0, unless α = 0 . Therefore as
often as α differs from zero, the radius of osculation of the curve sought is equal to zero
at B. But if it is the case that α = 0 , then the radius of osculation of the curve BMF at theEULER'S MECHANICA VOL. 2.
Chapter 2g
page 340
Translated and annotated by Ian Bruce.
ξ
2
ξ
2
point B is found to equal 3η ( 4 − 1) . From which in whatever proposed example, the
radius of osculation at the point B becomes known at once.
Example 3.
443. Let the given line ANB have this equation, so that it becomes dt = Cu n du , then the
time to pass along NA is equal to
∫ (Cua +bdu−u ) . Putting
n
a + b = f and f − u = r 2 ; then we have u = f − r 2 and
Now since [p. 221]
du
= −2dr , then the integral
( a + b −u )
∫ (Cua +bdu−u ) =
n
Moreover since this quantity must vanish on putting u = 0 or r =
quantity must be added equal to
f , the constant
Now on putting u = a or r = b and in place of the series 1 − 1n.3 + n1..n2−.51 − etc. there is
placed N; the total time of the descent along BNA is equal to : 2CNf n + 2
1
Restoring a + b in place of f and this time is given :
Therefore this series compared with the assumed series for expressing this time gives :EULER'S MECHANICA VOL. 2.
Chapter 2g
page 341
Translated and annotated by Ian Bruce.
Hence there arises :
Now the sum of this latter series is Cdx(a + x) n , the integral of which is
C ( a + x ) n+1
. [p.
n +1
222] Whereby after integration there is obtained :
Which is the equation for the curve sought BMF, which as often as it is constructed from
a finite number of terms, so n becomes the terminus of this series − 12 , 12 , 32 , 52 etc. Now
∫
N = dp (1 − pp ) n , if p is put equal to 1 after the integration. And with this factor
substituted it becomes :
Whereby if n = − 12 , since the integral is
∫ (1− pp) = π2 ,
dp
then N = π2 ; if n = 12 , then N = π4 ; if n = 32 , then N = 34..π4 ; if n = 52 , then N = 34..56..π4 ;
if n = 72 , then N = 34..56..78..π4 etc. But since, if n = 0, then N = 1; then, if n = 1, then N = 23 ;
if n = 2, then N = 32..54 ; if n = 3, then N = 32..54..76 etc.
For if the curve is a cycloid, then n = − 12 and thus it becomesEULER'S MECHANICA VOL. 2.
Chapter 2g
page 342
Translated and annotated by Ian Bruce.
s = 2C ( a + x ) − 2C a ,
as we found above (438).
Scholium 5.
n
444. Therefore, when dt = Cu du , in this case the value for s is found and from the
nature of the method it is understood, if dt is equal to the sum of some number of terms of
this kind, then s is equal to the sum of the series of the individual terms produced.
Therefore for this reason, if some curve is given, [p. 223] the series of terms of the form
Cu n du is sought equal to dt. And from all these the corresponding value of s is obtained.
For if this is the nature of the given line ANB : dt = du c + du u , the first term gives
u
C=
c
c and n = − 12 , thus the arc becomes
s = 2 c(a + x) − 2 ac ; the next term gives C = 1 and n = 12 and N = π4 , hence there
c
arises :
Hence the curve sought is expressed by the following equation :
Example 4.
445. Let the given curve be a circle of diameter c; then the equation is
Now with some term taken separately and the value of ds found; there is obtained, on
collecting all the terms :
From which the following equation arises :EULER'S MECHANICA VOL. 2.
Chapter 2g
Translated and annotated by Ian Bruce.
page 343
Which expression can be changed into many other forms.

