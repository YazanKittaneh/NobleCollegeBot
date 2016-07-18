from django.conf.urls import url, include
from . import views

urlpatterns = [
    url(r'^$', views.index, name='index'),
    url(r'^coefficient$', views.coefficient, name='coefficient'),
    url(r'^custom$', views.custom, name='custom'),
]
