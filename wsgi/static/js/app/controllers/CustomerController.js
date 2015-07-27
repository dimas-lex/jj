JjApp.controller('CustomerController',
    ['$scope', 'dataExchangeService', 'messageService', '$filter', '$localStorage', "CustomerManager", "InvoiceManager", "PaymentManager",
    function($scope, dataExchangeService, messageService, $filter, $localStorage, CustomerManager, InvoiceManager, PaymentManager) {

        $scope.customer = CustomerManager.create();

        $scope.$on('customer_selected', function(e, customer) {
            $scope.customer = customer;
            return true;
        });
        $scope.addCustomer = function() {
            var msg = 'New customer was added.';
            $scope.markValid();

            if ($scope.customerForm.$valid) {
                var customers = CustomerManager.loadAllCustomers();
                //new customer
                $scope.customer.id = Utils.generateUID();
                customers.push($scope.customer);
                CustomerManager.save();

                InvoiceManager.create( $scope.customer.id );
                InvoiceManager.create( $scope.customer.id )
                InvoiceManager.save();

                PaymentManager.create( $scope.customer.id );
                PaymentManager.create( $scope.customer.id )
                PaymentManager.save();

                dataExchangeService.post('reloadCustomers', $scope.customer);
                messageService.show(msg)
                $scope.customer = CustomerManager.create();

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
                    var foundCustomer = CustomerManager.getCustomer($scope.customer.id);

                    if (foundCustomer) {
                        angular.copy($scope.customer, foundCustomer);
                        msg = 'The customer was updated.'
                    }
                    CustomerManager.save();
                }

                customers = angular.toJson(customers);

                $localStorage.customers = customers;

                dataExchangeService.post('reloadCustomers', $scope.customer);
                messageService.show(msg)
                $scope.customer = CustomerManager.create();

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