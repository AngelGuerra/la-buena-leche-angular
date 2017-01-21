(function () {
    'use strict';

    angular
        .module('laBuenaLeche')
        .controller('bookDetailsController', bookDetails);

    bookDetails.$inject = ['$uibModalInstance', 'book'];

    function bookDetails ($uibModalInstance, book) {
        var vm = this;
        vm.book = book;
        vm.dismiss = dismiss;

        function dismiss() {
            $uibModalInstance.dismiss('cancel');
        }
    }
})();

