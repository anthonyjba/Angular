(function(angular) {
  'use strict';
angular.module('myApp', [])
  .controller('Controller', ['$scope', function($scope) {
    $scope.persona = {
      nombre: 'Charly',
      apellido: 'Chaplin'
    };
  }])
  .directive('myPersona', function() {
    return {
      templateUrl: function(elem, attr){
        return 'persona-'+attr.type+'.html';
      }
    };
  });
})(window.angular);