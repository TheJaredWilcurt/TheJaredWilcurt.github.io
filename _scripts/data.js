
window.quoteData = [
    {
        'name': 'Gavyn Leavitt',
        'quote': 'Now I can start organizing my CSS in a meaningful way!',
        'url': 'https://www.meetup.com/Free-Code-Camp-Indy/events/233012739/comments/469996138/',
        'photo': 'http://photos4.meetupstatic.com/photos/member/7/e/9/8/member_258512408.jpeg'
    },
    {
        'name': 'Tara Miller',
        'quote': 'Upgrading Your CSS was informative, interesting and fun. I got a ton out of it.',
        'url': 'https://www.meetup.com/Free-Code-Camp-Indy/events/233012739/comments/469988249/',
        'photo': 'http://photos1.meetupstatic.com/photos/member/d/4/7/6/member_258294390.jpeg'
    },
    {
        'name': 'Mark Loeser',
        'quote': 'I really enjoyed it and learned a lot of things that I plan on putting into practice.',
        'url': 'https://www.meetup.com/Free-Code-Camp-Indy/events/233012739/comments/469987635/',
        'photo': 'http://photos4.meetupstatic.com/photos/member/3/d/b/f/member_7515807.jpeg'
    },
    {
        'name': 'Deon Seifert',
        'quote': 'This was really informative! Thanks so much!',
        'url': 'https://www.meetup.com/Free-Code-Camp-Indy/events/233012739/comments/469971274/',
        'photo': 'http://photos2.meetupstatic.com/photos/member/3/0/c/7/member_253572487.jpeg'
    }
];

/*

  Types:
    Projects
    Conference Talk
    Meetup Talk
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
    Vanilla
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

window.projectData = [
    {
        'title': 'Scout-App',
        'type': 'Project',
        'url': 'https://github.com/scout-app/scout-app',
        'description': 'Cross-Platform Desktop App. Processes Sass into CSS. Translated to 17 languages. Downloaded 300,000+ times.',
        'img': '_imgs/scout-app.png',
        'releases': '5 major releases',
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
        'url': 'https://github.com/UniversalGUI/UGUI',
        'description': 'The Universal GUI is a framework and library to bootstrap making cross-platform desktop apps. It specializes in creating GUI\'s for command line applications, requiring only knowledge of HTML. However it can be used for more advanced projects like Scout-App or Koa11y.',
        'img': '_imgs/ugui.png',
        'releases': '8 major releases',
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
        'url': 'http://thejaredwilcurt.github.io/Koa11y',
        'description': 'Easily check a webpage for accessibility (a11y) issues. This is a cross-platform desktop app that spins up a headless browser, navigates to the desired URL, scans it for a11y issues based on your chosen guideline (WCAG2 (A/AA/AAA), Section 508), then outputs a report in your desired format (HTML, JSON, Markdown, XML, CSV).',
        'img': '_imgs/koa11y.png',
        'releases': '1 major release',
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
        'title': 'UGUI: FLIF',
        'type': 'Project',
        'url': 'http://flif.info/UGUI_FLIF',
        'description': 'A simple drag and drop tool for converting to and from FLIF image files.',
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

        ]
    },
    {
        'title': 'UGUI: WiFi',
        'type': 'Project',
        'url': 'https://github.com/TheJaredWilcurt/UGUI-Wifi',
        'description': 'Displays a list of wifi networks (access points) that are within range and allows you to connect directly to them. This was originally created in under an hour to help someone in the NW.js chatroom. Later on, it was re-built for my talk "Building a desktop app in under an hour".',
        'img': '_imgs/ugui-wifi.png',
        'releases': '1 release',
        'roles': [
            'Developer',
            'Presenter',
            'Design'
        ],
        'tech': [

        ]
    },
    {
        'title': 'A Deeper Understanding of CSS',
        'type': 'Conference Talk',
        'url': '_imgs/indycode-css.png',
        'description': 'I was a presenter at the first annual Indy.Code() conference. I gave a breakout session, 1 hour talk, on CSS. The talk covered how selector specificity is calculated and how the browser knows which style to apply from the cascade. It also covered browser default styles, user agent styles, and the purpose of CSS resets/normalizers and the difference between them. Then wrapped up with implementing all of the above topics using the Inverted Triangle CSS Methodology (ITCSS).',
        'img': '_imgs/indycode.png',
        'roles': [
            'Presenter',
            'Design'
        ],
        'tech': [

        ]
    },
    {
        'title': 'Web Dev Tooling',
        'type': 'Meetup Talk',
        'url': 'https://www.meetup.com/Free-Code-Camp-Indy/events/236980468',
        'description': 'Myself and Gwen Faraday run the local Free Code Camp group. Development tooling was a highly requested topic. So we teamed up to give a presentation. I covered JavaScript, Node, NPM, Bower, Grunt, and Gulp. She covered Browserify, Rollup, and Webpack.',
        'img': '_imgs/meetup.png',
        'roles': [
            'Presenter'
        ],
        'tech': [
            'JS',
            'Node',
            'NPM',
            'Bower',
            'Grunt',
            'Gulp',
            'Sass',
            'Vanilla'
        ]
    },
    {
        'title': 'Making a desktop app, in under an hour',
        'type': 'Meetup Talk',
        'url': 'https://www.meetup.com/indyjs/events/237046138',
        'description': 'This was a talk I gave for the largest JavaScript meetup group in Indianapolis. It was a live coding presentation in which I walked the group though a basic "Hello World" example, followed by taking questiongs while building a real world example based on UGUI: Wifi (a project previously created in under an hour).',
        'img': '_imgs/meetup.png',
        'roles': [
            'Presenter',
            'Developer'
        ],
        'tech': [

        ]
    },
    {
        'title': 'Upgrading your CSS',
        'type': 'Meetup Talk',
        'url': 'https://www.meetup.com/Free-Code-Camp-Indy/events/233012739',
        'description': 'A precursor to "A Deeper Understanding of CSS" talk, this time given to the local FreeCodeCamp Indy group. It covers all the same topics as mentioned above. Some quotes from those that came to this talk can be seen below.',
        'img': '_imgs/meetup.png',
        'roles': [
            'Presenter'
        ],
        'tech': [

        ]
    },
    {
        'title': 'UGUI: Git Branch Deleter',
        'type': 'Project',
        'url': 'https://thejaredwilcurt.github.io/UGUI-Git-Branch-Deleter',
        'description': 'This is a tool to easily check the status of tickets in Jira/GUS/Github, before easily deleting their local associated Git branch.',
        'img': '_imgs/git-branch-deleter.png',
        'releases': '3 releases',
        'roles': [
            'Developer'
        ],
        'tech': [

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

        ]
    },
    {
        'title': 'FCC-JACK',
        'type': 'Hack-a-thon',
        'url': 'https://www.meetup.com/Free-Code-Camp-Indy/events/234330061',
        'description': 'A 3 hour project made during a Free Code Camp Indy mini-hackaton. I worked with a team of 3 others and helped mentor and explain coding concepts while working on a short project.',
        'img': '_imgs/meetup.png',
        'roles': [
            'Developer',
            'Project Manager',
            'Presenter',
            'Mentor'
        ],
        'tech': [

        ]
    },
    {
        'title': 'amEco',
        'type': 'Hack-a-thon',
        'url': 'https://playameco.github.io',
        'description': 'amEco was the result of a 3 Day long hackathon for "Greater Lafayette Startup Weekend 2016". I helped to organize and play the role of a project manager, ensuring tasks were scoped to MVP and that no one was waiting on anyone else to continue. The idea behind amEco was to gamify recycling and other environmentally conscious habbits. The team came in second place.',
        'img': '_imgs/ameco.png',
        'roles': [
            'Product Owner',
            'Project Manager',
            'UX',
            'Branding',
            'Mentor'
        ],
        'tech': [

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

        ]
    },
    {
        'title': 'Dropzone (bug fix)',
        'type': 'Contribution',
        'url': 'https://github.com/enyo/dropzone/pull/1226',
        'description': 'I detected a bug in our app at work and tracked it down to the Dropzone library. After investigating further, and discussing it on their issues board, I created a pull request to solve the problem.',
        'img': '_imgs/dropzone.png',
        'roles': [
            'Developer',
            'Quality Engineer',
            'Support'
        ],
        'tech': [

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

        ]
    },
    {
        'title': 'NPM-Free-Server',
        'type': 'Library',
        'url': 'https://github.com/TheJaredWilcurt/NPM-Free-Server',
        'description': 'A very small (both in filesize and lines of code) webserver written in vanilla Node, so it can be ran as a standalone file without the need to install any dependencies.',
        'img': '_imgs/repo.svg',
        'releases': '1 release',
        'roles': [
            'Developer',
            'Documentation'
        ],
        'tech': [

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

        ]
    },
    {
        'title': 'Scout-App Classic Port',
        'type': 'Project',
        'url': 'https://github.com/scout-app/classic',
        'description': 'The original website for the 2012 version of Scout-App. Retained most of the original code and design. Updated some code and optimized images. Moved branch to its own repo to be accessible on the new Scout-App website under Scout-App.io/classic.',
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

        ]
    },
    {
        'title': 'Simple-Donut jQuery',
        'type': 'Project',
        'url': 'https://github.com/simple-donut/simple-donut-jquery',
        'description': '"Simple-Donut" is a project I started, in which the same donut chart is recreated in multiple frontend libraries/frameworks. Although it can be used like ToDoMVC, as a means of comparing the frameworks, its primary purpose is as a usable component that can be added to existing projects. This version was written taking advantage of jQuery.',
        'img': '_imgs/simple-donut.png',
        'releases': '1 release',
        'roles': [
            'Developer',
            'Project Manager',
            'Documentation'
        ],
        'tech': [

        ]
    },
    {
        'title': 'Simple-Donut Vue',
        'type': 'Project',
        'url': 'https://github.com/simple-donut/simple-donut-vue',
        'description': 'This version of the Simple-Donut was built using the Vue.js framework, which is awesome.',
        'img': '_imgs/simple-donut.png',
        'releases': '1 release',
        'roles': [
            'Developer',
            'Documentation'
        ],
        'tech': [

        ]
    }
];
