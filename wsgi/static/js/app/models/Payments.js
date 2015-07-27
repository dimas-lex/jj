JjApp.factory('Payment', ['dataExchangeService', 'messageService', '$filter', '$localStorage',
    function(dataExchangeService, messageService, $filter, $localStorage) {
        function Payment(PaymentsData) {
            if (PaymentsData) {
                this.setData(PaymentsData);
                this.meta = PaymentsData.meta;
            }
        };

        Payment.prototype = {
            setData: function(PaymentsData) {
                angular.extend(this, PaymentsData);
            },
            load: function(id) {
                var payments = $localStorage.payments;
                if (payments) {
                    $scope.Payments = JSON.parse(Payments);

                    var foundPayments = $filter('getById')(payments, id);

                    if (foundPayments) {
                        this.setData(foundPayments);
                    }
                }
            },

            update: function() {
                var payments = $localStorage.Payments;
                if (payments) {
                    $scope.payments = JSON.parse(payments);

                    var foundPayment  = $filter('getById')(payments, this.Payment.id);

                    if (foundPayment) {
                        angular.copy(this.Payment, foundPayment);

                        payments = angular.toJson(payments);
                        $localStorage.payments = payments;
                        return true;
                    }
                }
            }
        };
        return Payment;
    }
]);


JjApp.factory('PaymentManager', ['$http', '$localStorage', '$filter', 'Payment',
    function($http, $localStorage, $filter, Payment) {
        var url = 'api/v1/customer/';
        var PaymentManager = {
            payments: [],

            _load: function(id, deferred) {
                var payments = $localStorage.payments;
                if (payments) {
                    payments = JSON.parse(payments);
                }
                this.payments = payments || [];
                return this.payments;
            },
            /* Public Methods */
            getPayment: function(id) {
                var payments = this._load();
                return $filter('getById')(payments, id);
            },
            /* Use this function in order to get instances of all the customers */
            loadAllByCustomers: function(id) {
                var payments = this._load();
                payments = $filter('getByCustomerId')(payments, id);

                return payments;
            },
            create: function(iCustomer) {
                var payment = new Payment({
                    id: Utils.generateUID(),
                    i_customer: iCustomer,
                    amount: Math.floor(Math.random() * (100 - 10 + 1)) + 10
                });

                this.payments.push(payment);
                return payment;
            },
            save: function() {
                payments = angular.toJson(this.payments);
                $localStorage.payments = payments;
            }

        };
        return PaymentManager;
    }
]);