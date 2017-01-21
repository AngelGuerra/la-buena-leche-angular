(function () {
    'use strict';

    angular
        .module('laBuenaLeche')
        .config(config);

    config.$inject = ['calendarConfig'];

    function config(calendarConfig){
        calendarConfig.dateFormatter = 'moment';
        calendarConfig.allDateFormats.moment.date.hour = 'HH:mm';
        calendarConfig.allDateFormats.moment.title.week = 'Semana {week} de {year}';
        calendarConfig.i18nStrings.weekNumber = 'Sem. {week}';
        calendarConfig.i18nStrings.eventsLabel = 'Eventos';
        calendarConfig.i18nStrings.timeLabel = 'Hora';
    }
})();