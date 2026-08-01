---
permalink: /
title: "Keyu Chen"
description: "Keyu Chen is a Ph.D. candidate at Tsinghua University researching traffic simulation and RL post-training for autonomous driving."
excerpt: "Research in traffic simulation, RL post-training for autonomous driving."
author_profile: false
body_class: "home-page"
redirect_from:
  - /about/
  - /about.html
---

<span id="about-me" class="legacy-anchor" aria-hidden="true"></span>

<section class="profile-hero" id="about" aria-labelledby="profile-name">
  <div class="profile-hero__portrait">
    <img src="/{{ site.author.avatar }}" alt="Portrait of {{ site.author.name }}" width="512" height="512">
  </div>
  <div class="profile-hero__content">
    <p class="eyebrow">Ph.D. Candidate · Tsinghua University</p>
    <h1 id="profile-name">{{ site.author.name }} <span class="profile-hero__chinese-name">(陈可禹)</span></h1>
    <p class="profile-hero__focus">Traffic Simulation · RL Post-Training · Autonomous Driving</p>
    <div class="profile-hero__rule" aria-hidden="true"></div>


    <div class="profile-hero__bio">
      <p>I am a third-year Ph.D. student in the School of Vehicle and Mobility at Tsinghua University, advised by <a href="http://www.svm.tsinghua.edu.cn/essay/80/1835.html" target="_blank" rel="noopener">Prof. Sifa Zheng</a>.</p>
      <p>My research focuses on <strong>traffic simulation and RL post-training for autonomous driving</strong>, with an emphasis on realistic, interactive, and controllable traffic scenarios. I develop reliable closed-loop simulation frameworks to support the safe, robust, and scalable advancement of autonomous driving systems.</p>
    </div>

    <nav class="profile-links" aria-label="Academic profiles and contact">
      <a class="profile-link profile-link--primary" href="/{{ site.author.cv }}" target="_blank" rel="noopener">CV</a>
      <a class="profile-link" href="{{ site.author.googlescholar }}" target="_blank" rel="noopener">Google Scholar</a>
      <a class="profile-link" href="https://github.com/{{ site.author.github }}" target="_blank" rel="noopener">GitHub</a>
      <a class="profile-link" href="mailto:{{ site.author.email }}">Email</a>
    </nav>

    <div class="profile-secondary-links">
      <span>{{ site.author.location }}</span>
      <a href="/{{ site.author.cv_cn }}" target="_blank" rel="noopener">中文简历</a>
      <a href="https://www.linkedin.com/in/{{ site.author.linkedin }}" target="_blank" rel="noopener">LinkedIn</a>
      <a href="{{ site.author.orcid }}" target="_blank" rel="noopener">ORCID</a>
      <a href="{{ site.author.researchgate }}" target="_blank" rel="noopener">ResearchGate</a>
    </div>
  </div>
</section>

<div class="home-overview" aria-label="Education and recent news">
<span id="-educations" class="legacy-anchor" aria-hidden="true"></span>
<section class="editorial-section editorial-section--overview" id="education" aria-labelledby="education-heading">
  <header class="section-heading">
    <span class="section-number">01</span>
    <div>
      <p class="section-kicker">Academic background</p>
      <h2 id="education-heading">Education</h2>
    </div>
  </header>

  <div class="timeline-list timeline-list--compact">
    <article class="timeline-item">
      <time>2023.09 — Present</time>
      <img src="/images/thu.ico" alt="Tsinghua University logo" loading="lazy" width="50" height="50">
      <div>
        <h3>Tsinghua University</h3>
        <p>Ph.D. candidate in Mechanical Engineering, School of Vehicle and Mobility</p>
        <span>Beijing, China</span>
      </div>
    </article>
    <article class="timeline-item">
      <time>2019.09 — 2023.06</time>
      <img src="/images/nuaa.ico" alt="Nanjing University of Aeronautics and Astronautics logo" loading="lazy" width="50" height="50">
      <div>
        <h3>Nanjing University of Aeronautics and Astronautics</h3>
        <p>B.Eng. in Vehicle Engineering</p>
        <span>Nanjing, China</span>
      </div>
    </article>
  </div>
</section>

<span id="-news" class="legacy-anchor" aria-hidden="true"></span>
<section class="editorial-section editorial-section--overview" id="news" aria-labelledby="news-heading">
  <header class="section-heading">
    <span class="section-number">02</span>
    <div>
      <p class="section-kicker">Recent updates</p>
      <h2 id="news-heading">News</h2>
    </div>
  </header>

  <div class="news-list">
    <article class="news-item">
      <time datetime="2026-05">May 2026</time>
      <p>Released <strong>CRAFT</strong>. The <a href="https://currychen77.github.io/CRAFT/" target="_blank" rel="noopener">project page</a> is now live.</p>
    </article>
    <article class="news-item">
      <time datetime="2026-01">Jan 2026</time>
      <p><strong>ForSim</strong> was accepted to <em>ICRA 2026</em>.</p>
    </article>
    <article class="news-item">
      <time datetime="2025-05">May 2025</time>
      <p>Released <strong>RIFT</strong>. The <a href="https://currychen77.github.io/RIFT/" target="_blank" rel="noopener">project page</a> is now live.</p>
    </article>
    <article class="news-item">
      <time datetime="2024-09">Sep 2024</time>
      <p><strong>FREA</strong> was accepted to <em>CoRL 2024</em> as an <span class="accent-text">Oral presentation (4.3%)</span>.</p>
    </article>
    <article class="news-item">
      <time datetime="2023-03">Mar 2023</time>
      <p><strong>IGT</strong> was accepted to <em>Knowledge-Based Systems</em>.</p>
    </article>
  </div>
</section>
</div>

<span id="-publications" class="legacy-anchor" aria-hidden="true"></span>
<section class="editorial-section" id="publications" aria-labelledby="publications-heading">
  <header class="section-heading">
    <span class="section-number">03</span>
    <div>
      <p class="section-kicker">Research output</p>
      <h2 id="publications-heading">Publications</h2>
    </div>
  </header>

  <div class="subsection-heading">
    <h3>Selected Publications</h3>
    <span>Representative work</span>
  </div>

  <div class="publication-list publication-list--selected">
    <article class="publication">
      <figure class="publication__visual">
        <img src="/images/craft.png" alt="CRAFT framework overview" width="2048" height="1024">
      </figure>
      <div class="publication__content">
        <h3>CRAFT: Counterfactual-to-Interactive Reinforcement Fine-Tuning for Driving Policies</h3>
        <p class="publication__authors"><strong>Keyu Chen</strong>, Nanfei Ye, Yida Wang, Wenchao Sun, Danqi Zhao, Hao Cheng, Sifa Zheng</p>
        <p class="publication__meta">arXiv, 2026</p>
        <p class="publication__summary">CRAFT improves driving policies by combining dense counterfactual proxy supervision with residual correction from true closed-loop interaction.</p>
        <div class="publication__links" aria-label="CRAFT links">
          <a href="http://arxiv.org/abs/2605.04470" target="_blank" rel="noopener">Paper</a>
          <a href="https://currychen77.github.io/CRAFT/" target="_blank" rel="noopener">Project</a>
          <a href="https://github.com/CurryChen77/CraftPolicy" target="_blank" rel="noopener">Code</a>
          <a href="https://github.com/CurryChen77/CraftPolicy/stargazers" target="_blank" rel="noopener">Stars</a>
        </div>
      </div>
    </article>

    <article class="publication">
      <figure class="publication__visual">
        <img src="/images/ForSim.png" alt="ForSim stepwise forward simulation overview" loading="lazy" width="2048" height="1056">
      </figure>
      <div class="publication__content">
        <h3>ForSim: Stepwise Forward Simulation for Traffic Policy Fine-Tuning</h3>
        <p class="publication__authors"><strong>Keyu Chen</strong>, Wenchao Sun, Hao Cheng, Zheng Fu, Sifa Zheng</p>
        <p class="publication__meta">IEEE International Conference on Robotics and Automation (ICRA), 2026</p>
        <p class="publication__summary">ForSim achieves high-fidelity traffic simulation through stepwise closed-loop trajectory propagation, combining physical dynamics for multimodal diversity with interaction-aware agent updates for realistic behavioral consistency.</p>
        <div class="publication__links" aria-label="ForSim links">
          <a href="https://arxiv.org/abs/2602.01916" target="_blank" rel="noopener">Paper</a>
          <a href="https://currychen77.github.io/ForSim/" target="_blank" rel="noopener">Project</a>
          <a href="https://github.com/CurryChen77/ForSim" target="_blank" rel="noopener">Code</a>
          <a href="https://github.com/CurryChen77/ForSim/stargazers" target="_blank" rel="noopener">Stars</a>
        </div>
      </div>
    </article>

    <article class="publication">
      <figure class="publication__visual">
        <img src="/images/RIFT.gif" alt="RIFT realistic and controllable traffic simulation" loading="lazy">
      </figure>
      <div class="publication__content">
        <h3>RIFT: Group-Relative RL Fine-Tuning for Realistic and Controllable Traffic Simulation</h3>
        <p class="publication__authors"><strong>Keyu Chen</strong>, Wenchao Sun, Hao Cheng, Sifa Zheng</p>
        <p class="publication__meta">arXiv, 2025</p>
        <p class="publication__summary">RIFT achieves realistic and controllable traffic simulation by combining imitation-learning pre-training in a data-driven simulator with reinforcement-learning fine-tuning in a physics-based simulator.</p>
        <div class="publication__links" aria-label="RIFT links">
          <a href="https://arxiv.org/abs/2505.03344" target="_blank" rel="noopener">Paper</a>
          <a href="https://currychen77.github.io/RIFT/" target="_blank" rel="noopener">Project</a>
          <a href="https://github.com/CurryChen77/RIFT" target="_blank" rel="noopener">Code</a>
          <a href="https://github.com/CurryChen77/RIFT/stargazers" target="_blank" rel="noopener">Stars</a>
        </div>
      </div>
    </article>

    <article class="publication">
      <figure class="publication__visual">
        <img src="/images/FREA.gif" alt="FREA feasibility-guided safety-critical scenario generation" loading="lazy">
      </figure>
      <div class="publication__content">
        <h3>FREA: Feasibility-Guided Generation of Safety-Critical Scenarios with Reasonable Adversariality</h3>
        <p class="publication__authors"><strong>Keyu Chen</strong>, Yuheng Lei, Hao Cheng, Haoran Wu, Wenchao Sun, Sifa Zheng</p>
        <p class="publication__meta">Conference on Robot Learning (CoRL), 2024 · <span class="accent-text">Oral presentation (4.3%)</span></p>
        <p class="publication__summary">FREA incorporates feasibility as guidance to generate adversarial yet AV-feasible, safety-critical scenarios for autonomous driving.</p>
        <div class="publication__links" aria-label="FREA links">
          <a href="https://arxiv.org/abs/2406.02983" target="_blank" rel="noopener">Paper</a>
          <a href="https://currychen77.github.io/FREA/" target="_blank" rel="noopener">Project</a>
          <a href="https://github.com/CurryChen77/FREA" target="_blank" rel="noopener">Code</a>
          <a href="https://github.com/CurryChen77/FREA/stargazers" target="_blank" rel="noopener">Stars</a>
        </div>
      </div>
    </article>

    <article class="publication">
      <figure class="publication__visual">
        <img src="/images/IGT.gif" alt="IGT illumination-guided RGB-T object detection" loading="lazy">
      </figure>
      <div class="publication__content">
        <h3>IGT: Illumination-Guided RGB-T Object Detection with Transformers</h3>
        <p class="publication__authors"><strong>Keyu Chen</strong>, Jinqiang Liu, Han Zhang</p>
        <p class="publication__meta">Knowledge-Based Systems (KBS), 2023 · SCI Q1, IF 7.4</p>
        <p class="publication__summary">IGT uses illumination intensity to guide multimodal feature fusion, enabling the comprehensive use of complementary cross-modal information in object detection.</p>
        <div class="publication__links" aria-label="IGT links">
          <a href="https://www.sciencedirect.com/science/article/pii/S0950705123001739?casa_token=uB0IUPawdkcAAAAA:xiqZf6isfEmqjSoG86H1J5PPAFZw0YT4QG8giHL0ADJNsXcyYcnzYd3ceq9tnZNWkTccpOXECDw" target="_blank" rel="noopener">Paper</a>
        </div>
      </div>
    </article>
  </div>

  <div class="subsection-heading subsection-heading--spaced">
    <h3>All Publications</h3>
    <span>Additional collaborative work</span>
  </div>

  <div class="publication-list">
    <article class="publication">
      <figure class="publication__visual">
        <img src="/images/SparseDriveV2.png" alt="SparseDriveV2 scoring-based end-to-end autonomous driving" loading="lazy">
      </figure>
      <div class="publication__content">
        <h3>SparseDriveV2: Scoring is All You Need for End-to-End Autonomous Driving</h3>
        <p class="publication__authors">Wenchao Sun, Xuewu Lin, <strong>Keyu Chen</strong>, Zixiang Pei, Xiang Li, Yining Shi, Sifa Zheng</p>
        <p class="publication__meta">European Conference on Computer Vision (ECCV), 2026</p>
        <p class="publication__summary">SparseDriveV2 advances scoring-based autonomous driving with a scalable factorized trajectory vocabulary and coarse-to-fine scoring for dense yet efficient planning.</p>
        <div class="publication__links" aria-label="SparseDriveV2 links">
          <a href="https://arxiv.org/abs/2603.29163" target="_blank" rel="noopener">Paper</a>
          <a href="https://github.com/swc-17/SparseDriveV2" target="_blank" rel="noopener">Code</a>
          <a href="https://github.com/swc-17/SparseDriveV2/stargazers" target="_blank" rel="noopener">Stars</a>
        </div>
      </div>
    </article>

    <article class="publication">
      <figure class="publication__visual">
        <img src="/images/DriveCamSim.png" alt="DriveCamSim camera simulation overview" loading="lazy">
      </figure>
      <div class="publication__content">
        <h3>DriveCamSim: Generalizable Camera Simulation via Explicit Camera Modeling for Autonomous Driving</h3>
        <p class="publication__authors">Wenchao Sun, Xuewu Lin, <strong>Keyu Chen</strong>, Zixiang Pei, Yining Shi, Chuang Zhang, Sifa Zheng</p>
        <p class="publication__meta">arXiv, 2025</p>
        <p class="publication__summary">DriveCamSim introduces explicit camera modeling to generate controllable multi-view, multi-frame driving imagery that generalizes across camera parameters and frame rates.</p>
        <div class="publication__links" aria-label="DriveCamSim links">
          <a href="https://arxiv.org/abs/2505.19692" target="_blank" rel="noopener">Paper</a>
          <a href="https://github.com/swc-17/DriveCamSim" target="_blank" rel="noopener">Code</a>
          <a href="https://github.com/swc-17/DriveCamSim/stargazers" target="_blank" rel="noopener">Stars</a>
        </div>
      </div>
    </article>

    <article class="publication">
      <figure class="publication__visual">
        <img src="/images/EI.png" alt="Emergency Index traffic conflict assessment" loading="lazy">
      </figure>
      <div class="publication__content">
        <h3>Emergency Index (EI): A Two-Dimensional Surrogate Safety Measure Considering Vehicles’ Interaction Depth</h3>
        <p class="publication__authors">Hao Cheng, Yanbo Jiang, Hailun Zhang, <strong>Keyu Chen</strong>, Heye Huang, Shaobing Xu, Jianqiang Wang, Sifa Zheng</p>
        <p class="publication__meta">Transportation Research Part C: Emerging Technologies (TRC), 2025</p>
        <p class="publication__summary">EI provides a two-dimensional surrogate safety measure that models interaction depth and evasive urgency for more faithful traffic-conflict assessment.</p>
        <div class="publication__links" aria-label="Emergency Index links">
          <a href="https://www.sciencedirect.com/science/article/pii/S0968090X24005023" target="_blank" rel="noopener">Paper</a>
          <a href="https://github.com/AutoChengh/EmergencyIndex" target="_blank" rel="noopener">Code</a>
          <a href="https://github.com/AutoChengh/EmergencyIndex/stargazers" target="_blank" rel="noopener">Stars</a>
        </div>
      </div>
    </article>
  </div>
</section>

<section class="editorial-section" id="projects" aria-labelledby="projects-heading">
  <header class="section-heading">
    <span class="section-number">04</span>
    <div>
      <p class="section-kicker">Open source</p>
      <h2 id="projects-heading">Projects</h2>
    </div>
  </header>

  <article class="publication publication--project">
    <figure class="publication__visual">
      <img src="/images/Highway-Adv.gif" alt="Highway-Adversarial safety-critical scenarios" loading="lazy">
    </figure>
    <div class="publication__content">
      <h3>Highway-Adversarial</h3>
      <p class="publication__summary">We manipulate critical background vehicles in Highway-Env to exhibit adversarial behaviors that challenge the ego vehicle, creating safety-critical scenarios.</p>
      <div class="publication__links" aria-label="Highway-Adversarial links">
        <a href="https://github.com/CurryChen77/Highway-env-adversarial" target="_blank" rel="noopener">Code</a>
        <a href="https://github.com/CurryChen77/Highway-env-adversarial/stargazers" target="_blank" rel="noopener">Stars</a>
      </div>
    </div>
  </article>
</section>

<span id="-internships" class="legacy-anchor" aria-hidden="true"></span>
<section class="editorial-section" id="experience" aria-labelledby="experience-heading">
  <header class="section-heading">
    <span class="section-number">05</span>
    <div>
      <p class="section-kicker">Industry and research</p>
      <h2 id="experience-heading">Internships</h2>
    </div>
  </header>

  <div class="timeline-list">
    <article class="timeline-item">
      <time>2025.11 — Present</time>
      <img src="/images/liauto.ico" alt="Li Auto logo" loading="lazy" width="50" height="50">
      <div>
        <h3><a href="https://www.lixiang.com/" target="_blank" rel="noopener">Li Auto</a></h3>
        <p>Closed-loop reinforcement-learning fine-tuning for autonomous driving</p>
        <span>Beijing, China</span>
      </div>
    </article>
    <article class="timeline-item">
      <time>2023.07 — 2023.08</time>
      <img src="/images/tsari.ico" alt="Tsinghua Automotive Strategy Research Institute logo" loading="lazy" width="50" height="50">
      <div>
        <h3><a href="https://www.tsari.tsinghua.edu.cn/" target="_blank" rel="noopener">Tsinghua Automotive Strategy Research Institute</a></h3>
        <p>Safety-critical scenario generation for autonomous driving</p>
        <span>Suzhou, China</span>
      </div>
    </article>
  </div>
</section>

<span id="-honors-and-awards" class="legacy-anchor" aria-hidden="true"></span>
<section class="editorial-section" id="awards" aria-labelledby="awards-heading">
  <header class="section-heading">
    <span class="section-number">06</span>
    <div>
      <p class="section-kicker">Recognition</p>
      <h2 id="awards-heading">Honors &amp; Awards</h2>
    </div>
  </header>

  <div class="award-list">
    <article class="award-item">
      <time>2023.06</time>
      <div>
        <h3>Outstanding Graduate <span>Top 1%</span></h3>
        <p>Nanjing University of Aeronautics and Astronautics</p>
      </div>
    </article>
    <article class="award-item">
      <time>2023.06</time>
      <div>
        <h3>Outstanding Bachelor Thesis Award <span>Top 5%</span></h3>
        <p>Nanjing University of Aeronautics and Astronautics</p>
      </div>
    </article>
    <article class="award-item">
      <time>2021.12</time>
      <div>
        <h3>National Scholarship <span>Top 1%</span></h3>
        <p>Nanjing University of Aeronautics and Astronautics</p>
      </div>
    </article>
  </div>
</section>

<section class="editorial-section editorial-section--visitor" id="visitor-map" aria-labelledby="visitor-heading">
  <header class="section-heading">
    <span class="section-number">07</span>
    <div>
      <p class="section-kicker">Around the world</p>
      <h2 id="visitor-heading">Visitor Map</h2>
    </div>
  </header>
  <div class="visitor-map">
    <script type="text/javascript" id="clustrmaps" src="https://cdn.clustrmaps.com/map_v2.js?cl=ffffff&amp;w=300&amp;t=n&amp;d=G22ZMDy2KEs5OGq6rS0JucNzUxHn13B0tIPWaEGNGJo"></script>
    <noscript>
      <img src="https://clustrmaps.com/map_v2.png?cl=ffffff&amp;w=300&amp;t=n&amp;d=G22ZMDy2KEs5OGq6rS0JucNzUxHn13B0tIPWaEGNGJo" alt="Visitor locations around the world" width="300">
    </noscript>
  </div>
</section>
