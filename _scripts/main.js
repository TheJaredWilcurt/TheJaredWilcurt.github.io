// import projectData from './projectData.js';
// import talkData from './talkData.js';
// import communityData from './communityData.js';
// import axios from '../node_modules/axios/dist/axios.min.js';
/*
/**
 * Takes a charCode  and rotates 47 characters and returns the new charCode
 * @param  {number} charCode The numeric version of a character, 97 would be for 'a'
 * @return {number}          The new charCode after rotation
 *
function ROT47CharCode (charCode) {
    if (typeof(charCode) === 'number') {
        // '!' == 33; 'O' == 79
        if (charCode >= 33 && charCode <= 79) {
            charCode = charCode + 47;
        // 'P' == 80; '~' == 126
        } else if (charCode >= 80 && charCode <= 126) {
            charCode = charCode - 47;
        }
    }

    return charCode;
}

/**
 * Loops over the characters in a string, returns a ROT47 version of them
 * @param  {string} str Any string of text.
 * @return {string}     The rotated string, ready for use.
 *
function ROT47 (str) {
    var newString = [];

    for (var i = 0; i < str.length; i++) {
        // a => 97
        var char = str.charCodeAt(i);
        // 97 => 50
        var newChar = ROT47CharCode(char);
        // 50 => '2'
        newChar = String.fromCharCode(newChar);
        // [] => ['2']
        newString.push(newChar);
    }

    // ['2'] => '2'
    newString = newString.join('');

    // '2'
    return newString;
}

/**
 * Find out how many times a technology or role is used in the site's Data
 * @param  {array}  data Imported JSON style data.
 * @param  {object} obj  The current object with stats on Tech and Roles
 * @return {object}      Object comprised of tech and roles subobjects. Each lists k:v pairs of tech/role and how many times it's used.
 *
function listOfTechnologiesAndRoles (data, obj) {
    obj = obj || {
        tech: {},
        roles: {}
    };
    data.forEach(function (item) {
        if (item.tech && item.tech.length > 0) {
            item.tech.forEach(function (technology) {
                obj.tech[technology] = obj.tech[technology] + 1 || 1;
            });
        }
        if (item.roles && item.roles.length > 0) {
            item.roles.forEach(function (role) {
                obj.roles[role] = obj.roles[role] + 1 || 1;
            });
        }
    });
    return obj;
}

window.techAndRolesStats = listOfTechnologiesAndRoles(projectData);
window.techAndRolesStats = listOfTechnologiesAndRoles(talkData, window.techAndRolesStats);
// eslint-disable-next-line no-console
console.log(window.techAndRolesStats);
*/

var Vue = window.Vue;
var axios = window.axios;

// eslint-disable-next-line no-unused-vars
var quotes = new Vue({
    el: '#quotes',
    data: {
        quotes: []
    },
    methods: {},
    mounted: function () {
        axios.get('/_scripts/quoteData.json')
            .then(function (response) {
                this.quotes = response.data;
            }.bind(this))
            .catch(function (err) {
                // TODO: handle error states
                // eslint-disable-next-line no-console
                console.log(err);
            });
    }
});
/*
// eslint-disable-next-line no-unused-vars
var projectsHighlight = new Vue({
    el: '#projects-highlight',
    data: {
        projects: projectData
    }
});

// eslint-disable-next-line no-unused-vars
var otherProjects = new Vue({
    el: '#other-projects',
    data: function () {
        var allTypes = {};
        projectData.forEach(function (project) {
            if (typeof(project.type) === 'string') {
                allTypes[project.type] = true;
            }
        });

        return {
            projects: projectData,
            typesChecked: allTypes,
            showDetails: false
        };
    },
    created: function () {
        this.projects.forEach(function (project) {
            Vue.set(project, 'showDetails', false);
        });
    },
    methods: {
        detailsClassToggle: function (project) {
            var detailsClass = 'hide-description';
            if (this.showDetails || project.showDetails) {
                detailsClass = 'show-description';
            }
            return detailsClass;
        },
        toggleCurrentDetails: function (project) {
            project.showDetails = !project.showDetails;
        }
    },
    computed: {
        allProjectTypes: function () {
            var allTypes = [];
            this.projects.forEach(function (project) {
                if (typeof(project.type) === 'string') {
                    allTypes.push(project.type);
                }
            });
            var uniqueArray = allTypes.filter(function (item, pos) {
                return allTypes.indexOf(item) === pos;
            });
            return uniqueArray;
        },
        filteredProjects: function () {
            var self = this;
            return this.projects.filter(function (project) {
                return self.typesChecked[project.type];
            });
        },
        typesCount: function () {
            var typeCounts = {};
            this.projects.forEach(function (project) {
                if (!project.major) {
                    typeCounts[project.type] = typeCounts[project.type] + 1 || 1;
                }
            });

            return typeCounts;
        }
    }
});

// eslint-disable-next-line no-unused-vars
var talks = new Vue({
    el: '#talks',
    data: {
        talks: talkData,
        showDetails: false
    },
    created: function () {
        this.talks.forEach(function (talk) {
            Vue.set(talk, 'showDetails', false);
        });
    },
    methods: {
        toggleCurrentDetails: function (talk) {
            talk.showDetails = !talk.showDetails;
        },
        detailsClassToggle: function () {
            var detailsClass = 'hide-description';
            if (this.showDetails) {
                detailsClass = 'show-description';
            }
            return detailsClass;
        }
    }
});

// eslint-disable-next-line no-unused-vars
var community = new Vue({
    el: '#community',
    data: {
        groups: communityData
    },
    created: function () {
        this.groups.forEach(function (group) {
            Vue.set(group, 'showDetails', false);
        });
    },
    methods: {
        toggleCurrentDetails: function (group) {
            group.showDetails = !group.showDetails;
        },
        showAllDetails: function () {
            this.groups.forEach(function (group) {
                group.showDetails = true;
            });
        }
    }
});

// eslint-disable-next-line no-unused-vars
var footer = new Vue({
    el: 'footer',
    data: {
        addr: ROT47('>@4]=:2>8oECF4=:(56C2y69%').replace('@', '<span class="hide">kitten</span>@'),
        to: 'mailto:0@0.0'
    },
    methods: {
        changeTo: function () {
            this.to = ROT47('>2:=E@i%96y2C65(:=4FCEo8>2:=]4@>');
        }
    }
});
*/
