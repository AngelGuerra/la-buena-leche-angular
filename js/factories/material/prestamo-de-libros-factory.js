(function () {
    'use strict';

    angular
        .module('laBuenaLeche')
        .factory('PrestamoFactory', prestamoFactory);

    prestamoFactory.$inject = ['$http'];

    function prestamoFactory($http) {
        var factory = this;

        factory.getBooks = getBooks;

        function getBooks(){
            return $http.get('sources/json/libros.json')
                .then(function(data, status, headers, config){
                    return data.data.books;
                }
            );
        }

        return factory;
    }
})();