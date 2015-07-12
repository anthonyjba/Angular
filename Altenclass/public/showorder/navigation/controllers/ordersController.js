sampleApp.controller('AddOrderController', function($scope) {
	
	$scope.message = 'This is Add new order screen';
	
});

sampleApp.controller("ShowOrdersController", function($scope, ordersModel){
 
    //obtenemos todas las notas
    $scope.orders = ordersModel.getOrders();
 
});


sampleApp.controller('DetailOrderController', function($scope, $routeParams) {

	
	$scope.order_id = $routeParams.orderId;

});
