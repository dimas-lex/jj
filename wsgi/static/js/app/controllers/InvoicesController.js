JjApp.controller('InvoicesController', ['$scope', 'dataExchangeService', 'messageService', '$filter', '$localStorage',
function($scope, dataExchangeService, messageService, $filter, $localStorage) {


    $scope.loadInvoicesForCustomer= function(customer) {
        var id = customer && customer.id;
        if (!id) {
            return;
        }
        this.payments = [{
            id: 1,
            amount: Math.floor(Math.random() * (100 - 10 + 1)) + 10
        }, {
            id: 2,
            amount:  Math.floor(Math.random() * (100 - 10 + 1)) + 10
        }]
    }
    $scope.$on('customer_selected', , function(e, customer) {
        $scope.customer = customer;
        $scope.loadInvoicesForCustomer(customer)
    }));


}]).directive('PaymentsList', function() {
    return {
        templateUrl: '/static/js/app/templates/forms/payments.html'
    };
});