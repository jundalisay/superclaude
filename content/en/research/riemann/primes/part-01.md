---
title: "Prime Numbers"
description: ""
a: "Riemann"
c: "firebrick"
writer:
  name: Riemann
  url: https://en.wikipedia.org/wiki/Bernhard_Riemann
weight: 728
date: 2026-05-31
---



<!-- Bernhard Riemann November 1859.] -->


I will investigate into the accumulation of the prime numbers. 


For this investigation my point of departure is provided by the observation of Euler that the product

if one substitutes for p all prime numbers, and for n all whole numbers.
The function of the complex variable s which is represented by these two
expressions, wherever they converge, I denote by ζ(s). Both expressions
converge only when the real part of s is greater than 1; at the same time an
expression for the function can easily be found which always remains valid.
On making use of the equation

one first sees that


If one now considers the integral

from +∞ to +∞ taken in a positive sense around a domain which includes
the value 0 but no other point of discontinuity of the integrand in its interior,
then this is easily seen to be equal to

provided that, in the many-valued function (−x)

, the logarithm of −x is determined so as to be real when x is negative. Hence

where the integral has the meaning just specified.
This equation now gives the value of the function ζ(s) for all complex
numbers s and shows that this function is one-valued and finite for all finite
values of s with the exception of 1, and also that it is zero if s is equal to a
negative even integer.


If the real part of s is negative, then, instead of being taken in a positive sense around the specified domain, this integral can also be taken in
a negative sense around that domain containing all the remaining complex
quantities, since the integral taken though values of infinitely large modulus
is then infinitely small. However, in the interior of this domain, the integrand has discontinuities only where x becomes equal to a whole multiple of
±2πi, and the integral is thus equal to the sum of the integrals taken in a
negative sense around these values. But the integral around the value n2πi

is = (−n2πi)
s−1
(−2πi), one obtains from this

thus a relation between ζ(s) and ζ(1 − s), which, through the use of known
properties of the function Π, may be expressed as follows:

remains unchanged when s is replaced by 1 − s.
This property of the function induced me to introduce, in place of Π(s−1),
the integral Π 

into the general term of the series X 1
ns
, whereby one
obtains a very convenient expression for the function ζ(s). In fact
1
ns
Π

s
2
− 1

π
− s
2 =
Z∞
0
e
−nnπxx
s
2 −1
dx,
thus, if one sets
X∞
1
e
−nnπx = ψ(x)
then
Π

s
2
− 1

π
− s
2 ζ(s) = Z∞
0
ψ(x)x
s
2 −1
dx,
or since
2ψ(x) + 1 = x
− 1
2

2ψ

1
x

+ 1
, (Jacobi, Fund. S. 184)
Π

s
2
− 1

π
− s
2 ζ(s) = Z∞
1
ψ(x)x
s
2 −1
dx +
Z∞
1
ψ

1
x

x
s−3
2 dx
+
1
2
Z
1
0

x
s−3
2 − x
s
2 −1

dx
=
1
s(s − 1) +
Z∞
1
ψ(x)

x
s
2 −1 + x
−
1+s
2

dx.
I now set s =
1
2 + ti and
Π

s
2

(s − 1)π
− s
2 ζ(s) = ξ(t),
so that
ξ(t) = 1
2 − (tt +
1
4
)
Z∞
1
ψ(x)x
− 3
4 cos( 1
2
tlog x) dx
or, in addition,
ξ(t) = 4 Z∞
1
d(x
3
2ψ
0
(x))
dx x
− 1
4 cos( 1
2
tlog x) dx.
3

This function is finite for all finite values of t, and allows itself to be
developed in powers of tt as a very rapidly converging series. Since, for
a value of s whose real part is greater than 1, log ζ(s) = −
P
log(1 − p
−s
)

remains finite, and since the same holds for the logarithms of the other factors
of ξ(t), it follows that the function ξ(t) can only vanish if the imaginary part
of t lies between 1
2
i and −
1
2
i. The number of roots of ξ(t) = 0, whose real
parts lie between 0 and T is approximately
=
T
2π
log T
2π
−
T
2π
;
because the integral R
d log ξ(t), taken in a positive sense around the region
consisting of the values of t whose imaginary parts lie between 1
2
i and −
1
2
i
and whose real parts lie between 0 and T, is (up to a fraction of the order
of magnitude of the quantity 1
T
) equal to 
T log T
2π
− T

i; this integral
however is equal to the number of roots of ξ(t) = 0 lying within in this
region, multiplied by 2πi. One now finds indeed approximately this number
of real roots within these limits, and it is very probable that all roots are
real. Certainly one would wish for a stricter proof here; I have meanwhile
temporarily put aside the search for this after some fleeting futile attempts,
as it appears unnecessary for the next objective of my investigation.
If one denotes by α all the roots of the equation ξ(α) = 0, one can express
log ξ(t) as
P
log 
1 −
tt
αα
+ log ξ(0);
for, since the density of the roots of the quantity t grows with t only as
log t
2π
, it follows that this expression converges and becomes for an infinite t
only infinite as tlog t; thus it differs from log ξ(t) by a function of tt, that
for a finite t remains continuous and finite and, when divided by tt, becomes
infinitely small for infinite t. This difference is consequently a constant, whose
value can be determined through setting t = 0.
With the assistance of these methods, the number of prime numbers that
are smaller than x can now be determined.
Let F(x) be equal to this number when x is not exactly equal to a prime
number; but let it be greater by 1
2 when x is a prime number, so that, for
any x at which there is a jump in the value in F(x),
F(x) = F(x + 0) + F(x − 0)
2
.
If in the identity
log ζ(s) = −
P
log(1 − p
−s
) = P
p
−s +
1
2
P
p
−2s +
1
3
P
p
−3s + · · ·
4
one now replaces
p
−s
by s
Z∞
p
x
−s−1
ds, p−2s
by s
Z∞
p
2
x
−s−1
ds, . . . ,
one obtains
log ζ(s)
s
=
Z∞
1
f(x)x
−s−1
dx,
if one denotes
F(x) + 1
2
F(x
1
2 ) + 1
3
F(x
1
3 ) + · · ·
by f(x).
This equation is valid for each complex value a + bi of s for which a > 1.
If, though, the equation
g(s) = Z∞
0
h(x)x
−s
d log x
holds within this range, then, by making use of Fourier ’s theorem, one can
express the function h in terms of the function g. The equation decomposes,
if h(x) is real and
g(a + bi) = g1(b) + ig2(b),
into the two following:
g1(b) = Z∞
0
h(x)x
−a
cos(b log x) d log x,
ig2(b) = −i
Z∞
0
h(x)x
−a
sin(b log x) d log x.
If one multiplies both equations with
(cos(b log y) + isin(b log y)) db
and integrates them from −∞ to +∞, then one obtains πh(y)y
−α on the
right hand side in both, on account of Fourier ’s theorems; thus, if one adds
both equations and multiplies them by iyα
, one obtains
2πih(y) =
aZ
+∞i
a−∞i
g(s)y
s
ds,
5
where the integration is carried out so that the real part of s remains constant.
For a value of y at which there is a jump in the value of h(y), the integral
takes on the mean of the values of the function h on either side of the jump.
From the manner in which the function f was defined, we see that it has the
same property, and hence in full generality
f(y) = 1
2πi
aZ
+∞i
a−∞i
log ζ(s)
s
y
s
ds.
One can substitute for log ζ the expression
s
2
log π − log(s − 1) − log Π 
s
2

+
Pα
log
1 +
(s −
1
2
)
2
αα !
+ log ξ(0)
found earlier; however the integrals of the individual terms of this expression
do not converge, when extended to infinity, for which reason it is appropriate
to convert the previous equation by means of integration by parts into
f(x) = −
1
2πi
1
log x
aZ
+∞i
a−∞i
d
log ζ(s)
s
ds x
s
ds
Since
− log Π 
s
2

= lim nX=m
n=1
log 
1 +
s
2n

−
s
2
log m
!
,
for m = ∞ and therefore
−
d
1
s
log Π 
s
2

ds =
X∞
1
d
1
s
log 
1 +
s
2n

ds ,
it then follows that all the terms of the expression for f(x), with the exception
of
1
2πi
1
log x
aZ
+∞i
a−∞i
1
ss
log ξ(0)x
s
ds = log ξ(0),
take the form
±
1
2πi
1
log x
aZ
+∞i
a−∞i
d

1
s
log
1 −
s
β
!!
ds x
s
ds.
6
But now
d

1
s
log
1 −
s
β
!!
dβ =
1
(β − s)β
,
and, if the real part of s is larger than the real part of β,
−
1
2πi
aZ
+∞i
a−∞i
x
s ds
(β − s)β
=
x
β
β
=
Zx
∞
x
β−1
dx,
or
=
Zx
0
x
β−1
dx,
depending on whether the real part of β is negative or positive. One has as
a result
1
2πi
1
log x
aZ
+∞i
a−∞i
d

1
s
log
1 −
s
β
!!
ds x
s
ds
= −
1
2πi
aZ
+∞i
a−∞i
1
s
log
1 −
s
β
!
x
s
ds
=
Zx
∞
x
β−1
log x
dx + const.
in the first, and
=
Zx
0
x
β−1
log x
dx + const.
in the second case.
In the first case the constant of integration is determined if one lets the
real part of β become infinitely negative; in the second case the integral from 0
to x takes on values separated by 2πi, depending on whether the integration
is taken through complex values with positive or negative argument, and
becomes infinitely small, for the former path, when the coefficient of i in the
value of β becomes infinitely positive, but for the latter, when this coefficient
becomes infinitely negative. From this it is seen how on the left hand side
log
1 −
s
β
!
is to be determined in order that the constants of integration
disappear.
7
Through the insertion of these values in the expression for f(x) one obtains
f(x) = Li(x) −
Pα

Li 
x
1
2 +αi
+ Li 
x
1
2 −αi +
Z∞
x
1
x
2 − 1
dx
x log x
+ log ξ(0),
if in Pα
one substitutes for α all positive roots (or roots having a positive
real part) of the equation ξ(α) = 0, ordered by their magnitude. It may
easily be shown, by means of a more thorough discussion of the function ξ,
that with this ordering of terms the value of the series
P 
Li 
x
1
2 +αi
+ Li 
x
1
2 −αi log x
agrees with the limiting value to which
1
2πi
aZ
+bi
a−bi
d
1
s
P
log
1 +
(s −
1
2
)
2
αα !
ds x
s
ds
converges as the quantity b increases without bound; however when reordered it can take on any arbitrary real value.
From f(x) one obtains F(x) by inversion of the relation
f(x) = P
1
n
F

x
1
n

,
to obtain the equation
F(x) = P
(−1)µ
1
m
f

x
1
m

,
in which one substitutes for m the series consisting of those natural numbers
that are not divisible by any square other than 1, and in which µ denotes
the number of prime factors of m.
If one restricts Pα
to a finite number of terms, then the derivative of the
expression for f(x) or, up to a part diminishing very rapidly with growing x,
1
log x
− 2
Pα
cos(α log x)x
− 1
2
log x
gives an approximating expression for the density of the prime number +
half the density of the squares of the prime numbers + a third of the density
of the cubes of the prime numbers etc. at the magnitude x.
8
The known approximating expression F(x) = Li(x) is therefore valid up
to quantities of the order x
1
2 and gives somewhat too large a value; because
the non-periodic terms in the expression for F(x) are, apart from quantities
that do not grow infinite with x:
Li(x) −
1
2
Li(x
1
2 ) −
1
3
Li(x
1
3 ) −
1
5
Li(x
1
5 ) + 1
6
Li(x
1
6 ) −
1
7
Li(x
1
7 ) + · · ·

In the comparison of Li(x) with the number of prime numbers less than x, undertaken by Gauss and Goldschmidt and carried through up
to x = three million, this number has shown itself out to be, in the first
hundred thousand, always less than Li(x); in fact the difference grows, with
many fluctuations, gradually with x. 

But also the increase and decrease in
the density of the primes from place to place that is dependent on the periodic
terms has already excited attention, without however any law governing this
behaviour having been observed. 

In any future count it would be interesting
to keep track of the influence of the individual periodic terms in the expression
for the density of the prime numbers. A more regular behaviour than that
of F(x) would be exhibited by the function f(x), which already in the first
hundred is seen very distinctly to agree on average with Li(x) + log ξ(0).
9