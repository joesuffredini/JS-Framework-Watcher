
// var data = [];

const api_url1 = 'https://api.github.com/repos/vuejs/vue'
const api_url2 = 'https://api.github.com/repos/angular/angular.js'
const api_url3 = 'https://api.github.com/repos/emberjs/ember.js'
const api_url4 = 'https://api.github.com/repos/sveltejs/svelte'
const api_url5 = 'https://api.github.com/repos/facebook/react'


// define async function for getapi
async function getapi(url) {
    
  // Storing response
  const response = await fetch(url);
  // Storing data in form of JSON
  var data = await response.json();
  // console.log((data));
  forks = data.forks;
  watchers = data.watchers;
  subs = data.subscribers_count;
  values = [forks, watchers, subs];
  labels = ["VueForks ", "Anguler Stars", "Vue Watchers", "Angular Watchers","Vue Forks", "Angular Forks"];
}

labels = ["VueForks ", "Anguler Stars", "Vue Watchers", "Angular Watchers","Vue Forks", "Angular Forks"];
var urls = [api_url1, api_url2]
var values = [];
urls.forEach(function(url){
  var data = getapi(url); 
  console.log((data)); 
  values.push(data);
  console.log((values));
});

BuildChart(values, labels);


// var values = getapi(api_url1);
// console.log((values))
// getapi(api_url2);
// getapi(api_url3);
// getapi(api_url4);
// getapi(api_url5);
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

  function BuildChart(values) {
  var ctx = document.getElementById("myChart").getContext("2d");
      var myChart = new Chart(ctx, {
        type: "bar",
        data: {
          labels: labels,
          datasets: [
            {
              label: "JS Framework",
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
