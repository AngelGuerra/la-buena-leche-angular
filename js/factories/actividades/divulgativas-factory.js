(function () {
    'use strict';

    angular
        .module('laBuenaLeche')
        .factory('DivulgativasFactory', divulgativasFactory);

    divulgativasFactory.$inject = ['$http'];

    function divulgativasFactory($http) {
        var factory = this;

        factory.getSlogans = getSlogans;

        function getSlogans(){
            return $http.get('sources/json/lemas.json')
                .then(function(data, status, headers, config){
                    return data.data.slogans;
                }
            );
        }

        return factory;
    }
})();