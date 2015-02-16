'use strict';

// ^^ It's meant to catch coding shenanigans it helps you make fewer errors by detecting more things 
//that could lead your code to breaksuch as global variables that will throw an exception
//if you don't use the 'use strict', jS will allow it


angular.module('blockitoff')
  .controller('todoCtrl', ["$scope", "$firebase", function ($scope, $firebase) {
    $scope.tabs = [
        'Do Homework',
        'Fix Car',
        'Call Grandpa',
        'Eat Dinner',
        'Write Code',
        'Do Good Stuff'
    ];
      $scope.add = function () {
      $scope.tabs.push($scope.tab);
      $scope.tab = '';
    };
    $scope.delete = function (index) {
      $scope.tabs.splice(index, 1);

    };
  }]);
