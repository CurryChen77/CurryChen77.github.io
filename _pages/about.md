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

<img src="../images/teaser.JPG" alt="description" style="border: 1px solid #ccc; border-radius: 8px; box-shadow: 2px 2px 6px rgba(0,0,0,0.2);" />

<span style="font-size: larger;">I am a third-year Ph.D. student in the School of Vehicle and Mobility at Tsinghua University, working under the supervision of [Prof. Sifa Zheng](http://www.svm.tsinghua.edu.cn/essay/80/1835.html). </span>

<span style="font-size: larger;">My research centers on **traffic simulation and motion planning for autonomous driving**, with a particular emphasis on creating realistic, interactive, and controllable traffic scenarios. I am passionate about developing reliable closed-loop simulation frameworks to accelerate the safe, robust, and scalable advancement of autonomous driving systems.</span>

<span style="font-size: medium;">**Google Scholar Citations:**</span> <a href='https://scholar.google.com/citations?user=m_bC1VAAAAAJ&hl'><img src="https://img.shields.io/endpoint?url={{ url | url_encode }}&logo=Google%20Scholar&labelColor=f6f6f6&color=9cf&style=flat&label=citations"></a>

# 🔥 News

* *2025.05*:  🔥 Released **RIFT**! [Check it out!](https://currychen77.github.io/RIFT/)  

- *2024.09*:  🎉 **FREA** accepted by *CoRL 2024 for **<span style="color:#b31b1b">Oral (4.3%)</span>***.
- *2023.03*:  🎉 **IGT** accepted by *Knowledge-Based Systems 2023*.

# 📝 Publications

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">arXiv 2025</div><img src='images/RIFT.gif' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">
**RIFT: Closed-Loop RL Fine-Tuning for Realistic and Controllable Traffic Simulation**

**Keyu Chen**,Wenchao Sun, Hao Cheng, Sifa Zheng

**arXiv 2025**

[![Custom badge](https://img.shields.io/badge/arXiv-Paper-b31b1b?logo=arxiv&logoColor=white?style=flat-square)](https://arxiv.org/abs/2505.03344)  [![Custom badge](https://img.shields.io/badge/Project-Page-b31b1b?logo=document)](https://currychen77.github.io/RIFT/)  [![Custom badge](https://img.shields.io/badge/Github-Code-b31b1b?logo=github&logocolor=white?style=flat-square)](https://github.com/CurryChen77/RIFT)  [![Stars](https://img.shields.io/github/stars/CurryChen77/RIFT?style=social)](https://github.com/CurryChen77/RIFT/stargazers)

*RIFT achieve realistic and controllable traffic simulation by combining open-loop IL pre-training in a data-driven simulator for realism with closed-loop RL fine-tuning in a physics-based simulator for controllability.*

</div>
</div>

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">CoRL 2024</div><img src='images/FREA.gif' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">
**FREA: Feasibility-Guided Generation of Safety-Critical Scenarios with Reasonable Adversariality**

**Keyu Chen**, Yuheng Lei, Hao Cheng, Haoran Wu, Wenchao Sun, Sifa Zheng

Conference on Robot Learning **(CoRL <span style="color:#b31b1b">Oral 4.3%</span>), 2024**

[![Custom badge](https://img.shields.io/badge/arXiv-Paper-b31b1b?logo=arxiv&logoColor=white?style=flat-square)](https://arxiv.org/abs/2406.02983)  [![Custom badge](https://img.shields.io/badge/Project-Page-b31b1b?logo=document)](https://currychen77.github.io/FREA/)  [![Custom badge](https://img.shields.io/badge/Github-Code-b31b1b?logo=github&logocolor=white?style=flat-square)](https://github.com/CurryChen77/FREA)  [![Stars](https://img.shields.io/github/stars/CurryChen77/FREA?style=social)](https://github.com/CurryChen77/FREA/stargazers)

*FREA incorporates feasibility as guidance to generate adversarial yet AV-feasible, safety-critical scenarios for autonomous driving.*

</div>
</div>

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">KBS 2023</div><img src='images/IGT.gif' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">
**IGT: Illumination-guided RGB-T object detection with transformers**

**Keyu Chen**, Jinqiang Liu, Han Zhang

Knowledge-Based Systems **(KBS) (SCI Q1, IF=7.4), 2023**

[![Custom badge](https://img.shields.io/badge/Elsevier-Paper-b31b1b?logo=Elsevier&logoColor=white?style=flat-square)](https://www.sciencedirect.com/science/article/pii/S0950705123001739?casa_token=uB0IUPawdkcAAAAA:xiqZf6isfEmqjSoG86H1J5PPAFZw0YT4QG8giHL0ADJNsXcyYcnzYd3ceq9tnZNWkTccpOXECDw) 

*IGT uses illumination intensity to guide the fusion process of multi-modality features, enabling the comprehensive utilization of cross-modality complementary information in object detection.*

</div>
</div>

#  🚀 Project

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">Github</div><img src='images/Highway-Adv.gif' alt="sym" width="100%"></div></div>
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
