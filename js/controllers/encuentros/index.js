(function () {
    'use strict';

    angular
        .module('laBuenaLeche')
        .controller('EncuentrosIndexController', index);

    function index(){
        angular.element('[data-toggle="tooltip"]').tooltip();
    }
})();