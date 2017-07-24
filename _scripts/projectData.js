/*

  Types:
    Projects
    Contribution
    Hackathon
    Library

  Tech:
    NW.js
    UGUI
    Pa11y
    PhantomJS
    Bootstrap
    Sass
    jQuery
    Node
    Vue
    VanillaJS
    Gulp
    Chokidar
    Bower
    FS-Extra
    ESLint
    SassLint
    Bootswatch
    7-Zip (Node)
    JSON-to-CSV
    CSV-to-JSON

  Role:
    Developer
    UX
    Project Manager
    Documentation
    Presenter
    Architect
    Product Owner
    Design
    Branding
    Mentor
    Qualty Engineer
    Support
*/

var projectData = [
    {
        'title': 'Scout-App',
        'type': 'Project',
        'website': 'http://scout-app.io',
        'repo': 'https://github.com/scout-app/scout-app',
        'url': 'https://github.com/scout-app/scout-app',
        'description': 'A cross-platform desktop app that manages, watches, and processes Sass into CSS for all your projects. Downloaded over 300,000 times, in 22 languages, in over 20 countries. I\'ve never released a version with a known bug.',
        'img': '_imgs/scout-app.png',
        'releases': '5 major releases',
        'major': true,
        'roles': [
            'Developer',
            'UX',
            'Project Manager',
            'Documentation',
            'Product Owner',
            'Branding',
            'Quality Engineer',
            'Support'
        ],
        'tech': [
            'NW.js',
            'UGUI',
            'Bootstrap',
            'jQuery',
            'Sass',
            'FS-Extra',
            'Bootswatch',
            'Chokidar',
            'Node',
            'Bower',
            'ESLint',
            'SassLint',
            '7-Zip (Node)',
            'CSV-to-JSON'
        ]
    },
    {
        'title': 'UGUI',
        'type': 'Project',
        'website': 'http://ugui.io',
        'repo': 'https://github.com/UniversalGUI/UGUI',
        'url': 'https://github.com/UniversalGUI/UGUI',
        'description': 'UGUI (The Universal GUI), is a library and framework that makes bootstrapping cross-platform desktop apps a breeze. Primarily designed to let users easily make GUIs for command-line apps, UGUI requires only a basic knowledge of HTML to get started. Despite being easy to pick up, it\'s incredibly powerful, and both Scout-App and Koa11y were built with it.',
        'img': '_imgs/ugui.png',
        'releases': '8 major releases',
        'major': true,
        'roles': [
            'Developer',
            'UX',
            'Project Manager',
            'Documentation',
            'Architect',
            'Design',
            'Branding',
            'Quality Engineer'
        ],
        'tech': [
            'NW.js',
            'jQuery',
            'Bootstrap',
            'Sass',
            'Node',
            'Bootswatch'
        ]
    },
    {
        'title': 'Koa11y',
        'type': 'Project',
        'website': 'https://open-indy.github.io/Koa11y/',
        'repo': 'https://github.com/open-indy/Koa11y',
        'url': 'https://github.com/open-indy/Koa11y',
        'description': 'Koa11y is a cross-platform desktop app that allows users to easily check for accessibility (a11y) issues in their webpages. Koa11y spins up a headless browser, navigates to your URL, scans it based on your accessibility guidelines, and gives you a report in several common formats. The reports include the specific line of code that violates a guideline and in many cases direct recommendations on how best to resolve the violation.',
        'img': '_imgs/koa11y.png',
        'releases': '1 major release',
        'major': true,
        'roles': [
            'Developer',
            'UX',
            'Project Manager',
            'Presenter',
            'Architect',
            'Design',
            'Branding',
            'Quality Engineer',
            'Support'
        ],
        'tech': [
            'NW.js',
            'UGUI',
            'Pa11y',
            'PhantomJS',
            'Sass',
            'jQuery',
            'Node',
            'FS-Extra',
            'ESLint',
            'SassLint',
            'Bootstrap',
            'Bootswatch',
            'JSON-to-CSV'
        ]
    },
    {
        'title': 'TheJaredWilcurt.com',
        'type': 'Project',
        'website': 'http://TheJaredWilcurt.com',
        'repo': 'http://github.com/TheJaredWilcurt/TheJaredWilcurt.github.io',
        'url': 'http://github.com/TheJaredWilcurt/TheJaredWilcurt.github.io',
        'description': 'This website! Rebuilt using Vue.js and completely hand crafted styles in June of 2017 with care and attention. (I even asked someone to spellcheck it).',
        'img': '_imgs/meta/apl-144.png',
        'releases': '4th iteration',
        'major': true,
        'roles': [
            'Developer',
            'UX',
            'Design'
        ],
        'tech': [
            'Vue',
            'Sass',
            'Gulp',
            'Rollup',
            'Express',
            'LiveReload',
            'Node',
            'ESLint',
            'SassLint',
            'GitHub Pages'
        ]
    },
    {
        'title': 'UGUI: FLIF',
        'type': 'Project',
        'url': 'http://flif.info/UGUI_FLIF',
        'description': 'A simple drag and drop tool for converting to and from FLIF image files. The first ever FLIF GUI.',
        'img': '_imgs/flif.png',
        'releases': '4 major release, 1 upcoming',
        'roles': [
            'Developer',
            'UX',
            'Project Manager',
            'Quality Engineer'
        ],
        'tech': [
            'NW.js',
            'UGUI',
            'FLIF',
            'ImageMagick',
            'Sass',
            'jQuery',
            'Node',
            'Bootstrap',
            'ESLint',
            'SassLint',
            'Bootswatch'
        ]
    },
    {
        'title': 'GraphMyCSS.com',
        'type': 'Project',
        'url': 'http://graphmycss.com',
        'description': 'A website where you can paste in any arbitrary CSS and have a graph dynamically generated to show levels of selector specificity throughout the file.',
        'img': '_imgs/graphmycss.png',
        'releases': '2 releases',
        'roles': [
            'Developer',
            'Branding'
        ],
        'tech': [
            'SVG Line Graph',
            'Rework',
            'Specificity',
            'CSS-Selectors-To-JS-Array',
            'Sass',
            'jQuery',
            'GitHub Pages'
        ]
    },
    {
        'title': 'UGUI: WiFi',
        'type': 'Project',
        'url': 'https://github.com/TheJaredWilcurt/UGUI-Wifi',
        'description': 'Displays a list of Wi-Fi networks (access points) that are within range and allows you to connect directly to them. This was originally created in under an hour to help someone in the NW.js chatroom. Later on, it was re-built live for my talk "Building a desktop app in under an hour".',
        'img': '_imgs/ugui-wifi.png',
        'releases': '1 release',
        'roles': [
            'Developer',
            'Presenter',
            'Design'
        ],
        'tech': [
            'NW.js',
            'UGUI',
            'Bootstrap',
            'Sass',
            'jQuery',
            'Node',
            'Bootswatch',
            'WiFi-Control'
        ]
    },
    {
        'title': 'UGUI: Git Branch Deleter',
        'type': 'Project',
        'url': 'https://thejaredwilcurt.github.io/UGUI-Git-Branch-Deleter',
        'description': 'This is a tool to easily check the status of tickets in Jira/GUS/GitHub Enterprise, before easily deleting their local associated Git branch. After each major release at work, I use this to remove all local branches from 2 releases ago.',
        'img': '_imgs/git-branch-deleter.png',
        'releases': '5 releases',
        'roles': [
            'Developer'
        ],
        'tech': [
            'NW.js',
            'UGUI',
            'Git',
            'Bootstrap',
            'Sass',
            'jQuery',
            'Node',
            'Bootswatch'
        ]
    },
    {
        'title': 'GLRittenhouse Website Port',
        'type': 'Project',
        'url': 'https://github.com/TheJaredWilcurt/glr',
        'description': 'Porting an old static website over to GitHub\'s free hosting as a living archive.',
        'img': '_imgs/glr.png',
        'roles': [
            'Developer',
            'Project Manager',
            'Branding'
        ],
        'tech': [
            'VanillaJS',
            'GitHub Pages'
        ]
    },
    {
        'title': 'FLIF binary builds',
        'type': 'Contribution',
        'url': 'https://github.com/FLIF-hub/FLIF/releases',
        'description': 'I\'m an early member of the FLIF image format community. I\'m responsible for creating the command line tools for Windows (32/64), OSX (64), and Ubuntu (32/64). To better enable the spread and usage of the format.',
        'img': '_imgs/flif.png',
        'releases': '2 releases',
        'roles': [
            'Developer',
            'Quality Engineer'
        ],
        'tech': [
            'Microsoft Visual Studio 2013 Professional',
            'Microsoft Visual Studio 2015 Community',
            'Oracle VM Virtual Box',
            'VMWare Workstation'
        ]
    },
    {
        'title': 'SassNotSASS',
        'type': 'Project',
        'url': 'https://github.com/TheJaredWilcurt/SassNotSASS',
        'description': 'One-day novelty project. Created a site to explain the proper capitalization of Sass (not SASS as is often typed).',
        'img': '_imgs/sassnotsass.svg',
        'roles': [
            'Developer',
            'UX',
            'Branding'
        ],
        'tech': [
            'Scout-App',
            'GitHub Pages',
            'Sass',
            'Adobe Illustrator'
        ]
    },
    {
        'title': 'FCC-JACK',
        'type': 'Hackathon',
        'url': 'https://www.meetup.com/Free-Code-Camp-Indy/events/234330061',
        'description': 'A 3 hour project made during a Free Code Camp Indy mini-hackathon. I worked with a team of 3 others and helped mentor and explain coding concepts while working on a short project.',
        'img': '_imgs/free-code-camp.svg',
        'roles': [
            'Developer',
            'Project Manager',
            'Presenter',
            'Mentor'
        ],
        'tech': [
            'HTML5 Boiler Plate',
            'NPM-Free-Server',
            'Bootstrap',
            'jQuery',
            'GitHub Pages'
        ]
    },
    {
        'title': 'amEco',
        'type': 'Hackathon',
        'url': 'https://playameco.github.io',
        'description': 'amEco was the result of a 3 Day long hackathon for "Greater Lafayette Startup Weekend 2016". I helped to organize and play the role of a project manager, ensuring tasks were scoped to MVP and that no one was waiting on anyone else to continue. The idea behind amEco was to gamify recycling and other environmentally conscious habits. The team came in second place.',
        'img': '_imgs/ameco.png',
        'roles': [
            'Product Owner',
            'Project Manager',
            'UX',
            'Branding',
            'Mentor'
        ],
        'tech': [
            'GitLab',
            'Balsamiq',
            'Whiteboards',
            'Trello'
        ]
    },
    {
        'title': 'FCC Indy/GDI - Mini-Hack Day',
        'type': 'Hackathon',
        'url': 'https://www.meetup.com/Free-Code-Camp-Indy/events/237459434',
        'description': 'A 6 hour hackathon aimed at beginners. This was a collaborative effort between Free Code Camp Indy and Girl Develop-It. I helped organize and run this event, as well as give advise and help to participating teams.',
        'img': '_imgs/free-code-camp.svg',
        'roles': [
            'Organizer',
            'Mentor'
        ],
        'tech': [
            'Whiteboards'
        ]
    },
    {
        'title': 'Free Code Camp\'s first Remote Hack',
        'type': 'Hackathon',
        'url': 'https://free-code-camp-indy.github.io/FCC-Remote-Hack',
        'description': 'This was the first ever remote hackathon for Free Code Camp. Particapants could form teams from around the world to compete in a 24 hour long game jam. I was asked to judge the submitted projects, provide detailed feedback, and give my selection for the winner of the event.',
        'img': '_imgs/free-code-camp.svg',
        'roles': [
            'Judge'
        ],
        'tech': [
            'GitHub'
        ]
    },
    {
        'title': 'CSS-Selectors-to-JS-Array',
        'type': 'Library',
        'url': 'https://github.com/TheJaredWilcurt/css-selectors-to-js-array',
        'description': 'This is a library I created to process any arbitrary string of CSS into a JavaScript array of just the CSS selectors. It was created for GraphMyCSS.com.',
        'img': '_imgs/repo.svg',
        'releases': '2 releases',
        'roles': [
            'Developer',
            'Documentation'
        ],
        'tech': [
            'VanillaJS'
        ]
    },
    {
        'title': 'OnTopOfJira',
        'type': 'Project',
        'url': 'https://github.com/TheJaredWilcurt/OnTopOfJira',
        'description': 'A short 1 hour project created at the request of a coworker who had to handle customer escalations. He wanted to have a small window set to "Always on top" to keep track of escalations in Jira.',
        'img': '_imgs/repo.svg',
        'roles': [
            'Developer'
        ],
        'tech': [
            'NW.js',
            'jQuery'
        ]
    },
    {
        'title': 'Dropzone.js (bug fix)',
        'type': 'Contribution',
        'url': 'https://github.com/enyo/dropzone/pull/1226',
        'description': 'I detected a bug in our app at work and tracked it down to the Dropzone.js library. After investigating further, and discussing it on their issues board, I created a pull request to solve the problem.',
        'img': '_imgs/dropzone.png',
        'roles': [
            'Developer',
            'Quality Engineer',
            'Support'
        ],
        'tech': [
            'VanillaJS'
        ]
    },
    {
        'title': 'FLIF.info',
        'type': 'Contribution',
        'url': 'http://flif.info',
        'description': 'I\'ve helped with formatting of content, and structuring of files, and general maintenance.',
        'img': '_imgs/flif.png',
        'roles': [
            'Developer'
        ],
        'tech': [
            'GitHub Pages'
        ]
    },
    {
        'title': 'NPM-Free-Server',
        'type': 'Library',
        'url': 'https://github.com/TheJaredWilcurt/NPM-Free-Server',
        'description': 'A very small (both in file size and lines of code) webserver written in vanilla Node, so it can be ran as a standalone file without the need to install any dependencies.',
        'img': '_imgs/repo.svg',
        'releases': '1 release',
        'roles': [
            'Developer',
            'Documentation'
        ],
        'tech': [
            'Node'
        ]
    },
    {
        'title': 'FLIF Benchmarks',
        'type': 'Contribution',
        'url': 'https://github.com/FLIF-hub/benchmarks',
        'description': 'The FLIF Benchmarks repo is a collection of image sets that vary in content. It is used in the testing of FLIF to ensure that it can succeed as a general purpose image compressor. I\'ve contributed many of my own images and a few image compression corpuses I\'ve collected over the years that I used when testing PNG compression.',
        'img': '_imgs/flif.png',
        'roles': [
            'Documentation',
            'Design'
        ],
        'tech': [
            'Adobe Photoshop',
            'Adobe Flash Professional',
            'Adobe After Effects',
            'Adobe Illustrator',
            'TruePNG',
            'Png Optimizer',
            'PNGOUT Win',
            'PNG Gauntlet',
            'defluff',
            'zopfliPng',
            'deflOpt'
        ]
    },
    {
        'title': '64or32',
        'type': 'Library',
        'url': 'https://github.com/peterhurford/64or32',
        'description': 'I needed a way of detecting if a user\'s machine was 32-Bit or 64-Bit so I could display the correct download button for my desktop app websites. The first google result was 64or32.com. Based on the existing code, I rewrote it to be a simple library that others could use, contacted the owner and helped update the site and repo to act more as a library.',
        'img': '_imgs/repo.svg',
        'roles': [
            'Developer',
            'Documentation'
        ],
        'tech': [
            'VanillaJS',
            'jQuery'
        ]
    },
    {
        'title': 'GitHub Corners',
        'type': 'Contribution',
        'url': 'https://github.com/tholman/github-corners/issues/5',
        'description': 'I created a simple proof of concept for dynamically generating GitHub corners.',
        'img': '_imgs/github-corners.svg',
        'roles': [
            'Developer',
            'UX'
        ],
        'tech': [
            'jQuery',
            'JSFiddle'
        ]
    },
    {
        'title': 'UGUI.io',
        'type': 'Project',
        'url': 'http://ugui.io',
        'description': 'The website for the UGUI framework/library. It has detailed API documentation, and a completely annotated source code for UGUI. I used this website as a means mentor others learning web development, to give them experience on a real world project.',
        'img': '_imgs/ugui.png',
        'roles': [
            'Developer',
            'UX',
            'Project Manager',
            'Documentation',
            'Design',
            'Branding',
            'Mentor'
        ],
        'tech': [
            'Sass',
            'jQuery',
            'Gulp',
            'Marked',
            'Docco',
            'Highlight.JS'
        ]
    },
    {
        'title': 'Scout-App.io',
        'type': 'Project',
        'url': 'http://scout-app.io',
        'description': 'The Scout-App website, featuring tutorial video, download links, contributors, mixin library documentation, and more.',
        'img': '_imgs/scout-app.png',
        'roles': [
            'Developer',
            'UX',
            'Project Manager',
            'Documentation',
            'Presenter',
            'Design',
            'Branding',
            'Mentor',
            'Quality Engineer'
        ],
        'tech': [
            'Sass',
            'jQuery',
            'Node',
            'Gulp',
            'ESLint',
            'SassLint',
            'LiveReload'
        ]
    },
    {
        'title': 'Scout-App Classic Port',
        'type': 'Project',
        'url': 'http://scout-app.io/mhs-site-fork/',
        'description': 'The original 2012 version of Scout-App was very successful and has been linked to from many websites. Since the new version is now at a more appropriate URL, there were 2 primary goals of this project. Firstly to preserve the original website for the 2012 version as best we could in code and design. However I did updated some code and better optimize images. The living archive of the 2012 site was moved to its own repo to be accessible on the new Scout-App website under Scout-App.io/classic. The original URL had a new page created to offer visitors looking for Scout-App the original 2012 or new 2017 versions.',
        'img': '_imgs/scout-classic.png',
        'roles': [
            'Developer',
            'UX',
            'Project Manager',
            'Documentation',
            'Design',
            'Support'
        ],
        'tech': [
            'jQuery',
            'Sass',
            'Scout-App'
        ]
    },
    {
        'title': 'Simple-Donut jQuery',
        'type': 'Project',
        'url': 'https://github.com/simple-donut/simple-donut-jquery',
        'description': '"Simple-Donut" is a project I started, in which the same donut chart is recreated in multiple frontend libraries/frameworks. Although it can be used like TodoMVC, as a means of comparing the frameworks, its primary purpose is as a usable component that can be added to existing projects. This version was written taking advantage of jQuery.',
        'img': '_imgs/simple-donut.png',
        'releases': '1 release',
        'roles': [
            'Developer',
            'Project Manager',
            'Documentation'
        ],
        'tech': [
            'jQuery',
            'Sass'
        ]
    },
    {
        'title': 'Simple-Donut Vue',
        'type': 'Project',
        'url': 'https://github.com/simple-donut/simple-donut-vue',
        'description': 'This version of the Simple-Donut was built using the Vue.js framework, which is awesome. It can easily be adapted to existing Vue.js projects in need of a simple donut UI element.',
        'img': '_imgs/simple-donut.png',
        'releases': '1 release',
        'roles': [
            'Developer',
            'Documentation'
        ],
        'tech': [
            'Vue',
            'Sass'
        ]
    }/*,
    {
        'title': '',
        'type': '',
        'url': ''
        'description': '',
        'img': '',
        'releases': '',
        'roles': [
            ''
        ],
        'tech': [
            ''
        ]
    }*/
];

export default projectData;
