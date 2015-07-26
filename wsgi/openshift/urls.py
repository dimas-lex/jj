from django.conf.urls import patterns, include, url
from django.conf import settings
from django.views.generic import TemplateView
# from django.contrib import admin
# from rest_framework.urlpatterns import format_suffix_patterns
# admin.autodiscover()
from views import get_customers
urlpatterns = patterns('',
    url(r'^rest/customer/$', get_customers),
    url(r'^$', 'views.index', name='index'),
)
