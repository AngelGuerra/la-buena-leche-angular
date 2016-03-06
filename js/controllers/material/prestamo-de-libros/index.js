(function () {
    'use strict';

    angular
        .module('laBuenaLeche')
        .controller('PrestamoIndexController', index);

    index.$inject = ['$modal', 'PrestamoFactory'];

    function index($modal, PrestamoFactory){
        var vm = this;
        vm.libros = [];
        vm.open = open;

        PrestamoFactory
            .getBooks()
            .then(function(books){
                vm.libros = books;
            }
        );

        function open(book) {
            if (book.desc == '') return false;

            var modalInstance = $modal.open({
                    animation: true,
                    templateUrl: 'templates/pages/material/prestamo-de-libros/_book_details.html',
                    controller: 'bookDetailsController',
                    controllerAs: 'bookDetails',
                    size: 'lg',
                    resolve: {
                        book: function() {
                            return book;
                        }
                    }
                }
            );
        }
    }
})();

