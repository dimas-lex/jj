from django.shortcuts import render_to_response
from django.http import HttpResponse, Http404
from django.template.context import RequestContext

from billing.models import *
from serializers import *

def index(request):
     return render_to_response('home/index.html')


def get_customers(self, request):
    customers = Customer.objects.all()
    data = serializers.serialize('json', customers)
    return HttpResponse(data, mimetype='application/json')