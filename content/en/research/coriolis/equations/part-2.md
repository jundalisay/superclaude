---
heading: Part 2
title: The Relative vis viva Equation
weight: 2
date: 2026-05-21
description: ""
c: "darkgoldenrod"
a: Coriolis
---



These second forces disappear in the equation of *vis viva* just as ordinary centrifugal forces do, since they are directed perpendicularly to the relative velocities, and the equation of *vis viva* is obtained only by projecting the forces onto the direction of the relative velocities themselves.

They also disappear when the relative motions must take place in planes parallel to the axis of rotation of the moving planes, because the equations of motion in these planes will not involve forces which, being perpendicular to the axis of rotation, will also be in the planes in which the motions occur.

One can, if desired, give another statement of the correction terms due to these composite centrifugal forces, when they are considered not in isolation in the expression of each force, but in any equation of motion obtained by choosing a system of virtual velocities.

By calling δx, δy, δz, etc., the components of the virtual velocities taken in the relative motion — that is to say, the velocities compatible with the constraints expressed by L = 0, etc. — one will have, by indicating by Σ a sum extending to all the points that enter into the equation L = 0:

$$
\sum \left( \frac{dL}{dx} \delta x + \frac{dL}{dy} \delta y + \frac{dL}{dz} \delta z \right) = 0.
$$

By multiplying each of the equations (A) by the corresponding virtual velocity and adding them all together, the terms in $\frac{dl}{dx}$, $\frac{dl}{dy}$, $\frac{dl}{dz}$, etc., will cancel out — that is to say, the forces which come from the constraints will be eliminated — and there will result:

$$
\begin{align}
&\sum m \left( \frac{d^2x}{dt^2} \delta x + \frac{d^2y}{dt^2} \delta y + \frac{d^2z}{dt^2} \delta z \right) + 2p \sum m \left( \frac{dy}{dt} \delta z - \frac{dz}{dt} \delta y \right) \\
&+ 2q \sum m \left( \frac{dz}{dt} \delta x - \frac{dx}{dt} \delta z \right) \\
&+ 2r \sum m \left( \frac{dx}{dt} \delta y - \frac{dy}{dt} \delta x \right) \\
&= \sum (X \delta x + Y \delta y + Z \delta z) - \sum (X_e \delta x + Y_e \delta y + Z_e \delta z).
\end{align}
$$

**(B)**

Such is the general formula which will give all the equations relating to relative motions.

These equations, instead of containing two terms as in the case of absolute motions, always contain four kinds of terms which depend:  

1° on the second differentials;  
2° on the first differentials;  
3° on the variables themselves;  
4° on the terms which depend on the given forces, which, depending on the case, will depend on the coordinates or on their first differentials.

We see that there are 2 kinds of supplementary terms:

1. The first come from Xₑ, Yₑ, Zₑ, which thus depend on the coordinates *x, y, z*, which are the unknowns of the problem
2. The others depend on the differentials *dx, dy, dz* of these unknowns.


We remark that the factor *m (dy δz − dz δy)* is nothing other than the area of the parallelogram constructed on the projection of the effective velocity and of the virtual velocity onto the plane of *yz*; thus:

$$
\sum m (dy \delta z - dz \delta y)
$$

will be the algebraic sum of all similar areas for all the points of the system.

Each of these areas, in space, can be expressed by ......  
*m ds δs sin (dδs)*. By representing by λ, μ, ν, the angles that the perpendicular to its plane makes with the coordinate axes, we shall have:


$$
\begin{align*}
\sum m \left( \frac{dy}{dt} \delta z - \frac{dz}{dt} \delta y \right) &= \sum m \frac{ds}{dt} \delta s \sin (d\delta s) \cos\lambda, \\
\sum m \left( \frac{dz}{dt} \delta x - \frac{dx}{dt} \delta z \right) &= \sum m \frac{ds}{dt} \delta s \sin (d\delta s) \cos\mu, \\
\sum m \left( \frac{dx}{dt} \delta y - \frac{dy}{dt} \delta x \right) &= \sum m \frac{ds}{dt} \delta s \sin (d\delta s) \cos\nu.
\end{align*}
$$

By representing by α, β, γ the angles that the instantaneous axis of rotation of the moving planes makes with these axes, and by ω their angular velocity of rotation about this axis, we have:

$$
\begin{align*}
p &= \omega \cos\alpha, \\
q &= \omega \cos\beta, \\
r &= \omega \cos\gamma.
\end{align*}
$$

The sum of the terms in question in equation (B) thus becomes equal to

$$
2\omega \sum m \frac{ds}{dt} \delta s \sin (d\delta s) (\cos\alpha \cos\lambda + \cos\beta \cos\mu + \cos\gamma \cos\nu).
$$



This is the sum of the projections of the areas $\frac{m ds}{dt} \delta s \sin (d\delta s)$ onto a plane perpendicular to the axis of rotation. 

Thus, in order to have an equation of relative motion, it is necessary to add to the ordinary terms existing for absolute motion.

1. Those which come from the forces capable of forcing the points to remain invariably linked to the moving planes
2. A term equal to twice the angular velocity of rotation of the axes multiplied by the sum of the projections, onto a plane perpendicular to the axis of rotation of these planes, of all the areas of the parallelograms comprised between the quantities of effective and virtual motions.

In the case of the equation of *vis viva*, each area is zero, because the virtual velocity coincides with the effective velocity; the sum of these areas is therefore also zero, and the last correction term disappears.

This remark forms precisely the theorem which I gave on the principle of *vis viva* in relative motions.

There is another quite general case where these areas also disappear.

This is is when the relative and virtual motions take place for each point in a plane parallel to the axis of rotation of the moving planes.

The areas comprised between these 2 velocities become zero in projection onto a plane perpendicular to the axis of rotation. 

Thus, in this case, all the equations of motion, for example those of the center of gravity and of the areas, have their place for the relative motion by simply adding the forces —Xₑ, —Yₑ, —Zₑ.

When one wishes to have equations which, for this relative motion, relate to the center of gravity — that is to say, those which result from virtual velocities equal and parallel to one of the moving axes — it suffices to add together all the equations (A) which relate to the same coordinate.

By representing by ξ, η and ζ the coordinates of the center of gravity with respect to the moving axes, and putting Σm = M, we have

$$
\sum m \frac{d^2x}{dt^2} = M \frac{d^2\xi}{dt^2}
$$

and

$$
\sum m \frac{dx}{dt} = M \frac{d\xi}{dt};
$$

which gives for the sums in question, where the forces λ $\frac{dL}{dx}$, etc., always disappear,

$$
\begin{align*}
M \frac{d^2\xi}{dt^2} + 2M \left( q \frac{d\zeta}{dt} - r \frac{d\eta}{dt} \right) &= \sum X - \sum X_e, \\
M \frac{d^2\eta}{dt^2} + 2M \left( r \frac{d\xi}{dt} - p \frac{d\zeta}{dt} \right) &= \sum Y - \sum Y_e, \\
M \frac{d^2\zeta}{dt^2} + 2M \left( p \frac{d\eta}{dt} - q \frac{d\xi}{dt} \right) &= \sum Z - \sum Z_e.
\end{align*}
$$

**(C)**

If, in the relative motion, the center of gravity of the system remains on a straight line parallel to the axis of rotation of the moving planes, we have

$$
\frac{d\xi}{p} = \frac{d\eta}{q} = \frac{d\zeta}{r},
$$

or

$$
\begin{align*}
q \frac{d\zeta}{dt} - r \frac{d\eta}{dt} &= 0, \\
r \frac{d\xi}{dt} - p \frac{d\zeta}{dt} &= 0, \\
p \frac{d\eta}{dt} - q \frac{d\xi}{dt} &= 0.
\end{align*}
$$

Thus the above equations no longer have a second term, and are reduced to

$$
\begin{align*}
M \frac{d^2\xi}{dt^2} &= \sum X - \sum X_e, \\
M \frac{d^2\eta}{dt^2} &= \sum Y - \sum Y_e, \\
M \frac{d^2\zeta}{dt^2} &= \sum Z - \sum Z_e.
\end{align*}
$$

Only one of these three can subsist in the same way without the second correction term, if the direction of the relative coordinate which enters into the second-order differential is perpendicular at the same time to the axis of rotation and to the velocity of the center of gravity. For then, if it is the coordinate ξ, for example, we have

$$
\frac{d\eta}{q} = \frac{d\zeta}{r}.
$$

Thus when only two axes of the relative coordinates are moving, and the third, that of ξ for example, remains parallel to the axis of rotation to which the quantities *p, q, r* refer, as we then have *q = 0, r = 0*, we shall have the equation

$$
M \frac{d^2\xi}{dt^2} = \sum X - \sum X_e.
$$


