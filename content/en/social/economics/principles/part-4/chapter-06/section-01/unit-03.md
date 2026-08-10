---
heading: "Unit 3"
title: "Physical Circulation"
date: 2015-01-17
weight: 5
image: /photos/econ/ship.jpg
description: ""
writer:
  name: Juan
  url: https://www.linkedin.com/in/jundalisay/
---


## The Equation, Defined for Ecommerce

We use the 4th Law of value for Ecommerce as physical transportation of goods:

**V<sub>l4,t</sub> = k · P<sub>t</sub> · γ<sub>t</sub>**

We redefined these in marketplace terms:

| Symbol | General Meaning | Ecommerce Meaning |
|---|---|---|
| **V<sub>l4,t</sub>** | Exchangeable value realized at time t | **Platform fee revenue** actually captured at time t |
| **k** | Fair Exchange Coefficient | **Take rate** — Shopee's commission + service/payment fee (%), fixed by policy |
| **P<sub>t</sub>** | Consolidated Price / economic output | **Throughput-capable GMV** — units of *deliverable* inventory × unit price (not just listed stock) |
| **γ<sub>t</sub>** | Circulation Coefficient | **Demand-to-fulfillment ratio** = Demand<sub>t</sub> ÷ Effective Supply<sub>t</sub>, where Effective Supply = warehouse stock actually reachable by logistics |

With the saturation correction for γ > 1 (since demand beyond logistics capacity can't convert to real revenue, only to lost sales):

**γ′<sub>t</sub> = γ<sub>t</sub>** for γ<sub>t</sub> ≤ 1
**γ′<sub>t</sub> = 1 + α·tanh(γ<sub>t</sub> − 1)** for γ<sub>t</sub> > 1



The practical revenue formula becomes **V<sub>l4,t</sub> = k · P<sub>t</sub> · γ′<sub>t</sub>**, and the gap between the raw and capped version is the **revenue leakage** caused by logistics blockage.


## Example Data Table

Assumptions: k = 5%, unit price = ₱350, α = 0.6

| Scenario | Demand (units/day) | Effective Supply (units/day) | γ<sub>t</sub> | γ′<sub>t</sub> (capped) | P<sub>t</sub> (₱) | Naive Revenue (₱) | Effective Revenue (₱) | Leakage (₱) | Diagnosis |
|---|---|---|---|---|---|---|---|---|---|
| A — Dead stock | 100 | 800 | 0.13 | 0.13 | 280,000 | 1,750 | 1,750 | 0 | Severe undercirculation |
| B — Slow mover | 300 | 700 | 0.43 | 0.43 | 245,000 | 5,250 | 5,250 | 0 | Undercirculation |
| C — Healthy | 480 | 500 | 0.96 | 0.96 | 175,000 | 8,400 | 8,400 | 0 | Balanced flow |
| D — Tight but okay | 550 | 500 | 1.10 | 1.06 | 175,000 | 9,625 | 9,275 | 350 | Balanced (edge) |
| E — Viral spike | 1,200 | 500 | 2.40 | 1.84 | 175,000 | 21,000 | 16,100 | 4,900 | Overcirculation |
| F — Full blockage | 1,500 | 300 | 5.00 | 1.98 | 105,000 | 26,250 | 10,395 | 15,855 | Severe overcirculation |

**Reading the table:**
- **A & B** (γ < 0.85): goods aren't moving — candidates for flash sales, ad boosts, or seller markdown incentives.
- **C** (γ ≈ 1): the target zone — hold current allocation.
- **D** is a soft warning — γ just past 1, leakage still small but worth watching.
- **E & F** (γ >> 1): demand is real but logistics can't deliver it — this is where courier/warehouse capacity fixes recover the most revenue per peso invested, since leakage in scenario F (₱15,855) dwarfs anything undercirculation loses.
