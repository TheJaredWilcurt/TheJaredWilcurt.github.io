import quoteData from './quoteData.js';
import projectData from './projectData.js';
import talkData from './talkData.js';

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
    data: {
        projects: projectData,
        showDetails: false
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
                return allTypes.indexOf(item) == pos;
            });
            return uniqueArray;
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
var talks = new Vue({
    el: '#talks',
    data: {
        talks: talkData,
        showDetails: false
    },
    computed: {
        detailsClassToggle: function () {
            var detailsClass = 'hide-description';
            if (this.showDetails) {
                detailsClass = 'show-description';
            }
            return detailsClass;
        }
    }
});
