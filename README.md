Angular
=======
Proyectos en Angular

Console Emulator
================
cmder (http://cmder.net/)

Pasos del configurar un app Angular
===================================
* npm -install -g express-generator

* express "nombre_carpeta"

* cd "nombre_carpeta"

* npm install

* npm start

Services
======== 
Recoger tal cual los datos del Json (se puede usar entre controladores) funcion que devuelve algo

Factory
=======
Tratar previamente los datos del Json (Devuelve una funcion, similar al provider en Get)

$rootScope
==========
* $parent --> permite acceder al scope padre (acceso jerarquico)

* $Route url ":/mensaje" (variable de tipo parametro)

* Tips: para poder eliminar el "#" de la url, usaremos $locationProvider

Directives
==========
restrict: 
- Elemento (E): <my-directive></my-directive>
- Atributo (A):  <span my-directive="algo"></span>
- Clase (C):  
- Comentario (M): <!-- directive: my-directive algo -->

Directivas propias --> "busqueda"
  "@": (directional) el valor que se le asigna a la directiva con {{texto}}
  "=": No necesita asignarle con doble llames =texto
  "&": Acceder a padres del atributo   

Ejemplo:
myApp.directive('counter', function(){
  return{
	restrict : "E",
	template: '<p>{{counter}}</p>'
  }
})


Filters
=======
- ascendente  : order by nombre  
- descendente : order by -nombre

$scope:

module.filter("maxlength", function)={

  return function(text,max){

    if(text!=null){

	   if(text.length > max)

	     return text.substring(0,max) + "...";

    }

  }

}

INSTALACION
===========

* Ruta donde se instala los modules npm globales:

  C:\Users\Usuario\AppData\Roaming\npm\node_modules

GIT
===
- npm install git
- npm intall git-cli

GRUNT
=====
- npm install -g grunt --save-dev
- grunt --version

Desde el directorio creado ejecutar:
- npm install --save -dev
- grunt --force

BOWER
=====
- npm install -g bower
- npm update -g bower
- bower install angular
- bower install angular-route
- bower install angular-bootstrap

YEOMAN
======
- npm install -g yo
- npm install -g generator-angular
- mkdir yo && cd yo
- escribir dentro del directorio: yo -->(Angular o karma)
- configurar paso a paso
- grunt serve (Para poder ejecutar el servidor)



Tareas:
======
email del formador: pablotnez@gmail.com

Modulo showorder:
-crear un input buscar select para 
-crear una directiva propia
-nombre
-email
-telefono
-guardar

¿Preguntas?
===========
¿Cuando quiero tener 2 ng-views, que hacer?
