/*

  Types:
    Conference Talk
    Meetup Talk

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

var talkData = [
    {
        'title': 'A Deeper Understanding of CSS',
        'type': 'Conference Talk',
        'url': '_imgs/indycode-css.png',
        'description': 'I was a presenter at the first annual <strong>Indy.Code()</strong> conference. I gave a breakout session, 1 hour talk, on CSS. The talk covered how selector specificity is calculated and how the browser knows which style to apply from the cascade. It also covered browser default styles, user agent styles, and the purpose of CSS resets/normalizers and the difference between them. Then wrapped up with implementing all of the above topics using the Inverted Triangle CSS Methodology (ITCSS).',
        'img': '_imgs/indycode.png',
        'roles': [
            'Presenter',
            'Design'
        ],
        'tech': [
            'Google Slides',
            'Chrome Developer Tools',
            'JSFiddle'
        ]
    },
    {
        'title': 'Web Dev Tooling',
        'type': 'Meetup Talk',
        'url': 'https://www.meetup.com/Free-Code-Camp-Indy/events/236980468',
        'description': 'Gwen Faraday and I run the local <strong>Free Code Camp</strong> group. Development tooling was a highly requested topic. So we teamed up to give a presentation. I covered JavaScript, Node, NPM, Bower, Grunt, and Gulp. She covered Browserify, Rollup, and Webpack.',
        'img': '_imgs/meetup.png',
        'roles': [
            'Presenter'
        ],
        'tech': [
            'VanillaJS',
            'Node',
            'NPM',
            'Bower',
            'Grunt',
            'Gulp',
            'Sass',
            'GitLab'
        ]
    },
    {
        'title': 'Making a desktop app, in under an hour',
        'type': 'Meetup Talk',
        'url': 'https://www.meetup.com/indyjs/events/237046138',
        'description': 'This was a talk I gave for the largest JavaScript meetup group in Indianapolis, <strong>Indy.js</strong>. It was a live coding presentation in which I walked the group though a basic "Hello World" example, followed by taking questions while building a real world example based on UGUI: WiFi (a project previously created in under an hour).',
        'img': '_imgs/meetup.png',
        'roles': [
            'Presenter',
            'Developer'
        ],
        'tech': [
            'NW.js',
            'UGUI',
            'Adobe Illustrator'
        ]
    },
    {
        'title': 'Upgrading your CSS',
        'type': 'Meetup Talk',
        'url': 'https://www.meetup.com/Free-Code-Camp-Indy/events/233012739',
        'description': 'A precursor to "A Deeper Understanding of CSS" talk, this time given to the local <strong>Free Code Camp Indy</strong> group. It covers all the same topics as mentioned above. Some quotes from those that came to this talk can be seen below.',
        'img': '_imgs/meetup.png',
        'roles': [
            'Presenter'
        ],
        'tech': [
            'Google Slides'
        ]
    },
    {
        'title': 'NW.js & Universal GUI',
        'type': 'Meetup Talk',
        'url': 'https://www.meetup.com/indyjs/events/225726950',
        'description': 'Talk at <strong>Indy.js</strong> meetup. This talk introduced NW.js, explained the technology behind it, and then showed some of the features of the UGUI framework.',
        'img': '_imgs/meetup.png',
        'roles': [
            'Presenter'
        ],
        'tech': [
            'NW.js',
            'UGUI'
        ]
    },
    {
        'title': 'Cross-Platform: NW.js',
        'type': 'Meetup Talk',
        'url': 'https://www.meetup.com/indysa/events/233268991',
        'description': 'A lightning talk at <strong>Indy Software Artisans</strong>. The topic for the night was "Cross-Platform". I gave a short introduction to NW.js and took questions around best practices and limitations of the technology.',
        'img': '_imgs/meetup.png',
        'roles': [
            'Presenter'
        ],
        'tech': [
            'NW.js'
        ]
    },
    {
        'title': 'Desktop Apps made with Node',
        'type': 'Meetup Talk',
        'url': 'https://www.meetup.com/Node-indy/events/237000880',
        'description': 'A 15 minute lightning talk at <strong>Node.js Indy</strong>. In this talk I walked the audience through creating a "Hello World" desktop app followed by exploring some of the NW.js API and answering questions.',
        'img': '_imgs/meetup.png',
        'roles': [
            'Presenter'
        ],
        'tech': [
            'NW.js'
        ]
    },
    {
        'title': 'A Deeper Understanding of CSS',
        'type': 'University Lecture',
        'url': '#',
        'description': 'I was approached by a Computer Science student from IUPUI at a Free Code Camp Indy meetup. I had recently given a conference talk on CSS and he thought his fellow students would be interested in it. The talk was given to the <strong>IUPUI Computer Club</strong>, and was followed by a Q &amp; A.',
        'img': '_imgs/iupui.png',
        'roles': [
            'Presenter'
        ],
        'tech': [
            'Google Slides'
        ]
    },
    {
        'title': 'Comprehensive Pen Tool Tutorial',
        'type': 'YouTube',
        'url': 'https://www.youtube.com/watch?v=2u7ijgxFOHc',
        'description': 'This is an intro to the basics of Illustrator and everything there is to know about the Pen tool. Though for Illustrator, much of it is transferrable to Photoshop and other Adobe software that has the pen tool built in as well. It covers all 4 iterations of the Pen Tool, the Select Tool (black arrow), and the Direct Select Tool (white arrow). It also covers every usage of these 6 tools on Anchor Points, Handles, and Segments, along with every modifier key (Ctrl, Alt, and Shift). This video has made YouTube history by having no negative comments; something previously theorized to be possible, but had never been successfully proven.',
        'img': '_imgs/yt.png',
        'roles': [
            'Presenter'
        ],
        'tech': [
            'Adobe Illustrator',
            'TechSmith Camtasia'
        ]
    },
    {
        'title': 'Finishing the Projects you Start (coming soon)',
        'type': 'Meetup Talk',
        'url': '#',
        'description': 'This is one of the most highly requested talks by the members of the <strong>Free Code Camp Indy</strong> meetup group. It covers effective learning, defining scope, phases of a project, the differences between academic, résumé, &amp; passion projects and how to convert them from one to another.',
        'img': '_imgs/meetup.png',
        'roles': [
            'Presenter'
        ],
        'tech': [
            'Google Slides'
        ]
    }/*,
    {
        'title': '',
        'type': '',
        'url': '',
        'description': '',
        'img': '_imgs/meetup.png',
        'roles': [
            'Presenter'
        ],
        'tech': [
        ]
    }*/
];

export default talkData;
