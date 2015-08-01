(function () {
    'use strict';

    angular
        .module('laBuenaLeche')
        .controller('AsociateIndexController', index);

    index.$inject = ['correoLbl'];

    function index(correoLbl) {
        var vm = this;
        vm.email = correoLbl;
    }
})();
