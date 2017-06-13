import projectData from './projectData.js';
import talkData from './talkData.js';
import quoteData from './quoteData.js';
import communityData from './communityData.js';


var Vue = window.Vue;

// eslint-disable-next-line no-unused-vars
var quotes = new Vue({
    el: '#quotes',
    data: {
        quotes: quoteData
    }
});

// eslint-disable-next-line no-unused-vars
var projects = new Vue({
    el: '#projects',
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
        showDetails: false
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
