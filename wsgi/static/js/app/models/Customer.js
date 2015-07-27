JjApp.factory('Customer', ['dataExchangeService', 'messageService', '$filter', '$localStorage', 'InvoiceManager',
    function(dataExchangeService, messageService, $filter, $localStorage, InvoiceManager) {
        function Customer(CustomerData) {
            if (CustomerData) {
                this.setData(CustomerData);
                this.meta = CustomerData.meta;
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

JjApp.factory('CustomerManager', ['$http', '$localStorage', 'Customer', '$filter',
    function($http, $localStorage, Customer, $filter) {
        var url = 'api/v1/customer/';
        var CustomerManager = {
            customers: [],
            _load: function(id, deferred) {
                var customers = $localStorage.customers;
                if (customers) {
                    customers = JSON.parse(customers);
                }
                this.customers = customers || [];
            },
            /* Public Methods */
            getCustomer: function(id) {
                this._load();
                var customers = this.customers;
                return $filter('getById')(customers, id);

            },
            /* Use this function in order to get instances of all the customers */
            loadAllCustomers: function() {
                this._load();
                return this.customers;
            },
            create: function() {
                return new Customer();
            },
            save: function() {
                customers = angular.toJson(this.customers);

                $localStorage.customers = customers;
            }

        };
        return CustomerManager;
    }
]);