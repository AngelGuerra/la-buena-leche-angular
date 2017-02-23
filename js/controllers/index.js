(function () {
    'use strict';

    angular
        .module('laBuenaLeche')
        .controller('IndexController', index);

    function index(){
        var vm = this;

        vm.intervalo = 4000;
        vm.slides = [
            {
                id: 0,
                image: '/public/images/home/lg/home_01.jpg'
            },
            {
                id: 1,
                image: '/public/images/home/lg/home_02.jpg'
            }
        ];
    }
})();
