var MyCvApp = angular.module('MyCvApp', ['ngRoute', 'ui.bootstrap', 'uiGmapgoogle-maps']);


MyCvApp.config(function ($routeProvider, uiGmapGoogleMapApiProvider) {
    uiGmapGoogleMapApiProvider.configure({
        v: '3.18'
    });
    $routeProvider

       
        .when('/', {
            templateUrl: './home.html',
            controller: 'mainController'
        })

       
        .when('/resume', {
            templateUrl: './resume.html',
            controller: 'resumeController'
        })        
        .when('/contact', {
            templateUrl: './contact.html',
            controller: 'contactController'
        })
         .when('/projects', {
             templateUrl: './projects.html',
             controller: 'projectsController'
         })
        .otherwise({
            templateUrl: 'Home/_Main',
            controller: 'mainController'

        });
});


MyCvApp.controller('mainController', function ($scope) {

    $scope.myInterval = 3000;
    $scope.slides = [
      {
          image: 'http://lorempixel.com/400/200/'
      },
      {
          image: 'http://lorempixel.com/400/200/food'
      },
      {
          image: 'http://lorempixel.com/400/200/sports'
      },
      {
          image: 'http://lorempixel.com/400/200/people'
      }
    ];
});

MyCvApp.controller('resumeController', function ($scope) {
    $scope.message = 'Look! I am an about page.';
});

MyCvApp.controller('contactController', function ($scope) {

  $scope.map = { center: { latitude: 45, longitude: -73 }, zoom: 8 };
});

MyCvApp.controller('projectsController', function ($scope) {
    $scope.message = 'sfdsf';
});