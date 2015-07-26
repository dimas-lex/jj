from django.shortcuts import render_to_response
from django.http import HttpResponse, Http404
from django.template.context import RequestContext

from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import viewsets, status, generics, permissions

from billing.models import *
from serializers import *

def index(request):
     return render_to_response('home/index.html')
