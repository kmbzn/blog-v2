<template><div><section class="print-section">
<h1 id="data-science-—-final-exam" tabindex="-1"><a class="header-anchor" href="#data-science-—-final-exam"><span>Data Science — Final Exam</span></a></h1>
<DateMeta />
<p><strong>All answers must be written in English.</strong><br>
Show all work for calculation problems.</p>
<hr>
</section>
<section class="print-section">
<h2 id="question-1-mean-median-and-normalization" tabindex="-1"><a class="header-anchor" href="#question-1-mean-median-and-normalization"><span>Question 1. Mean, Median, and Normalization</span></a></h2>
<p><strong>(a)</strong> Compare the <strong>mean</strong> and <strong>median</strong> as measures of central tendency.</p>
<ul>
<li>State <strong>one advantage</strong> of the mean over the median.</li>
<li>State <strong>one disadvantage</strong> of the mean compared to the median.</li>
</ul>
<p><br><br><br><br><br><br><br><br></p>
<p><strong>(b)</strong> What is the main drawback of computing the <strong>simple median</strong> in a dynamic (continuously updated) dataset?</p>
<p><br><br><br><br><br><br></p>
<p><strong>(c)</strong> Below is the frequency distribution of salaries (in thousands of dollars) for a dataset of <strong>n = 3,194</strong> records.</p>
<table>
<thead>
<tr>
<th>Salary Group</th>
<th>Frequency</th>
</tr>
</thead>
<tbody>
<tr>
<td>1 – 10</td>
<td>200</td>
</tr>
<tr>
<td>11 – 20</td>
<td>450</td>
</tr>
<tr>
<td>21 – 30</td>
<td>300</td>
</tr>
<tr>
<td>31 – 60 (this group)</td>
<td>1,500</td>
</tr>
<tr>
<td>61 – 100</td>
<td>744</td>
</tr>
</tbody>
</table>
<p>Using the <strong>Median Interpolation</strong> formula below, estimate the median. Show all computation steps.</p>
<p v-pre class='katex-block'><span class="katex-display"><span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML" display="block"><semantics><mrow><mtext>median</mtext><mo>=</mo><msub><mi>L</mi><mn>1</mn></msub><mo>+</mo><mrow><mo fence="true">(</mo><mfrac><mrow><mi>n</mi><mi mathvariant="normal">/</mi><mn>2</mn><mo>−</mo><msub><mtext>freq</mtext><mi>l</mi></msub></mrow><msub><mtext>freq</mtext><mtext>median</mtext></msub></mfrac><mo fence="true">)</mo></mrow><mo>×</mo><mtext>width</mtext></mrow><annotation encoding="application/x-tex">\text{median} = L_1 + \left(\frac{n/2 - \text{freq}_l}{\text{freq}_\text{median}}\right) \times \text{width}
</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6944em;"></span><span class="mord text"><span class="mord">median</span></span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:0.8333em;vertical-align:-0.15em;"></span><span class="mord"><span class="mord mathnormal">L</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3011em;"><span style="top:-2.55em;margin-left:0em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight">1</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">+</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:2.4em;vertical-align:-0.95em;"></span><span class="minner"><span class="mopen delimcenter" style="top:0em;"><span class="delimsizing size3">(</span></span><span class="mord"><span class="mopen nulldelimiter"></span><span class="mfrac"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:1.427em;"><span style="top:-2.314em;"><span class="pstrut" style="height:3em;"></span><span class="mord"><span class="mord"><span class="mord text"><span class="mord">freq</span></span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.242em;"><span style="top:-2.4559em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord text mtight"><span class="mord mtight">median</span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.2441em;"><span></span></span></span></span></span></span></span></span><span style="top:-3.23em;"><span class="pstrut" style="height:3em;"></span><span class="frac-line" style="border-bottom-width:0.04em;"></span></span><span style="top:-3.677em;"><span class="pstrut" style="height:3em;"></span><span class="mord"><span class="mord mathnormal">n</span><span class="mord">/2</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">−</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mord"><span class="mord text"><span class="mord">freq</span></span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.242em;"><span style="top:-2.4559em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathnormal mtight" style="margin-right:0.01968em;">l</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.2441em;"><span></span></span></span></span></span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.9301em;"><span></span></span></span></span></span><span class="mclose nulldelimiter"></span></span><span class="mclose delimcenter" style="top:0em;"><span class="delimsizing size3">)</span></span></span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">×</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:0.6944em;"></span><span class="mord text"><span class="mord">width</span></span></span></span></span></span></p>
<p><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br></p>
<p><strong>(d)</strong> A dataset of annual incomes (in dollars) ranges from <strong>$12,000</strong> to <strong>$98,000</strong>. The population mean is <strong>μ = $54,000</strong> and the standard deviation is <strong>σ = $16,000</strong>.</p>
<p>Apply each of the following normalization methods to the value <strong>v = $73,600</strong>:</p>
<p><strong>(i)</strong> Min-Max normalization to the range <strong>[0.0, 1.0]</strong></p>
<p><br><br><br><br><br><br><br><br></p>
<p><strong>(ii)</strong> Z-score normalization</p>
<p><br><br><br><br><br><br><br><br></p>
<p><strong>(iii)</strong> Normalization by decimal scaling (state the value of j you chose and justify it)</p>
<p><br><br><br><br><br><br><br><br></p>
<hr>
</section>
<section class="print-section">
<h2 id="question-2-proximity-measure-for-binary-features" tabindex="-1"><a class="header-anchor" href="#question-2-proximity-measure-for-binary-features"><span>Question 2. Proximity Measure for Binary Features</span></a></h2>
<p>Two objects i and j are compared across p binary features. The comparison results are summarized in the following contingency table:</p>
<table>
<thead>
<tr>
<th></th>
<th><strong>j = 1</strong></th>
<th><strong>j = 0</strong></th>
<th>Sum</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>i = 1</strong></td>
<td>q</td>
<td>r</td>
<td>q+r</td>
</tr>
<tr>
<td><strong>i = 0</strong></td>
<td>s</td>
<td>t</td>
<td>s+t</td>
</tr>
<tr>
<td>Sum</td>
<td>q+s</td>
<td>r+t</td>
<td>p</td>
</tr>
</tbody>
</table>
<p><strong>(a)</strong> Write the <strong>symmetric</strong> binary similarity formula using q, r, s, t.</p>
<p><br><br><br><br><br></p>
<p><strong>(b)</strong> Write the <strong>asymmetric</strong> binary similarity formula using q, r, s, t.</p>
<p><br><br><br><br><br></p>
<p><strong>(c)</strong> The table below shows medical test results for three patients. <strong>Gender</strong> is a <strong>symmetric</strong> feature and is ignored. All remaining features are treated as <strong>asymmetric</strong>. Let Y and P be coded as <strong>1</strong>, and N be coded as <strong>0</strong>.</p>
<table>
<thead>
<tr>
<th>Name</th>
<th>Gender</th>
<th>Fever</th>
<th>Cough</th>
<th>Test-1</th>
<th>Test-2</th>
<th>Test-3</th>
<th>Test-4</th>
</tr>
</thead>
<tbody>
<tr>
<td>Jack</td>
<td>M</td>
<td>Y</td>
<td>N</td>
<td>P</td>
<td>N</td>
<td>N</td>
<td>N</td>
</tr>
<tr>
<td>Mary</td>
<td>F</td>
<td>Y</td>
<td>N</td>
<td>P</td>
<td>N</td>
<td>P</td>
<td>N</td>
</tr>
<tr>
<td>Jim</td>
<td>M</td>
<td>Y</td>
<td>P</td>
<td>N</td>
<td>N</td>
<td>N</td>
<td>N</td>
</tr>
</tbody>
</table>
<p>For each pair below, first fill in the contingency table (q, r, s, t), then calculate the <strong>asymmetric dissimilarity</strong> d(i, j).</p>
<p><strong>d(Jack, Mary)</strong></p>
<table>
<thead>
<tr>
<th></th>
<th>Mary = 1</th>
<th>Mary = 0</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>Jack = 1</strong></td>
<td>q =</td>
<td>r =</td>
</tr>
<tr>
<td><strong>Jack = 0</strong></td>
<td>s =</td>
<td>t =</td>
</tr>
</tbody>
</table>
<p><br><br><br><br><br><br><br><br><br><br></p>
<p><strong>d(Jack, Jim)</strong></p>
<table>
<thead>
<tr>
<th></th>
<th>Jim = 1</th>
<th>Jim = 0</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>Jack = 1</strong></td>
<td>q =</td>
<td>r =</td>
</tr>
<tr>
<td><strong>Jack = 0</strong></td>
<td>s =</td>
<td>t =</td>
</tr>
</tbody>
</table>
<p><br><br><br><br><br><br><br><br><br><br></p>
<hr>
</section>
<section class="print-section">
<h2 id="question-3-minkowski-distance" tabindex="-1"><a class="header-anchor" href="#question-3-minkowski-distance"><span>Question 3. Minkowski Distance</span></a></h2>
<p><strong>(a)</strong> Write the general formula for the <strong>Minkowski distance</strong> of order h between two p-dimensional data objects i and j.</p>
<p><br><br><br><br><br><br><br></p>
<p><strong>(b)</strong> State the name and formula for each special case:</p>
<table>
<thead>
<tr>
<th>h</th>
<th>Name</th>
<th>Formula</th>
</tr>
</thead>
<tbody>
<tr>
<td>h = 1</td>
<td></td>
<td></td>
</tr>
<tr>
<td>h = 2</td>
<td></td>
<td></td>
</tr>
<tr>
<td>h → ∞</td>
<td></td>
<td></td>
</tr>
</tbody>
</table>
<p><br><br></p>
<p><strong>(c)</strong> Given the following data points:</p>
<table>
<thead>
<tr>
<th>Point</th>
<th>Attribute 1</th>
<th>Attribute 2</th>
</tr>
</thead>
<tbody>
<tr>
<td>x1</td>
<td>1</td>
<td>2</td>
</tr>
<tr>
<td>x2</td>
<td>2</td>
<td>0</td>
</tr>
<tr>
<td>x3</td>
<td>3</td>
<td>4</td>
</tr>
<tr>
<td>x4</td>
<td>5</td>
<td>5</td>
</tr>
</tbody>
</table>
<p>Calculate the distance between <strong>x1 and x3</strong>, and between <strong>x2 and x4</strong>, using Manhattan distance (L1) and Euclidean distance (L2).</p>
<p><br><br><br><br><br><br><br><br><br><br><br><br><br><br></p>
<hr>
</section>
<section class="print-section">
<h2 id="question-4-boxplot" tabindex="-1"><a class="header-anchor" href="#question-4-boxplot"><span>Question 4. Boxplot</span></a></h2>
<p><strong>(a)</strong> List the <strong>five components</strong> that make up the five-number summary of a distribution.</p>
<p><br><br><br><br><br><br><br><br></p>
<p><strong>(b)</strong> A boxplot is constructed from a dataset with the following five-number summary:</p>
<p>Min = 5, Q1 = 20, Median = 35, Q3 = 55, Max = 80</p>
<p><strong>(i)</strong> What is the <strong>IQR</strong>?</p>
<p><br><br><br><br><br></p>
<p><strong>(ii)</strong> What are the <strong>upper and lower outlier thresholds</strong> using the 1.5 × IQR rule?</p>
<p><br><br><br><br><br><br><br></p>
<p><strong>(iii)</strong> Would the values <strong>110</strong> and <strong>−15</strong> be considered outliers? Explain.</p>
<p><br><br><br><br><br><br><br></p>
<p><strong>(c)</strong> In a boxplot, what do the <strong>whiskers</strong> represent?</p>
<p><br><br><br><br><br></p>
<p><strong>(d)</strong> In a boxplot, <strong>outlier</strong> points are plotted individually. What is the standard rule for identifying them?</p>
<p><br><br><br><br><br></p>
<hr>
</section>
<section class="print-section">
<h2 id="question-5-k-means-clustering" tabindex="-1"><a class="header-anchor" href="#question-5-k-means-clustering"><span>Question 5. K-Means Clustering</span></a></h2>
<p><strong>(a)</strong> Describe the <strong>four steps</strong> of the K-Means algorithm.</p>
<p><br><br><br><br><br><br><br><br><br><br><br><br></p>
<p><strong>(b)</strong> Given K = 2 and the following initial cluster assignment:</p>
<ul>
<li>Cluster K1 = { x1(1, 2), x2(2, 0) }</li>
<li>Cluster K2 = { x3(3, 4), x4(5, 5) }</li>
</ul>
<p>Calculate the <strong>single link</strong> distance and the <strong>complete link</strong> distance between K1 and K2 using Euclidean distance (L2). Show all pairwise distances.</p>
<p><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br></p>
<p><strong>(c)</strong> Using the clusters from (b), compute the new <strong>centroids</strong> c1 and c2 after one update step.</p>
<p>Then, given a new point <strong>p = (3, 3)</strong>, determine which cluster it would be assigned to using Euclidean distance to the new centroids. Show your computation.</p>
<p><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br></p>
<p><strong>(d)</strong> State <strong>one advantage</strong> and <strong>two disadvantages</strong> of the K-Means algorithm.</p>
<p><br><br><br><br><br><br><br><br><br></p>
<p><strong>(e)</strong> Write the definition and formula for each of the following cluster statistics. Use <span v-pre class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><msub><mi>t</mi><mrow><mi>i</mi><mi>k</mi></mrow></msub></mrow><annotation encoding="application/x-tex">t_{ik}</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.7651em;vertical-align:-0.15em;"></span><span class="mord"><span class="mord mathnormal">t</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3361em;"><span style="top:-2.55em;margin-left:0em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mathnormal mtight" style="margin-right:0.03148em;">ik</span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span></span></span></span> to denote a data point in cluster k, <span v-pre class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><msub><mi>c</mi><mi>k</mi></msub></mrow><annotation encoding="application/x-tex">c_k</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.5806em;vertical-align:-0.15em;"></span><span class="mord"><span class="mord mathnormal">c</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3361em;"><span style="top:-2.55em;margin-left:0em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathnormal mtight" style="margin-right:0.03148em;">k</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span></span></span></span> to denote the centroid, and N to denote the number of points in the cluster.</p>
<ul>
<li>Centroid</li>
<li>Radius</li>
<li>Diameter</li>
</ul>
<p><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br></p>
<p><strong>(f)</strong> List all <strong>five</strong> inter-cluster distance (linkage) methods covered in lecture. For each, write its name and a one-sentence definition (or formula).</p>
<p><br><br><br><br><br><br><br><br><br><br><br><br><br><br></p>
<hr>
</section>
<section class="print-section">
<h2 id="question-6-pam-partitioning-around-medoids" tabindex="-1"><a class="header-anchor" href="#question-6-pam-partitioning-around-medoids"><span>Question 6. PAM (Partitioning Around Medoids)</span></a></h2>
<p><strong>(a)</strong> What is a <strong>medoid</strong>? How does it differ from a centroid, and why is it preferred in some situations?</p>
<p><br><br><br><br><br><br><br><br><br><br></p>
<p><strong>(b)</strong> In PAM, the total swapping cost is defined as:</p>
<p v-pre class='katex-block'><span class="katex-display"><span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML" display="block"><semantics><mrow><mi>T</mi><msub><mi>C</mi><mrow><mi>i</mi><mi>h</mi></mrow></msub><mo>=</mo><munder><mo>∑</mo><mi>j</mi></munder><msub><mi>C</mi><mrow><mi>j</mi><mi>i</mi><mi>h</mi></mrow></msub></mrow><annotation encoding="application/x-tex">TC_{ih} = \sum_j C_{jih}
</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.8333em;vertical-align:-0.15em;"></span><span class="mord mathnormal" style="margin-right:0.13889em;">T</span><span class="mord"><span class="mord mathnormal" style="margin-right:0.07153em;">C</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3361em;"><span style="top:-2.55em;margin-left:-0.0715em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mathnormal mtight">ih</span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:2.4638em;vertical-align:-1.4138em;"></span><span class="mop op-limits"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:1.05em;"><span style="top:-1.8723em;margin-left:0em;"><span class="pstrut" style="height:3.05em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathnormal mtight" style="margin-right:0.05724em;">j</span></span></span><span style="top:-3.05em;"><span class="pstrut" style="height:3.05em;"></span><span><span class="mop op-symbol large-op">∑</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:1.4138em;"><span></span></span></span></span></span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mord"><span class="mord mathnormal" style="margin-right:0.07153em;">C</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3361em;"><span style="top:-2.55em;margin-left:-0.0715em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mathnormal mtight">jih</span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.2861em;"><span></span></span></span></span></span></span></span></span></span></span></p>
<p>where i is the current seed being considered for replacement, h is the candidate new seed, t is any other seed, and j is a non-seed data point.</p>
<p>Fill in the formula for <span v-pre class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><msub><mi>C</mi><mrow><mi>j</mi><mi>i</mi><mi>h</mi></mrow></msub></mrow><annotation encoding="application/x-tex">C_{jih}</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.9694em;vertical-align:-0.2861em;"></span><span class="mord"><span class="mord mathnormal" style="margin-right:0.07153em;">C</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3361em;"><span style="top:-2.55em;margin-left:-0.0715em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mathnormal mtight">jih</span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.2861em;"><span></span></span></span></span></span></span></span></span></span> in each of the four cases below:</p>
<table>
<thead>
<tr>
<th>Case</th>
<th>Scenario</th>
<th><span v-pre class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><msub><mi>C</mi><mrow><mi>j</mi><mi>i</mi><mi>h</mi></mrow></msub></mrow><annotation encoding="application/x-tex">C_{jih}</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.9694em;vertical-align:-0.2861em;"></span><span class="mord"><span class="mord mathnormal" style="margin-right:0.07153em;">C</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3361em;"><span style="top:-2.55em;margin-left:-0.0715em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mathnormal mtight">jih</span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.2861em;"><span></span></span></span></span></span></span></span></span></span> = ?</th>
</tr>
</thead>
<tbody>
<tr>
<td>A</td>
<td>j currently belongs to i; after swap, j would belong to h</td>
<td></td>
</tr>
<tr>
<td>B</td>
<td>j currently belongs to other seed t; after swap, j still belongs to t</td>
<td></td>
</tr>
<tr>
<td>C</td>
<td>j currently belongs to i; after swap, j would belong to other seed t</td>
<td></td>
</tr>
<tr>
<td>D</td>
<td>j currently belongs to other seed t; after swap, j would belong to h</td>
<td></td>
</tr>
</tbody>
</table>
<p><br><br><br><br></p>
<p><strong>(c)</strong> State the <strong>condition</strong> under which the swap (replacing seed i with h) is accepted.</p>
<p><br><br><br><br><br></p>
<p><strong>(d)</strong> State <strong>one advantage</strong> and <strong>one disadvantage</strong> of PAM compared to K-Means.</p>
<p><br><br><br><br><br><br><br><br></p>
<hr>
</section>
<section class="print-section">
<h2 id="question-7-birch" tabindex="-1"><a class="header-anchor" href="#question-7-birch"><span>Question 7. BIRCH</span></a></h2>
<p><strong>(a)</strong> What does <strong>CF</strong> stand for in BIRCH? Write the three components of a Clustering Feature and define each one.</p>
<p v-pre class='katex-block'><span class="katex-display"><span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML" display="block"><semantics><mrow><mi>C</mi><mi>F</mi><mo>=</mo><mo stretchy="false">(</mo><mi>n</mi><mo separator="true">,</mo><mi>L</mi><mi>S</mi><mo separator="true">,</mo><mi>S</mi><mi>S</mi><mo stretchy="false">)</mo></mrow><annotation encoding="application/x-tex">CF = (n, LS, SS)
</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6833em;"></span><span class="mord mathnormal" style="margin-right:0.13889em;">CF</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mopen">(</span><span class="mord mathnormal">n</span><span class="mpunct">,</span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mord mathnormal">L</span><span class="mord mathnormal" style="margin-right:0.05764em;">S</span><span class="mpunct">,</span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mord mathnormal" style="margin-right:0.05764em;">SS</span><span class="mclose">)</span></span></span></span></span></p>
<p><br><br><br><br><br><br><br><br><br><br><br><br></p>
<p><strong>(b)</strong> Given the following five 2-dimensional data points:</p>
<p v-pre class='katex-block'><span class="katex-display"><span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML" display="block"><semantics><mrow><mo stretchy="false">(</mo><mn>3</mn><mo separator="true">,</mo><mn>4</mn><mo stretchy="false">)</mo><mo separator="true">,</mo><mtext> </mtext><mo stretchy="false">(</mo><mn>2</mn><mo separator="true">,</mo><mn>6</mn><mo stretchy="false">)</mo><mo separator="true">,</mo><mtext> </mtext><mo stretchy="false">(</mo><mn>4</mn><mo separator="true">,</mo><mn>5</mn><mo stretchy="false">)</mo><mo separator="true">,</mo><mtext> </mtext><mo stretchy="false">(</mo><mn>4</mn><mo separator="true">,</mo><mn>7</mn><mo stretchy="false">)</mo><mo separator="true">,</mo><mtext> </mtext><mo stretchy="false">(</mo><mn>3</mn><mo separator="true">,</mo><mn>8</mn><mo stretchy="false">)</mo></mrow><annotation encoding="application/x-tex">(3, 4),\ (2, 6),\ (4, 5),\ (4, 7),\ (3, 8)
</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mopen">(</span><span class="mord">3</span><span class="mpunct">,</span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mord">4</span><span class="mclose">)</span><span class="mpunct">,</span><span class="mspace"> </span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mopen">(</span><span class="mord">2</span><span class="mpunct">,</span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mord">6</span><span class="mclose">)</span><span class="mpunct">,</span><span class="mspace"> </span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mopen">(</span><span class="mord">4</span><span class="mpunct">,</span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mord">5</span><span class="mclose">)</span><span class="mpunct">,</span><span class="mspace"> </span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mopen">(</span><span class="mord">4</span><span class="mpunct">,</span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mord">7</span><span class="mclose">)</span><span class="mpunct">,</span><span class="mspace"> </span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mopen">(</span><span class="mord">3</span><span class="mpunct">,</span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mord">8</span><span class="mclose">)</span></span></span></span></span></p>
<p>Compute the Clustering Feature <strong>CF = (n, LS, SS)</strong> for this set of points.</p>
<p><br><br><br><br><br><br><br><br><br><br><br><br></p>
<p><strong>(c)</strong> A CF-tree is constructed with branching factor <strong>B = 3</strong> (max children per non-leaf node) and leaf factor <strong>L = 3</strong> (max sub-clusters per leaf node).</p>
<p>Currently, a leaf node LN1 contains exactly 3 sub-clusters. A new data point arrives and cannot be absorbed into any existing sub-cluster, so it creates a new sub-cluster entry in LN1.</p>
<p>Describe step by step what happens to the CF-tree structure. What happens if the parent (non-leaf) node of LN1 also reaches its limit?</p>
<p><br><br><br><br><br><br><br><br><br><br><br><br><br><br></p>
<p><strong>(d)</strong> State <strong>one weakness</strong> of BIRCH regarding data types.</p>
<p><br><br><br><br><br></p>
<hr>
</section>
<section class="print-section">
<h2 id="question-8-dbscan" tabindex="-1"><a class="header-anchor" href="#question-8-dbscan"><span>Question 8. DBSCAN</span></a></h2>
<p><strong>(a)</strong> Define the two hyper-parameters of DBSCAN:</p>
<ul>
<li><strong>ε (epsilon)</strong></li>
<li><strong>MinPts</strong></li>
</ul>
<p><br><br><br><br><br><br><br><br><br><br></p>
<p><strong>(b)</strong> Define the following three types of points in DBSCAN:</p>
<ul>
<li>Core point</li>
<li>Border point</li>
<li>Noise (outlier)</li>
</ul>
<p><br><br><br><br><br><br><br><br><br><br><br><br></p>
<p><strong>(c)</strong> Explain the difference between <strong>directly density-reachable</strong> and <strong>density-reachable</strong>. Is density-reachability symmetric or asymmetric? Explain.</p>
<p><br><br><br><br><br><br><br><br><br><br><br><br></p>
<p><strong>(d)</strong> Consider the following setup: <strong>ε = 2 cm</strong>, <strong>MinPts = 3</strong>.</p>
<p>Point p has 4 points within its ε-neighborhood (including q). Point q has 2 points within its ε-neighborhood (including p).</p>
<ul>
<li>Is q <strong>directly density-reachable</strong> from p?</li>
<li>Is p <strong>directly density-reachable</strong> from q?</li>
<li>Justify your answers.</li>
</ul>
<p><br><br><br><br><br><br><br><br><br><br></p>
<p><strong>(e)</strong> Fill in the blanks in the DBSCAN pseudocode below:</p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text"><pre v-pre><code class="language-text"><span class="line">for each o in D do</span>
<span class="line">    if o is not yet [  (1)  ] then</span>
<span class="line">        if o is a [  (2)  ] then</span>
<span class="line">            collect all objects [  (3)  ] from o</span>
<span class="line">            and assign them to a new cluster.</span>
<span class="line">        else</span>
<span class="line">            assign o to [  (4)  ]</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><br><br><br><br></p>
<p><strong>(f)</strong> State <strong>one advantage</strong> and <strong>one disadvantage</strong> of DBSCAN.</p>
<p><br><br><br><br><br><br><br><br></p>
<hr>
</section>
<section class="print-section">
<h2 id="question-9-knn-based-recommender-system" tabindex="-1"><a class="header-anchor" href="#question-9-knn-based-recommender-system"><span>Question 9. KNN-Based Recommender System</span></a></h2>
<p><strong>(a)</strong> Briefly describe the <strong>three steps</strong> of the KNN-based collaborative filtering method.</p>
<p><br><br><br><br><br><br><br><br><br><br><br><br></p>
<p><strong>(b)</strong> In Step 2 (rating prediction), the predicted rating <span v-pre class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><msub><mi>r</mi><mrow><mi>u</mi><mo separator="true">,</mo><mi>i</mi></mrow></msub></mrow><annotation encoding="application/x-tex">r_{u,i}</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.7167em;vertical-align:-0.2861em;"></span><span class="mord"><span class="mord mathnormal" style="margin-right:0.02778em;">r</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3117em;"><span style="top:-2.55em;margin-left:-0.0278em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mathnormal mtight">u</span><span class="mpunct mtight">,</span><span class="mord mathnormal mtight">i</span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.2861em;"><span></span></span></span></span></span></span></span></span></span> for user u on item i can be computed in three different ways. Write all three formulas and define all symbols used:</p>
<ul>
<li>Formula <strong>(a)</strong>: simple average over neighbors</li>
<li>Formula <strong>(b)</strong>: similarity-weighted average</li>
<li>Formula <strong>(c)</strong>: similarity-weighted average with user bias correction</li>
</ul>
<p><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br></p>
<p><strong>(c)</strong> In Step 1 (finding neighbors), name <strong>two similarity measures</strong> commonly used to compute user-user similarity. Write the formula for each.</p>
<p><br><br><br><br><br><br><br><br><br><br><br><br><br><br></p>
</section>
</div></template>


