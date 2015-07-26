'use strict';
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

        $scope.loadData = function() {
            // $http.get('/rest/customers/').success(function(data) {
            //     $scope.customers = data;
            // });
        };
        $scope.$on('reloadCustomers', function() {
            $scope.loadData();
        });
        $scope.loadData();
    }
])
.directive('customerList',["Constants", function() {
    return {
        templateUrl: '/templates/forms/customer_list.html'
        // template: '<div class="panel-body">' +
        //     '    <h2>Customer Info</h2>' +
        //     '    <table class="table table-striped table-bordered table-hover" >' +
        //     '        <thead>' +
        //     '          <tr>' +
        //     '              <th width="20%">First Name</th>' +
        //     '              <th width="20%">Last Name</th>' +
        //     '              <th width="30%">Email</th>' +
        //     '              <th >Balance</th>' +
        //     '              <th >Active</th>' +
        //     '          </tr>' +
        //     '        </thead>' +
        //     '        <tbody>' +
        //     '            <tr ng-repeat="customer in customers | orderBy:\'-firts_name\'">' +
        //     '                <td data-name="first_name">{$customer.first_name$}</td>' +
        //     '                <td data-name="last_name">{$customer.last_name$}</td>' +
        //     '                <td data-name="email">{$customer.email$}</td>' +
        //     '                <td data-name="balance">{$customer.balance$}</td>' +
        //     '                <td data-name="is_active">' +
        //     '                   <img ng-src="{$ customer.is_active && \'/home/dimas/code/jj/wsgi/static/resources/images/yes_tick.png\'  || \'/home/dimas/code/jj/wsgi/static/resources/images/round_remove.png\'$}"/> </td>' +
        //     '            </tr>' +
        //     '        </tbody>' +
        //     '    </table>' +
        //     '</div>',

    };
}]);