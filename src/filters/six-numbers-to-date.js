'use strict';

/**
 * @ngdoc filter
 * @name inputDateFormatter.filter:sixNumbersToDate
 * @function
 * @description
 * # sixNumbersToDate
 * Filter in the inputDateFormatter.
 */
angular.module('inputDateFormatter')
    .filter('sixNumbersToDate', function () {
        /**
         * There are no controls because the filter is used 
         * exclusively in a directive and the logic is there
         * 
         * @param string
         * @return string
         */
        return function (input) {
            var output = 
                String(input).substring(0, 2) + '/' + 
                String(input).substring(2, 4) + '/20' + 
                String(input).substring(4, 6);
            
            return output;           
        };
    });
