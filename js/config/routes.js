(function () {
    'use strict';

    angular
        .module('laBuenaLeche')
        .config(routes);

    routes.$inject = ['$stateProvider', '$urlRouterProvider'];

    function routes($stateProvider, $urlRouterProvider){

        // For any unmatched url, redirect to /state1
        $urlRouterProvider.otherwise("/home");
        //
        // Now set up the states
        $stateProvider
            .state('home', {
                url: '/home',
                templateUrl: 'templates/pages/index.html',
                controller: 'IndexController',
                controllerAs: 'homeCtrl'
            })
            .state('actividades', {
                url: '/actividades',
                templateUrl: 'templates/pages/actividades/index.html'
            })
            .state('actividades.calendario', {
                url: '/calendario',
                templateUrl: 'templates/pages/actividades/calendario/index.html',
                controller: 'ActividadesCalendarioIndexController',
                controllerAs: 'calendarioCtrl'
            })
            .state('actividades.encuentros', {
                url: '/encuentros',
                templateUrl: 'templates/pages/actividades/encuentros/index.html'
            })
            .state('actividades.divulgativas', {
                url: '/divulgativas',
                templateUrl: 'templates/pages/actividades/divulgativas/index.html',
                controller: 'ActividadesDivulgativasIndexController',
                controllerAs: 'divulgativasCtrl'
            })
            .state('actividades.ludicas', {
                url: '/ludicas',
                templateUrl: 'templates/pages/actividades/ludicas/index.html'
            })
            .state('asociate', {
                url: '/asociate',
                templateUrl: 'templates/pages/asociate/index.html',
                controller: 'AsociateIndexController',
                controllerAs: 'asociateCtrl'
            })
            .state('contacto', {
                url: '/contacta',
                templateUrl: 'templates/pages/contacto/index.html',
                controller: 'ContactoIndexController',
                controllerAs: 'contactoCtrl'
            })
            .state('informacion', {
                url: '/informacion',
                templateUrl: 'templates/pages/informacion/index.html'
            })
            .state('informacion.beneficios', {
                url: '/beneficios-de-la-lactancia',
                templateUrl: 'templates/pages/informacion/beneficios/index.html'
            })
            .state('informacion.como-empezar', {
                url: '/como-empezar',
                templateUrl: 'templates/pages/informacion/como-empezar/index.html'
            })
            .state('informacion.destete', {
                url: '/destete',
                templateUrl: 'templates/pages/informacion/destete/index.html'
            })
            .state('informacion.extraccion-de-leche', {
                url: '/extraccion-de-leche',
                templateUrl: 'templates/pages/informacion/extraccion-de-leche/index.html'
            })
            .state('informacion.grupos-de-apoyo', {
                url: '/grupos-de-apoyo',
                templateUrl: 'templates/pages/informacion/grupos-de-apoyo/index.html'
            })
            .state('informacion.lactancia-y-trabajo', {
                url: '/lactancia-y-trabajo',
                templateUrl: 'templates/pages/informacion/lactancia-y-trabajo/index.html'
            })
            .state('informacion.otros-enlaces', {
                url: '/otros-enlaces',
                templateUrl: 'templates/pages/informacion/otros-enlaces/index.html'
            })
            .state('informacion.problemas-y-soluciones', {
                url: '/problemas-y-soluciones',
                templateUrl: 'templates/pages/informacion/problemas-y-soluciones/index.html'
            })
            .state('material', {
                url: '/material',
                templateUrl: 'templates/pages/material/index.html'
            })
            .state('material.extractores-de-leche', {
                url: '/extractores-de-leche',
                templateUrl: 'templates/pages/material/extractores-de-leche/index.html'
            })
            .state('material.material-de-muestra', {
                url: '/material-de-muestra',
                templateUrl: 'templates/pages/material/material-de-muestra/index.html'
            })
            .state('material.prestamo-de-libros', {
                url: '/prestamo-de-libros',
                templateUrl: 'templates/pages/material/prestamo-de-libros/index.html',
                controller: 'PrestamoIndexController',
                controllerAs: 'prestamoCtrl'
            })
            .state('quienes-somos', {
                url: '/quienes-somos',
                templateUrl: 'templates/pages/quienes-somos/index.html',
                controller: 'QuienesSomosIndexController',
                controllerAs: 'quienesSomosCtrl'
            });
    }
    /*function routes($routeProvider) {
        $routeProvider
            .when("/", {
                redirectTo: "/home"
            }).when("/home", {
                templateUrl: "templates/pages/index.html",
                controller: "IndexController",
                controllerAs: 'homeCtrl'
            }).when("/quienes-somos", {
                templateUrl: "templates/pages/quienes-somos/index.html",
                controller: "QuienesSomosIndexController"
            }).when("/actividades/:name", {
                templateUrl: "templates/pages/actividades/index.html",
                controller: "ActividadesIndexController",
                controllerAs: 'actividadesCtrl'
            }).when("/material/:name", {
                templateUrl: "templates/pages/material/index.html",
                controller: "MaterialIndexController"
            }).when("/informacion/:name", {
                templateUrl: "templates/pages/informacion/index.html",
                controller: "InformacionIndexController"
            }).when("/eventos", {
                templateUrl: "templates/pages/eventos/index.html"
            }).when("/asociate", {
                templateUrl: "templates/pages/asociate/index.html",
                controller: "AsociateIndexController"
            }).when("/contacta", {
                templateUrl: "templates/pages/contacto/index.html",
                controller: "ContactoIndexController"
            }).otherwise({
                redirectTo: "/home"
            }
        );
    }*/
})();