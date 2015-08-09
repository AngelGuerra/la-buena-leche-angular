(function () {
    'use strict';

    angular
        .module('laBuenaLeche')
        .controller('HeaderController', header);

    header.$inject = ['$rootScope', '$window'];
    function header($rootScope, $window){
        var jQmenu = angular.element('#menu');

        //Inicializo los tooltip del header
        angular.element('[data-toggle="tooltip"]').tooltip();

        $rootScope
            .$on('$stateChangeSuccess',
            function(event, toState, toParams, fromState, fromParams){
                var toActive = jQmenu.find('a[ui-sref="' + toState.name + '"]');
                jQmenu.find('.active').removeClass('active');
                toActive.addClass('active');
                toActive.parents('ul.dropdown-menu').prev().addClass('active');
            }
        );

        //Colapso el menú cuando se hace click en un elemento en él que conduzca a una página, y la pantalla está en tamaño xs (<768px)
        jQmenu.find('a[ui-sref]').on('click', function(){
            //Si es menor que el punto de ruptura xs...
            if($window.innerWidth < 768){
                jQmenu.collapse('toggle');
            }
        });
    }
})();
