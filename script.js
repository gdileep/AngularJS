// Code goes here

angular.module('app', []);

angular.module('app').controller('mainCtrl', function($scope) {
  $scope.module1 = {
    name: 'IP',
    description: {
      owner: 'Dileep',
      team : 'Secret Rebel Base'},
    members: [
      'Dileep',
      'Prathap',
      'Harsha'
    ]
  }
  
  $scope.module2 = {
    name: 'OP',
    description: {
      owner: 'Prathap',
      team : 'Secret Communist Base'},
    members: [
      'Harish',
      'Digvijay',
      'Vamshi'
    ]
  }
});

angular.module('app').directive('moduleInfoCard', function() {
  return {
    templateUrl: "moduleInfoCard.html",
    restrict: "E",
    scope:{
          module:'=',
          initialCollapsed:'@collapsed'
    },
    controller: function($scope) {
      // $scope.collapsed = false;
      $scope.collapsed = ($scope.initialCollapsed==='true');
      $scope.chkStatus = function(module){
      $scope.module.status = 'Completed';
     }
     $scope.collapse =  function(){
       $scope.collapsed = !$scope.collapsed;
     }
    
    }
  }
});

angular.module('app').directive('removeFriend', function() {
  return {
    restrict: 'E',
    templateUrl: 'removeMember.html',
    controller: function($scope) {
      $scope.removing = false;
      $scope.startRemove = function() {
        $scope.removing = true;
      }
      $scope.cancelRemove = function() {
        $scope.removing = false;
      }
      $scope.removeMember = function(member) {
        var idx = $scope.module.members.indexOf(member);
        if(idx > -1) {
          $scope.module.members.splice(idx, 1);
        }
      }
    }
  }
})

angular.module('app').directive('description', function() {
  return {
    templateUrl: "description.html",
    restrict: "E",
    scope:true,
    controller: function($scope) {
      $scope.collapsed = false;
      $scope.collapseDescription = function(){
      $scope.collapsed = true;
     }
     $scope.expandDescription =  function(){
       $scope.collapsed = false;
     }
    }
  }
})







