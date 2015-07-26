from django.conf.urls import patterns, include, url
from django.contrib import admin
from django.conf import settings

from billing.views import CustomerListView
from django.views.generic import TemplateView
from rest_framework.urlpatterns import format_suffix_patterns

admin.autodiscover()

urlpatterns = patterns('',
    url(r'^$', 'views.index', name='index'),
    url(r'^admin/', include(admin.site.urls)),
)
urlpatterns += format_suffix_patterns(
    ( url(r'^rest/customer/$',  CustomerListView.as_view()), )
)
