# Data Science — Final Exam: Answer Sheet & Solutions

---

## Question 1. Mean, Median, and Normalization

### (a) Mean vs. Median

| | Mean | Median |
|--|--|--|
| **Advantage** | Computationally fast; no sorting required | Robust to outliers (not distorted by extreme values) |
| **Disadvantage** | **Sensitive to outliers**: a single extreme value can substantially shift the mean | Requires sorting the entire dataset, which is slow |

**In short:**
- Advantage of mean over median: **fast** (no sorting needed)
- Disadvantage of mean compared to median: **outlier-sensitive**

---

### (b) Drawback of Simple Median

Simple median computation **requires sorting** all data values.
This is not suitable for a **dynamic (continuously updated) dataset**, since each new insertion would require re-sorting, making it computationally expensive.

**Solution:** Use **median interpolation** (estimation via grouped frequency distribution).

---

### (c) Median Interpolation

**Given:**
- n = 3,194 → n/2 = 1,597
- The median falls in the group **31–60** (L₁ = 31, width = 60 − 31 = 29, freq_median = 1,500)
- Cumulative frequency before this group: freq_l = 200 + 450 + 300 = 950

**Apply the formula:**

$$\text{median} = L_1 + \left(\frac{n/2 - \text{freq}_l}{\text{freq}_\text{median}}\right) \times \text{width}$$

$$= 31 + \left(\frac{1597 - 950}{1500}\right) \times 29 = 31 + \frac{647}{1500} \times 29 \approx 31 + 12.51 \approx 43.51$$

**The estimated median is approximately 43.51 (thousand dollars).**

---

### (d) Normalization of v = $73,600

**Given:** min = 12,000, max = 98,000, μ = 54,000, σ = 16,000

#### (i) Min-Max Normalization to [0.0, 1.0]

$$v' = \frac{v - \min_A}{\max_A - \min_A}(\text{new\_max} - \text{new\_min}) + \text{new\_min}$$

$$v' = \frac{73600 - 12000}{98000 - 12000} \times (1.0 - 0) + 0 = \frac{61600}{86000} \approx \mathbf{0.716}$$

#### (ii) Z-Score Normalization

$$v' = \frac{v - \mu}{\sigma} = \frac{73600 - 54000}{16000} = \frac{19600}{16000} = \mathbf{1.225}$$

#### (iii) Normalization by Decimal Scaling

$$v' = \frac{v}{10^j}, \text{ where j is the smallest integer such that } \max(|v'|) < 1$$

- The maximum original value is 98,000.
- Try j = 4: 98,000 / 10,000 = 9.8 ≥ 1 ✗
- Try j = 5: 98,000 / 100,000 = 0.98 < 1 ✓

**j = 5**, so:

$$v' = \frac{73600}{100000} = \mathbf{0.736}$$

---

## Question 2. Proximity Measure for Binary Features

### (a) Symmetric Binary Similarity

$$sim(i,j) = \frac{q + t}{q + r + s + t}$$

Used when both 0 and 1 outcomes are equally important.

### (b) Asymmetric Binary Similarity

$$sim(i,j) = \frac{q}{q + r + s}$$

The corresponding **dissimilarity** formula is:

$$d(i,j) = \frac{r + s}{q + r + s}$$

Used when one outcome (typically 1) is more important than the other (e.g., test positive vs. negative).

---

### (c) Asymmetric Dissimilarity Calculation

Gender is symmetric → **ignored**. Remaining 6 features: Fever, Cough, Test-1, Test-2, Test-3, Test-4.

Encode: Y, P → 1; N → 0

| | Fever | Cough | Test-1 | Test-2 | Test-3 | Test-4 |
|--|--|--|--|--|--|--|
| **Jack** | 1 | 0 | 1 | 0 | 0 | 0 |
| **Mary** | 1 | 0 | 1 | 0 | 1 | 0 |
| **Jim** | 1 | 1 | 0 | 0 | 0 | 0 |

#### d(Jack, Mary)

| | Mary=1 | Mary=0 |
|--|--|--|
| **Jack=1** | q=2 (Fever, Test-1) | r=0 |
| **Jack=0** | s=1 (Test-3) | t=3 (Cough, Test-2, Test-4) |

$$d(\text{Jack, Mary}) = \frac{r + s}{q + r + s} = \frac{0 + 1}{2 + 0 + 1} = \frac{1}{3} \approx \mathbf{0.33}$$

#### d(Jack, Jim)

| | Jim=1 | Jim=0 |
|--|--|--|
| **Jack=1** | q=1 (Fever) | r=1 (Test-1) |
| **Jack=0** | s=1 (Cough) | t=3 (Test-2, Test-3, Test-4) |

$$d(\text{Jack, Jim}) = \frac{r + s}{q + r + s} = \frac{1 + 1}{1 + 1 + 1} = \frac{2}{3} \approx \mathbf{0.67}$$

---

## Question 3. Minkowski Distance

### (a) General Formula

$$d(i, j) = \left( \sum_{f=1}^{p} |x_{if} - x_{jf}|^h \right)^{1/h}$$

where i and j are p-dimensional data objects and h is the order.

### (b) Special Cases

| h | Name | Formula |
|---|------|---------|
| h = 1 | **Manhattan distance** (City block, L1 norm) | $d(i,j) = \sum_{f=1}^{p} |x_{if} - x_{jf}|$ |
| h = 2 | **Euclidean distance** (L2 norm) | $d(i,j) = \sqrt{\sum_{f=1}^{p} |x_{if} - x_{jf}|^2}$ |
| h → ∞ | **Supremum distance** (L∞ / Chebyshev norm) | Maximum absolute difference across all features |

### (c) Distance Calculations

**x1 = (1, 2), x3 = (3, 4):**

- Manhattan (L1): |1−3| + |2−4| = 2 + 2 = **4**
- Euclidean (L2): √((1−3)² + (2−4)²) = √(4+4) = √8 ≈ **2.83**

**x2 = (2, 0), x4 = (5, 5):**

- Manhattan (L1): |2−5| + |0−5| = 3 + 5 = **8**
- Euclidean (L2): √((2−5)² + (0−5)²) = √(9+25) = √34 ≈ **5.83**

---

## Question 4. Boxplot

### (a) Five-Number Summary Components

1. Minimum
2. Q1 (25th percentile / first quartile)
3. Median (50th percentile / second quartile)
4. Q3 (75th percentile / third quartile)
5. Maximum

### (b) Given: Min=5, Q1=20, Median=35, Q3=55, Max=80

**(i) IQR:**

$$IQR = Q3 - Q1 = 55 - 20 = \mathbf{35}$$

**(ii) Outlier Thresholds (1.5 × IQR rule):**

- Upper threshold: Q3 + 1.5 × IQR = 55 + 52.5 = **107.5**
- Lower threshold: Q1 − 1.5 × IQR = 20 − 52.5 = **−32.5**

**(iii) Are 110 and −15 outliers?**

- **110 > 107.5** → **Yes, 110 is an outlier.**
- **−15 > −32.5** → **No, −15 is not an outlier.**

### (c) Whiskers

The whiskers are two lines extending from each end of the box (Q1 and Q3) outward to the **minimum** and **maximum** non-outlier values in the dataset.

### (d) Outlier Rule

A value is considered an outlier if it is **higher than Q3 + 1.5 × IQR** or **lower than Q1 − 1.5 × IQR**. Such points are plotted individually beyond the whiskers.

---

## Question 5. K-Means Clustering

### (a) Four Steps of K-Means

1. **Randomly select k seed points** and assign each object to the nearest seed (initial cluster assignment).
2. **Compute new centroids** of each cluster (mean of all points in the cluster).
3. **Reassign** each object to the cluster whose centroid is nearest.
4. **Repeat steps 2–3** until no reassignment occurs (convergence).

### (b) Single Link and Complete Link Distances

Clusters: K1 = {x1(1,2), x2(2,0)}, K2 = {x3(3,4), x4(5,5)}

All pairwise Euclidean distances between K1 and K2:

| | x3 (3,4) | x4 (5,5) |
|--|--|--|
| **x1 (1,2)** | √((1−3)²+(2−4)²) = √8 ≈ 2.83 | √((1−5)²+(2−5)²) = √25 = 5.00 |
| **x2 (2,0)** | √((2−3)²+(0−4)²) = √17 ≈ 4.12 | √((2−5)²+(0−5)²) = √34 ≈ 5.83 |

- **Single link** (minimum): **d(x1, x3) = √8 ≈ 2.83**
- **Complete link** (maximum): **d(x2, x4) = √34 ≈ 5.83**

### (c) New Centroids and Assignment of p = (3, 3)

$$c_1 = \left(\frac{1+2}{2},\ \frac{2+0}{2}\right) = (1.5,\ 1.0)$$

$$c_2 = \left(\frac{3+5}{2},\ \frac{4+5}{2}\right) = (4.0,\ 4.5)$$

Distance from p = (3, 3) to each centroid:

$$d(p, c_1) = \sqrt{(3-1.5)^2 + (3-1.0)^2} = \sqrt{2.25 + 4} = \sqrt{6.25} = 2.50$$

$$d(p, c_2) = \sqrt{(3-4.0)^2 + (3-4.5)^2} = \sqrt{1 + 2.25} = \sqrt{3.25} \approx 1.80$$

Since d(p, c₂) < d(p, c₁), the point **p is assigned to K2**.

### (d) K-Means Advantages and Disadvantages

**Advantage:**
- Relatively efficient: time complexity **O(n · k · t)**, where n = #objects, k = #clusters, t = #iterations. Normally k, t << n.

**Disadvantages:**
1. The number of clusters k must be **specified in advance** by the user.
2. **Sensitive to noise and outliers**: a single extreme value can substantially distort the centroid.
3. **Not suitable for non-convex cluster shapes**: it assumes roughly spherical clusters.

### (e) Centroid, Radius, and Diameter Formulas

**Centroid** — the "middle" of a cluster (mean position of all points):

$$\mathbf{c}_k = \frac{\sum_{i=1}^{N} t_{ik}}{N}$$

**Radius** — square root of the average squared distance from any point to the centroid:

$$R_k = \sqrt{\frac{\sum_{i=1}^{N}(t_{ik} - c_k)^2}{N}}$$

**Diameter** — square root of the average squared distance between all possible pairs of points in the cluster:

$$D_k = \sqrt{\frac{\sum_{i=1}^{N}\sum_{j=i+1}^{N}(t_{ik} - t_{jk})^2}{N(N-1)/2}}$$

### (f) Five Inter-Cluster Linkage Methods

| Method | Definition |
|--------|-----------|
| **Single link** | Smallest distance between any element in one cluster and any element in the other: $dis(K_i, K_j) = \min(t_{ip}, t_{jq})$ |
| **Complete link** | Largest distance between any element in one cluster and any element in the other: $dis(K_i, K_j) = \max(t_{ip}, t_{jq})$ |
| **Average** | Average distance between all pairs of elements across the two clusters: $dis(K_i, K_j) = \text{avg}(t_{ip}, t_{jq})$ |
| **Centroid** | Distance between the centroids of the two clusters: $dis(K_i, K_j) = dis(c_i, c_j)$ |
| **Medoid** | Distance between the medoids of the two clusters: $dis(K_i, K_j) = dis(M_i, M_j)$ |

---

## Question 6. PAM (Partitioning Around Medoids)

### (a) What is a Medoid?

A **medoid** is the **most centrally-located real object** in a cluster — that is, the actual data point (not a computed mean) that minimizes the average dissimilarity to all other points in the cluster.

**Difference from centroid:** A centroid is a computed arithmetic mean that may not correspond to any real data point. A medoid is always an actual data point in the dataset.

**Why preferred:** The medoid is less influenced by extreme values or outliers than the centroid, making K-Medoids more robust to noise.

### (b) Swapping Cost $C_{jih}$

Notation:
- **i**: current seed (candidate to be replaced)
- **h**: new candidate seed
- **t**: any other existing seed (not i)
- **j**: a non-seed data point

| Case | Scenario | $C_{jih}$ |
|------|----------|-----------|
| **A** | j belonged to i; after swap, j belongs to h | $d(j, h) - d(j, i)$ |
| **B** | j belonged to t; after swap, j still belongs to t | $0$ |
| **C** | j belonged to i; after swap, j belongs to t | $d(j, t) - d(j, i)$ |
| **D** | j belonged to t; after swap, j belongs to h | $d(j, h) - d(j, t)$ |

### (c) Acceptance Condition

The swap (replacing seed i with h) is accepted **if and only if $TC_{ih} < 0$**, meaning the total clustering quality improves.

### (d) PAM vs. K-Means

**Advantage:** PAM is **more robust to noise and outliers** than K-Means, because the medoid (a real data point) is less affected by extreme values than the centroid (a computed mean).

**Disadvantage:** PAM **does not scale well** to large datasets. Time complexity is **O(i · k · (n−k)²)**, which is much higher than K-Means's O(n · k · t).

---

## Question 7. BIRCH

### (a) Clustering Feature (CF)

**CF = Clustering Feature** — a compact summary of the statistics of a cluster.

$$CF = (n,\ LS,\ SS)$$

- **n**: the number of data points in the cluster
- **LS** (Linear Sum): $\displaystyle LS = \sum_{i=1}^{n} X_i$ — the vector sum of all data points
- **SS** (Squared Sum): $\displaystyle SS = \sum_{i=1}^{n} X_i^2$ — the sum of squares of all data points

### (b) CF Computation

Given points: (3,4), (2,6), (4,5), (4,7), (3,8)

- **n = 5**
- **LS** = (3+2+4+4+3, 4+6+5+7+8) = **(16, 30)**
- **SS** = (3²+2²+4²+4²+3², 4²+6²+5²+7²+8²) = (9+4+16+16+9, 16+36+25+49+64) = **(54, 190)**

$$\boxed{CF = (5,\ (16,\ 30),\ (54,\ 190))}$$

### (c) CF-Tree Behavior When a Leaf Splits

**Step-by-step:**

1. The new data point cannot be absorbed into any existing sub-cluster in leaf node LN1 (it exceeds the threshold radius).
2. A **new sub-cluster** entry must be added to LN1.
3. LN1 now has **4 entries**, exceeding leaf factor L = 3.
4. **LN1 splits** into two leaf nodes (LN1a and LN1b), distributing the sub-clusters between them.
5. The parent non-leaf node must now accommodate one additional child pointer.
6. If the parent non-leaf node **also exceeds B = 3**, it too splits.
7. This split may propagate upward to the root. If the root splits, **the height of the CF-tree increases by one**.

### (d) Weakness of BIRCH

BIRCH **handles only numeric data**. It cannot process categorical features directly. It is also sensitive to the order of data records.

---

## Question 8. DBSCAN

### (a) Hyper-parameters

- **ε (epsilon)**: the radius of the neighborhood around any point p. The ε-neighborhood of p is defined as:
$$N_\varepsilon(p) = \{q \in D \mid dist(p, q) \le \varepsilon\}$$
- **MinPts**: the minimum number of points required in the ε-neighborhood of a point for that point to be considered a **core point** (i.e., a point of high density).

### (b) Three Types of Points

- **Core point**: A point p is a core point if $|N_\varepsilon(p)| \ge \text{MinPts}$ — it has at least MinPts neighbors within ε.
- **Border point**: A point that has fewer than MinPts within ε, but lies within the ε-neighborhood of a core point.
- **Noise (outlier)**: A point that is neither a core point nor a border point. It does not belong to any cluster.

### (c) Directly Density-Reachable vs. Density-Reachable

| | Directly Density-Reachable | Density-Reachable |
|--|--|--|
| **Definition** | q is directly density-reachable from p if: (1) p is a core point, and (2) q is in p's ε-neighborhood | p is density-reachable from q if there is a **chain** of points q = p₁, p₂, …, pₙ = p where each pᵢ₊₁ is directly density-reachable from pᵢ |
| **Hops** | One hop only | Multiple hops (indirect) |
| **Symmetry** | **Asymmetric**: if q is directly density-reachable from p, p is not necessarily directly density-reachable from q | Also **asymmetric** in general |

**Why asymmetric:** Direct density-reachability requires p to be a core point. If q is not a core point, it cannot be the source of density-reachability.

### (d) Example: p and q with ε = 2 cm, MinPts = 3

- p has 4 points in its ε-neighborhood → **p is a core point**
- q has 2 points in its ε-neighborhood → **q is NOT a core point**

**Is q directly density-reachable from p?**
Yes — p is a core point and q is in p's ε-neighborhood. ✓

**Is p directly density-reachable from q?**
No — q is **not** a core point, so nothing can be directly density-reachable from q. ✗

### (e) DBSCAN Pseudocode Fill-in

```
for each o in D do
    if o is not yet [  (1) marked  ] then
        if o is a [  (2) core-object  ] then
            collect all objects [  (3) density-reachable  ] from o
            and assign them to a new cluster.
        else
            assign o to [  (4) NOISE  ]
```

### (f) DBSCAN Advantages and Disadvantages

**Advantage:**
- Can discover clusters of **arbitrary shape** (not limited to spherical clusters)
- **Automatically determines** the number of clusters
- Robust to **noise and outliers**

**Disadvantage:**
- Input parameters ε and MinPts may be **difficult to determine** in practice
- Results are **highly sensitive** to parameter settings; small changes can lead to very different clusterings

---

## Question 9. KNN-Based Recommender System

### (a) Three Steps of KNN Collaborative Filtering

1. **Find k-nearest neighbors**: compute similarity between the active user u and all other users; select the k most similar users as neighbors N using a similarity measure (e.g., Pearson correlation, cosine similarity).
2. **Predict rating**: estimate $r_{u,i}$ (the rating of item i for user u) by aggregating the ratings of item i given by the k neighbors.
3. **Recommend top-N items**: rank all unrated items by their predicted ratings and recommend the top-N items with the highest predicted scores.

### (b) Three Rating Prediction Formulas

#### Formula (a): Simple Average

$$r_{u,i} = \frac{1}{|N|} \sum_{u' \in N} r_{u',i}$$

- $N$: set of k nearest neighbors of user u
- $r_{u',i}$: rating given to item i by neighbor u'

#### Formula (b): Similarity-Weighted Average

$$r_{u,i} = \frac{1}{k} \sum_{u' \in N} sim(u, u') \times r_{u',i}$$

- $sim(u, u')$: similarity between user u and neighbor u'
- $k$ (normalizing factor): $k = \sum_{u' \in N} |sim(u, u')|$

#### Formula (c): Weighted Average with User Bias Correction

$$r_{u,i} = \bar{r}_u + \frac{1}{k} \sum_{u' \in N} sim(u, u') \times (r_{u',i} - \bar{r}_{u'})$$

- $\bar{r}_u$: average rating of active user u
- $\bar{r}_{u'}$: average rating of neighbor u'
- This formula accounts for the fact that different users have different rating scales (some users rate systematically higher or lower)
- $k = \sum_{u' \in N} |sim(u, u')|$

### (c) Two User-User Similarity Measures

#### 1. Pearson Correlation Coefficient

$$sim(x, y) = \frac{\sum_{s \in S_{xy}} (r_{x,s} - \bar{r}_x)(r_{y,s} - \bar{r}_y)}{\sqrt{\sum_{s \in S_{xy}} (r_{x,s} - \bar{r}_x)^2} \cdot \sqrt{\sum_{s \in S_{xy}} (r_{y,s} - \bar{r}_y)^2}}$$

- $S_{xy}$: set of items co-rated by both users x and y
- $\bar{r}_x, \bar{r}_y$: average ratings of user x and y

#### 2. Cosine Similarity

$$sim(x, y) = \cos(\vec{x}, \vec{y}) = \frac{\sum_{s \in S_{xy}} r_{x,s} \cdot r_{y,s}}{\sqrt{\sum_{s \in S_{xy}} r_{x,s}^2} \cdot \sqrt{\sum_{s \in S_{xy}} r_{y,s}^2}}$$
