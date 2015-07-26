# -*- coding: utf-8 -*-
from django.db import models
from datetime import date



class Customer(models.Model):
    first_name = models.CharField(max_length=50)
    last_name = models.CharField(max_length=50)
    email = models.CharField(max_length=50)
    is_active = models.BooleanField(default=True)
    balance = models.DecimalField (max_digits=10, decimal_places=5, default=0)


class Invoice(models.Model):
    customer = models.ForeignKey(Customer)
    amount = models.DecimalField (max_digits=10, decimal_places=5, default=0)

class Payment(models.Model):
    customer = models.ForeignKey(Customer)
    amount = models.DecimalField (max_digits=10, decimal_places=5, default=0)


