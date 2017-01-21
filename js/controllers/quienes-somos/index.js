(function () {
    'use strict';

    angular
        .module('laBuenaLeche')
        .controller('QuienesSomosIndexController', index);

    function index() {
        var vm = this;

        vm.intervalo = 4000;
        vm.slides = [
            {
                id: 0,
                image: 'images/quienes-somos/lg/quienes_somos_1.jpg'
            },
            {
                id: 1,
                image: 'images/quienes-somos/lg/quienes_somos_2.jpg'
            }
        ];
    }
})();

