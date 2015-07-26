'use strict';
JjApp.controller('CustomerController', ['$scope', "dataExchangeService", '$http',
    function($scope) {
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
        }
    }
])
.directive('customerForm', function() {
    return {
        templateUrl: '/static/js/app/templates/forms/customer.html'
    };
});
