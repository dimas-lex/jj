JjApp.config(['$httpProvider',
    function($httpProvider) {
        $httpProvider.defaults.headers.common['X-CSRFToken'] = JjApp.csrf_token;
        $httpProvider.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8';
        $httpProvider.defaults.headers.common["X-Requested-With"] = 'XMLHttpRequest';
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
JjApp.factory('messageService', function($rootScope) {
    var messageService = {
        show: function(params) {
            if (!angular.isObject(params)) {
                params = {
                    msg: params || 'Ok',
                    type: 'success'
                }
            }
            $(document).trigger("add-alerts", [{
                priority: params.type,
                message: params.msg
            }]);
        },
        error: function(msg) {
            messageService.show({
                msg: msg,
                type: 'error'
            });
        }
    };
    return messageService;
});


setTimeout(function() {
    // Loading imitation
    $('#splashscreen').addClass('splashscreen_hide');
    $(document.body).attr('ng-app', 'jjApp');
    angular.bootstrap(document, ['ng', 'jjApp']);

}, 200);

$.validator.setDefaults({
    highlight: function(element) {
        $(element).closest('.form-group').addClass('has-error');
    },
    unhighlight: function(element) {
        $(element).closest('.form-group').removeClass('has-error');
    },
    errorElement: 'span',
    errorClass: 'help-block',
    errorPlacement: function(error, element) {
        if (element.parent('.input-group').length) {
            error.insertAfter(element.parent());
        } else {
            error.insertAfter(element);
        }
    }
});


JjApp.filter('getById', function() {
    return function(input, id) {
        var i = 0,
            len = input.length;
        for (; i < len; i++) {
            if (input[i].id === id) {
                return input[i];
            }
        }
        return null;
    }
});