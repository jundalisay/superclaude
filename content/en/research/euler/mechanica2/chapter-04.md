---
heading: Chapter 4
title: "The Motion Of A Point On A Given Surface"
date: 2025-03-20
weight: 230
description: ""
author: "Euler"
c: "firebrick"
---


## PROPOSITION 90. Problem

821. For a given path Mmμ on some surface (Fig. 91) to find the position of this path
with respect to a given plane APQ, and of the radius of osculation of this path at M, as
long as neither the position nor the length of the radius lies on the surface.

### Solution

With the plane APQ taken for argument's sake [in the plane of the page] and in that
plane the axis AP is taken, with respect to which the position of the curve Mmμ is to be
determined ; now from three nearby points M, m and μ of the given path on the surface
the perpendiculars MQ, mq, μρ are sent to the plane APQ and the perpendiculars QP, qp,
and ρπ [are dropped] from the points Q, q, ρ to the axis AP. Now the initial position of
the abscissa at A are AP = x, PQ = y and QM = z. Again since the given surface is put in 
place, an equation is given expressing the nature of this between these three variables x, y
and z; and this equation is [of the form]:
dz = Pdx + Qdy .

Since if this equation is connected with another, a certain line present on the surface is
expressed; whereby, as the given line Mmμ is put in place, as well as the equation
dz = Pdx + Qdy above, another equation is given, from which the curve Mmμ can be
determined, [p. 458] but there is no need to represent that here. Let the elements of the
abscissa Pp , pπ = dx be equal to each other, or the element is dx taken to be constant.
[The derivations that follow rely heavily on the section §68 onwards at the end of Ch. 1]

Hence there is:
..

and


With these in place, let MN be the normal to the surface at the point M, and N the point at
which this normal crosses the plane APQ ; the perpendicular NH is sent from N to the
axis ; then
(68).
∂z and Q = ∂z at M.
[For we can write in modern terms : dz = ∂∂xz dx + ∂∂yz dy ; hence P = dx
∂y
If the line QH' (not shown) is drawn parallel to AH in the xz-plane, we have
QH '
= tan(QMH ' ) = ∂∂xz , and hence we have the subnormal QH' = z∂∂xz = Pz as required.
MQ
Similarly, for the line QN' (not shown) is drawn parallel to HN in the yz-plane, we have
QN '
= tan(QN ' M ) = ∂∂yz , and hence we have the subnormal QN' = z∂∂yz = Qz as required,
MQ
and the signs can be taken into account ; see Euler's explanation and the note on page 19.
Note also that Euler has in mind very simple surfaces such as those of cylinders, cones,
and surfaces of revolution about an axis, so that only one radius of curvature has to be
found. You may wish to copy the above figure and annotate it, as this helps greatly in
understanding the working.]
Now let MR be the position of the line of the radius of osculation of the curve Mmμ and
R the point of incidence of this in the plane APQ; then with the perpendicular RX sent
from R to the axis :
and

The length of the radius of osculation , clearly MO, is equal to
(72).

Finally the plane considered, in which the elements Mm , mμ are in place, is
produced until it intersects the plane APQ, and let the line of intersection be RKI, which
the perpendiculars from A and P cross at K and V; it was found above (68) that
Now since we have XR − PV : AX − AP = PV : PI , then

Now
and
With which in place, we have : [p. 459]
and
Hence, it is found that :
Now the inclination of the plane in which the elements Mm et mμ are placed to the plane
APR can be found by sending the perpendicular QS from Q to the line of intersection RI;
QM
for the tangent of the angle of inclination is equal to QS . But since
IV : PI = QV : QS , then that tangent is equal to :

The tangent of the angle NMR, that the radius of osculation makes with the normal to
the surface, is equal to (71) :
Therefore from these everything can be deduced that is required in understanding the
position of the curve Mmμ . Q.E.I.

Corollary 1.

822. The projection of the curve Mmμ in the plane APQ is the curve Qqρ , the nature of
which is expressed from the equation between x and y. Whereby this projection is
obtained, if with the help of the equations dz = Pdz + Qdy and that by which the curve is
determined on the surface, a new equation is formed from the elimination of the variable
z, which is between x and y only.

Corollary 2.

823. In a like manner, if x is eliminated, in order that an equation is produced between y
and z, from this equation the projection of the curve Mmμ is defined in the plane normal
to the axis AX. [p. 460] And the equation, in which y is not present, but only x and z,
gives the projection of the curve Mmμ in the plane normal to the plane APQ cutting the
axis AX.

Corollary 3.

824. But the nature of the curve Mmμ is known distinctly from any two of these normal
projections in two of the planes in turn. Such knowledge is also supplied by a single
projection together with the surface itself.

Corollary 4.

825. On account of which the curve on the surface is required to be designated by some
characters as well as the equation dz = Pdx + Qdy , from which surface is determined, and
an equation is given involving only two variables for some projection of the curve Mmμ .

Corollary 5.

826. If the surface is cut by a plane, in a like manner to that in which the cone is accustomed to be cut producing the conic sections, then the curve arises from this section
is in the same plane. Whereby in these cases as the position of the right line IR is constant
so the inclination of the plane IMR to the plane APQ.

Example.

827. Therefore if some surface is given and that is cut by the plane IMR, the curve is
sought arising from this section. [p. 461] Accordingly, there is put in place

AI = a , AK = b and the tangent of the angle of inclination of the plane IMR to the plane
APQ is equal to m; then
zdxddy − ydxddz
a = dzddy − dyddz − x and b =
zdxddy − ydxddz − xdzddy + xdyddz
dxddz
and
m=
( dx 2 ddz 2 + ( dzddy − dyddz ) 2 )
dxddy
From which equations joined with dz = Pdx + Qdy the nature of the curve generated by
this section can be determined. Now from previously from the two equations there arises
b = dzddy − dyddz or ddz : ddy = adz : bdx + ady ;
a
dxddz
and the integral of this equation is :
1 ldz = 1 l (bdx + ady ) - 1 lc or cdz = bdx + ady
a
a
a
and again
Now in the first equation if in place of ddz and ddy the proportionals of these are
substituted, there is produced
a+x=
bzdx + azdy − aydz
or abdz + bxdz = bzdx + azdy − aydz ,
bdz
and the integral of this divided by zz is this :
c − ab
=
z
bx + ay
or cz = bx + ay + ab;
z
hence what before was ff, this is ab, or ff = ab. Now the constant c of the third equation
can be defined ; moreover then
dz ( a 2 + b 2 )
m = bdx + ady
or
dz ( a 2 + b 2 )
= bdx + ady .
m
Where the above letter is
c=
(a 2 +b 2 )
m
and in addition the nature of the surface is expressed by this equation :
z (a 2 +b 2 )
= bx + ay + ab ,
mEULER'S MECHANICA VOL. 2.
Chapter 4a.
Translated and annotated by Ian Bruce.
page 698
from which the nature of the curve sought can be derived. Moreover because the whole
curve sought is in the plane IMR, most conveniently that can be expressed from the
equation between the orthogonal coordinates taken in the same plane. Hence with IR
taken for the axis, from M to that there is sent the perpendicular MS and calling IS = t and
MS = u. Now we have IA : AK = IP : PV or
and
Again we have [p. 462]
(a 2 + b 2 ) : a =
z (a 2 +b 2 )
: QS ;
ma
whereby
From these there is produced :
From which there arises :
and with these values substituted in the equation
z ( a 2 +b 2 )
= bx + ay + ab there is
m
produced :
Therefore with these values substituted in place of x, y and z in the equation of the surface
there comes about the equation between t and u, or the orthogonal coordinates of the
curve sought.

Corollary 6.

828. If the intersection of the cutting plane IR falls on the axis AX and I is taken at A, then

Corollary 7.

829. If the intersection IR of the cutting plane IMR with the plane APQ is normal to the
axis AX, then b =∝ . Whereby there is produced :

Corollary 8.

830. Since the values to be substituted in place of z, y and x are of one dimension of t and
u, it is evident that the equation between t and u is not possible to have more dimensions
than the equation itself between z, y and x.

Corollary 9. [p. 463]

831. Whereby if the equation between z, y and x is of two dimensions, there are many
surfaces of this kind given in addition to the cone, all the sections made by a plane are
conic sections.

## Scholium.

832. In that dissertation in Book III of the Commentaries [of the St. Petersburg Ac. of
Sc.], in which I have determined the shortest line on a surface, I have pursued three kinds
of surfaces, which are the cylinder, the cone, and the surface of revolution.
[L. Euleri Commentatio 9 (E09): Concerning the shortest line on a surface joining any
two points. Comment. acad. sc. Petrop. 3 (1728), 1732, p. 110; Opera Omnia series I, vol.
25.]

The general equation dz = Pdx + Qdy gives a cylindrical surface, if P vanishes
and Q depends only on y and z, thus so that the abscissa x does not enter the equation for
this kind of surface ; for all the sections are parallel to each other and are equal also ; for
these the equation is therefore dz = Qdy .

I refer all these surfaces to the genus of confides, which are generated by drawing
right lines from some points of an individual curve to a fixed point placed beyond the
plane of that curve. Which surfaces have this property, that all parallel sections are
similar to each other and the homologous lengths of these are as the distance of the
sections from the vertex of the cone. Now equations for the surfaces of this kind, if
indeed the vertex of the cone is at A, thus are compared, so that x, y and z everywhere
together constitute a number of the same dimensions.

Finally I have turned or rounded surfaces [of revolution], which are generated by the
rotation of any curve about an axis ; if AX were such an axis, on putting x constant, the
equation between y and z gives a circle with centre P. Whereby the equation for these has
this form

where Pz only depends on x ; or Q = − z and P = Xz with X present as a function of x.
Moreover as in these turned surfaces all the sections are circles normal to the axis,
thus such surfaces can be taken, the sections of which are any similar curves normal to
the axis. All such surfaces hold this general property, that any function of x is everywhere
equal to a function of y and z of the same number of dimensions. As, if the number of this
dimension is n, for this is a property of the equation Pdx = Rdz + Qdy that it is
[See E044.] From which, or the equation for a surface of this kind can at once be
concluded from what has been given.
