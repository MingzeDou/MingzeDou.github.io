---
layout: page
permalink: /cv/
title: CV
nav: true
nav_order: 4
---

<style>
  .cv-container {
    max-width: 800px;
    margin: 0 auto;
    font-family: 'Georgia', serif;
  }
  
  .cv-header {
    text-align: center;
    margin-bottom: 2em;
    border-bottom: 3px solid var(--global-theme-color, #2c3e50);
    padding-bottom: 1em;
  }
  
  .cv-name {
    margin: 0;
    font-size: 2.5em;
    color: var(--global-text-color, #2c3e50);
  }
  
  .cv-contact {
    margin-top: 0.5em;
    font-size: 1.1em;
    color: var(--global-text-color-light, #555);
  }
  
  .cv-section {
    margin-bottom: 2.5em;
  }
  
  .cv-section-title {
    color: var(--global-text-color, #2c3e50);
    border-bottom: 2px solid var(--global-theme-color, #3498db);
    padding-bottom: 0.3em;
    margin-bottom: 1em;
  }
  
  .cv-card {
    margin-bottom: 1.5em;
    padding: 1em;
    background: var(--global-card-bg-color, rgba(248, 249, 250, 0.8));
    border: 1px solid var(--global-divider-color, rgba(0, 0, 0, 0.1));
    border-left: 4px solid var(--global-theme-color, #3498db);
    border-radius: 5px;
    box-shadow: 0 2px 4px var(--global-card-shadow, rgba(0, 0, 0, 0.1));
  }
  
  .cv-card.education { border-left-color: var(--global-theme-color, #3498db); }
  .cv-card.research { border-left-color: #e74c3c; }
  .cv-card.awards { border-left-color: #f39c12; }
  .cv-card.language { border-left-color: #27ae60; }
  
  .cv-entry-title {
    margin: 0 0 0.5em 0;
    color: var(--global-text-color, #2c3e50);
  }
  
  .cv-entry-org {
    font-weight: bold;
    color: var(--global-text-color-light, #555);
  }
  
  .cv-entry-meta {
    font-style: italic;
    color: var(--global-text-color-light, #777);
  }
  
  .cv-entry-desc {
    margin-top: 0.8em;
    color: var(--global-text-color-light, #666);
  }
  
  .cv-language-grid {
    display: flex;
    gap: 2em;
    flex-wrap: wrap;
  }
  
  .cv-language-item {
    flex: 1;
    min-width: 200px;
  }
  
  @media (prefers-color-scheme: dark) {
    .cv-card {
      background: var(--global-card-bg-color, rgba(40, 40, 40, 0.8));
      border-color: var(--global-divider-color, rgba(255, 255, 255, 0.1));
    }
  }
</style>

<div class="cv-container">

<div class="cv-header">
  <h1 class="cv-name">Mingze Dou</h1>
  <div class="cv-contact">
    <strong>Email:</strong> mingzedou.mail@gmail.com &nbsp;&nbsp;|&nbsp;&nbsp; <strong>Location:</strong> Blegdamsvej 3B, 2200 Copenhagen, Denmark
  </div>
</div>

<div class="cv-section">
  <h2 class="cv-section-title">🎓 Education</h2>
  
  <div class="cv-card education">
    <h3 class="cv-entry-title">Ph.D. in Neuroscience</h3>
    <div class="cv-entry-org">University of Copenhagen</div>
    <div class="cv-entry-meta">Copenhagen, Denmark | October 2025 -</div>
  </div>

  <div class="cv-card education">
    <h3 class="cv-entry-title">Master of Neuroscience</h3>
    <div class="cv-entry-org">University of Copenhagen</div>
    <div class="cv-entry-meta">Copenhagen, Denmark | August 2023 - July 2025</div>
  </div>

  <div class="cv-card education">
    <h3 class="cv-entry-title">Bachelor of Biomedical Engineering</h3>
    <div class="cv-entry-org">South-Central Minzu University</div>
    <div class="cv-entry-meta">Wuhan, China | September 2019 - July 2023</div>
    </div>
  </div>

  <div class="cv-card education">
    <h3 class="cv-entry-title">Exchange Student in Biomedical Engineering</h3>
    <div class="cv-entry-org">Chongqing University</div>
    <div class="cv-entry-meta">Chongqing, China | September 2020 – July 2021</div>
  </div>
</div>

<div class="cv-section">
  <h2 class="cv-section-title">🔬 Research and Lab Experience</h2>
  
  <div class="cv-card research">
    <h3 class="cv-entry-title">Ph.D. Student</h3>
    <div class="cv-entry-org">Petersen Lab, University of Copenhagen</div>
    <div class="cv-entry-meta">Copenhagen, Denmark | October 2025 -</div>
    <ul class="cv-entry-desc">
      <li>Continuing research on theta rhythm generation and behavioral representations in the medial septum, analyzing neural activity at both single-cell and population levels</li>
      <li>Contributing to the development of BrainSTEM, a collaborative notebook for neuroscience</li>
    </ul>
  </div>

  <div class="cv-card research">
    <h3 class="cv-entry-title">Research Assistant</h3>
    <div class="cv-entry-org">Petersen Lab, University of Copenhagen</div>
    <div class="cv-entry-meta">Copenhagen, Denmark | July 2025 – October 2025</div>
    <ul class="cv-entry-desc">
      <li>Researched theta rhythm generation and behavioral representations in the medial septum, analyzing neural activity at both single-cell and population levels</li>
      <li>Contributed to the development of BrainSTEM, a collaborative notebook for neuroscience</li>
    </ul>
  </div>

  <div class="cv-card research">
    <h3 class="cv-entry-title">Master's Thesis Researcher / Academic Research Staff</h3>
    <div class="cv-entry-org">Petersen Lab, University of Copenhagen</div>
    <div class="cv-entry-meta">Copenhagen, Denmark | October 2023 – June 2025</div>
    <ul class="cv-entry-desc">
      <li>Researched theta rhythm generation and behavioral representations in the medial septum, analyzing neural activity at both single-cell and population levels</li>
      <li>Authored documentation and contributed to the development of BrainSTEM, a collaborative notebook for neuroscience</li>
    </ul>
  </div>

  <div class="cv-card research">
    <h3 class="cv-entry-title">Research Intern</h3>
    <div class="cv-entry-org">Ji Lab, Chinese Institute for Brain Research</div>
    <div class="cv-entry-meta">Beijing, China | July 2022 – December 2022</div>
    <ul class="cv-entry-desc">
      <li>Modeled a bio-inspired mutual inhibition neural network based on Dr. Ji's 2021 eLife publication, focusing on the circuit mechanism controlling exploration-exploitation balance in C. elegans</li>
    </ul>
  </div>

  <div class="cv-card research">
    <h3 class="cv-entry-title">Student Researcher</h3>
    <div class="cv-entry-org">Key Laboratory of Cognitive Science, South-Central Minzu University</div>
    <div class="cv-entry-meta">Wuhan, China | September 2021 – June 2022</div>
    <ul class="cv-entry-desc">
      <li>Investigated the sedative effect of the electric incense of Thuja through single-cell patch clamp on cultured mouse cortical neurons</li>
    </ul>
  </div>
</div>

<div class="cv-section">
  <h2 class="cv-section-title">🏆 Honors and Awards</h2>
  
  <div class="cv-card awards">
    <h3 class="cv-entry-title">Merit Student Award</h3>
    <div class="cv-entry-org">CIBR Winter School, Chinese Institute for Brain Research</div>
    <div class="cv-entry-meta">Beijing, China | February 2022</div>
  </div>

  <div class="cv-card awards">
    <h3 class="cv-entry-title">First-class Outstanding Student Scholarship</h3>
    <div class="cv-entry-org">South-Central Minzu University</div>
    <div class="cv-entry-meta">Wuhan, China | August 2020</div>
  </div>

  <div class="cv-card awards">
    <h3 class="cv-entry-title">First Prize in China High School Biology Olympiad</h3>
    <div class="cv-entry-org">Botanical Society of China & China Zoological Society</div>
    <div class="cv-entry-meta">Henan, China | 2018</div>
  </div>
</div>

<div class="cv-section">
  <h2 class="cv-section-title">🌍 Language Skills</h2>
  
  <div class="cv-language-grid">
    <div class="cv-card language cv-language-item">
      <h3 class="cv-entry-title">Chinese</h3>
      <div class="cv-entry-desc">Native Speaker</div>
    </div>
    <div class="cv-card language cv-language-item">
      <h3 class="cv-entry-title">English</h3>
      <div class="cv-entry-desc">Full Professional Proficiency</div>
    </div>
  </div>
</div>
