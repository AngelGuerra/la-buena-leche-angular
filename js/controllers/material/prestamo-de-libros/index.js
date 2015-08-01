(function () {
    'use strict';

    angular
        .module('laBuenaLeche')
        .controller('PrestamoIndexController', index);

    index.$inject = ['PrestamoFactory'];

    function index(PrestamoFactory){
        var vm = this;
        vm.libros = [];

        PrestamoFactory
            .getBooks()
            .then(function(books){
                vm.libros = books;
            }
        );
    }
})();

