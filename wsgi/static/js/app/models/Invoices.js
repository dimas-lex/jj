JjApp.factory('Invoice', ['dataExchangeService', 'messageService', '$filter', '$localStorage',
    function(dataExchangeService, messageService, $filter, $localStorage) {
        function Invoice(InvoicesData) {
            if (InvoicesData) {
                this.setData(InvoicesData);
                this.meta = InvoicesData.meta;
            }
        };

        Invoice.prototype = {
            setData: function(InvoicesData) {
                angular.extend(this, InvoicesData);
            },
            load: function(id) {
                var invoices = $localStorage.invoices;
                if (invoices) {
                    $scope.invoices = JSON.parse(invoices);

                    var foundInvoices = $filter('getById')(invoices, id);

                    if (foundCustomer) {
                        this.setData(foundCustomer);
                    }
                }
            },

            update: function() {
                var invoices = $localStorage.invoices;
                if (invoices) {
                    $scope.invoices = JSON.parse(invoices);

                    var foundInvoice = $filter('getById')(invoices, this.Invoice.id);

                    if (foundInvoice) {
                        angular.copy(this.Invoice, foundInvoice);

                        invoices = angular.toJson(invoices);
                        $localStorage.invoices = invoices;
                        return true;
                    }
                }
            }
        };
        return Invoice;
    }
]);


JjApp.factory('InvoiceManager', ['$http', '$localStorage', '$filter', 'Invoice',
    function($http, $localStorage, $filter, Invoice) {
        var url = 'api/v1/customer/';
        var InvoiceManager = {
            invoices: [],

            _load: function(id, deferred) {
                var invoices = $localStorage.invoices;
                if (invoices) {
                    invoices = JSON.parse(invoices);
                }
                this.invoices = invoices || [];
                return this.invoices;
            },
            /* Public Methods */
            getInvoice: function(id) {
                var invoices = this._load();
                return $filter('getById')(invoices, id);
            },
            /* Use this function in order to get instances of all the customers */
            loadAllByCustomers: function(id) {
                var invoices = this._load();
                invoices = $filter('getByCustomerId')(invoices, id);

                return invoices;
            },
            create: function(iCustomer) {
                var invoice = new Invoice({
                    id: Utils.generateUID(),
                    i_customer: iCustomer,
                    amount: Math.floor(Math.random() * (100 - 10 + 1)) + 10
                });

                this.invoices.push(invoice);
                return invoice;
            },
            save: function() {
                invoices = angular.toJson(this.invoices);
                $localStorage.invoices = invoices;
            }

        };
        return InvoiceManager;
    }
]);