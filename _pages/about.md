---
permalink: /
title: ""
excerpt: ""
author_profile: true
redirect_from: 
  - /about/
  - /about.html
---

{% if site.google_scholar_stats_use_cdn %}
{% assign gsDataBaseUrl = "https://cdn.jsdelivr.net/gh/" | append: site.repository | append: "@" %}
{% else %}
{% assign gsDataBaseUrl = "https://raw.githubusercontent.com/" | append: site.repository | append: "/" %}
{% endif %}
{% assign url = gsDataBaseUrl | append: "google-scholar-stats/gs_data_shieldsio.json" %}

<span class='anchor' id='about-me'></span>

<span style="font-size: larger;">I am a first-year PhD student from the School of Vehicle and Mobility at Tsinghua University, under the guidance of [Prof. Sifa Zheng](http://www.svm.tsinghua.edu.cn/essay/80/1835.html). Prior to this, I graduated from NUAA (Nanjing University of Aeronautics and Astronautics) with a bachelor’s degree. </span>

<span style="font-size: larger;">My current research interests lie in the learning-based planning and adversarial testing for autonomous driving. Previously, my research focused on the multi-modality perception. My ultimate goal is to leverage AI to empower autonomous driving, enabling the creation of safer and more reliable self-driving systems.</span>

<span style="font-size: medium;">**Current Google Scholar Citations:**</span> <a href='https://scholar.google.com/citations?user=m_bC1VAAAAAJ&hl'><img src="https://img.shields.io/endpoint?url={{ url | url_encode }}&logo=Google%20Scholar&labelColor=f6f6f6&color=9cf&style=flat&label=citations"></a>


# 🔥 News
- *2023.03*: &nbsp;🎉🎉 My first academic paper has been officially accepted by the [Knowledge-Based Systems](https://www.sciencedirect.com/journal/knowledge-based-systems), marking the official start of my academic career! 

# 📝 Publications

## 📚 **Preprint**:

<div class='paper-box'><div class='paper-box-image'><div><div class="badge" style="font-size: 15px;">arXiv 2024</div><img src='images/FREA.gif' alt="sym" width="90%"></div></div>
<div class='paper-box-text' markdown="1">




**FREA: Feasibility-Guided Generation of Safety-Critical Scenarios with Reasonable Adversariality**

**Keyu Chen**, Yuheng Lei, Hao Cheng, Haoran Wu, Wenchao Sun, Sifa Zheng

[![Custom badge](https://img.shields.io/badge/arXiv-Paper-b31b1b?logo=arxiv&logoColor=white?style=flat-square)](https://arxiv.org/abs/2406.02983) 

*FREA incorporates feasibility as guidance to generate adversarial yet AV-feasible, safety-critical scenarios for autonomous driving.*

</div>
</div>

## 🧑‍🎨 **Published**:

<div class='paper-box'><div class='paper-box-image'><div><div class="badge" style="font-size: 15px;">KBS 2023</div><img src='images/IGT.gif' alt="sym" width="90%"></div></div>
<div class='paper-box-text' markdown="1">
**IGT: Illumination-guided RGB-T object detection with transformers**


**Knowledge-Based Systems (2023) SCI (Q1) IF=8.8**

**Keyu Chen**, Jinqiang Liu, Han Zhang

[![Custom badge](https://img.shields.io/badge/Elsevier-Paper-b31b1b?logo=Elsevier&logoColor=white?style=flat-square)](https://www.sciencedirect.com/science/article/pii/S0950705123001739?casa_token=uB0IUPawdkcAAAAA:xiqZf6isfEmqjSoG86H1J5PPAFZw0YT4QG8giHL0ADJNsXcyYcnzYd3ceq9tnZNWkTccpOXECDw) 

*We propose using illumination intensity to guide the fusion process of multi-modality features, enabling the comprehensive utilization of cross-modality complementary information in object detection.*

</div>
</div>

#  🚀 Project

<div class='paper-box'><div class='paper-box-image'><div><div class="badge" style="font-size: 15px;">Github 2023</div><img src='images/Highway-Adv.gif' alt="sym" width="90%"></div></div>
<div class='paper-box-text' markdown="1">

**Highway-Adversarial**

[![Custom badge](https://img.shields.io/badge/Github-Code-white?logo=github&color=Green?style=flat-square)](https://github.com/CurryChen77/Highway-env-adversarial)

*We propose a novel training method for adversarial agents in the Highway-Env, designed to manipulate the behaviors of critical background vehicles. This approach strategically challenges the ego vehicle by creating safety-critical scenarios.*

</div>
</div>

# 🎖 Honors and Awards

- *2023.06* Outstanding Graduate (Top 1%), NUAA.
- *2023.06* Outstanding Bachelor Thesis Award (Top 5%), NUAA.
- *2021.12* National Scholarship (Top 1%), NUAA. 

# 📖 Educations
- *2023.09 - present*, PhD candidate, Mechanical engineering, Tsinghua University, Beijing, China. 
- *2019.09 - 2023.06*, Bachelor, Vehicle Engineering, NUAA (Nanjing University of Aeronautics and Astronautics), Nanjing, China. 

# 💻 Internships
- *2023.07 - 2023.08*, [Tsari](https://www.tsari.tsinghua.edu.cn/), Suzhou, China.
