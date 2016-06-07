v  var MyCvApp = angular.module('MyCvApp', ['ngRoute', 'ui.bootstrap', 'uiGmapgoogle-maps']);


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
          image: './Content/2.jpg'
      },
      {
          image: './Content/1.jpg'
      },
      {
          image: './Content/2.jpg'
      },
      {
          image: './Content/1.jpg'
      }
    ];
});

MyCvApp.controller('resumeController', function ($scope) {
    $scope.message = 'Look! I am an about page.';
});

MyCvApp.controller('contactController', function ($scope) {

  $scope.map = { center: { latitude: 17.355574942128815,  longitude: 78.5382288694381745 }, zoom: 12 ,
markers: [{
                   
                    latitude: 17.355574942128815,
                    longitude: 78.5382288694381745 ,
                    title: 'Srikanth'
                }]

 };
});
MyCvApp.controller('projectsController', function ($scope) {
    $scope.message = 'sfdsf';
});
