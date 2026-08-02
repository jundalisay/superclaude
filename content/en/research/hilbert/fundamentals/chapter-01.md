---
heading: Chapter 1
title: "Solution of the algebraic problem"
date: 2026-08-01
weight: 42
description: ""
c: "firebrick"
a: "Hilbert"
---


Let \(K(s,t)\), \(f(s)\), \(\varphi(s)\) be the functions given the meaning introduced at the beginning; however, for the sake of simplicity, let us take the interval of the variables \(s,t\) as the interval \(0\) to \(1\); furthermore, let \(K(s,t)\) be a symmetric function in \(s,t\). We further understand by \(n\) a positive integer and use for the following proofs the abbreviations:

\[
K_{pq} = K\left(\frac{p}{n}, \frac{q}{n}\right) \quad (p, q = 1, 2, \dots, n),
\]
\[
Kxy = K_{11}x_1y_1 + K_{12}x_1y_2 + K_{21}x_2y_1 + \dots + K_{nn}x_ny_n
\]
\[
= \sum_{p,q} K_{pq} x_p y_q, \quad \text{where } K_{pq} = K_{qp},
\]
\[
\varphi_p = \varphi\left(\frac{p}{n}\right), \quad f_p = f\left(\frac{p}{n}\right), \quad (p = 1, 2, \dots, n),
\]
\[
Kx_1 = K_{11}x_1 + K_{12}x_2 + \dots + K_{1n}x_n,
\]
\[
Kx_2 = K_{21}x_1 + K_{22}x_2 + \dots + K_{2n}x_n,
\]
\[
\dots \dots \dots \dots \dots \dots \dots \dots \dots \dots
\]
\[
Kx_n = K_{n1}x_1 + K_{n2}x_2 + \dots + K_{nn}x_n,
\]
\[
[x, y] = x_1y_1 + x_2y_2 + \dots + x_ny_n.
\]

It is evidently
\[
Kxy = [Kx, y] = [Ky, x].
\]

We now lay the algebraic problem at the foundation: let there be given the \(n\) linear equations

(1)
\[
f_1 - \varphi_1 = l(K_{11}\varphi_1 + \dots + K_{1n}\varphi_n),
\]
\[
f_2 - \varphi_2 = l(K_{21}\varphi_1 + \dots + K_{2n}\varphi_n),
\]
\[
\dots \dots \dots \dots \dots \dots \dots \dots \dots
\]
\[
f_n - \varphi_n = l(K_{n1}\varphi_1 + \dots + K_{nn}\varphi_n),
\]

or shorter

(2)
\[
f_i - \varphi_i = lK\varphi_i,
\]
\[
f_n - \varphi_n = lK\varphi_n
\]

to determine the \(n\) unknowns \(\varphi_1, \varphi_2, \dots, \varphi_n\), where the values \(f_p\) and the coefficients \(K_{pq}\) are given and \(l\) is likewise to be regarded as a known parameter. We further relate the properties of the solutions and the context with the problem of the orthogonal transformation of the quadratic form \(Kxx\) into account.

---

**[Right Page]**
**5** &nbsp;&nbsp; Kap. I. Lösung des algebraischen Problems.

To solve this algebraic problem, we use the determinants

\[
d(l) = \begin{vmatrix}
1 - lK_{11}, & -lK_{12}, \dots, & -lK_{1n} \\
-lK_{21}, & 1 - lK_{22}, \dots, & -lK_{2n} \\
\dots & \dots & \dots \\
-lK_{n1}, & -lK_{n2}, \dots, & 1 - lK_{nn}
\end{vmatrix},
\]
\[
D\left(l, \begin{smallmatrix} x \\ y \end{smallmatrix}\right) = \begin{vmatrix}
0 & x_1, & x_2, \dots, & x_n \\
y_1, & 1 - lK_{11}, & -lK_{12}, \dots, & -lK_{1n} \\
y_2, & -lK_{21}, & 1 - lK_{22}, \dots, & -lK_{2n} \\
\dots & \dots & \dots & \dots \\
y_n, & -lK_{n1}, & -lK_{n2}, \dots, & 1 - lK_{nn}
\end{vmatrix},
\]

whose first is the discriminant of the quadratic form
\[
[x, x] - lKxx.
\]

If we denote by \(D\left(l, \begin{smallmatrix} x \\ y \end{smallmatrix}\right)\) that determinant which arises from \(D\left(l, \begin{smallmatrix} x \\ y \end{smallmatrix}\right)\) by replacing \(y\) everywhere by \(K_y\)
\[
K_y y = K_{y1}y_1 + K_{y2}y_2 + \dots + K_{yn}y_n,
\]
then it is evidently, as is evident for the variables \(x, y\) and \(l\), the equation

(3)
\[
d(l)[x, y] + D\left(l, \begin{smallmatrix} x \\ y \end{smallmatrix}\right) - lD\left(l, \begin{smallmatrix} x \\ Ky \end{smallmatrix}\right) = 0.
\]

Our problem now consists in finding the \(n\) unknowns \(\varphi_1, \varphi_2, \dots, \varphi_n\) from the equations (1) or (2), i.e. a linear form
\[
[x, \varphi] = x_1\varphi_1 + x_2\varphi_2 + \dots + x_n\varphi_n
\]
which satisfies identically in \(x\) the equation
\[
[f, x] = [\varphi, x] - l[K\varphi, x].
\]

This equation follows immediately from (3), as is immediately evident from the formula:

(4)
\[
[x, \varphi] = - \frac{D\left(l, \begin{smallmatrix} x \\ f \end{smallmatrix}\right)}{d(l)}
\]
is solved. When, then, the parameter \(l\) is so constituted that \(d(l) \neq 0\) occurs, the coefficients of the linear form (4) sought are the values of the unknowns \(\varphi_1, \varphi_2, \dots, \varphi_n\). This result is independent of the assumption of the symmetry \(K_{pq} = K_{qp}\).

It is known that the roots of the equation
\[
d(l) = 0
\]
are all real; we denote them by
\[
l^{(1)}, l^{(2)}, \dots, l^{(n)}
\]
and assume that they are different from one another.