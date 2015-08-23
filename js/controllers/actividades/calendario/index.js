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
                angular.forEach(events, function(event){
                    event.startsAt = moment(event.startsAt);
                    event.endsAt = moment(event.endsAt);
                });
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

        //$scope.events = [
        //    {
        //        title: 'My event title', // The title of the event
        //        type: 'info', // The type of the event (determines its color). Can be important, warning, info, inverse, success or special
        //        startsAt: new Date(2013,5,1,1), // A javascript date object for when the event starts
        //        endsAt: new Date(2014,8,26,15), // Optional - a javascript date object for when the event ends
        //        editable: false, // If edit-event-html is set and this field is explicitly set to false then dont make it editable.
        //        deletable: false, // If delete-event-html is set and this field is explicitly set to false then dont make it deleteable
        //        draggable: true, //Allow an event to be dragged and dropped
        //        resizable: true, //Allow an event to be resizable
        //        incrementsBadgeTotal: true, //If set to false then will not count towards the badge total amount on the month and year view
        //        recursOn: 'year', // If set the event will recur on the given period. Valid values are year or month
        //        cssClass: 'a-css-class-name' //A CSS class (or more, just separate with spaces) that will be added to the event when it is displayed on each view. Useful for marking an event as selected / active etc
        //    }
        //];

    }
})();