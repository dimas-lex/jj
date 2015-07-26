from django.shortcuts import render_to_response
from django.http import HttpResponse, Http404
from django.template.context import RequestContext
from django.core import serializers

from billing.models import *

import json

def index(request):
     return render_to_response('home/index.html')


def get_customers(self, request):
    data = {'foo': 'bar', 'hello': 'world'}
    return HttpResponse(json.dumps(data), content_type='application/json')


# def post(self, request):

#     if 'id' in request.POST:
#         # update
#         customer = self.get_object(request.POST.get('id'))
# #         if customer:
# #             serializer = CustomerSerializer(customer, data=request.DATA)
# #             if serializer.is_valid():
# #                 serializer.save()
# #                 return Response(serializer.data , status=status.HTTP_201_CREATED)

#     else:
#         # add new Customer
#         serializer = serializers.deserialize(data=request.DATA)
# #         if serializer.is_valid():
# #             serializer.save()
#         return Response({'success': True})

# #     # fail
#     # return Response({'success': False}, status=status.HTTP_400_BAD_REQUEST)
