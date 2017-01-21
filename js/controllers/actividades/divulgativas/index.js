(function () {
    'use strict';

    angular
        .module('laBuenaLeche')
        .controller('ActividadesDivulgativasIndexController', index);

    index.$inject = ['DivulgativasFactory'];

    function index(DivulgativasFactory){
        var vm = this;

        vm.lemas = [];

        DivulgativasFactory
            .getSlogans()
            .then(function(slogans){
                vm.lemas = slogans;
            }
        );
    }
})();