(function(angular) {
    
    //este elemento 'use strict' es el modo estricto y es una nueva característica de ECMAScript 5 (mas conocido como JavaScript) que permite a un programa, o función, operar en un contexto de operaciones "estricto". Esto previene ciertas acciones y lanza mas excepciones.
    //Se puede usar para todo el archivo, como en este caso, o en determinadas partes o funciones.
    //Atrapa muchos errores comunes de programación, lanzando excepciones.
//Previene, lanzando excepciones, que acciones relativamente inseguras sean llevadas a cabo, como obtener acceso al objeto global.
//Deshabilita algunas características que son confusas o que no son recomendables.
//Ejemplo: Si usas foo = "bar" sin definir foo primero, tu código va a fallar.
  'use strict';
angular.module('myApp', [])
  .controller('Controller', ['$scope', function($scope) {
    $scope.list1 = {
      nombre: 'nombre1',
      direccion: 'dirección 1'
    },
      $scope.list2 = {
      nombre: 'Nombre2',
      direccion: 'dirección 2'
    };
  }])

//a continuación creamos la directiva que no hace más que reemplazar el contenido de la misma por una template que creamos dentro de la directiva.

//myList será nuestar directiva my-list en el modelo HTML
  .directive('myList', function() {
    return {
      template: 'Nombre: {{list1.nombre}} Dirección: {{list1.direccion}}'+
        'Nombre: {{list2.nombre}} Dirección: {{list2.direccion}}'
    };
  });
})(window.angular);

// podríamos decir que es algo parecido a las directivas ya esxistentes ngInclude o templateUrl