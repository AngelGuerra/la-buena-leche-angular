(function () {
    'use strict';

    angular
        .module('laBuenaLeche')
        .factory('CalendarioFactory', calendarioFactory);

    calendarioFactory.$inject = ['$http'];

    function calendarioFactory($http) {
        var factory = this;

        factory.getEvents = getEvents;

        function getEvents(){
            return $http
                .get('sources/json/calendario.json')
                .then(function(data, status, headers, config){
                    return data.data.events;
                }
            );
        }

        return factory;
    }
})();