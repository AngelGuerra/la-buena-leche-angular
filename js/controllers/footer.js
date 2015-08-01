(function () {
    'use strict';

    angular
        .module('laBuenaLeche')
        .controller('FooterController', footer);

    function footer() {
        var vm = this;
        vm.year = new Date().getFullYear();
    }
})();
