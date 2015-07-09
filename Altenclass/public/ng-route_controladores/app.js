angular.module('myApp', ['ngRoute'])
 
.config(['$routeProvider', function ($routeProvider) {
$routeProvider
 .when('/', {
templateUrl: 'inicio.html',
controller: 'InicioCtrl',
 
 })
 .when('/perfil', {
templateUrl: 'perfil.html',
controller: 'PerfilCtrl',
 })
 .when('/mensajes', {
templateUrl: 'mensajes.html',
controller: 'MensajesCtrl',
 })
 .otherwise({
redirectTo: '/'
 });
}])