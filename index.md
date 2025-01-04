---
layout: default
title: Home
description: Mingze Dou - Neuroscience researcher at University of Copenhagen, specializing in neural data analysis and spatial navigation
---

<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="robots" content="index, follow">
    <meta name="description"
        content="Mingze Dou - Neuroscience researcher at University of Copenhagen, specializing in neural data analysis and spatial navigation">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="keywords" content="neuroscience, neural data analysis, spatial navigation, University of Copenhagen">
    <meta name="author" content="Mingze Dou">
    <meta name="twitter:card" content="summary">
    <meta name="twitter:creator" content="@mingze_dou">
    <link rel="stylesheet" href="{{ '/assets/css/main.css' | relative_url }}">
    <link rel="preconnect" href="https://fonts.gstatic.com">
    <link rel="preload" href="{{ '/assets/css/main.css' | relative_url }}" as="style">
    <meta property="og:title" content="Mingze Dou - Neuroscience Researcher">
    <meta property="og:description" content="Research in neural data analysis and spatial navigation">
    <meta property="og:url" content="{{ site.url }}">
    <meta property="og:type" content="website">
    {% seo %}
    <style>
        /* Variables */
        $breakpoints: (
            'small': 576px,
            'medium': 768px,
            'large': 992px,
            'xlarge': 1200px
        );

        $colors: (
            'primary': #333,
            'secondary': #666,
            'background': #fff,
            'accent': #0366d6,
            'border': #eee,
            'dark': (
                'background': #0d1117,
                'surface': #161b22,
                'border': #30363d,
                'text': #c9d1d9
            )
        );

        $spacing: (
            'xs': 0.25rem,
            'sm': 0.5rem,
            'md': 1rem,
            'lg': 2rem,
            'xl': 4rem
        );

        $max-width: 1200px;
        $border-radius: 8px;
        $transition-duration: 0.3s;

        /* Mixins */
        @mixin respond-to($breakpoint) {
            @media (max-width: map-get($breakpoints, $breakpoint)) {
                @content;
            }
        }

        @mixin hover-focus {
            &:hover,
            &:focus {
                @content;
            }
        }

        /* Reset & Base styles */
        *,
        *::before,
        *::after {
            box-sizing: border-box;
        }

        html {
            scroll-behavior: smooth;
            font-size: 16px;

            @include respond-to('small') {
                font-size: 14px;
            }
        }

        body {
            font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif;
            line-height: 1.6;
            color: map-get($colors, 'primary');
            background-color: map-get($colors, 'background');
            margin: 0;
            padding: 0;
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
            transition: background-color $transition-duration ease, color $transition-duration ease;
        }

        /* Typography */
        :root {
            --font-scale: 1.25;
            --font-size-base: 1rem;
            --font-size-lg: calc(var(--font-size-base) * var(--font-scale));
            --font-size-xl: calc(var(--font-size-lg) * var(--font-scale));
        }

        h1,
        h2,
        h3,
        h4,
        h5,
        h6 {
            margin-top: map-get($spacing, 'lg');
            margin-bottom: map-get($spacing, 'md');
            line-height: 1.2;
        }

        h1 {
            font-size: var(--font-size-xl);
        }

        h2 {
            font-size: var(--font-size-lg);
        }

        /* Layout */
        .container {
            max-width: $max-width;
            margin: 0 auto;
            padding: map-get($spacing, 'lg');

            @include respond-to('small') {
                padding: map-get($spacing, 'md');
            }
        }

        /* Main Header & Navigation */
        .main-header {
            background-color: map-get($colors, 'background');
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
            position: sticky;
            top: 0;
            z-index: 1000;
            border-bottom: 1px solid map-get($colors, 'border');
        }

        .top-nav {
            max-width: $max-width;
            margin: 0 auto;
            padding: map-get($spacing, 'md') map-get($spacing, 'lg');
            display: flex;
            justify-content: space-between;
            align-items: center;

            .brand-name {
                font-size: 1.5rem;
                font-weight: 700;
                color: map-get($colors, 'accent');
                text-decoration: none;

                &:hover {
                    color: darken(map-get($colors, 'accent'), 10%);
                }
            }
        }

        .nav-menu {
            display: flex;
            gap: map-get($spacing, 'lg');
            list-style: none;
            margin: 0;
            padding: 0;

            .nav-link {
                color: map-get($colors, 'primary');
                text-decoration: none;
                font-weight: 500;
                padding: 0.5rem 0;
                position: relative;

                &:after {
                    content: '';
                    position: absolute;
                    width: 100%;
                    height: 2px;
                    bottom: 0;
                    left: 0;
                    background-color: map-get($colors, 'accent');
                    transform: scaleX(0);
                    transition: transform $transition-duration ease;
                }

                &:hover:after,
                &.active:after {
                    transform: scaleX(1);
                }

                &.active {
                    color: map-get($colors, 'accent');
                }
            }
        }

        /* Improved Navigation (Mobile) */
        .menu-toggle {
            display: none;
            font-size: 1.5rem;
            cursor: pointer;
            padding: 10px;
        }

        @media (max-width: map-get($breakpoints, 'medium')) {
            .nav-menu {
                display: none;
                flex-direction: column;
                position: absolute;
                top: 100%;
                left: 0;
                width: 100%;
                background-color: map-get($colors, 'background');
                box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
                padding: map-get($spacing, 'md');
                text-align: center;
                z-index: 1001;
            }

            .nav-menu.active {
                display: flex;
            }

            .menu-toggle {
                display: block;
            }

            .nav-link {
                padding: 1rem;
                display: block;
            }
        }


        /* Content Sections */
        .name-title {
            font-size: 2.5rem;
            color: map-get($colors, 'accent');
            margin-bottom: map-get($spacing, 'lg');
            font-weight: 700;
        }

        .about {
            margin-bottom: map
            get($spacing, 'xl');

            p {
                font-size: 1.1rem;
                line-height: 1.6;
            }
        }

        .research-section,
        .projects-section {
            margin-bottom: map-get($spacing, 'xl');
        }

        .research-list,
        .projects-list {
            list-style-type: none;
            padding-left: 0;
            margin-bottom: map-get($spacing, 'lg');

            li {
                padding: map-get($spacing, 'sm') 0;
                font-size: 1.1rem;

                &:before {
                    content: "•";
                    color: map-get($colors, 'accent');
                    font-weight: bold;
                    margin-right: map-get($spacing, 'sm');
                }
            }
        }

        .cta-button {
            display: inline-block;
            padding: map-get($spacing, 'sm') map-get($spacing, 'lg');
            background-color: map-get($colors, 'accent');
            color: white;
            text-decoration: none;
            border-radius: $border-radius;
            transition: all $transition-duration ease;
            font-weight: 500;

            &:hover {
                background-color: darken(map-get($colors, 'accent'), 10%);
                transform: translateY(-2px);
                box-shadow: 0 4px 12px rgba(3, 102, 214, 0.2);
            }
        }

        /* Quick Navigation Grid */
        .quick-nav {
            margin-top: map-get($spacing, 'xl');
        }

        .nav-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: map-get($spacing, 'lg');
            margin-top: map-get($spacing, 'md');
        }

        .nav-card {
            padding: map-get($spacing, 'lg');
            background-color: #f6f8fa;
            border-radius: $border-radius;
            text-decoration: none;
            color: inherit;
            transition: all $transition-duration ease;
            border: 1px solid map-get($colors, 'border');

            &:hover {
                transform: translateY(-4px);
                box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
                border-color: map-get($colors, 'accent');

                h3 {
                    color: map-get($colors, 'accent');
                }
            }

            h3 {
                margin: 0 0 map-get($spacing, 'sm') 0;
                font-size: 1.25rem;
                transition: color $transition-duration ease;
            }

            p {
                margin: 0;
                color: map-get($colors, 'secondary');
                font-size: 0.9rem;
            }
        }

        /* Footer */
        .site-footer {
            margin-top: map-get($spacing, 'xl');
            padding: map-get($spacing, 'lg') 0;
            border-top: 1px solid map-get($colors, 'border');

            .social-links {
                margin-top: map-get($spacing, 'md');
                display: flex;
                gap: map-get($spacing, 'md');

                a {
                    color: map-get($colors, 'secondary');
                    transition: color $transition-duration ease;

                    &:hover {
                        color: map-get($colors, 'accent');
                    }
                }
            }
        }

        /* Dark Mode */
        @media (prefers-color-scheme: dark) {
            body {
                background-color: map-get($colors, 'dark', 'background');
                color: map-get($colors, 'dark', 'text');
            }

            .main-header {
                background-color: map-get($colors, 'dark', 'surface');
                border-color: map-get($colors, 'dark', 'border');
            }

            .nav-menu .nav-link {
                color: map-get($colors, 'dark', 'text');

                &:hover,
                &.active {
                    color: lighten(map-get($colors, 'accent'), 15%);
                }
            }

            .nav-card {
                background-color: map-get($colors, 'dark', 'surface');
                border-color: map-get($colors, 'dark', 'border');

                p {
                    color: #8b949e;
                }

                &:hover {
                    background-color: lighten(map-get($colors, 'dark', 'surface'), 5%);
                    border-color: map-get($colors, 'accent');
                }
            }

            .site-footer {
                border-color: map-get($colors, 'dark', 'border');
            }
        }

        /* Accessibility */
        .skip-link {
            position: absolute;
            top: -40px;
            left: 0;
            background: map-get($colors, 'accent');
            color: white;
            padding: map-get($spacing, 'sm');
            z-index: 1001;

            &:focus {
                top: 0;
            }
        }

        /* Print styles */
        @media print {
            .main-header,
            .site-footer,
            .skip-link {
                display: none;
            }

            .container {
                max-width: none;
                padding: 0;
            }

            a {
                text-decoration: none;
                color: map-get($colors, 'primary');
            }
        }
    </style>
</head>

<body>
    <a href="#main-content" class="skip-link">Skip to main content</a>
    <header class="main-header">
        <nav class="top-nav">
            <a href="/" class="brand-name">Mingze Dou</a>
            <div class="menu-toggle" id="mobile-menu-toggle" aria-label="Toggle navigation" aria-expanded="false">
                &#9776;</div>
            <ul class="nav-menu" id="mobile-menu">
                <li><a href="/" class="nav-link active">About</a></li>
                <li><a href="/research" class="nav-link">Research</a></li>
                <li><a href="/projects" class="nav-link">Projects</a></li>
                <li><a href="/cv" class="nav-link">CV</a></li>
                <li><a href="/contact" class="nav-link">Contact</a></li>
            </ul>
        </nav>
    </header>

    <main id="main-content" class="container">
        <h1>About Me</h1>
        <p>I'm a Master's student in Neuroscience at the University of Copenhagen, specializing in systems
            neuroscience and neural data analysis. With a background in Biomedical Engineering, I combine
            computational approaches with neuroscience to understand the neural basis of spatial navigation and
            memory.</p>

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
            <li>Documentation and resource development for brainSTEM platform, an electronic notebook for
                neuroscience</li>
        </ul>
        <p><a href="/projects">View my projects →</a></p>

        <div class="quick-links">
            <a href="/research">Research</a> |
            <a href="/projects">Projects</a> |
            <a href="/cv">CV</a> |
            <a href="/contact">Contact</a>
        </div>
    </main>

    <footer class="site-footer">
        <div class="container">
            <p>&copy; {{ site.time | date: '%Y' }} Mingze Dou</p>
        </div>
    </footer>

    <script>
        const menuToggle = document.getElementById('mobile-menu-toggle');
        const mobileMenu = document.getElementById('mobile-menu');

        menuToggle.addEventListener('click', () => {
            mobileMenu.classList.toggle('active');
            menuToggle.setAttribute('aria-expanded', mobileMenu.classList.contains('active'));
        });
    </script>
</body>

</html>