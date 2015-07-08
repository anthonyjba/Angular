var myApp = angular.module('myApp', []);

//Service
myApp.service('helloWorldFromService', function() {
    this.sayHello = function() {
        return "Hola, Service!"
    };
});

//Factory
myApp.factory('helloWorldFromFactory', function() {
    return {
        sayHello: function() {
            return "Hola, Factory!"
        }
    };
});
    
//Provider + Conf 
myApp.provider('helloWorld', function() {

    this.name = 'Default';

    this.$get = function() {
        var name = this.name;
        return {
            sayHello: function() {
                return "Hola, " + name + "!"
            }
        }
    };

    this.setName = function(name) {
        this.name = name;
    };
});

// Provider + parameter
myApp.provider('helloTo', function() {
     this.$get = function() {
        return {
            sayHelloTo: function(name) {
                return "Hola, " + name + "!"
            }
        }
    };
});


//Conf           
myApp.config(function(helloWorldProvider){
    helloWorldProvider.setName('Provider');
});
        

function MyCtrl($scope, helloWorld,helloTo,helloWorldFromFactory, helloWorldFromService) {

    $scope.hello1 = helloWorld.sayHello();
    $scope.hello2 = helloTo.sayHelloTo('Clase de AngularJS');
    $scope.hello3 = helloWorldFromFactory.sayHello();
    $scope.hello4 = helloWorldFromService.sayHello();
        
}