# Data Science — Final Exam

**All answers must be written in English.**  
Show all work for calculation problems.

---

## Question 1. Mean, Median, and Normalization

**(a)** Compare the **mean** and **median** as measures of central tendency.

- State **one advantage** of the mean over the median.
- State **one disadvantage** of the mean compared to the median.

<br><br><br><br><br><br><br><br>

**(b)** What is the main drawback of computing the **simple median** in a dynamic (continuously updated) dataset?

<br><br><br><br><br><br>

**(c)** Below is the frequency distribution of salaries (in thousands of dollars) for a dataset of **n = 3,194** records.

| Salary Group | Frequency |
|---|---|
| 1 – 10 | 200 |
| 11 – 20 | 450 |
| 21 – 30 | 300 |
| 31 – 60 (this group) | 1,500 |
| 61 – 100 | 744 |

Using the **Median Interpolation** formula below, estimate the median. Show all computation steps.

$$\text{median} = L_1 + \left(\frac{n/2 - \text{freq}_l}{\text{freq}_\text{median}}\right) \times \text{width}$$

<br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>

**(d)** A dataset of annual incomes (in dollars) ranges from **\$12,000** to **\$98,000**. The population mean is **μ = \$54,000** and the standard deviation is **σ = \$16,000**.

Apply each of the following normalization methods to the value **v = \$73,600**:

**(i)** Min-Max normalization to the range **[0.0, 1.0]**

<br><br><br><br><br><br><br><br>

**(ii)** Z-score normalization

<br><br><br><br><br><br><br><br>

**(iii)** Normalization by decimal scaling (state the value of j you chose and justify it)

<br><br><br><br><br><br><br><br>

---

## Question 2. Proximity Measure for Binary Features

Two objects i and j are compared across p binary features. The comparison results are summarized in the following contingency table:

|  | **j = 1** | **j = 0** | Sum |
|---|---|---|---|
| **i = 1** | q | r | q+r |
| **i = 0** | s | t | s+t |
| Sum | q+s | r+t | p |

**(a)** Write the **symmetric** binary similarity formula using q, r, s, t.

<br><br><br><br><br>

**(b)** Write the **asymmetric** binary similarity formula using q, r, s, t.

<br><br><br><br><br>

**(c)** The table below shows medical test results for three patients. **Gender** is a **symmetric** feature and is ignored. All remaining features are treated as **asymmetric**. Let Y and P be coded as **1**, and N be coded as **0**.

| Name | Gender | Fever | Cough | Test-1 | Test-2 | Test-3 | Test-4 |
|------|--------|-------|-------|--------|--------|--------|--------|
| Jack | M | Y | N | P | N | N | N |
| Mary | F | Y | N | P | N | P | N |
| Jim  | M | Y | P | N | N | N | N |

For each pair below, first fill in the contingency table (q, r, s, t), then calculate the **asymmetric dissimilarity** d(i, j).

**d(Jack, Mary)**

|  | Mary = 1 | Mary = 0 |
|--|----------|----------|
| **Jack = 1** | q = | r = |
| **Jack = 0** | s = | t = |

<br><br><br><br><br><br><br><br><br><br>

**d(Jack, Jim)**

|  | Jim = 1 | Jim = 0 |
|--|---------|---------|
| **Jack = 1** | q = | r = |
| **Jack = 0** | s = | t = |

<br><br><br><br><br><br><br><br><br><br>

---

## Question 3. Minkowski Distance

**(a)** Write the general formula for the **Minkowski distance** of order h between two p-dimensional data objects i and j.

<br><br><br><br><br><br><br>

**(b)** State the name and formula for each special case:

| h | Name | Formula |
|---|------|---------|
| h = 1 | | |
| h = 2 | | |
| h → ∞ | | |

<br><br>

**(c)** Given the following data points:

| Point | Attribute 1 | Attribute 2 |
|-------|------------|------------|
| x1 | 1 | 2 |
| x2 | 2 | 0 |
| x3 | 3 | 4 |
| x4 | 5 | 5 |

Calculate the distance between **x1 and x3**, and between **x2 and x4**, using Manhattan distance (L1) and Euclidean distance (L2).

<br><br><br><br><br><br><br><br><br><br><br><br><br><br>

---

## Question 4. Boxplot

**(a)** List the **five components** that make up the five-number summary of a distribution.

<br><br><br><br><br><br><br><br>

**(b)** A boxplot is constructed from a dataset with the following five-number summary:

Min = 5, Q1 = 20, Median = 35, Q3 = 55, Max = 80

**(i)** What is the **IQR**?

<br><br><br><br><br>

**(ii)** What are the **upper and lower outlier thresholds** using the 1.5 × IQR rule?

<br><br><br><br><br><br><br>

**(iii)** Would the values **110** and **−15** be considered outliers? Explain.

<br><br><br><br><br><br><br>

**(c)** In a boxplot, what do the **whiskers** represent?

<br><br><br><br><br>

**(d)** In a boxplot, **outlier** points are plotted individually. What is the standard rule for identifying them?

<br><br><br><br><br>

---

## Question 5. K-Means Clustering

**(a)** Describe the **four steps** of the K-Means algorithm.

<br><br><br><br><br><br><br><br><br><br><br><br>

**(b)** Given K = 2 and the following initial cluster assignment:

- Cluster K1 = { x1(1, 2), x2(2, 0) }
- Cluster K2 = { x3(3, 4), x4(5, 5) }

Calculate the **single link** distance and the **complete link** distance between K1 and K2 using Euclidean distance (L2). Show all pairwise distances.

<br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>

**(c)** Using the clusters from (b), compute the new **centroids** c1 and c2 after one update step.

Then, given a new point **p = (3, 3)**, determine which cluster it would be assigned to using Euclidean distance to the new centroids. Show your computation.

<br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>

**(d)** State **one advantage** and **two disadvantages** of the K-Means algorithm.

<br><br><br><br><br><br><br><br><br>

**(e)** Write the definition and formula for each of the following cluster statistics. Use $t_{ik}$ to denote a data point in cluster k, $c_k$ to denote the centroid, and N to denote the number of points in the cluster.

- Centroid
- Radius
- Diameter

<br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>

**(f)** List all **five** inter-cluster distance (linkage) methods covered in lecture. For each, write its name and a one-sentence definition (or formula).

<br><br><br><br><br><br><br><br><br><br><br><br><br><br>

---

## Question 6. PAM (Partitioning Around Medoids)

**(a)** What is a **medoid**? How does it differ from a centroid, and why is it preferred in some situations?

<br><br><br><br><br><br><br><br><br><br>

**(b)** In PAM, the total swapping cost is defined as:

$$TC_{ih} = \sum_j C_{jih}$$

where i is the current seed being considered for replacement, h is the candidate new seed, t is any other seed, and j is a non-seed data point.

Fill in the formula for $C_{jih}$ in each of the four cases below:

| Case | Scenario | $C_{jih}$ = ? |
|------|----------|--------------|
| A | j currently belongs to i; after swap, j would belong to h | |
| B | j currently belongs to other seed t; after swap, j still belongs to t | |
| C | j currently belongs to i; after swap, j would belong to other seed t | |
| D | j currently belongs to other seed t; after swap, j would belong to h | |

<br><br><br><br>

**(c)** State the **condition** under which the swap (replacing seed i with h) is accepted.

<br><br><br><br><br>

**(d)** State **one advantage** and **one disadvantage** of PAM compared to K-Means.

<br><br><br><br><br><br><br><br>

---

## Question 7. BIRCH

**(a)** What does **CF** stand for in BIRCH? Write the three components of a Clustering Feature and define each one.

$$CF = (n, LS, SS)$$

<br><br><br><br><br><br><br><br><br><br><br><br>

**(b)** Given the following five 2-dimensional data points:

$$(3, 4),\ (2, 6),\ (4, 5),\ (4, 7),\ (3, 8)$$

Compute the Clustering Feature **CF = (n, LS, SS)** for this set of points.

<br><br><br><br><br><br><br><br><br><br><br><br>

**(c)** A CF-tree is constructed with branching factor **B = 3** (max children per non-leaf node) and leaf factor **L = 3** (max sub-clusters per leaf node).

Currently, a leaf node LN1 contains exactly 3 sub-clusters. A new data point arrives and cannot be absorbed into any existing sub-cluster, so it creates a new sub-cluster entry in LN1.

Describe step by step what happens to the CF-tree structure. What happens if the parent (non-leaf) node of LN1 also reaches its limit?

<br><br><br><br><br><br><br><br><br><br><br><br><br><br>

**(d)** State **one weakness** of BIRCH regarding data types.

<br><br><br><br><br>

---

## Question 8. DBSCAN

**(a)** Define the two hyper-parameters of DBSCAN:

- **ε (epsilon)**
- **MinPts**

<br><br><br><br><br><br><br><br><br><br>

**(b)** Define the following three types of points in DBSCAN:

- Core point
- Border point
- Noise (outlier)

<br><br><br><br><br><br><br><br><br><br><br><br>

**(c)** Explain the difference between **directly density-reachable** and **density-reachable**. Is density-reachability symmetric or asymmetric? Explain.

<br><br><br><br><br><br><br><br><br><br><br><br>

**(d)** Consider the following setup: **ε = 2 cm**, **MinPts = 3**.

Point p has 4 points within its ε-neighborhood (including q). Point q has 2 points within its ε-neighborhood (including p).

- Is q **directly density-reachable** from p?
- Is p **directly density-reachable** from q?
- Justify your answers.

<br><br><br><br><br><br><br><br><br><br>

**(e)** Fill in the blanks in the DBSCAN pseudocode below:

```
for each o in D do
    if o is not yet [  (1)  ] then
        if o is a [  (2)  ] then
            collect all objects [  (3)  ] from o
            and assign them to a new cluster.
        else
            assign o to [  (4)  ]
```

<br><br><br><br>

**(f)** State **one advantage** and **one disadvantage** of DBSCAN.

<br><br><br><br><br><br><br><br>

---

## Question 9. KNN-Based Recommender System

**(a)** Briefly describe the **three steps** of the KNN-based collaborative filtering method.

<br><br><br><br><br><br><br><br><br><br><br><br>

**(b)** In Step 2 (rating prediction), the predicted rating $r_{u,i}$ for user u on item i can be computed in three different ways. Write all three formulas and define all symbols used:

- Formula **(a)**: simple average over neighbors
- Formula **(b)**: similarity-weighted average
- Formula **(c)**: similarity-weighted average with user bias correction

<br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>

**(c)** In Step 1 (finding neighbors), name **two similarity measures** commonly used to compute user-user similarity. Write the formula for each.

<br><br><br><br><br><br><br><br><br><br><br><br><br><br>