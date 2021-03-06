// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers', 'starter.services', 'starter.config'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

// .run(function(DB){
//   DB.init();
// })

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider

    // setup an abstract state for the tabs directive
    .state('home', {
      url: "/home",
      // abstract: true,
      templateUrl: "templates/homePage.html"
    })

    // Each tab has its own nav history stack:

    .state('inscription', {
      url: '/inscription',
      templateUrl: 'templates/inscription.html',
      controller: 'InscriptionCtrl'
    })

    .state('connexion', {
      url: '/connexion',
      templateUrl: 'templates/connexion.html',
      controller: 'ConnexionCtrl'
    })

    .state('welcome', {
      url: '/welcome',
      templateUrl: 'templates/welcome.html',
      controller: 'WelcomeCtrl'
    })

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/home');
       // $httpProvider.defaults.useXDomain = true;
       //  $http.defaults.headers.common = 'Content-Type: application/json';
        // $httpProvider.defaults.headers.post["Content-Type"] = "application/x-www-form-urlencoded";
});

