(function () {
    'use strict';

    angular
        .module('laBuenaLeche')
        .controller('HeaderController', header);

    header.$inject = ['$location', '$window'];
    function header($location, $window){
        var jQmenu = angular.element('#menu'),
            vm = this;

        vm.isActive = isActive;

        //Inicializo los tooltip del header
        angular.element('[data-toggle="tooltip"]').tooltip();

        //Colapso el menú cuando se hace click en un elemento en él que conduzca a una página, y la pantalla está en tamaño xs (<768px)
        jQmenu.find('a[href^="#/"]').on('click', function(){
            //Si es menor que el punto de ruptura xs...
            if($window.innerWidth < 768){
                jQmenu.collapse('toggle');
            }
        });

        //Devuelve true si la localización es la que le pasamos por parámetro
        //Permite dar la clase active a los links del header
        function isActive(viewLocation) {
            return viewLocation === $location.path();
        }
    }
})();
