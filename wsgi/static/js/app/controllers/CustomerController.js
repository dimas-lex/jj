JjApp.controller('CustomerController', ['$scope', 'dataExchangeService', 'messageService', '$filter', '$localStorage',
    function($scope, dataExchangeService, messageService, $filter, $localStorage) {
        $scope.createEmptyCustomer = function() {
            return {
                id: '',
                first_name: '',
                last_name: '',
                email: '',
                is_active: true,
                balance: 0
            };
        };
        $scope.customer = $scope.createEmptyCustomer();


        $scope.$on('customer_selected', function(e, customer) {
            $scope.customer = customer;
        });
        $scope.addCustomer = function() {
            var msg = 'New customer was added.';
            $scope.markValid();

            if ($scope.customerForm.$valid) {
                var customers = angular.fromJson($localStorage.customers);

                if (!customers || !$.isArray(customers)) {
                    customers = [];
                }
                //new customer
                $scope.customer.id = Utils.generateUID();
                customers.push($scope.customer);

                customers = angular.toJson(customers);

                $localStorage.customers = customers;

                dataExchangeService.post('reloadCustomers', $scope.customer);
                messageService.show(msg)
                $scope.customer = $scope.createEmptyCustomer();

            } else {
                $scope.markInvalid();
            }
        };
        $scope.updateCustomer = function() {
            var msg = 'New customer was added.';
            $scope.markValid();

            if ($scope.customerForm.$valid) {

                if (!$scope.customer.id) {
                    messageService.show('Error while saving. Please reload the page.');
                    return;

                } else {
                    // update
                    var foundCustomer = $filter('getById')(customers, $scope.customer.id);

                    if (foundCustomer) {
                        angular.copy($scope.customer, foundCustomer);
                        msg = 'The customer was updated.'
                    }
                }

                customers = angular.toJson(customers);

                $localStorage.customers = customers;

                dataExchangeService.post('reloadCustomers', $scope.customer);
                messageService.show(msg)
                $scope.customer = $scope.createEmptyCustomer();

            } else {
                $scope.markInvalid();
            }
        };
        $scope.markValid = function() {
            angular.forEach(angular.element(':input.ng-valid'), function(value, key) {
                var el = angular.element(value).first();
                if (el) {
                    el.removeClass('ng-invalid');
                    el.removeClass('ng-invalid-minlength');
                    el.closest('.form-group')
                        .removeClass('has-error')
                }

            });
        };
        $scope.markInvalid = function() {
            angular
                .element(':input.ng-invalid')
                .first()
                .focus()
                .closest('.form-group')
                .addClass('has-error');

        }
    }
]).directive('customerForm', function() {
    return {
        templateUrl: '/static/js/app/templates/forms/customer.html'
    };
});