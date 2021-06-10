
var apiurl1 = 'https://api.github.com/repos/vuejs/vue';
var apiurl2 = 'https://api.github.com/repos/angular/angular.js';
var apiurl3 = 'https://api.github.com/repos/emberjs/ember.js';
var apiurl4 = 'https://api.github.com/repos/sveltejs/svelte';
var apiurl5 = 'https://api.github.com/repos/facebook/react';

// define async function for getapi
async function getapi(url, string) {    
  // Storing response
  const response = await fetch(url);
  // Storing data in form of JSON
  data = await response.json();
  forks = data.forks;
  watchers = data.watchers;
  subs = data.subscribers_count;
  values = [forks, watchers, subs];
  console.log((values));
  if (string == "vuejs"){
  BuildVueChart(values, labels);}
  else if (string == "angjs")
  { BuildVueChart(values, labels);}
}

labels = ["VueForks ", "Vue Stars", "Vue Watchers"];
getapi(apiurl1, "vuejs");
labels = ["AngForks ", "Ang  Stars", "Ang Watchers"]
getapi(apiurl2, "angjs");

// getapi(apiurl2);
// getapi(apiurl3);
// getapi(apiurl4);
// var values = getapi(apiurl5);
// console.log((values));
// BuildChart(values, labels);



// axios.get('https://api.github.com/repos/vuejs/vue')
//   .then(function (response) {
//     vueforks = response.data.forks;
//     vuewatchers = response.data.watchers;
//     vuestars = response.data.stargazers_count;
//     data = [vuestars, vuestars, vuewatchers, vuewatchers, vueforks, vueforks];
//     labels = ["Vue Stars", "Anguler Stars", "Vue Watchers", "Angular Watchers","Vue Forks", "Angular Forks"];
//     values = data;
//     chart = BuildChart(labels, values, "JS Framework");
//   })
//   .catch(function (error) {
//     // handle error
//     console.log(error);
//   })
//   .then(function () {
//     // always executed
//   });

      
// axios request for angular
// axios.get('https://api.github.com/repos/angular/angular.js')
//   .then(function (response) {
//     angforks = response.data.forks;
//     angwatchers = response.data.watchers;
//     angstars = response.data.stargazers_count;
//     data = [angforks, angwatchers, angstars];
//   })
//   .catch(function (error) {
//     // handle error
//     console.log(error);
//   })
//   .then(function () {
//     // always executed
//   });

  // axios request for ember
  // axios.get('https://api.github.com/repos/emberjs/ember.js')
  // .then(function (response) {
  //   emberforks = response.data.forks;
  //   emberwatchers = response.data.watchers;
  //   emberstars = response.data.stargazers_count;
  //   console.log(response);
  //   console.log(emberforks, emberwatchers, emberstars);
  // })
  // .catch(function (error) {
  //   // handle error
  //   console.log(error);
  // })
  // .then(function () {
  //   // always executed
  // });

  // axios request for svelte
  // axios.get('https://api.github.com/repos/sveltejs/svelte')
  // .then(function (response) {
  //   svelteforks = response.data.forks;
  //   sveltewatchers = response.data.watchers;
  //   sveltestars = response.data.stargazers_count;
  //   console.log(response);
  //   console.log(svelteforks, sveltewatchers, sveltestars);
  // })
  // .catch(function (error) {
  //   // handle error
  //   console.log(error);
  // })
  // .then(function () {
  //   // always executed
  // });

 // axios request for facebook
//  axios.get('https://api.github.com/repos/facebook/react')
//   .then(function (response) {
//     fbforks = response.data.forks;
//     fbwatchers = response.data.watchers;
//     fbstars = response.data.stargazers_count;
//     console.log(response);
//     console.log(fbforks, fbwatchers, fbstars);
//   })
//   .catch(function (error) {
//     // handle error
//     console.log(error);
//   })
//   .then(function () {
//     // always executed
//   }); 

  function BuildVueChart(values) {
  var ctx = document.getElementById("myChart").getContext("2d");
      var myChart = new Chart(ctx, {
        type: "bar",
        data: {
          labels: labels,
          datasets: [
            {
              label: "Vue JS Framework",
              data: values,
              backgroundColor: [
                "rgba(255, 99, 132, 0.2)",
                "rgba(255, 99, 132, 0.2)",
                "rgba(54, 162, 235, 0.2)",
                "rgba(54, 162, 235, 0.2)",
                "rgba(255, 206, 86, 0.2)",
                "rgba(255, 206, 86, 0.2)",
                "rgba(75, 192, 192, 0.2)",
                "rgba(75, 192, 192, 0.2)",
                // "rgba(153, 102, 255, 0.2)",
                // "rgba(255, 159, 64, 0.2)",
              ],
              borderColor: [
                "rgba(255, 99, 132, 1)",
                "rgba(54, 162, 235, 1)",
                "rgba(255, 206, 86, 1)",
                "rgba(75, 192, 192, 1)",
                // "rgba(153, 102, 255, 1)",
                // "rgba(255, 159, 64, 1)",
              ],
              borderWidth: 1,
            },
          ],
        },
        options: {
          scales: {
            y: {
              beginAtZero: true,
            },
          },
        },
      });
      return myChart;
    }

    