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
                controllerAs: 'homeCtrl',
                ncyBreadcrumb: {
                    label: 'Inicio'
                }
            })
            .state('actividades', {
                abstract: true,
                url: '/actividades',
                templateUrl: 'templates/pages/actividades/index.html',
                ncyBreadcrumb: {
                    label: 'actividades'
                }
            })
            .state('actividades.calendario', {
                url: '/calendario',
                templateUrl: 'templates/pages/actividades/calendario/index.html',
                controller: 'ActividadesCalendarioIndexController',
                controllerAs: 'calendarioCtrl',
                ncyBreadcrumb: {
                    label: 'calendario'
                }
            })
            .state('actividades.encuentros', {
                url: '/encuentros',
                templateUrl: 'templates/pages/actividades/encuentros/index.html',
                ncyBreadcrumb: {
                    label: 'encuentros'
                }
            })
            .state('actividades.divulgativas', {
                url: '/divulgativas',
                templateUrl: 'templates/pages/actividades/divulgativas/index.html',
                controller: 'ActividadesDivulgativasIndexController',
                controllerAs: 'divulgativasCtrl',
                ncyBreadcrumb: {
                    label: 'actividades divulgativas'
                }
            })
            .state('actividades.ludicas', {
                url: '/ludicas',
                templateUrl: 'templates/pages/actividades/ludicas/index.html',
                ncyBreadcrumb: {
                    label: 'actividades lúdicas'
                }
            })
            .state('asociate', {
                url: '/asociate',
                templateUrl: 'templates/pages/asociate/index.html',
                controller: 'AsociateIndexController',
                controllerAs: 'asociateCtrl',
                ncyBreadcrumb: {
                    label: 'asóciate'
                }
            })
            .state('contacto', {
                url: '/contacta',
                templateUrl: 'templates/pages/contacto/index.html',
                controller: 'ContactoIndexController',
                controllerAs: 'contactoCtrl',
                ncyBreadcrumb: {
                    label: 'contacto'
                }
            })
            .state('informacion', {
                abstract: true,
                url: '/informacion',
                templateUrl: 'templates/pages/informacion/index.html'
            })
            .state('informacion.beneficios', {
                url: '/beneficios-de-la-lactancia',
                templateUrl: 'templates/pages/informacion/beneficios/index.html',
                ncyBreadcrumb: {
                    label: 'beneficios'
                }
            })
            .state('informacion.como-empezar', {
                url: '/como-empezar',
                templateUrl: 'templates/pages/informacion/como-empezar/index.html',
                ncyBreadcrumb: {
                    label: 'cómo empezar'
                }
            })
            .state('informacion.destete', {
                url: '/destete',
                templateUrl: 'templates/pages/informacion/destete/index.html',
                ncyBreadcrumb: {
                    label: 'destete'
                }
            })
            .state('informacion.extraccion-de-leche', {
                url: '/extraccion-de-leche',
                templateUrl: 'templates/pages/informacion/extraccion-de-leche/index.html',
                ncyBreadcrumb: {
                    label: 'extracción de leche'
                }
            })
            .state('informacion.grupos-de-apoyo', {
                url: '/grupos-de-apoyo',
                templateUrl: 'templates/pages/informacion/grupos-de-apoyo/index.html',
                ncyBreadcrumb: {
                    label: 'grupos de apoyo'
                }
            })
            .state('informacion.lactancia-y-trabajo', {
                url: '/lactancia-y-trabajo',
                templateUrl: 'templates/pages/informacion/lactancia-y-trabajo/index.html',
                ncyBreadcrumb: {
                    label: 'lactancia y trabajo'
                }
            })
            .state('informacion.otros-enlaces', {
                url: '/otros-enlaces',
                templateUrl: 'templates/pages/informacion/otros-enlaces/index.html',
                ncyBreadcrumb: {
                    label: 'otros enlaces'
                }
            })
            .state('informacion.problemas-y-soluciones', {
                url: '/problemas-y-soluciones',
                templateUrl: 'templates/pages/informacion/problemas-y-soluciones/index.html',
                ncyBreadcrumb: {
                    label: 'problemas y soluciones'
                }
            })
            .state('material', {
                abstract: true,
                url: '/material',
                templateUrl: 'templates/pages/material/index.html',
                ncyBreadcrumb: {
                    label: 'material'
                }
            })
            .state('material.extractores-de-leche', {
                url: '/extractores-de-leche',
                templateUrl: 'templates/pages/material/extractores-de-leche/index.html',
                ncyBreadcrumb: {
                    label: 'extractores de leche'
                }
            })
            .state('material.material-de-muestra', {
                url: '/material-de-muestra',
                templateUrl: 'templates/pages/material/material-de-muestra/index.html',
                ncyBreadcrumb: {
                    label: 'material de muestra'
                }
            })
            .state('material.prestamo-de-libros', {
                url: '/prestamo-de-libros',
                templateUrl: 'templates/pages/material/prestamo-de-libros/index.html',
                controller: 'PrestamoIndexController',
                controllerAs: 'prestamoCtrl',
                ncyBreadcrumb: {
                    label: 'préstamo de libros'
                }
            })
            .state('quienes-somos', {
                url: '/quienes-somos',
                templateUrl: 'templates/pages/quienes-somos/index.html',
                controller: 'QuienesSomosIndexController',
                controllerAs: 'quienesSomosCtrl',
                ncyBreadcrumb: {
                    label: 'quiénes somos'
                }
            }
        );
    }
})();