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

<!-- <img src="../images/teaser.JPG" alt="description" style="border: 1px solid #ccc; border-radius: 8px; box-shadow: 2px 2px 6px rgba(0,0,0,0.2);" /> -->

# 👨‍🎓 About Me

<span style="font-size: larger;">I am a third-year Ph.D. student in the School of Vehicle and Mobility at Tsinghua University, working under the supervision of [Prof. Sifa Zheng](http://www.svm.tsinghua.edu.cn/essay/80/1835.html). </span>

<span style="font-size: larger;">My research centers on **traffic simulation and motion planning for autonomous driving**, with a particular emphasis on creating realistic, interactive, and controllable traffic scenarios. I am passionate about developing reliable closed-loop simulation frameworks to accelerate the safe, robust, and scalable advancement of autonomous driving systems.</span>

# 🎓 Educations

<div style="display:flex; flex-direction:column; gap:16px;">
  <div style="display:flex; align-items:center; gap:14px;">
    <img src="/images/thu.ico" alt="Tsinghua University logo" style="height:50px; width:50px; border-radius:6px;">
    <div>
      <div style="font-weight:600;">THU (Tsinghua University), Beijing, China</div>
      <div style="font-size:0.95em; color:#5f6368;">Ph.D. candidate in Mechanical Engineering, School of Vehicle and Mobility.</div>
      <div style="font-size:0.9em; color:#8a8f94; font-style:italic;">2023.09 - present</div>
    </div>
  </div>
  <div style="display:flex; align-items:center; gap:14px;">
    <img src="/images/nuaa.ico" alt="NUAA logo" style="height:50px; width:50px; border-radius:6px;">
    <div>
      <div style="font-weight:600;">NUAA (Nanjing University of Aeronautics and Astronautics), Nanjing, China</div>
      <div style="font-size:0.95em; color:#5f6368;">B.Eng. in Vehicle Engineering.</div>
      <div style="font-size:0.9em; color:#8a8f94; font-style:italic;">2019.09 - 2023.06</div>
    </div>
  </div>
</div>

# 🔥 News

* *2025.05*:  🔥 Released **RIFT**! [Check it out!](https://currychen77.github.io/RIFT/)  

- *2024.09*:  🎉 **FREA** accepted by *CoRL 2024 for **<span style="color:#b31b1b">Oral (4.3%)</span>***.
- *2023.03*:  🎉 **IGT** accepted by *Knowledge-Based Systems 2023*.

# 📝 Publications

## 🔆 Select Publications

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">arXiv 2025</div><img src='images/RIFT.gif' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">
**RIFT: Group-Relative RL Fine-Tuning for Realistic and Controllable Traffic Simulation**


**Keyu Chen**,Wenchao Sun, Hao Cheng, Sifa Zheng

**arXiv 2025**

[![Custom badge](https://img.shields.io/badge/arXiv-Paper-b31b1b?logo=arxiv&logoColor=white?style=flat-square)](https://arxiv.org/abs/2505.03344)  [![Custom badge](https://img.shields.io/badge/Project-Page-b31b1b?logo=document)](https://currychen77.github.io/RIFT/)  [![Custom badge](https://img.shields.io/badge/Github-Code-b31b1b?logo=github&logocolor=white?style=flat-square)](https://github.com/CurryChen77/RIFT)  [![Stars](https://img.shields.io/github/stars/CurryChen77/RIFT?style=social)](https://github.com/CurryChen77/RIFT/stargazers)

*RIFT achieve realistic and controllable traffic simulation by combining IL pre-training in a data-driven simulator for realism with RL fine-tuning in a physics-based simulator for controllability.*

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

## 📚 All Publications

* [DriveCamSim: Generalizable Camera Simulation via Explicit Camera Modeling for Autonomous Driving](https://arxiv.org/abs/2505.19692). Wenchao Sun, Xuewu Lin, **Keyu Chen**, Zixiang Pei, Yining Shi, Chuang Zhang, Sifa Zheng. **arXiv (2025)**

* [Emergency Index (EI): A two-dimensional surrogate safety measure considering vehicles’ interaction depth](https://www.sciencedirect.com/science/article/pii/S0968090X24005023). Hao Cheng, Yanbo Jiang, Hailun Zhang, **Keyu Chen**, Heye Huang, Shaobing Xu, Jianqiang Wang, Sifa Zheng. **Transportation Research Part C: Emerging Technologies (2025)**

#  🚀 Project

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">Github</div><img src='images/Highway-Adv.gif' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">
**Highway-Adversarial**

[![Custom badge](https://img.shields.io/badge/Github-Code-b31b1b?logo=github&logocolor=white?style=flat-square)](https://github.com/CurryChen77/Highway-env-adversarial)  [![Stars](https://img.shields.io/github/stars/CurryChen77/Highway-env-adversarial?style=social)](https://github.com/CurryChen77/Highway-env-adversarial/stargazers)

*We manipulate critical background vehicles in the Highway-Env to exhibit adversarial behaviors that challenge the ego vehicle, creating safety-critical scenarios.*

</div>
</div>

# 🧑‍💻 Internships

<div style="display:flex; flex-direction:column; gap:16px;">
  <div style="display:flex; align-items:center; gap:14px;">
    <img src="/images/liauto.ico" alt="Li Auto logo" style="height:50px; width:50px; border-radius:6px;">
    <div>
      <div style="font-weight:600;"><a href="https://www.lixiang.com/" target="_blank" rel="noopener">Li Auto</a>, Beijing, China</div>
      <div style="font-size:0.95em; color:#5f6368;">Closed-loop RL fine-tuning for autonomous driving.</div>
      <div style="font-size:0.9em; color:#8a8f94; font-style:italic;">2025.11 - present</div>
    </div>
  </div>
  <div style="display:flex; align-items:center; gap:14px;">
    <img src="/images/tsari.ico" alt="Tsari logo" style="height:50px; width:50px; border-radius:6px;">
    <div>
      <div style="font-weight:600;"><a href="https://www.tsari.tsinghua.edu.cn/" target="_blank" rel="noopener">Tsari</a>, Suzhou, China</div>
      <div style="font-size:0.95em; color:#5f6368;">Safety-critical scenario generation for autonomous driving.</div>
      <div style="font-size:0.9em; color:#8a8f94; font-style:italic;">2023.07 - 2023.08</div>
    </div>
  </div>
</div>


# 🏆 Honors and Awards

<div style="display:flex; flex-direction:column; gap:16px;">
  <div style="display:flex; gap:14px; align-items:flex-start;">
    <div style="min-width:90px; font-weight:600; color:#8a8f94;">2023.06</div>
    <div>
      <div style="font-weight:600;">Outstanding Graduate (Top 1%)</div>
      <div style="font-size:0.95em; color:#5f6368;">Nanjing University of Aeronautics and Astronautics (NUAA).</div>
    </div>
  </div>
  <div style="display:flex; gap:14px; align-items:flex-start;">
    <div style="min-width:90px; font-weight:600; color:#8a8f94;">2023.06</div>
    <div>
      <div style="font-weight:600;">Outstanding Bachelor Thesis Award (Top 5%)</div>
      <div style="font-size:0.95em; color:#5f6368;">Nanjing University of Aeronautics and Astronautics (NUAA).</div>
    </div>
  </div>
  <div style="display:flex; gap:14px; align-items:flex-start;">
    <div style="min-width:90px; font-weight:600; color:#8a8f94;">2021.12</div>
    <div>
      <div style="font-weight:600;">National Scholarship (Top 1%)</div>
      <div style="font-size:0.95em; color:#5f6368;">Nanjing University of Aeronautics and Astronautics (NUAA).</div>
    </div>
  </div>
</div>

# 🗺️ Visitor Map

<div style="display: flex; justify-content: center; align-items: center;">
<script type="text/javascript" id="clstr_globe" src="//clustrmaps.com/globe.js?w=166&d=G22ZMDy2KEs5OGq6rS0JucNzUxHn13B0tIPWaEGNGJo"></script>
</div>
