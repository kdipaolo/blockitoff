'use strict';

var blockitoff = angular.module('blockitoff', ['firebase', 'ngAnimate', 'ngCookies', 'ngTouch', 'ngSanitize', 'ui.router', 'ui.bootstrap'])

blockitoff.config(function ($stateProvider, $urlRouterProvider) {


    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'app/todo/todo.html',
        controller: 'TodoCtrl'
      });
    $stateProvider
    .state('completed', {
      url: '/completed',
      templateUrl: 'app/todo/todo.html',
      controller: 'TodoCtrl'
    });
    $urlRouterProvider.otherwise('/');

  });


blockitoff.filter('todoFilter', function ($location) {
  return function (input) {
    var filtered = {};
    angular.forEach(input, function (todo, id) {
      var path = $location.path();
      if (path === '/active') {
        if (!todo.completed) {
          filtered[id] = todo;
        }
      } else if (path === '/completed') {
        if (todo.completed) {
          filtered[id] = todo;
        }
      } else {
        filtered[id] = todo;
      }
    });
    return filtered;
  };
});


