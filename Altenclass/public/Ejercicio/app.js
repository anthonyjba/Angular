var myApp = angular.module('myApp', []);

myApp.config(function ($routeProvider) {
  $routeProvider
    .when('/:deporte/:equipo/:jugador',
    {
      templateUrl: "app.html",
      controller: "AppCtrl"
    }
  )
});

myApp.controller("AppCtrl", function ($scope, $routeParams) {
  $scope.modelomensaje = {
      Deporte: $routeParams.deporte,
      Equipo: $routeParams.equipo,
      Jugador: $routeParams.jugador
  }
});