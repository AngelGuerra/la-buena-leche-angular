(function () {
    'use strict';

    angular
        .module('laBuenaLeche')
        .controller('IndexController', index);

    function index(){
        var vm = this;

        vm.intervalo = 4000;
        vm.slides = [
            {image: 'images/home/lg/home_01.jpg'},
            {image: 'images/home/lg/home_02.jpg'}
        ];
    }
})();
