'use strict';

/**
 * @ngdoc filter
 * @name inputDateFormatter.filter:dateFormatterFilter
 * @function
 * @description
 * # sixNumbersToDate
 * Filter in the inputDateFormatter.
 */
angular.module('inputDateFormatter')
    .filter('dateFormatterFilter', function () {
        /**
         * There comes a number, check if it is 5 or 6 characters.
         * If it consists of 5 characters try to figure out what 
         * is the month and in case of ambiguity gives priority to month.
         * 
         * @param string
         * @return string
         */
        return function (input) {
            switch (input.length) {
            case 6:
                var day = String(input).substring(0, 2), 
                    month = String(input).substring(2, 4),
                    year = String(input).substring(4, 6);
                break; 
            case 5:
                var month = String(input).substring(1, 3);
                if (month > 12) {
                    var day = String(input).substring(0, 2), 
                        month = String(input).substring(2, 3),
                        year = String(input).substring(3, 5);
                } else {
                    var day = String(input).substring(0, 1),
                        year = String(input).substring(3, 5);
                }
                break; 
            default: 
                return;
        }
            
        return day + '/' + month + '/20' + year;           
        };
    });
