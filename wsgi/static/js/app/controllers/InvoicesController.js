JjApp.controller('InvoicesController', ['$scope', 'dataExchangeService', 'messageService', '$filter', '$localStorage', 'InvoiceManager',
    function($scope, dataExchangeService, messageService, $filter, $localStorage, InvoiceManager) {

        $scope.loadInvoicesForCustomer = function(customer) {
            var id = customer && customer.id;
            if (!id) {
                return;
            }

            $scope.invoices = InvoiceManager.loadAllByCustomers(id);
        }
        $scope.$on('customer_selected', function(e, customer) {
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