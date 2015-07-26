# -*- coding: utf-8 -*-
from django.db import models
from datetime import date

class Address(models.Model):
    address1 = models.CharField(max_length=50,  null=True)
    city = models.CharField(max_length=50,  null=True)
    state = models.CharField(max_length=50,  null=True)
    zipcode = models.CharField(max_length=10,  null=True)

class Customer(models.Model):
    first_name = models.CharField(max_length=50)
    last_name = models.CharField(max_length=50)
    email = models.CharField(max_length=50)
    is_active = models.BooleanField(default=True,  null=True)
    balance = models.DecimalField (max_digits=10, decimal_places=5, default=0)
    home_address = models.ForeignKey(Address,  null=True)
    mailing_address = models.ForeignKey(Address,  null=True)

class Invoice(models.Model):
    customer = models.ForeignKey(Customer)
    amount = models.DecimalField (max_digits=10, decimal_places=5, default=0)

class Payment(models.Model):
    customer = models.ForeignKey(Customer)
    amount = models.DecimalField (max_digits=10, decimal_places=5, default=0)


