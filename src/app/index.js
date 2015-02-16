'use strict';

angular.module('blockitoff', ['firebase', 'ngAnimate', 'ngCookies', 'ngTouch', 'ngSanitize', 'ui.router', 'ui.bootstrap' , 'ui.sortable'])
  .config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'app/todo/todo.html',
        controller: 'todoCtrl'
      });
    $stateProvider
    .state('completed', {
      url: '/completed',
      templateUrl: 'app/todo/completed.html',
    });

    $urlRouterProvider.otherwise('/');
  })
;
