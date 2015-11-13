'use strict';

/**
 * @ngdoc directive
 * @name inputDateFormatter.directive:inputDateFormatter
 * @description
 * # inputDateFormatter
 */
angular.module('inputDateFormatter')
    .directive('inputDateFormatter', function ($compile, $filter) {
        return {
            template: '',
            restrict: 'A',
            scope: {},
            link: function postLink(scope, element, attrs) {
                /**
                 * The filter is applied on tab press.
                 * Check if the input value has these characteristics:
                 *  - Is a number
                 *  - It consists of 6 characters
                 *  
                 *  If so apply the filter, otherwise cancels the input
                 * 
                 * @return void
                 */
                $(element).focusout(function() {
                    var inputValue = $(this).val();
                    
                    var isNumber = !isNaN(parseInt(inputValue));
                    if (isNumber && 6 === inputValue.length) {
                        $(this).val(
                            $filter('sixNumbersToDate')(inputValue)
                        );
                    } else {
                        $(this).val('');
                    }
                });
            }
        };
    });
