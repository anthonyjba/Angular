angular.module('contadorApp', [])
.controller('counterController', function($scope) {
  $scope.base = 0;
  this.total = function total() {
    return $scope.base++;
    //  window.alert("Thanks!");
  };
  $scope.customer = {
    name: 'Naomi',
    address: '1600 Amphitheatre'
  };
 })

.directive('myCounter', function(){
    return{
        restrict : "E",
        template: '<p>Name: {{customer.name}} Address: {{customer.address}} contador: {{base}} </p>'
    }
});
