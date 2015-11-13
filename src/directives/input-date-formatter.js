'use strict';

/**
 * @ngdoc directive
 * @name inputDateFormatter.directive:inputDateFormatter
 * @description
 * # inputDateFormatter
 */
angular.module('inputDateFormatter')
    .directive('inputDateFormatter', function ($filter) {
        return {
            template: '',
            restrict: 'A',
            scope: {},
            link: function postLink(scope, element, attrs) {
                /**
                 * The filter is applied on tab press.
                 * Check if the input value is a number and
                 * if so applies the filter, otherwise cancels the input
                 * 
                 * @return void
                 */
                $(element).focusout(function() {
                    var inputValue = $(this).val();
                    
                    var isNumber = !isNaN(parseInt(inputValue));
                    
                    if (isNumber) {
                        $(this).val(
                                $filter('dateFormatterFilter')(inputValue)
                            );
                    } else {
                        $(this).val('');
                    }
                });
                
            }
        };
    });
