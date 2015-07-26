JjApp.controller('CustomerListController', ['$scope', "dataExchangeService", '$http', '$localStorage',
    function($scope, dataExchangeService, messageService, $http, $localStorage) {
        $scope.customers = $localStorage.customers;

        $scope.loadData = function() {};
        $scope.$on('reloadCustomers', function() {
            $scope.loadData();
        });
        // $scope.loadData();
    }
])
    .directive('customerList', function() {
        return {
            templateUrl: '/static/js/app/templates/forms/customer_list.html'
        };
    });