'use strict';

// ^^ It's meant to catch coding shenanigans it helps you make fewer errors by detecting more things 
//that could lead your code to breaksuch as global variables that will throw an exception
//if you don't use the 'use strict', jS will allow it


angular.module('blockitoff')
  .controller('todoCtrl', ["$scope", "$firebase", function ($scope, $firebase) {
    $scope.tabs = [
      {
        'task': 'Do Homework',
      },
      {
        'task': 'Fix Car',
      },
      {
        'task': 'Call Grandpa',
      },
      {
        'task': 'Eat Dinner',
      },
      {
        'task': 'Write Code',
      },
      {
        'task': 'Do Good Stuff',
      }
    ];
  }]);
