JjApp.controller('CustomerController', ['$scope', 'dataExchangeService', 'messageService', '$http',
    function($scope, dataExchangeService, messageService, $http) {
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
