JjApp.controller('InvoicesController', ['$scope', 'dataExchangeService', 'messageService', '$filter', '$localStorage',
function($scope, dataExchangeService, messageService, $filter, $localStorage) {

        console.log('$scope');
        $scope.invoices = [{
                id: 1,
                amount: Math.floor(Math.random() * (100 - 10 + 1)) + 10
            }, {
                id: 2,
                amount: Math.floor(Math.random() * (100 - 10 + 1)) + 10
            }];

        $scope.loadInvoicesForCustomer = function(customer) {
            var id = customer && customer.id;
            if (!id) {
                return;
            }
            $scope.invoices = [{
                id: 1,
                amount: Math.floor(Math.random() * (100 - 10 + 1)) + 10
            }, {
                id: 2,
                amount: Math.floor(Math.random() * (100 - 10 + 1)) + 10
            }];
            console.log('11')
        }
        $scope.$on('customer_selected', function(e, customer) {
            console.log('test');
            $scope.customer = customer;
            $scope.loadInvoicesForCustomer(customer);
            return true;
        });



    }
]).directive('invoicesList', function() {
    return {
        templateUrl: '/static/js/app/templates/forms/invoices.html'
    };
});
console.log('$scope');