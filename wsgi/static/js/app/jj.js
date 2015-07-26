'use strict';

JjApp.config(['$httpProvider',
    function($httpProvider) {
        $httpProvider.defaults.headers.common['X-CSRFToken'] = JjApp.csrf_token;
        $httpProvider.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8';
        $httpProvider.defaults.transformRequest = [

            function(data) {
                /**
                 * The workhorse; converts an object to x-www-form-urlencoded serialization.
                 * @param {Object} obj
                 * @return {String}
                 */
                var param = function(obj) {
                    var query = '';
                    var name, value, fullSubName, subName, subValue, innerObj, i;

                    for (name in obj) {
                        value = obj[name];

                        if (value instanceof Array) {
                            for (i = 0; i < value.length; ++i) {
                                subValue = value[i];
                                fullSubName = name + '[' + i + ']';
                                innerObj = {};
                                innerObj[fullSubName] = subValue;
                                query += param(innerObj) + '&';
                            }
                        } else if (value instanceof Object) {
                            for (subName in value) {
                                subValue = value[subName];
                                fullSubName = name + '[' + subName + ']';
                                innerObj = {};
                                innerObj[fullSubName] = subValue;
                                query += param(innerObj) + '&';
                            }
                        } else if (value !== undefined && value !== null) {
                            query += encodeURIComponent(name) + '=' + encodeURIComponent(value) + '&';
                        }
                    }

                    return query.length ? query.substr(0, query.length - 1) : query;
                };

                return angular.isObject(data) && String(data) !== '[object File]' ? param(data) : data;
            }
        ];
    }
]);

JjApp.factory('dataExchangeService', function($rootScope) {
    var dataExchangeService = {};
    dataExchangeService.post = function(_event, data) {
        $rootScope.$broadcast(_event || '', data || {});
    };

    return dataExchangeService;
});


JjApp.controller("HeaderController", ["$scope", "dataExchangeService",
    function($scope) {}
]);
JjApp.controller("MainController", ["$scope", "dataExchangeService",
    function($scope) {}
]);

setTimeout(function() {
    // Loading imitation
    $('#splashscreen').addClass('splashscreen_hide');
    $(document.body).attr('ng-app', 'jjApp');
    angular.bootstrap(document, ['ng', 'jjApp']);

}, 20);




