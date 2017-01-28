(function () {
    'use strict';

    angular
        .module('laBuenaLeche')
        .controller('FooterController', footer);

    footer.$inject = ['correoLbl'];

    function footer(correoLbl) {
        var vm = this;
        vm.year = new Date().getFullYear();
        vm.email = correoLbl;
    }
})();
