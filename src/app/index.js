'use strict';

var blockitoff = angular.module('blockitoff', ['firebase', 'ngAnimate', 'ngCookies', 'ngTouch', 'ngSanitize', 'ui.router', 'ui.bootstrap' , 'ui.sortable'])

blockitoff.config(function ($stateProvider, $urlRouterProvider) {


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
      controller: 'todoCtrl'
    });
    $urlRouterProvider.otherwise('/');
    
  });


blockitoff.factory('simpleFactory', function(){
        var tabs = [
        'Do Homework',
        'Fix Car',
        'Call Grandpa',
        'Eat Dinner',
        'Write Code',
        'Do Good Stuff'
        ];

        var factory = {};
        factory.getTabs = function() {
          return tabs;
        }
        return factory;
    });

