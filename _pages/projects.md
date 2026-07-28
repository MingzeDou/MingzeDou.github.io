---
layout: page
title: Projects
permalink: /projects/
description: Research and software projects in systems neuroscience, Neuropixels electrophysiology, and reproducible neural data analysis.
nav: true
nav_order: 2
---

<p class="portfolio-intro">
  My work connects experimental systems neuroscience with the computational
  methods required to interpret large-scale neural recordings.
</p>

## Research

<div class="project-catalog">
  <article class="project-entry">
    <header>
      <p class="focus-label">PhD research · 2025–present</p>
      <h2>Septo-hippocampal dynamics during navigation</h2>
    </header>
    <p>
      Simultaneous Neuropixels 2.0 recordings from medial septum and hippocampus
      during naturalistic maze behavior. I study how distributed circuits
      coordinate spatial, temporal, and decision-related information.
    </p>
    <p class="project-meta">Neuropixels · behavioral alignment · population analysis · neural decoding</p>
  </article>

  <article class="project-entry">
    <header>
      <p class="focus-label">Computational analysis</p>
      <h2>Population structure across RUN, REM, and NREM</h2>
    </header>
    <p>
      Analyses of whether low-dimensional structure and ordered population
      activity observed during behavior reappear or transform during sleep.
      Methods include dimensionality reduction, state models, and circular
      statistics.
    </p>
    <p class="project-meta">Population geometry · HMMs · phase organization · spike–LFP relationships</p>
  </article>
</div>

## Scientific software

<div class="project-catalog">
  <article class="project-entry">
    <header>
      <p class="focus-label">Neural data engineering</p>
      <h2>Neuropixels preprocessing toolkit</h2>
    </header>
    <p>
      Tools for channel mapping, multi-probe Kilosort 4 execution, chunked LFP
      extraction, and signal-quality validation, designed around high-volume
      laboratory recordings.
    </p>
    <p class="project-links">
      <a href="https://github.com/petersen-lab/kilosort4Wrapper">Kilosort 4 wrapper ↗</a>
      <a href="https://github.com/MingzeDou/LFP-extraction-electrophysiology">LFP extraction ↗</a>
    </p>
    <p class="project-meta">Python · MATLAB · CUDA · Open Ephys · digital signal processing</p>
  </article>

  <article class="project-entry brainstem-project">
    <header>
      <p class="focus-label">Open science</p>
      <h2><img src="{{ '/assets/img/brainstem-logo.svg' | relative_url }}" alt="" class="brainstem-mark">BrainSTEM</h2>
    </header>
    <p>
      I contribute to BrainSTEM, a collaborative platform for structuring
      neuroscience experiments and making research workflows easier to
      document, reproduce, and share.
    </p>
    <p class="project-links">
      <a href="https://www.brainstem.org/">BrainSTEM ↗</a>
      <a href="https://github.com/brainstem-org/brainstem_support">Documentation and support ↗</a>
    </p>
    <p class="project-meta">Research data management · documentation · APIs · reproducible workflows</p>
  </article>
</div>
