JjApp.controller('PaymentsController', ['$scope', 'dataExchangeService', 'messageService', '$filter', '$localStorage',
function($scope, dataExchangeService, messageService, $filter, $localStorage) {


    $scope.loadPaymentsForCustomer = function(customer) {
        console.log(customer);

        var id = customer && customer.id;
        if (!id) {
            return;
        }

        $scope.payments = [{
            id: 1,
            amount: Math.floor(Math.random() * (100 - 10 + 1)) + 10
        }, {
            id: 2,
            amount:  Math.floor(Math.random() * (100 - 10 + 1)) + 10
        }]
    }
    $scope.$on('customer_selected',  function(e, customer) {
        $scope.customer = customer;
        $scope.loadPaymentsForCustomer(customer)
    });


}]).directive('paymentsList', function() {
    return {
        templateUrl: '/static/js/app/templates/forms/payments.html'
    };
});