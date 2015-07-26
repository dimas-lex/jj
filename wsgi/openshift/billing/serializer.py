from billing.models import *
from rest_framework import serializers
import json


class AddressSerializer(serializers.ModelSerializer):
    class Meta:
        model = Address
        fields = ('id', 'address1','city', 'state', 'zipcode')


class CustomerSerializer(serializers.ModelSerializer):
    class Meta:
        model = Customer
        fields = ('id', 'first_name','last_name', 'email', 'is_active', 'balance',
            'home_address', 'mailing_address')

class InvoiceSerializer(serializers.ModelSerializer):
    class Meta:
        model = Invoice
        fields = ('id', 'customer','amount')

class PaymentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Invoice
        fields = ('id', 'customer','amount')
