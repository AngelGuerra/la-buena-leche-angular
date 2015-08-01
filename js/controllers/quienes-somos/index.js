(function () {
    'use strict';

    angular
        .module('laBuenaLeche')
        .controller('QuienesSomosIndexController', index);

    function index() {
        var vm = this;

        vm.intervalo = 4000;
        vm.slides = [
            {image: 'images/quienes-somos/lg/grupo_01.jpg'},
            {image: 'images/quienes-somos/lg/grupo_02.jpg'},
            {image: 'images/quienes-somos/lg/grupo_03.jpg'}
        ];
    }
})();

