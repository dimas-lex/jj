angular.module('ng').filter('tel', function() {});
JjApp.controller('CustomerListController', ['$scope', "dataExchangeService", '$http',
    function($scope) {
        $scope.customers = [{
            first_name: 'Lucuma',
            last_name: 'Doe',
            email: 'Lucuma.Doe@gmail.com',
            is_active: true,
            balance: 10
        }, {
            first_name: 'John',
            last_name: 'Doe',
            email: 'John.Doe@gmail.com',
            is_active: true,
            balance: 10
        }, {
            first_name: 'Jane',
            last_name: 'Doe',
            email: 'Jane.Doe@gmail.com',
            is_active: false,
            balance: 10
        }];

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