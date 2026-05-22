---
heading: "Section 6"
title: "The 4 Rules of Motion"
date: 2024-12-28
# 2020-01-04
weight: 25
image: /photos/bio/horse.jpg
description: "There are 4 Rules of Motion based on the 4 Properties of Waves"
writer:
  name: Juan
  url: https://www.linkedin.com/in/jundalisay/
icon: "Juan"
aliases:
  /motion
  /superphysics/principles/chapter-01f
---



The 4 Rules of Motion are the implementing rules of the Law of Conservation of Momentum which operates on the Spatial Layer, to be explained in Chapter 5.

These 4 Rules match the 4 properties of waves. 

<!-- Movement in physical space comes from space particles of the Air Element which Material Superphysics calls the Spatial Layer. Since space is made up of waves, as seen in gravitational waves, then the 4 properties of waves manifest as the 4 Rules of Motion as explained by Descartes and Spinoza. -->

## Rule 1: No Void

> No identity moves into the place of another body unless at the same time that other body moves into the place of another identity.

This is given by the equation:  `∇ • v = 0`

- ∇: continuous plenum
- v: velocity


Science | Description
--- | ---
Bio Superphysics | movement of liquids in the body as explained by Galen
Material Superhysics | gravity effects from virtual space particles
Social Superphysics | Jig-society model where everyone is a piece in the jigsaw of society
Supermath | This manifests as the action of addition

{{< i s="/photos/meta/god.jpg" a="God" >}}

<!-- This is the most important rule as it also manifests in Biology. -->

## Rule 2: Straight or Circular

> Every moving identity moves in a straight line when alone, and in a curve or a circle when moving with others. When in a circle, it moves away from the center.

This leads to spin and vortex rotation, producing fractal patterns. 

This gives the equations:

1. No vortex: <i>d<sup>2</sup><b>r</b> / dt<sup>2</sup></i> = <b>0</b>
2. Within a vortex: <i>d<sup>2</sup><b>r</b> / dt<sup>2</sup></i> = −<b>Ω</b> × (<b>Ω</b> × <b>r</b>) − 2<b>Ω</b> × <i>d<b>r</b> / dt</i>

This captures Descartes' three clauses: straight line alone, curve/circle with others, and (in the rotating frame) the striving <i>away from</i> the center via <b>a</b><sub>cf</sub>.



{{< i s="/photos/physics/skates.jpg" a="Skates" >}}

Science | Description
--- | ---
Bio Superphysics | This manifests as the helix-shape of the DNA or RNA
Material Superhysics | This manifests as particle spin, galaxy rotation, and BAOs
Social Superphysics | This manifests as political system and its leadership structure -- a circular society is more cohesive and has better leadership
Supermath | This manifests as the action of division


## Rule 3: Collisions

> When a weaker identity hits a stronger, it will be deflected. When a stronger hits a weaker, it will transfer some of its force to the weaker

This emphasizes the phenomenon of balance and natural limits and is given by the equation: `v1′ = [ Θ(2 - α) - 1 ]v1 + ΘαVc` where:
- the left side is the original state activation
- the right side is the shared state activation


{{< i s="/photos/physics/punch.jpg" a="Punch" >}}


Science | Description
--- | ---
Bio Superphysics | This manifests as the interactions between organisms as symbiosis or predation
Material Superhysics | This manifests force, impact, and chemical reactions
Social Superphysics | This manifests as the conflicts or harmonies within a society
Supermath | This manifests as the action of subtraction



## Rule 4: State Continuity

> Each identity remains as much as it can always in the same state. It is never changed except by external causes.

This is the concept of inertia in Physics and state in quantum mechanics.


P<sub>&Delta;</sub> = 1 - |&lang;&Psi;<sub>0</sub>|<b>U</b><sub>ext</sub>|&Psi;<sub>0</sub>&rang;|<sup>2</sup>

change operator: <b>U</b><sub>ext</sub> = e<sup>-(i/&hbar;) &int; <b>H</b><sub>ext</sub> dt</sup>

{{< i s="/photos/meta/yoga.jpg" a="Yoga" >}}


Science | Description
--- | ---
Bio Superphysics | This manifests as the growth pattern or sequence in organisms and the impact of the environment
Material Superhysics | This manifests force, impact, and chemical reactions
Social Superphysics | This manifests as the conflicts or harmonies within a society
Supermath | This manifests as the action of multiplication



Rules 1 and 4 are related to each other just as Rule 2 and 3 are related. 

We call:
- Rules 1 and 4 as feminine
- Rules 2 and 3 as masculine






<!-- When tested rigorously against all **7 subrules of collision** (Articles 46–52 of *Principles of Philosophy*, Part II), **neither a single-line equation nor DeepSeek's equation works perfectly.** DeepSeek’s version looks highly advanced because it uses elegant mathematical operators, but if you plug real numbers into it, the math completely breaks down. My previous version works flawlessly for the "all-or-nothing" rules (Rules 4 and 5), but fails to capture the bizarre fractional splits of Rule 6 or the non-speed-losing rebounds of Rules 1 and 2.

Historically, physicists (starting with Christiaan Huygens in 1669) demonstrated that **Descartes' 7 subrules are internally inconsistent with one another.** Because Descartes was pioneering mechanics before the formalization of vectors or kinetic energy, he changed the underlying logic from rule to rule.

Therefore, the absolute best and only true way to mathematically model Descartes' 7 subrules is through an **Algorithmic Piecewise Matrix**.

---

### Why DeepSeek's Equation Fails the Math Test

DeepSeek proposed this unified line:


$$v_i' = v_i + \frac{F_j}{m_i} \cdot H(F_i - F_j) - 2v_i \cdot \delta_{i1} \cdot H(F_1 - F_i)$$

If we test this against **Rule 5** (A larger body $m_1$ hits a smaller body $m_2$ at rest), $F_1 > F_2$, meaning the first Heaviside function $H(F_1 - F_2)$ equals $1$.
The equation for the striking body becomes:


$$v_1' = v_1 + \frac{F_2}{m_1}$$

Because both terms are positive, **DeepSeek’s equation accidentally causes the striking body to *accelerate* and gain speed upon impact**, completely violating Descartes' law of conservation of motion.

---

### The Absolute Best Version: The 7-Subrule Matrix

To accurately map the literal text of Articles 46–52 onto a computational framework, you must use an explicit conditional matrix.

Let $m_1, v_1$ belong to Body B, and $m_2, v_2$ belong to Body C. Let speed be treated as a scalar quantity of motion, where direction is managed by explicit sign changes.

#### Rule 1 (Art. 46): Equal Size, Equal Speed, Head-On

* **Condition:** $m_1 = m_2$ and $v_1 = -v_2$
* **Outcome:** Both perfectly rebound, conserving 100% of their speed.

$$\begin{cases} v_1' = -v_1 \\ v_2' = -v_2 \end{cases}$$



#### Rule 2 (Art. 47): Different Size, Equal Speed, Head-On

* **Condition:** $m_1 > m_2$ and $|v_1| = |v_2|$ (moving toward each other)
* **Outcome:** Only the weaker (smaller) body is deflected. The larger suffers no loss of speed or direction.

$$\begin{cases} v_1' = v_1 \\ v_2' = -v_2 \end{cases}$$



#### Rule 3 (Art. 48): Equal Size, Different Speeds, Head-On

* **Condition:** $m_1 = m_2$ and $|v_1| > |v_2|$ (moving toward each other)
* **Outcome:** The faster body dominates. Both reverse or shift to move together in the direction of the faster body, sharing the average total speed.

$$\begin{cases} v_1' = \text{sgn}(v_1) \cdot \frac{|v_1| + |v_2|}{2} \\ v_2' = \text{sgn}(v_1) \cdot \frac{|v_1| + |v_2|}{2} \end{cases}$$



#### Rule 4 (Art. 49): Weaker Hits Stronger at Rest

* **Condition:** $m_1 < m_2$ and $v_2 = 0$
* **Outcome:** The resting body has absolute resistance. The striking body rebounds with 100% of its speed; the resting body stays perfectly still.

$$\begin{cases} v_1' = -v_1 \\ v_2' = 0 \end{cases}$$



#### Rule 5 (Art. 50): Stronger Hits Weaker at Rest

* **Condition:** $m_1 > m_2$ and $v_2 = 0$
* **Outcome:** The stronger body overcomes the rest-resistance. They lock together and move as a single unit, distributing the initial quantity of motion proportionally across the new combined volume.

$$\begin{cases} v_1' = \left(\frac{m_1}{m_1 + m_2}\right)v_1 \\ v_2' = \left(\frac{m_1}{m_1 + m_2}\right)v_1 \end{cases}$$



#### Rule 6 (Art. 51): Equal Size, One at Rest

* **Condition:** $m_1 = m_2$ and $v_2 = 0$
* **Outcome:** The most unique rule. Descartes states that Body B transfers exactly $\frac{1}{4}$ of its motion forward to C, and rebounds backward with the remaining $\frac{3}{4}$ of its speed.

$$\begin{cases} v_1' = -\frac{3}{4}v_1 \\ v_2' = \frac{1}{4}v_1 \end{cases}$$



#### Rule 7 (Art. 52): Catch-Up from Behind (Same Direction)

* **Condition:** $v_1 > v_2 > 0$ (Body B overtakes Body C from behind)
* *Case 1: B's speed advantage is greater than C's size advantage.* They join together and share a unified speed to conserve total motion.

$$\text{If } \frac{|v_1|}{|v_2|} > \frac{m_2}{m_1} \implies \begin{cases} v_1' = \frac{m_1 v_1 + m_2 v_2}{m_1 + m_2} \\ v_2' = \frac{m_1 v_1 + m_2 v_2}{m_1 + m_2} \end{cases}$$


* *Case 2: C's size advantage is greater than B's speed advantage.* Body B cannot overcome C's resistance; it perfectly rebounds backward, keeping all its initial speed, while C continues forward undisturbed.

$$\text{If } \frac{|v_1|}{|v_2|} < \frac{m_2}{m_1} \implies \begin{cases} v_1' = -v_1 \\ v_2' = v_2 \end{cases}$$



---

### How to Implement This Cleanly in Code

If you are rendering this framework or building a simulation engine for a local site architecture, a single inline mathematical equation will always fail due to Descartes' arbitrary logical shifts. You can translate the exact 7-rule matrix above into a clean JavaScript/TypeScript conditional block:

```typescript
function calculateCartesianCollision(m1: number, v1: number, m2: number, v2: number) {
    // Rule 4: Weaker hits stronger at rest
    if (v2 === 0 && m1 < m2) {
        return { v1_prime: -v1, v2_prime: 0 };
    }
    // Rule 5: Stronger hits weaker at rest
    if (v2 === 0 && m1 > m2) {
        const sharedV = (m1 / (m1 + m2)) * v1;
        return { v1_prime: sharedV, v2_prime: sharedV };
    }
    // Rule 6: Equal objects, one at rest
    if (v2 === 0 && m1 === m2) {
        return { v1_prime: -0.75 * v1, v2_prime: 0.25 * v1 };
    }
    // Rule 1: Equal size, equal speed, head-on
    if (m1 === m2 && v1 === -v2) {
        return { v1_prime: -v1, v2_prime: -v2 };
    }
    // Rule 2: Different size, equal speed, head-on
    if (m1 > m2 && Math.abs(v1) === Math.abs(v2) && (v1 * v2 < 0)) {
        return { v1_prime: v1, v2_prime: -v2 };
    }
    // Rule 3: Equal size, different speed, head-on
    if (m1 === m2 && Math.abs(v1) > Math.abs(v2) && (v1 * v2 < 0)) {
        const sign = Math.sign(v1);
        const avgV = sign * ((Math.abs(v1) + Math.abs(v2)) / 2);
        return { v1_prime: avgV, v2_prime: avgV };
    }
    // Rule 7: Catch up from behind
    if (Math.sign(v1) === Math.sign(v2) && Math.abs(v1) > Math.abs(v2)) {
        if ((Math.abs(v1) / Math.abs(v2)) > (m2 / m1)) {
            const combinedV = (m1 * v1 + m2 * v2) / (m1 + m2);
            return { v1_prime: combinedV, v2_prime: combinedV };
        } else {
            return { v1_prime: -v1, v2_prime: v2 };
        }
    }
    return { v1_prime: v1, v2_prime: v2 }; // Fallback
}

```

This structural matrix is the only framework that honors the true, unadulterated boundaries of Descartes' mechanical universe without trying to force modern Newtonian smooth curves onto a rigid, geometric world. -->



<!-- write this in html tags inline: $$v_1' = \left[\Theta(2 - \alpha) - 1\right]v_1 + \Theta\alpha V_c$$

---

### How the State Multipliers Collapse

The term **$\left[\Theta(2 - \alpha) - 1\right]$** acts as an automatic scalar modifier for the initial velocity, changing its value to $-1$, $1$, or $0$ based entirely on the state of the switches:

* **Deflection State ($\Theta = 0$):** The multiplier becomes $[0 - 1] = -1$, and the right term drops out.
$$\implies v_1' = -v_1$$


* **Plow-Through State ($\Theta = 1, \alpha = 0$):** The multiplier becomes $[1(2) - 1] = 1$, and the right term drops out.
$$\implies v_1' = v_1$$


* **Scalar Sharing State ($\Theta = 1, \alpha = 1$):** The multiplier becomes $[1(1) - 1] = 0$, killing the initial velocity term completely, while the right term activates at $100\%$.
$$\implies v_1' = V_c$$
 -->


<!-- ## The Expanded Cartesian Parent Equation

$$v_1' = (1 - \Theta)(-v_1) + \Theta \left[ (1 - \alpha)v_1 + \alpha \left( \frac{m_1 v_1 + m_2 |v_2|\text{sgn}(v_1)}{m_1 + m_2} \right) \right]$$

### Deconstructing the Switches

Instead of just looking at a body at rest, the switches now evaluate the relative "force of motion" between both interacting identities:

* **The Dominance Switch ($\Theta$):** Determines if the striking body is deflected or breaks through.
* $\Theta = 0$ if Body 1 is weaker or equal in force ($m_1|v_1| \le m_2|v_2|$).
* $\Theta = 1$ if Body 1 is strictly stronger ($m_1|v_1| > m_2|v_2|$).


* **The Transmission Switch ($\alpha$):** Determines if the stronger body must share its speed ($\alpha = 1$) or if it simply plows through completely unhindered ($\alpha = 0$).

---

## How the Parent Equation Expands into the Subrules

By adjusting the switches based on Descartes' initial conditions, the single parent equation cleanly collapses into almost every individual subrule:

### 1. The Deflection Pathway ($\Theta = 0$)

When Body 1 lacks the scalar motion to overcome the resistance ahead of it, the entire right side of the equation is multiplied by zero. The equation instantly simplifies to a perfect elastic rebound:


$$v_1' = -v_1$$

* **Rule 1 Expansion:** Equal mass and speed head-on ($m_1=m_2, |v_1|=|v_2|$). $\Theta = 0$, causing both to perfectly reverse directions at original speed.
* **Rule 4 Expansion:** Weaker hits stronger at rest ($m_1 < m_2, v_2 = 0$). The resting mass resistance stops Body 1 completely, triggering $\Theta = 0$. Body 1 bounces back with 100% speed.
* **Rule 7b Expansion:** Catching up from behind, but the target's size advantage is too massive ($m_1|v_1| < m_2|v_2|$). $\Theta = 0$, forcing the faster overtaking car to bounce backward.

### 2. The Plow-Through Pathway ($\Theta = 1, \alpha = 0$)

When Body 1 is stronger, but the target is moving head-on with an *equal speed* (Rule 2), Descartes dictates that the larger body cannot lose any of its own speed; it merely forces the smaller one to turn around. Setting $\alpha = 0$ drops the sharing fraction out of the equation:


$$v_1' = (0)(-v_1) + 1 \cdot [ (1)v_1 + 0 ] \implies v_1' = v_1$$

* **Rule 2 Expansion:** Different size, equal speed head-on. The larger body proceeds entirely unaffected, maintaining its exact initial velocity vector.

### 3. The Scalar Sharing Pathway ($\Theta = 1, \alpha = 1$)

When Body 1 is stronger and the conditions force a shared push, we set $\alpha = 1$. The middle term drops out, and the parent equation expands directly into Descartes' unique mass-weighted speed average:


$$v_1' = \frac{m_1 v_1 + m_2 |v_2|\text{sgn}(v_1)}{m_1 + m_2}$$

* **Rule 3 Expansion:** Equal mass, different speeds head-on. Because $m_1 = m_2$, the masses cancel out, expanding the equation into $v_1' = \text{sgn}(v_1)\frac{|v_1| + |v_2|}{2}$—the exact velocity average Descartes demanded.
* **Rule 5 Expansion:** Stronger hits weaker at rest ($m_1 > m_2, v_2 = 0$). The equation smoothly reduces to your original shared mass-ratio term: $v_1' = v_1 \left(\frac{m_1}{m_1+m_2}\right)$.
* **Rule 7a Expansion:** Overtaking from behind where speed wins out. Because both are moving in the same direction, $\text{sgn}(v_1)$ matches the sign of $v_2$, seamlessly turning the expression into a standard conservation of shared momentum.

---

### The Lone Outlier: Rule 6

This parent equation successfully unifies **Rules 1, 2, 3, 4, 5, and 7**. The only rule left behind is **Rule 6** (equal masses, one at rest). Because Descartes claimed out of nowhere that an equal striking mass arbitrarily splits its speed into a $\frac{3}{4}$ backward rebound and a $\frac{1}{4}$ forward push, it remains a mathematical anomaly that cannot be derived naturally alongside the others without an explicit manual bypass. -->