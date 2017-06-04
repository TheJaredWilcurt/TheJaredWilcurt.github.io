var Vue = window.Vue;
var quoteData = window.quoteData;
var projectData = window.projectData;

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
        }
    }
});
