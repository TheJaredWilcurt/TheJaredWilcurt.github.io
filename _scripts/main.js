/* global axios, Vue */

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

// eslint-disable-next-line no-unused-vars
function requestFailed () {
  return 'There was an error in making the network request. Please refresh the page. If the issue continues, <a href="http://github.com/TheJaredWilcurt/TheJaredWilcurt.github.io/issues">report it here</a>.';
}

window.techAndRolesStats = listOfTechnologiesAndRoles([]);
// eslint-disable-next-line no-console
console.log(window.techAndRolesStats);

// eslint-disable-next-line no-unused-vars
const projectsHighlight = new Vue({
  el: '#projects-highlight',
  data: {
    projects: [],
    networkRequestFailed: false
  }
});

// eslint-disable-next-line no-unused-vars
const otherProjects = new Vue({
  el: '#other-projects',
  data: {
    projects: [],
    typesChecked: {},
    showDetails: false,
    networkRequestFailed: false
  },
  methods: {
    detailsClassToggle: function (project) {
      let detailsClass = 'hide-description';
      if (this.showDetails || project.showDetails) {
        detailsClass = 'show-description';
      }
      return detailsClass;
    },
    toggleCurrentDetails: function (project) {
      project.showDetails = !project.showDetails;
    },
    createTypesChecked: function () {
      const allTypes = {};
      this.projects.forEach(function (project) {
        if (typeof(project.type) === 'string') {
          allTypes[project.type] = true;
        }
      });
      this.typesChecked = allTypes;
    },
    setAllDetailsToHidden: function () {
      this.projects.forEach(function (project) {
        Vue.set(project, 'showDetails', false);
      });
    }
  },
  computed: {
    totalCount: function () {
      let otherProjects = this.projects.filter(function (project) {
        return !project.major;
      });
      return otherProjects.length;
    },
    allProjectTypes: function () {
      const allTypes = [];
      this.projects.forEach(function (project) {
        if (typeof(project.type) === 'string') {
          allTypes.push(project.type);
        }
      });
      const uniqueArray = allTypes.filter(function (item, pos) {
        return allTypes.indexOf(item) === pos;
      });
      return uniqueArray;
    },
    filteredProjects: function () {
      return this.projects.filter(function (project) {
        return this.typesChecked[project.type];
      }.bind(this));
    },
    typesCount: function () {
      const typeCounts = {};
      this.projects.forEach(function (project) {
        if (!project.major) {
          typeCounts[project.type] = typeCounts[project.type] + 1 || 1;
        }
      });

      return typeCounts;
    }
  }
});

axios.get('/_scripts/data/projects.json')
  .then(function (response) {
    projectsHighlight.projects = response.data;
    otherProjects.projects = response.data;
    otherProjects.setAllDetailsToHidden();
    otherProjects.createTypesChecked();
    window.techAndRolesStats = listOfTechnologiesAndRoles(response.data, window.techAndRolesStats);
  }.bind(this))
  .catch(function (err) {
    projectsHighlight.networkRequestFailed = true;
    otherProjects.networkRequestFailed = true;
    // eslint-disable-next-line no-console
    console.log(err);
  });

// eslint-disable-next-line no-unused-vars
const community = new Vue({
  el: '#community',
  data: {
    groups: [],
    networkRequestFailed: false
  },
  methods: {
    toggleCurrentDetails: function (group) {
      group.showDetails = !group.showDetails;
    },
    showAllDetails: function () {
      this.groups.forEach(function (group) {
        group.showDetails = true;
      });
    },
    setAllDetailsToHidden: function () {
      this.groups.forEach(function (group) {
        Vue.set(group, 'showDetails', false);
      });
    }
  },
  mounted: function () {
    axios.get('/_scripts/data/community.json')
      .then(function (response) {
        this.groups = response.data;
        this.setAllDetailsToHidden();
        window.techAndRolesStats = listOfTechnologiesAndRoles(response.data, window.techAndRolesStats);
      }.bind(this))
      .catch(function (err) {
        this.networkRequestFailed = true;
        // eslint-disable-next-line no-console
        console.log(err);
      }.bind(this));
  }
});

// eslint-disable-next-line no-unused-vars
const podcasts = new Vue({
  el: '#podcasts',
  data: {
    podcasts: [],
    showDetails: false,
    networkRequestFailed: false
  },
  methods: {
    toggleCurrentDetails: function (podcast) {
      podcast.showDetails = !podcast.showDetails;
    },
    detailsClassToggle: function () {
      let detailsClass = 'hide-description';
      if (this.showDetails) {
        detailsClass = 'show-description';
      }
      return detailsClass;
    },
    setAllDetailsToHidden: function () {
      this.podcasts.forEach(function (podcast) {
        Vue.set(podcast, 'showDetails', false);
      });
    }
  },
  mounted: function () {
    axios.get('/_scripts/data/podcasts.json')
      .then(function (response) {
        this.podcasts = response.data;
        this.setAllDetailsToHidden();
        window.techAndRolesStats = listOfTechnologiesAndRoles(response.data, window.techAndRolesStats);
      }.bind(this))
      .catch(function (err) {
        this.networkRequestFailed = true;
        // eslint-disable-next-line no-console
        console.log(err);
      }.bind(this));
  }
});

// eslint-disable-next-line no-unused-vars
const talks = new Vue({
  el: '#talks',
  data: {
    talks: [],
    showDetails: false,
    networkRequestFailed: false
  },
  methods: {
    toggleCurrentDetails: function (talk) {
      talk.showDetails = !talk.showDetails;
    },
    detailsClassToggle: function () {
      let detailsClass = 'hide-description';
      if (this.showDetails) {
        detailsClass = 'show-description';
      }
      return detailsClass;
    },
    setAllDetailsToHidden: function () {
      this.talks.forEach(function (talk) {
        Vue.set(talk, 'showDetails', false);
      });
    }
  },
  mounted: function () {
    axios.get('/_scripts/data/talks.json')
      .then(function (response) {
        this.talks = response.data;
        this.setAllDetailsToHidden();
        window.techAndRolesStats = listOfTechnologiesAndRoles(response.data, window.techAndRolesStats);
      }.bind(this))
      .catch(function (err) {
        this.networkRequestFailed = true;
        // eslint-disable-next-line no-console
        console.log(err);
      }.bind(this));
  }
});

// eslint-disable-next-line no-unused-vars
const quotes = new Vue({
  el: '#quotes',
  data: {
    quotes: [],
    networkRequestFailed: false
  },
  methods: {},
  mounted: function () {
    axios.get('/_scripts/data/quotes.json')
      .then(function (response) {
        this.quotes = response.data;
      }.bind(this))
      .catch(function (err) {
        this.networkRequestFailed = true;
        // eslint-disable-next-line no-console
        console.log(err);
      }.bind(this));
  }
});

// eslint-disable-next-line no-unused-vars
const footer = new Vue({
  el: 'footer',
  data: {
    addr: '',
    to: 'mailto:0@0.0'
  },
  methods: {
    changeTo: function () {
      this.to = this.ROT47('>2:=E@i%96y2C65(:=4FCEo8>2:=]4@>');
    },
    /**
     * Takes a charCode  and rotates 47 characters and returns the new charCode
     * @param  {number} charCode The numeric version of a character, 97 would be for 'a'
     * @return {number}          The new charCode after rotation
     */
    ROT47CharCode: function (charCode) {
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
    },
    /**
     * Loops over the characters in a string, returns a ROT47 version of them
     * @param  {string} str Any string of text.
     * @return {string}     The rotated string, ready for use.
     */
    ROT47: function (str) {
      let newString = [];

      for (let i = 0; i < str.length; i++) {
        // a => 97
        let char = str.charCodeAt(i);
        // 97 => 50
        let newChar = this.ROT47CharCode(char);
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
  },
  created: function () {
    this.addr = this.ROT47('>@4]=:2>8oECF4=:(56C2y69%').replace('@', '<span class="hide">kitten</span>@');
  }
});
