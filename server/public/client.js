var app = angular.module('myApp', []);

app.controller('PoliticController', function($scope, $http){
  $scope.republicans=[];
  $scope.democrats=[];
  $scope.winner='';
  $scope.buttonClicked= false;
  $scope.winnerClicked=false;


  $http.get('/republicans').then(function(response){
    $scope.republicans = response.data;

    $scope.getCandidates = function(){
      $scope.buttonClicked=true;

      $scope.getWinner = function(){
        $scope.winnerClicked=true;

      };
    };
    $http.get('/winner').then(function(response){
      $scope.winner = response.data;
      console.log($scope.winner);
    });
  });

  $http.get('/democrats').then(function(response){
    $scope.democrats = response.data;

  });


});
