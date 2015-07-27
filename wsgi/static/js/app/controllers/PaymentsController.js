JjApp.controller('PaymentsController', ['$scope', 'dataExchangeService', 'messageService', '$filter', '$localStorage', "PaymentManager",
    function($scope, dataExchangeService, messageService, $filter, $localStorage, PaymentManager) {

        $scope.loadPaymentsForCustomer = function(customer) {
            var id = customer && customer.id;
            if (!id) {
                return;
            }

            $scope.payments = PaymentManager.loadAllByCustomers(id);
        }
        $scope.$on('customer_selected', function(e, customer) {
            $scope.customer = customer;
            $scope.loadPaymentsForCustomer(customer)
        });


    }
]).directive('paymentsList', function() {
    return {
        templateUrl: '/static/js/app/templates/forms/payments.html'
    };
});