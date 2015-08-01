(function () {
    'use strict';

    angular
        .module('laBuenaLeche')
        .controller('ActividadesCalendarioIndexController', index);

    index.$inject = ['$window', 'CalendarioFactory', 'moment'];

    function index($window, CalendarioFactory, moment){
        var vm = this;

        vm.calendarDay = new Date(); //Fecha actual
        vm.calendarView = 'month'; //Vista
        vm.events = []; //Eventos
        vm.viewTime = viewTime;

        moment.locale('es', {
            week : {
                dow : 1 // Para que lunes sea el primer día de la semana
            }
        });

        //Relleno los eventos
        CalendarioFactory
            .getEvents()
            .then(function(events){
                vm.events = events;
            }
        );

        /*
         Solo dejo que se vea la vista de horas si está en vista xs, no hago más comprobaciones
         porque si es un ordenador, que redimensione la ventana
         */
        function viewTime(){
            //Si es menor que el punto de ruptura xs...
            if($window.innerWidth < 768) return false;
        }


        // $scope.events = [
        //   {
        //     title: 'Encuentro Solares', // The title of the event
        //     type: 'info', // The type of the event (determines its color). Can be important, warning, info, inverse, success or special
        //     startsAt: moment().startOf('month').weekday(7).add(17.5, 'hours').toDate(), // A javascript date object for when the event starts
        //     endsAt: moment().startOf('month').weekday(7).add(19, 'hours').toDate(), // A javascript date object for when the event ends
        //     editable: false, // If edit-event-html is set and this field is explicitly set to false then dont make it editable
        //     deletable: false, // If delete-event-html is set and this field is explicitly set to false then dont make it deleteable
        //     incrementsBadgeTotal: true //If set to false then will not count towards the badge total amount on the month and year view
        //   }
        // ];

    }
})();