'use strict';

// ^^ It's meant to catch coding shenanigans it helps you make fewer errors by detecting more things
//that could lead your code to breaksuch as global variables that will throw an exception
//if you don't use the 'use strict', jS will allow it








angular.module('blockitoff')
.controller('todoCtrl', ["$scope", "$firebase", "$location", "$timeout", function ($scope, $firebase, $location, $timeout) {

    // As a user, I want my tasks synced with a persistent backend.
    var todos = [];
    var ref = new Firebase('https://blockitoff.firebaseio.com/todos');
    var sync = $firebase(ref);
    $scope.todos = sync.$asArray();

  

    // As a user, I want to see my active tasks in a list as my default view. [DONE]
    // As a user, I want to view expired and completed tasks in a view separate from my active tasks. [DONE]
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

    // As a user, I want to mark tasks complete. 
    $scope.markComplete = function(){
      console.log("DONE");
      sync.child('done').set('true');
    }

    // As a user, I want to submit new tasks with a description, priority level and three states: expired, completed or active.
    $scope.add = function (item) {
      $scope.todos.$add({text: item, done:false});
      $scope.tab = "";
      var timeout = $timeout(function(){
      console.log("REMOVE TASK");
      }, 5000);
    };
    
    // As a user, I want to hide completed tasks [DONE]
    $scope.delete = function (item) {
      $scope.todos.$remove(item);
    }

       // ----- Priority ------
    $scope.priority = function (item) {
      // $(this).parent().css('border-left','5px solid orange');
      // What is the best way to use JQlite within a controller?
    }

    
   //tasks older than seven days from my main task views automatically


    // Once task is added start timer
    // once timer reaches seven days remove task to expired 

  }]);
