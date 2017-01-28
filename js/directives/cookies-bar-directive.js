(function () {
    'use strict';

    angular
        .module('laBuenaLeche')
        .directive('cookiesBarDirective', cookiesBarDirective);

    cookiesBarDirective.$inject = ['$compile', '$cookies', '$document'];

    function cookiesBarDirective($compile, $cookies, $document){
        return {
            restrict: 'E',
            link: function(scope, element, attrs) {
                if ($cookies.get('lbl-cookie') === undefined) {
                    var template = '<div id="cookies-bar" class="alert alert-cookies"><p>';
                    template += 'Utilizamos cookies propias y de terceros para obtener datos estadísticos de la navegación de nuestros usuarios y ';
                    template += 'mejorar nuestros servicios. Si acepta o continúa navegando, consideramos que acepta su uso. ';
                    template += 'Puede obtener más información <a ui-sref="cookies">aquí</a>.</p>';
                    template += '<button class="agree btn btn-lbl pull-right">Aceptar</button>';
                    template += '</div>'; 
                     var $template = angular.element(template);
                    $compile($template)(scope);
                    element.append($template);
                    $document.on('click', '.agree', agree);
                }

                function agree() {
                    $cookies.put('lbl-cookie', 'cookiesOk', {expires: moment().add(1, 'month')._d});
                    $document.find('#cookies-bar').remove();
                }
            }
        };
    }
})();