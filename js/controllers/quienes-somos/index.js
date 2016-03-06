(function () {
    'use strict';

    angular
        .module('laBuenaLeche')
        .controller('QuienesSomosIndexController', index);

    function index() {
        var vm = this;

        vm.intervalo = 4000;
        vm.slides = [
            {image: 'images/quienes-somos/lg/quienes_somos_1.jpg'},
            {image: 'images/quienes-somos/lg/quienes_somos_2.jpg'}
        ];
    }
})();

