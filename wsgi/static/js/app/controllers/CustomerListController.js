JjApp.controller('CustomerListController', ['$scope', "dataExchangeService", 'messageService', '$http', '$localStorage',
    function($scope, dataExchangeService, messageService, $http, $localStorage) {
        var customers = $localStorage.customers;
        console.log(customers);
        if (customers) {
            $scope.customers = JSON.parse(customers);
        }

        $scope.loadData = function() {};
        $scope.$on('reloadCustomers', function() {
            $scope.loadData();
        });
        // $scope.loadData();
    }
]).directive('customerList', function() {
    return {
        templateUrl: '/static/js/app/templates/forms/customer_list.html'
    };
});