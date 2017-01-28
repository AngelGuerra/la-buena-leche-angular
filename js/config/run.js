(function () {
    'use strict';

    angular
        .module('laBuenaLeche')
        .run(run);

    run.$inject = ['$location', '$rootScope', '$window'];

    function run($location, $rootScope, $window){
        // initialise google analytics
        $window.ga('create', 'UA-66444400-1', 'auto');

        // track pageview on state change
        $rootScope.$on('$stateChangeSuccess', function (event) {
            $window.ga('send', 'pageview', $location.path());
        });
    }
})();