import projectData from './projectData.js';
import talkData from './talkData.js';
import quoteData from './quoteData.js';
import communityData from './communityData.js';

/**
 * Find out how many times a technology or role is used in the site's Data
 * @param  {array}  data Imported JSON style data.
 * @param  {object} obj  The current object with stats on Tech and Roles
 * @return {object}      Object comprised of tech and roles subobjects. Each lists k:v pairs of tech/role and how many times it's used.
 */
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


var Vue = window.Vue;

// eslint-disable-next-line no-unused-vars
var quotes = new Vue({
    el: '#quotes',
    data: {
        quotes: quoteData
    }
});

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
                typeCounts[project.type] = typeCounts[project.type] + 1 || 1;
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
        groups: communityData,
        showDetails: true
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
        detailsClassToggle: function () {
            var detailsClass = 'hide-description';
            if (this.showDetails) {
                detailsClass = 'show-description';
            }
            return detailsClass;
        }
    }
});
