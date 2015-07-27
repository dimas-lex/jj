JjApp.controller('CustomerListController', ['$scope', "dataExchangeService", 'messageService', '$timeout', '$localStorage', "CustomerManager",
    function($scope, dataExchangeService, messageService, $timeout, $localStorage, CustomerManager) {

        $scope.loadData = function(customer) {
            $scope.customers = CustomerManager.loadAllCustomers();

            if (customer) {
                $scope.newCustomer = customer;

                var timerProm = $timeout(function() {
                    angular.forEach(angular.element('tr.success'), function(value, key) {
                        var el = angular.element(value).first();
                        if (el) {
                            el.removeClass('success');
                        }
                    });
                    $timeout.cancel(timerProm);
                }, 5000)

            }
        };
        $scope.onRowClick = function(customer) {
            dataExchangeService.post("customer_selected", customer);
        };

        $scope.$on('reloadCustomers', function(e, customer) {
            $scope.loadData(customer);
        });
        $scope.loadData();
    }
]).directive('customerList', function() {
    return {
        templateUrl: '/static/js/app/templates/forms/customer_list.html'
    };
});