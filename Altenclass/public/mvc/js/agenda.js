var configAgenda = function($routeProvider,$locationProvider){
 
    $routeProvider.when("/home", {
        controller: "notasController",
        templateUrl: "views/home.html"
    });
 
    // use the HTML5 History API
    $locationProvider.html5Mode(true);
}
 
//creamos el modulo y le aplicamos la configuración
var Agenda = angular.module("Agenda", ["ngRoute"]).config(configAgenda);
