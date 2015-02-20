'use strict';

// ^^ It's meant to catch coding shenanigans it helps you make fewer errors by detecting more things
//that could lead your code to breaksuch as global variables that will throw an exception
//if you don't use the 'use strict', jS will allow it


angular.module('blockitoff')
.controller('todoCtrl', ["$scope", "$firebase", function ($scope, $firebase) {


  var tabsArray = [
  'Do Homework',
  'Fix Car',
  'Call Grandpa',
  'Eat Dinner',
  'Write Code',
  'Do Good Stuff'
  ];

    // $scope.tabs = {};

    $scope.toDoData = new Firebase("https://blockitoff.firebaseio.com/");


    $scope.add = function () {
      tabsArray.push($scope.tab);
      $scope.toDoData.push($scope.tab);
      $scope.tab = '';

    };
    $scope.delete = function (index) {
      $scope.tabsArray.splice(index, 1);

    };

    $scope.toDoData.on('value', function(data){
      $scope.tabsArray = data.val();
    });


    // $scope.remove = function(){
    //   setInterval(function () {
    //     $scope.tabs.splice(index, 1);
    //   }, 3000);
    // };

    // AFTER SEVEN DAYS DELETE
  }]);
