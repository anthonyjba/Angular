//controlador llamado notasController al que inyectamos el modelo notasModel
Agenda.controller("notasController", function($scope, notasModel){
 
    //obtenemos todas las notas
    $scope.notas = notasModel.getNotas();
 
})