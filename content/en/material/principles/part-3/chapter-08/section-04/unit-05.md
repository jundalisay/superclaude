---
heading: "Unit 5 Macro Cohesion"
title: "Moving Electromagnetic Field: Ampere's Law"
date: 2023-10-31
image: "/photos/stuff/ev.jpg"
description: ""
writer:
  name: Juan
  url: https://www.linkedin.com/in/jundalisay/
weight: 13
icon: "Juan"
aliases:
  /material/principles/part-3/chapter-07b
---



### Equation 4

The electric flux through a closed surface is proportional to the total charge enclosed by that surface. 

𝜵x H  = (𝛅B / 𝛅t) + J


<!-- Amperes Law  -->




## Hall Effect


The Hall Effect is the production of a transverse voltage (called Hall voltage) across a current-carrying conductor or semiconductor when it is placed in a perpendicular magnetic field.

The Moving charge carriers (electrons or holes) experience a Lorentz force:

This force pushes the carriers to one side of the conductor, creating charge separation and thus an electric field ($  E_H  $) that opposes further buildup. Equilibrium is reached when the electric force balances the magnetic force.



### Connection to Ampere's Law

The connection is indirect but important, and exists in two main ways:

1. Practical / Engineering Connection (Most Common)
Ampere's Law is used to generate the magnetic field that the Hall sensor then measures.

A current-carrying wire produces a magnetic field around it according to Ampere's Law.

Hall effect sensors (or Hall current transducers) are placed near the wire to measure this $  B  $ field non-invasively.
This allows accurate measurement of large currents without breaking the circuit.

Many modern current sensors (in power electronics, EVs, industrial motors) work exactly this way: Ampere's Law creates B → Hall Effect measures B.

2. Theoretical / Fundamental Connection

The Hall Effect itself is not derived from Ampere's Law. It comes from the Lorentz force acting on individual charges.

However, both are part of the broader Maxwell's equations framework.

Ampere's Law (with Maxwell's correction) tells how currents and changing fields produce magnetic fields.

The Hall Effect shows how magnetic fields act back on moving charges (via Lorentz force, which is consistent with Maxwell's equations).


In essence:

Ampere's Law → Magnetic field is produced by current.
Hall Effect → Magnetic field affects (deflects) that same current.



<!-- The Hall Effect (which creates resistance) will lead to anti-gravity for vehicles. 

This is because in Cartesian Physics, both gravity and magnetism are caused by invisible spacetime particles called the 2nd Element. This is the same principle why Einstein made inertial mass = gravitational mass. i.e. his fabric of spacetime is Descartes' spacetime liquid. The main difference is that Einstein sources the warping from mass, whereas Descartes sources the vortices from the aether.

The resistance in the Hall Effect is caused by space partcicles inserting itself in the flow of electricity, just as anti-gravity and magnetism is caused by the 2nd Element inserting itself between 2 masses. 
 -->