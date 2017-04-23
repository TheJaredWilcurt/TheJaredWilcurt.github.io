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
        projects: projectData
    }
});
