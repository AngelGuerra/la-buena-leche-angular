(function () {
    'use strict';

    angular
        .module('laBuenaLeche')
        .config(config);

    config.$inject = ['$breadcrumbProvider', 'calendarConfigProvider'];

    function config($breadcrumbProvider, calendarConfigProvider){
        $breadcrumbProvider.setOptions({
            //templateUrl: 'templates/pages/comun/breadcrumbs.html',
            prefixStateName: 'home',
            includeAbstract: true
        });

        calendarConfigProvider.setDateFormats({
            hour: 'HH:mm' //this will configure the hour view to display in 24 hour format rather than the default of 12 hour
        });

        calendarConfigProvider.setTitleFormats({
            day: 'dddd D MMMM, YYYY',
            week: 'Week {week} of {year}',
            month: 'MMMM YYYY',
            year: 'YYYY'
        });

        calendarConfigProvider.setI18nStrings({
            eventsLabel: 'Eventos', //This will set the events label on the day view
            timeLabel: 'Hora' //This will set the time label on the time view
        });
    }
})();