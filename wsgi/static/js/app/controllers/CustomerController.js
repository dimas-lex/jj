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
        // template: '<div class="panel-body">' +
        //     '    <h2>Customer Info</h2>' +
        //     '    <form' +
        //     '        role="form"' +
        //     '        class="form-horizontal"' +
        // // '        novalidate'+
        // '        ng-submit="processForm()"' +
        //     '        name="accountForm"' +
        //     '        >' +
        //     '        <div class="form-group">' +
        //     '            <label for="first_name">First Name:</label>' +
        //     '            <input type="text" class="form-control"  ng-model="first_name"  id="first_name">' +
        //     '        </div>' +
        //     '        <div class="form-group">' +
        //     '            <label for="last_name">Last Name:</label>' +
        //     '            <input type="text" class="form-control"  ng-model="last_name"  id="last_name">' +
        //     '        </div>' +
        //     '        <div class="form-group">' +
        //     '            <label for="email">Email address:</label>' +
        //     '            <input type="email" class="form-control" ng-model="email" id="email">' +
        //     '        </div>' +
        //     '        <div class="checkbox">' +
        //     '            <label><input type="checkbox" ng-model="is_active" > Active</label>' +
        //     '        </div>' +
        //     '        <button ng-click="addCustomer()" class="btn  btn-success glyphicon glyphicon-plus " > Add </button>' +
        //     '    </form>' +
        //     '</div>'
    };
});
