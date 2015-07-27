JjApp.factory('Customer', ['dataExchangeService', 'messageService', '$filter', '$localStorage',
    function(dataExchangeService, messageService, $filter, $localStorage) {
        function Customer(CustomerData) {
            if (CustomerData) {
                this.setData(CustomerData):
            }
        };

        Customer.prototype = {
            setData: function(CustomerData) {
                angular.extend(this, CustomerData);
            },
            load: function(id) {
                var customers = $localStorage.customers;
                if (customers) {
                    $scope.customers = JSON.parse(customers);

                    var foundCustomer = $filter('getById')(customers, id);

                    if (foundCustomer) {
                        this.setData(foundCustomer);
                    }
                }
            },

            update: function() {
                var customers = $localStorage.customers;
                if (customers) {
                    $scope.customers = JSON.parse(customers);

                    var foundCustomer = $filter('getById')(customers, this.Customer.id);

                    if (foundCustomer) {
                        angular.copy(this.Customer, foundCustomer);

                        customers = angular.toJson(customers);
                        $localStorage.customers = customers;
                        return true;
                    }
                }

            }

        };
        return Customer;
    }
]);