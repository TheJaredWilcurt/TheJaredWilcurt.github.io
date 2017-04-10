var Vue = window.Vue;

var quoteData = [
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

// eslint-disable-next-line no-unused-vars
var quotes = new Vue({
    el: '#quotes',
    data: {
        quotes: quoteData
    }
});

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
Bootstrap
Sass
jQuery
Node
Vue
Vanilla
Gulp


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
        'type': 'Project',
        'url': 'https://github.com/scout-app/scout-app',
        'title': 'Scout-App',
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
        'tech': ''
    },
    {
        'type': 'Project',
        'url': 'https://github.com/UniversalGUI/UGUI',
        'title': 'UGUI',
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
        'tech': ''
    },
    {
        'type': 'Project',
        'url': 'http://thejaredwilcurt.github.io/Koa11y',
        'title': 'Koa11y',
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
        'tech': ''
    },
    {
        'type': 'Project',
        'url': 'http://flif.info/UGUI_FLIF',
        'title': 'UGUI: FLIF',
        'releases': '4 major release, 1 upcoming',
        'roles': [
            'Developer',
            'UX',
            'Project Manager',
            'Quality Engineer'
        ],
        'tech': ''
    },
    {
        'type': 'Project',
        'url': 'http://graphmycss.com',
        'title': 'GraphMyCSS.com',
        'releases': '2 releases',
        'roles': [
            'Developer',
            'Branding'
        ],
        'tech': ''
    },
    {
        'type': 'Project',
        'url': 'https://github.com/TheJaredWilcurt/UGUI-Wifi',
        'title': 'UGUI: WiFi',
        'releases': '1 release',
        'roles': [
            'Developer',
            'Presenter',
            'Design'
        ],
        'tech': ''
    },
    {
        'type': 'Conference Talk',
        'url': '_imgs/indycode-css.png',
        'title': 'A Deeper Understanding of CSS',
        'roles': [
            'Presenter',
            'Design'
        ],
        'tech': ''
    },
    {
        'type': 'Meetup Talk',
        'url': 'https://www.meetup.com/Free-Code-Camp-Indy/events/236980468',
        'title': 'Web Dev Tooling',
        'roles': [
            'Presenter'
        ],
        'tech': 'JS, Node, NPM, Bower, Grunt, Gulp'
    },
    {
        'type': 'Meetup Talk',
        'url': 'https://www.meetup.com/indyjs/events/237046138',
        'title': 'Making a desktop app, in under an hour',
        'roles': [
            'Presenter',
            'Developer'
        ],
        'tech': ''
    },
    {
        'type': 'Meetup Talk',
        'url': 'https://www.meetup.com/Free-Code-Camp-Indy/events/233012739',
        'title': 'Upgrading your CSS',
        'roles': [
            'Presenter'
        ],
        'tech': ''
    },
    {
        'type': 'Project',
        'url': 'https://thejaredwilcurt.github.io/UGUI-Git-Branch-Deleter',
        'title': 'UGUI: Git Branch Deleter',
        'releases': '3 releases',
        'roles': [
            'Developer'
        ],
        'tech': ''
    },
    {
        'type': 'Project',
        'url': 'https://github.com/TheJaredWilcurt/glr',
        'title': 'GLRittenhouse Website Port',
        'roles': [
            'Developer',
            'Project Manager',
            'Branding'
        ],
        'tech': ''
    },
    {
        'type': 'Contribution',
        'url': 'https://github.com/FLIF-hub/FLIF/releases',
        'title': 'FLIF binary builds',
        'releases': '2 releases',
        'roles': [
            'Developer',
            'Quality Engineer'
        ],
        'tech': ''
    },
    {
        'type': 'Project',
        'url': 'https://github.com/TheJaredWilcurt/SassNotSASS',
        'title': 'SassNotSass',
        'roles': [
            'Developer',
            'UX',
            'Branding'
        ],
        'tech': ''
    },
    {
        'type': 'Hack-a-thon',
        'url': 'https://www.meetup.com/Free-Code-Camp-Indy/events/234330061',
        'title': 'FCC-JACK',
        'roles': [
            'Developer',
            'Project Manager',
            'Presenter',
            'Mentor'
        ],
        'tech': ''
    },
    {
        'type': 'Hack-a-thon',
        'url': 'https://playameco.github.io',
        'title': 'amEco',
        'roles': [
            'Product Owner',
            'Project Manager',
            'UX',
            'Branding',
            'Mentor'
        ],
        'tech': ''
    },
    {
        'type': 'Library',
        'url': 'https://github.com/TheJaredWilcurt/css-selectors-to-js-array',
        'title': 'CSS-Selectors-to-JS-Array',
        'releases': '2 releases',
        'roles': [
            'Developer',
            'Documentation'
        ],
        'tech': ''
    },
    {
        'type': 'Project',
        'url': 'https://github.com/TheJaredWilcurt/OnTopOfJira',
        'title': 'OnTopOfJira',
        'roles': [
            'Developer',
            'Design',
            'Branding',
            'Mentor',
            'Quality Engineer',
            'Support'
        ],
        'tech': ''
    },
    {
        'type': 'Contribution',
        'url': 'https://github.com/enyo/dropzone/pull/1226',
        'title': 'Dropzone (bug fix)',
        'roles': [
            'Developer',
            'UX',
            'Project Manager',
            'Documentation',
            'Presenter',
            'Architect',
            'Product Owner',
            'Design',
            'Branding',
            'Mentor',
            'Quality Engineer',
            'Support'
        ],
        'tech': ''
    },
    {
        'type': 'Contribution',
        'url': 'http://flif.info',
        'title': 'FLIF.info',
        'roles': [
            'Developer',
            'UX',
            'Project Manager',
            'Documentation',
            'Presenter',
            'Architect',
            'Product Owner',
            'Design',
            'Branding',
            'Mentor',
            'Quality Engineer',
            'Support'
        ],
        'tech': ''
    },
    {
        'type': 'Library',
        'url': 'https://github.com/TheJaredWilcurt/NPM-Free-Server',
        'title': 'NPM-Free-Server',
        'releases': '1 release',
        'roles': [
            'Developer',
            'UX',
            'Project Manager',
            'Documentation',
            'Presenter',
            'Architect',
            'Product Owner',
            'Design',
            'Branding',
            'Mentor',
            'Quality Engineer',
            'Support'
        ],
        'tech': ''
    },
    {
        'type': 'Contribution',
        'url': 'https://github.com/FLIF-hub/benchmarks',
        'title': 'FLIF Benchmarks',
        'roles': [
            'Developer',
            'UX',
            'Project Manager',
            'Documentation',
            'Presenter',
            'Architect',
            'Product Owner',
            'Design',
            'Branding',
            'Mentor',
            'Quality Engineer',
            'Support'
        ],
        'tech': ''
    },
    {
        'type': 'Library',
        'url': 'https://github.com/peterhurford/64or32',
        'title': '64or32',
        'roles': [
            'Developer',
            'UX',
            'Project Manager',
            'Documentation',
            'Presenter',
            'Architect',
            'Product Owner',
            'Design',
            'Branding',
            'Mentor',
            'Quality Engineer',
            'Support'
        ],
        'tech': ''
    },
    {
        'type': 'Contribution',
        'url': 'https://github.com/tholman/github-corners/issues/5',
        'title': 'GitHub Corners',
        'roles': [
            'Developer',
            'UX',
            'Project Manager',
            'Documentation',
            'Presenter',
            'Architect',
            'Product Owner',
            'Design',
            'Branding',
            'Mentor',
            'Quality Engineer',
            'Support'
        ],
        'tech': ''
    },
    {
        'type': 'Project',
        'url': 'http://ugui.io',
        'title': 'UGUI.io',
        'roles': [
            'Developer',
            'UX',
            'Project Manager',
            'Documentation',
            'Presenter',
            'Architect',
            'Product Owner',
            'Design',
            'Branding',
            'Mentor',
            'Quality Engineer',
            'Support'
        ],
        'tech': ''
    },
    {
        'type': 'Project',
        'url': 'http://scout-app.io',
        'title': 'Scout-App.io',
        'roles': [
            'Developer',
            'UX',
            'Project Manager',
            'Documentation',
            'Presenter',
            'Architect',
            'Product Owner',
            'Design',
            'Branding',
            'Mentor',
            'Quality Engineer',
            'Support'
        ],
        'tech': ''
    },
    {
        'type': 'Project',
        'url': 'https://github.com/scout-app/classic',
        'title': 'Scout-App Classic Port',
        'roles': [
            'Developer',
            'UX',
            'Project Manager',
            'Documentation',
            'Presenter',
            'Architect',
            'Product Owner',
            'Design',
            'Branding',
            'Mentor',
            'Quality Engineer',
            'Support'
        ],
        'tech': ''
    },
    {
        'type': 'Project',
        'url': 'https://github.com/simple-donut/simple-donut-jquery',
        'title': 'Simple-Donut jQuery',
        'releases': '1 release',
        'roles': [
            'Developer',
            'UX',
            'Project Manager',
            'Documentation',
            'Presenter',
            'Architect',
            'Product Owner',
            'Design',
            'Branding',
            'Mentor',
            'Quality Engineer',
            'Support'
        ],
        'tech': ''
    },
    {
        'type': 'Project',
        'url': 'https://github.com/simple-donut/simple-donut-vue',
        'title': 'Simple-Donut Vue',
        'releases': '1 release',
        'roles': [
            'Developer',
            'UX',
            'Project Manager',
            'Documentation',
            'Presenter',
            'Architect',
            'Product Owner',
            'Design',
            'Branding',
            'Mentor',
            'Quality Engineer',
            'Support'
        ],
        'tech': ''
    }
];


// eslint-disable-next-line no-unused-vars
var projects = new Vue({
    el: '#projects',
    data: {
        projects: projectData
    }
});
