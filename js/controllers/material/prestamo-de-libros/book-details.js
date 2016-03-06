(function () {
    'use strict';

    angular
        .module('laBuenaLeche')
        .controller('bookDetailsController', bookDetails);

    bookDetails.$inject = ['$modalInstance', 'book'];

    function bookDetails ($modalInstance, book) {
        var vm = this;
        vm.book = book;
        vm.dismiss = dismiss;

        function dismiss() {
            $modalInstance.dismiss('cancel');
        }
    }
})();

