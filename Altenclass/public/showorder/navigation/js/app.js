
var configSampleApp = function($routeProvider,$locationProvider) {
    
      $routeProvider.
          when('/AddNewOrder', {
            templateUrl: 'views/add_order.html',
            controller: 'AddOrderController'
          }).
          when('/ShowOrders', {
            templateUrl: 'views/show_orders.html',
            controller: 'ShowOrdersController'
          }).
          when('/DetailOrder/:orderId', {
            templateUrl: 'views/detail_order.html',
            controller: 'DetailOrderController'
          }).
          otherwise({
            redirectTo: '/AddNewOrder'
        });
      
    // use the HTML5 History API
    $locationProvider.html5Mode(true);
}


var sampleApp = angular.module('ordersModel', ['ngRoute']).config(configSampleApp);

/*
sampleApp.config(['$routeProvider',
                  
  function($routeProvider,$locationProvider) {
    
      $routeProvider.
          when('/AddNewOrder', {
            templateUrl: 'views/add_order.html',
            controller: 'AddOrderController'
          }).
          when('/ShowOrders', {
            templateUrl: 'views/show_orders.html',
            controller: 'ShowOrdersController'
          }).
          otherwise({
            redirectTo: '/AddNewOrder'
        });
      
    // use the HTML5 History API
    $locationProvider.html5Mode(true);
}]);
*/


/*
sampleApp.controller('AddOrderController', function($scope) {
	
	$scope.message = 'This is Add new order screen';
	
});
*/


//sampleApp.controller('ShowOrdersController', function($scope) {
//
//	$scope.message = 'This is Show orders screen';
//
//});
