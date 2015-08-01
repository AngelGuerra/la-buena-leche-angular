(function () {
    'use strict';

    angular
        .module('laBuenaLeche')
        .controller('ContactoIndexController', index);

    index.$inject = ['correoLbl'];

    function index(correoLbl) {
        var vm = this;
        vm.email = correoLbl;
    }
})();
