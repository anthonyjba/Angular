sampleApp.controller('AddOrderController', function($scope, ordersModel) {
	
	$scope.message = 'This is Add new order screen';
    
    $scope.orders = ordersModel.getOrders();
    
    $scope.addOrden = function(){
        $scope.orders.data.push({
            id : $scope.orders.data.length + 1, 
            nombre : $scope.nombre,
            edad : $scope.edad,
            email : $scope.email,
            tel : $scope.tel
        });
        alert("Su nueva orden se ha guardado");
    }
	
});

sampleApp.controller("ShowOrdersController", function($scope, ordersModel){
 
    $scope.orders = ordersModel.getOrders();
 
});

sampleApp.controller('DetailOrderController', function($scope, $routeParams) {
	
	$scope.order_id = $routeParams.orderId;

});

sampleApp.directive('myOrder', function() {
    return {
      templateUrl: function(elem, attr){
        return 'persona-'+attr.type+'.html';
      }
    };
});