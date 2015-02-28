'use strict';

// ^^ It's meant to catch coding shenanigans it helps you make fewer errors by detecting more things
//that could lead your code to breaksuch as global variables that will throw an exception
//if you don't use the 'use strict', jS will allow it


angular.module('blockitoff')
.controller('todoCtrl', ["$scope", "$firebase", "$location", function ($scope, $firebase, $location) {

    // ----- Data ------
    var todos = [];
    var ref = new Firebase('https://blockitoff.firebaseio.com/todos');
    var sync = $firebase(ref);
    $scope.todos = sync.$asArray();

    $scope.statusFilter = {};

    if($location.path() == ''){
      $location.path('/')
    };
    $scope.location = $location;
    $scope.$watch('location.path()', function(path){
        $scope.statusFilter = 
          (path == '/') ? {done : false} : 
          (path == '/completed') ? {done : true} : 
          null;
    });

    // ----- ADD ------
    $scope.add = function (item) {
      $scope.todos.$add({text: item, done:false});
      $scope.tab = "";
    };
    
    // ----- DELETE ------
    $scope.delete = function (item) {
      $scope.todos.$remove(item);
    }




 
    // Completed 
    // AFTER SEVEN DAYS DELETE
  }]);
