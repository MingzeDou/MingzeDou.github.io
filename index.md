---
layout: default
title: Home
description: Mingze Dou - Neuroscience researcher at University of Copenhagen, specializing in neural data analysis and spatial navigation
---

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="robots" content="index, follow">
    <meta name="description" content="Mingze Dou - Neuroscience researcher at University of Copenhagen, specializing in neural data analysis and spatial navigation">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="keywords" content="neuroscience, neural data analysis, spatial navigation, University of Copenhagen">
    <meta name="author" content="Mingze Dou">
    <meta name="twitter:card" content="summary">
    <meta name="twitter:creator" content="@mingze_dou">
    <title>{{ page.title }} | {{ site.title }}</title>
    <link rel="stylesheet" href="{{ '/assets/css/main.css' | relative_url }}">
    <link rel="preconnect" href="https://fonts.gstatic.com">
    <link rel="preload" href="{{ '/assets/css/main.css' | relative_url }}" as="style">
    <meta property="og:title" content="Mingze Dou - Neuroscience Researcher">
    <meta property="og:description" content="Research in neural data analysis and spatial navigation">
    <meta property="og:url" content="{{ site.url }}">
    <meta property="og:type" content="website">
    {% seo %}
    <style>
        /* Reset and base styles */
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
            line-height: 1.6;
            color: #333;
        }

        .skip-link {
            position: absolute;
            left: -9999px;
            z-index: 999;
            padding: 1em;
            background-color: white;
            color: black;
            text-decoration: none;
        }

        .skip-link:focus {
            left: 50%;
            transform: translateX(-50%);
        }

        /* Navigation */
        .top-nav {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 1.5rem 2rem;
            background-color: #ffffff;
            box-shadow: 0 2px 4px rgba(0,0,0,0.1);
            position: sticky;
            top: 0;
            z-index: 1000;
        }

        .nav-brand {
            font-size: 1.5rem;
            font-weight: 600;
        }

        .brand-name {
            text-decoration: none;
            color: #2c3e50;
        }

        .nav-menu {
            list-style: none;
            display: flex;
            gap: 2rem;
        }

        .nav-link {
            text-decoration: none;
            color: #2c3e50;
            font-weight: 500;
            padding: 0.5rem 0;
            border-bottom: 2px solid transparent;
            transition: border-color 0.3s ease;
        }

        .nav-link:hover,
        .nav-link.active {
            border-bottom-color: #3498db;
        }

        /* Main content */
        .container {
            max-width: 800px;
            margin: 3rem auto;
            padding: 0 2rem;
        }

        h1, h2 {
            color: #2c3e50;
            margin-bottom: 1rem;
        }

        h1 {
            font-size: 2.5rem;
            margin-bottom: 2rem;
        }

        h2 {
            font-size: 1.8rem;
            margin-top: 2.5rem;
        }

        p {
            margin-bottom: 1.5rem;
            font-size: 1.1rem;
        }

        ul {
            margin-bottom: 1.5rem;
            padding-left: 1.5rem;
        }

        li {
            margin-bottom: 0.75rem;
            font-size: 1.1rem;
        }

        /* Links */
        a {
            color: #3498db;
            text-decoration: none;
            transition: color 0.3s ease;
        }

        a:hover {
            color: #2980b9;
        }

        .quick-links {
            margin-top: 3rem;
            padding: 1.5rem;
            background-color: #f8f9fa;
            border-radius: 8px;
            text-align: center;
        }

        .quick-links a {
            margin: 0 1rem;
            font-weight: 500;
        }

        /* Responsive design */
        @media (max-width: 768px) {
            .nav-menu {
                gap: 1rem;
            }

            .container {
                padding: 0 1.5rem;
            }

            h1 {
                font-size: 2rem;
            }

            h2 {
                font-size: 1.5rem;
            }
        }

        @media (max-width: 576px) {
            .top-nav {
                flex-direction: column;
                padding: 1rem;
            }

            .nav-brand {
                margin-bottom: 1rem;
            }

            .nav-menu {
                flex-wrap: wrap;
                justify-content: center;
                text-align: center;
            }
        }
    </style>
</head>
<body>
    <a href="#main-content" class="skip-link">Skip to main content</a>
    {% include header.html %}
    {% include navigation.html %}
    
    <main id="main-content" class="container">
        <h1>About Me</h1>
        <p>I'm a Master's student in Neuroscience at the University of Copenhagen, specializing in systems neuroscience and neural data analysis. With a background in Biomedical Engineering, I combine computational approaches with neuroscience to understand the neural basis of spatial navigation and memory.</p>

        <h2>Research Interests</h2>
        <ul>
            <li>Neural circuits and brain oscillations</li>
            <li>Spatial navigation and memory</li>
            <li>Neural data analysis and computational methods</li>
            <li>Computational modeling</li>
        </ul>
        <p><a href="/research">Learn more about my research →</a></p>

        <h2>Current Projects</h2>
        <ul>
            <li>Neural data analysis pipelines for high-density recordings, focusing on spatial memory</li>
            <li>Documentation and resource development for brainSTEM platform, an electronic notebook for neuroscience</li>
        </ul>
        <p><a href="/projects">View my projects →</a></p>

        <div class="quick-links">
            <a href="/research">Research</a> |
            <a href="/projects">Projects</a> |
            <a href="/cv">CV</a> |
            <a href="/contact">Contact</a>
        </div>
    </main>

    {% include footer.html %}
</body>
</html>