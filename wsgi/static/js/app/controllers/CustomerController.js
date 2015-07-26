JjApp.controller('CustomerController', ['$scope', 'dataExchangeService', '$http', 'messageService',
    function($scope, dataExchangeService, $http, messageService) {
        $scope.customer = {
            first_name: '',
            last_name: '',
            email: '',
            is_active: true,
            balance: 0
        };

        $scope.addCustomer = function() {
            console.log('addCustomer');
            dataExchangeService.post('reloadCustomers');
            messageService.error('test')
        }
    }
])
.directive('customerForm', function() {
    return {
        templateUrl: '/static/js/app/templates/forms/customer.html'
    };
});
