JjApp.controller('CustomerController', ['$scope', 'dataExchangeService', 'messageService', '$http', '$localStorage',
    function($scope, dataExchangeService, messageService, $http, $localStorage) {
        $scope.createEmptyCustomer = function() {
            return {
                id: Utils.generateUID(),
                first_name: '',
                last_name: '',
                email: '',
                is_active: true,
                balance: 0
            };
        };
        $scope.customer = $scope.createEmptyCustomer();

        $scope.addCustomer = function() {

            if ($scope.customerForm.$valid) {
                console.log('addCustomer', $scope.customer);


                var customers = angular.fromJson($localStorage.customers);

                if (!customers || !$.isArray(customers)) {
                    customers = [];
                }
                customers.push($scope.customer);
                customers = angular.toJson(customers);
                console.log(customers, typeof customers === 'string')
                $localStorage.customers = customers;

                // dataExchangeService.post('reloadCustomers');
                // messageService.error('test')

            } else {
                console.log('invalid')
                angular
                    .element(':input.ng-invalid')
                    .first()
                    .focus()
                    .closest('.form-group')
                    .addClass('has-error');
            }
        }
    }
]).directive('customerForm', function() {
    return {
        templateUrl: '/static/js/app/templates/forms/customer.html'
    };
});