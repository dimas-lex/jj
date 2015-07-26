from django.shortcuts import render_to_response
from django.http import HttpResponse, Http404
from django.template.context import RequestContext

# from rest_framework.views import APIView
# from rest_framework.response import Response
# from rest_framework import viewsets, status, generics, permissions

from billing.models import *
from django.core import serializers

class CustomerListView(APIView):
    """
        View class for managing and viewing Account
    """

    def get(self, request):
        customers = Customer.objects.all()
        serializer = CustomerSerializer(customers, many=True)
        data = data.serialize('json', customers)
        return serializer(data, mimetype='application/json')

    # def post(self, request):

    #     if 'id' in request.POST:
    #         # update
    #         customer = self.get_object(request.POST.get('id'))
    #         if customer:
    #             serializer = CustomerSerializer(customer, data=request.DATA)
    #             if serializer.is_valid():
    #                 serializer.save()
    #                 return Response(serializer.data , status=status.HTTP_201_CREATED)

    #     else:
    #         # add new Customer
    #         serializer = CustomerSerializer(data=request.DATA)
    #         if serializer.is_valid():
    #             serializer.save()
    #             return Response(serializer.data)

    #     # fail
    #     return Response({'success': False}, status=status.HTTP_400_BAD_REQUEST)
