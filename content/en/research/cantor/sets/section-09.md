---
heading: Section 9
title: "Defining the real numbers"
weight: 230
description: ""
c: "darkgoldenrod"
icon: "Cantor"
---




Great importance has been attached to so-called real, rational and irrational numbers in the theory of sets.

I want to state here the most important things regarding their definitions. I will not go into the establishment of the rational numbers, since rigorously arithmetical representations of them have been developed several times. 

Of those which are best known to me, I highlight those by H. Grassmann (Lehrbuch der Arithmetik, Berlin 1861) and J.H.T. Müller (Lehrbuch der allgemeinen Arithmetik, Halle 1855). 

On the other hand, I would like to briefly discuss in more detail the three main formats known to me of a rigorously arithmetical definition of real numbers in general, and which are probably all alike in the fundamentals. 

First there is the format that Prof. Weierstrass has been using for many years in his lectures on analytical functions and of which some hints can be found in the treatise by E. Kossak (Die Elemente der Arithmetik, Berlin 1872). 

Secondly, Dedekind published a distinctive form of definition in his work Stetigkeit und irrationale Zahlen, Braunschweig, 1872, and thirdly, I gave (Mathematische Annalen, Vol. V, p. 123, 1871) a form of definition that on the surface has a certain resemblance to Weierstrass’s, so much so that they were confused by Weber (Zeitschrift für Mathematik und Physik, Vol. 27, in Historisch literarisch Section, p. 163); 

I think that this third form of definition, also developed later by Lipschitz (Grundlagen der Analysis, Bonn 1877), is the simplest and most natural of all and it has the advantage that it adapts itself most directly to analytical calculus.


These definitions agree that an irrational real number is given by a well-defined infinite set of rational numbers which has the first infinite cardinal-number; they all have this in common. But they differ in the way in which that set is linked to the number it defines, and in the conditions which the set has to fulfill in order to qualify as a foundation for the definition in question.



The first form of definition is based on a set of positive, rational numbers av which is denoted by (av). The numbers satisfy the condition that regardless of how many of a finite number of them are summated, their sum is a finite quantity that always remains below a specified limit. If one has two such sets (av) and (av′ ), it may be rigorously shown that they can present as one of three cases:

when a finite number of elements are collected from each set, and where there is no limit to such finite number of elements, each part 1⁄n of unity is always contained in both such collections, or
for all parts 1⁄n from a certain n on, the first set will contain more parts than the second, or
for all parts 1⁄n from a certain n on, the second set will contain more parts than the first
 

Corresponding to these occurrences, if b and b′ are the numbers defined by the two sets (av) and (av′ ), in the first case b = b′, in the second b > b′, in the third b < b′. If the two sets are combined into a new one (av + av′ ), this gives the basis for the definition of b + b′. But if one forms from the two sets (av) and (av′ ) the new (av · aμ′ ), in which the elements are the products of all av and all aμ′, this new set is taken as the basis of the definition for the product bb′.

 

One sees that here the generation, which links the set with the number to be defined by it, lies in the formation of the sum. However, it must be emphasized as essential that only the summation of an always finite number of rational elements is used and that the number b is not defined at the outset as the sum ∑av of the infinite series (av). That would be a logical error here, because the definition of the sum ∑av can only be obtained by equating it with the completed number b, which must have already been defined. I believe that this logical mistake, which was avoided only by Weierstrass, was almost universally committed in earlier times and was not noticed because it is one of the rare cases in which real mistakes cannot cause any significant damage in the calculation. Nevertheless, according to my conviction, all the difficulties which have been found in the concept of the irrational are connected with the above-mentioned error, whereas if this error is avoided the irrational numbers are fixed in our minds with the same definiteness, distinctness and clarity as the rational numbers.

 

Dedekind’s form of definition is based on the set of all rational numbers, but divided into two groups in such a way that if the numbers in the first group are denoted by Uv, and those of the second group are denoted by Bv where Uv < Bv always applies; Dedekind calls such a division of the rational set of numbers a “cut” and denotes it by (Uv | Bv) and assigns a number b to it. If one compares two such cuts (Uv | Bv) and (Uv′ | Bv′ ) with one another, then, as in the case of the first definition, there are three possibilities, corresponding to the numbers b and b′ represented by the two cuts are equal to each other or else b > b′ or b < b′. The first case occurs (apart from certain exceptions which occur when the numbers to be defined are rational, and are easy to rule for) only if the two cuts are completely identical and here comes the decisive advantage of this form of definition over the other two, which cannot be denied, that each number b corresponds to only one cut, which is countered by the great disadvantage that the numbers in analysis are never in the form of cuts, a form which they must first be brought into with great effort and laboriousness.

 

Now here also the definitions for the sum b + b′ and the product b b′ follow from the two given previous cuts to give the basis of new definitions.

 

The disadvantage associated with the first and second form of definition, is that the same (i.e: identical) numbers are presented infinitely often and thus a clear overview of all real numbers is not immediately obtained. This disadvantage can be eliminated with the greatest ease by ensuring that the sets (av) used are completely specified and fully determined sets, by using any of the known unambiguous system types, such as the decimal system or by simple continued fraction expansions.

 

I now come to the third form of definition of real numbers. Here too, an infinite set of rational numbers (av) is taken with the property of the first infinite cardinal-number, but a different property is required of it compared to the Weierstrassian form of definition. This requires that, after assuming an arbitrarily small rational number ε, a finite number of terms of the set can be separated so that the absolute value of the difference between any remaining pairs of terms is always smaller than ε. Any such amount (av), which can also be characterized by the requirement:

Lim	(av + μ - av ) = 0 (for arbitrary μ)
v = ∞
I call a fundamental sequence and assign to it a number b that may be defined by it, and it is also appropriate to use the sign (av) to designate it, as done by Heine, who proposed such to me after many oral discussions with me on these matters. (See Crelle’s Journal, Vol. 74 p. 172). Such a fundamental sequence presents three cases that can be rigorously deduced from its definition, either:

their terms av for sufficiently large values of v are smaller in absolute value than any arbitrarily given number, or
from a certain v onwards they are greater than a determinate specific positive rational number ρ, or
from a certain v onwards they are smaller than a determinate specific negative rational quantity - ρ.
 

In the first case I say that b is equal to zero, in the second that b is greater than zero or positive, and in the third case that b is less than zero or negative.

 

Now come the elementary operations. If (av) and (av′ ) are two fundamental sequences by which the numbers b and b′ are determined, then it turns out that (av ± av′ ) and (av · av′ ) are also fundamental sequences, which gives three new terms which serve as definitions for the sum and difference b ± b′ and for the product b · b′.

 

Also, if b is not zero, for which the definition is given above, one proves that (av′⁄av ) is also a fundamental sequence, the associated number of which provides the definition for the quotient b′⁄b.

 

The elementary operations between a number b given by a fundamental sequence and a directly given rational number a are included in the terms just established by letting av′ = a and b′ = a.

 

Only now do we have the definitions of equal, greater and smaller for two numbers b and b′ (of which b′ can also be = a), namely that b = b′ or b > b′ or b < b′ applies depending on whether b - b′ is equal to zero, or greater than zero, or less than zero.

 

After all these preparations, the first rigorously provable theorem is that if b is the number determined by a fundamental sequence (av), as v increases b - av becomes smaller in absolute terms than any conceivable rational number, or:

Lim	(av = b)
v = ∞
Attention should be paid to this essential point, the meaning of which can easily be overlooked: in the third form of definition, the number b is not defined as the limit of the terms av of a fundamental sequence (av). This would be a logical error similar to that emphasized in the discussion of the first form of definition, namely for the reason that the existence of the limit Limv = ∞ av would be assumed. On the contrary, the situation is the other way round, so that by our previous definitions the term b has been given such properties and relationships to the rational numbers that the conclusion can logically be drawn from this: Limv = ∞ av exists and is equal to b. Forgive me for the detail here, for which I am motivated by the perception that most people pass by this inconspicuous trifle and are then are easily entangled in doubts and contradictions with regard to the irrational, from which they would be completely spared if the reasoning emphasized here was observed. They would then clearly recognize that the irrational numbers, by virtue of the properties given to them by the definitions, have a reality in our minds that is just as certain as for the rational numbers, and just like for the integers, and that it does not have to be obtained by a limiting process but rather, on the contrary, one can in general be convinced, by such possession of that reality in our minds, of the efficiency and soundness of the limiting processes.[Footnote16] And now it is easy to expand the theorem just cited to the following: If (bv) is any set of rational or irrational numbers with the condition that

Lim	(bv + μ - bv ) = 0 (for arbitrary μ)
v = ∞
then there is a number b determined by a fundamental sequence (av) such that:

Lim	(bv = b)
v = ∞
I call such a fundamental sequence (av) a fundamental sequence of the first order. It turns out that these same numbers b which are defined on the basis of these fundamental sequences of the first order (av), in such a way that they identify themselves as limits of av , can also be represented in several ways as limits of sequences (bv), where each bv is defined by a fundamental sequence of the first order (aμ(v) ) (with a fixed v ).

 

I therefore call such a set (bv), a fundamental sequence of the second order if it satisfies the condition that

Lim	(bv+μ - av) = 0 (for arbitrary μ)
v = ∞

Fundamental sequences of the third, fourth, …, nth order, can also be formed, but also fundamental sequences of the αth order, where α is any number of the second number-class. All these fundamental sequences do exactly the same thing for the determination of a real number b as the fundamental sequence of the first order, and the difference lies only in the more complex, more extensive form that is given. Nevertheless, if one wishes to take the standpoint of the third form of definition, it seems to me to be highly appropriate to set out this difference in the manner indicated, as I have done in a similar way in Mathematische Annalen, Vol. 5, p. 123, 1872). 

I therefore now use the expression:

The quantity b is given by a fundamental sequence of the nth or αth order.

If one decides to do this, one achieves an extraordinarily flexible and at the same time comprehensible language in order to describe the richness of the various, often complex system of analysis in the simplest and most characteristic way, which in my opinion is a gain in clarity and certainty that should not be underestimated. I hereby counter the misgivings that Dedekind expressed in the preface to his work “Stetigkeit und irrationale Zahlen” with regard to these distinctions; while my intention was inclined towards introducing new numbers through the fundamental sequences of the second, third order, etc., which could not already be determined by the fundamental sequences of the first order, I had in mind only the concept of such different forms; this is evident from individual passages in my work.

 

I would like to draw your attention to a remarkable circumstance, namely that in these orders of fundamental sequences, which I distinguish by numbers of the first and second number-class, all conceivable forms in analysis with the usual sequential character (those already discovered and those not yet discovered) are completely included in the sense that there is no fundamental sequence whose ordinal-number can be determined by a number of, for example, the third number-class, as I shall rigorously prove on another occasion.

 

I shall now try to briefly assess the usefulness of the third form of definition.

 

To denote that a number b is given on the basis of a fundamental sequences (ev ) of any order n or α, I use the formulas:

b ~ (ev )  or  (ev ) ~ b

For example, if there is a convergent series with the general term cv , the necessary and sufficient condition for convergence is, as is well known, that:

Lim	(cv + 1 + … + cv + μ ) = 0 (for arbitrary μ)
v = ∞
The sum of the series is therefore defined by the formula:

Equation

 

If, for example, all cn are defined on the basis of a fundamental sequence of the k th order, then the same apples for

Equation

where the sum

Equation

is here defined by a fundamental sequence of (k + 1)th order.

 

If, for example, the conceptual content of the sentence sin (π⁄2) = 1 is to be defined, one can think of (π⁄2) and its powers as given by the formulas:

π⁄2  ~  (av) ,   (π⁄2)2m + 1  ~  (av2m + 1)

which we can abbreviate as:

Equation

In addition, we also have:

Equation

so that sin (π⁄2) is defined on the basis of a fundamental sequence of the second order, and this proposition expresses the equality of the rational number 1 and the number sin (π⁄2) as derived on the basis of a fundamental sequence of the second order.

 

In a similar way, the conceptual content of more complex formulas, such as those from the theory of theta functions, can be described precisely and relatively simply - while the conversion of infinite sequences in general to sequences made up purely of rational elements, especially when such are required to be all of the same sign and to converge unconditionally, is usually associated with the greatest inconvenience.

 

This is completely avoided here by the third form of definition, in contrast to the first, and which can obviously also be avoided, provided one is not finding a numerical approximation of the sum of a series whose terms are rational numbers, but only when it is absolutely necessary to have precise definitions.

The first form of definition does not seem to me to be so easy to use when it comes to the precise definition of the summations of series which do not necessarily converge, but in which the arrangement of their positive as well as negative terms is definitely predetermined. 

But even in the case of series with unconditional convergence, the generation of the sum, even if it is independent of the ordering, can only really be carried out with some specific ordering; in such cases, therefore, one is tempted to give preference to the third form of definition over the first. Finally, it seems to me that the third form of definition is supported by its ability to generalize to transfinite numbers, while such a development is quite impossible for the first form of definition This difference is simply due to the fact that in the case of infinite numbers the commutative rule is in general invalid for addition, while the first form of definition is inextricably linked with this rule, and it stands and falls with it. But for all types of numbers where the commutative rule of addition is valid, the first form of definition proves to be quite excellent, apart from the points already mentioned.
