JjApp.controller('CustomerController', ['$scope', 'dataExchangeService', 'messageService', '$http', '$localStorage',
    function($scope, dataExchangeService, messageService, $http, $localStorage) {
        $scope.createEmptyCustomer = function() {
            return {
                customer: Utils.generateUID(),
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
                console.log('addCustomer');

                $localStorage.customers = $localStorage.customers || [];
                $localStorage.customers.push($scope.customer);

                dataExchangeService.post('reloadCustomers');
                messageService.error('test')

            } else {
                angular
                    .element(':input.ng-invalid')
                    .first()
                    .focus()
                    .closest('.form-group')
                    .addClass('has-error');
            }
        }
    }
])
    .directive('customerForm', function() {
        return {
            templateUrl: '/static/js/app/templates/forms/customer.html'
        };
    });