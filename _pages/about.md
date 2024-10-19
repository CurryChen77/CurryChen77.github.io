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

<span style="font-size: larger;">I am a second-year PhD student from the School of Vehicle and Mobility at Tsinghua University, under the guidance of [Prof. Sifa Zheng](http://www.svm.tsinghua.edu.cn/essay/80/1835.html). Prior to this, I graduated from Nanjing University of Aeronautics and Astronautics (NUAA) with a bachelor degree. </span>

<span style="font-size: larger;">My current research interests lie in the learning-based planning and adversarial testing for autonomous driving. Previously, my research focused on the multi-modality perception. My ultimate goal is to leverage AI to empower autonomous driving, enabling the creation of safer and more reliable self-driving systems.</span>

<span style="font-size: medium;">**Current Google Scholar Citations:**</span> <a href='https://scholar.google.com/citations?user=m_bC1VAAAAAJ&hl'><img src="https://img.shields.io/endpoint?url={{ url | url_encode }}&logo=Google%20Scholar&labelColor=f6f6f6&color=9cf&style=flat&label=citations"></a>


# 🔥 News
- *2024.09*:  🎉🎉 Our FREA paper has been accepted by *CoRL 2024 for **<span style="color:#b31b1b">Oral Presentation</span>***.
- *2023.03*:  🎉🎉 Our IGT paper has been accepted by *Knowledge-Based Systems 2023*.

# 📝 Publications

<div class='paper-box'><div class='paper-box-image'><img src='images/FREA.gif' alt="sym" width="90%"></div>
<div class='paper-box-text' markdown="1">
**FREA: Feasibility-Guided Generation of Safety-Critical Scenarios with Reasonable Adversariality**

**Keyu Chen**, Yuheng Lei, Hao Cheng, Haoran Wu, Wenchao Sun, Sifa Zheng

The 8th Conference on Robot Learning **(CoRL <span style="color:#b31b1b">Oral</span>), 2024**

[![Custom badge](https://img.shields.io/badge/arXiv-Paper-b31b1b?logo=arxiv&logoColor=white?style=flat-square)](https://arxiv.org/abs/2406.02983)  [![Custom badge](https://img.shields.io/badge/Project-Page-b31b1b?logo=document)](https://currychen77.github.io/FREA/)  [![Custom badge](https://img.shields.io/badge/Github-Code-b31b1b?logo=github&logocolor=white?style=flat-square)](https://github.com/CurryChen77/FREA)  [![Stars](https://img.shields.io/github/stars/CurryChen77/FREA?style=social)](https://github.com/CurryChen77/FREA/stargazers)

*FREA incorporates feasibility as guidance to generate adversarial yet AV-feasible, safety-critical scenarios for autonomous driving.*

</div>
</div>

<div class='paper-box'><div class='paper-box-image'><img src='images/IGT.gif' alt="sym" width="90%"></div>
<div class='paper-box-text' markdown="1">
**IGT: Illumination-guided RGB-T object detection with transformers**

**Keyu Chen**, Jinqiang Liu, Han Zhang

Knowledge-Based Systems **(KBS) (SCI Q1, IF=7.4), 2023**

[![Custom badge](https://img.shields.io/badge/Elsevier-Paper-b31b1b?logo=Elsevier&logoColor=white?style=flat-square)](https://www.sciencedirect.com/science/article/pii/S0950705123001739?casa_token=uB0IUPawdkcAAAAA:xiqZf6isfEmqjSoG86H1J5PPAFZw0YT4QG8giHL0ADJNsXcyYcnzYd3ceq9tnZNWkTccpOXECDw) 

*IGT uses illumination intensity to guide the fusion process of multi-modality features, enabling the comprehensive utilization of cross-modality complementary information in object detection.*

</div>
</div>

#  🚀 Project

<div class='paper-box'><div class='paper-box-image'><img src='images/Highway-Adv.gif' alt="sym" width="90%"></div>
<div class='paper-box-text' markdown="1">

**Highway-Adversarial**

[![Custom badge](https://img.shields.io/badge/Github-Code-b31b1b?logo=github&logocolor=white?style=flat-square)](https://github.com/CurryChen77/Highway-env-adversarial)  [![Stars](https://img.shields.io/github/stars/CurryChen77/Highway-env-adversarial?style=social)](https://github.com/CurryChen77/Highway-env-adversarial/stargazers)

*We manipulate critical background vehicles in the Highway-Env to exhibit adversarial behaviors that challenge the ego vehicle, creating safety-critical scenarios.*

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

# 🗺️ Visitor Map

<div style="display: flex; justify-content: center; align-items: center;">
<script type="text/javascript" id="clstr_globe" src="//clustrmaps.com/globe.js?w=166&d=G22ZMDy2KEs5OGq6rS0JucNzUxHn13B0tIPWaEGNGJo"></script>
</div>
