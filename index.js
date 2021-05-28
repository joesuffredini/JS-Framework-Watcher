// const axios = require('axios');

// Make a request for a user with a given ID
axios.get('https://api.github.com/repos/vuejs/vue')
  .then(function (response) {
    forks = response.data.forks;
    watchers = response.data.watchers;
    stars = response.data.stargazers_count;
    console.log(response);
    console.log(forks, watchers, stars);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .then(function () {
    // always executed
  });
