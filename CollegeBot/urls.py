from django.conf.urls import url, include
from . import views
from rest_framework.urlpatterns import format_suffix_patterns

urlpatterns = [
    url(r'^$', 'CollegeBot.views.all_colleges'),
    #url(r'^coefficient$', views.coefficient, name='coefficient'),
    #url(r'^custom$', views.custom, name='custom'),
    url(r'^(?P<college_id>\d+)/$', 'CollegeBot.views.college'),
    url(r'^api/(?P<pk>\d+)/$', views.CollegeDetail.as_view()),
    url(r'^coefficient/(?P<college_id>\d+)/$', 'CollegeBot.views.coefficient'),
    url(r'^api/(?P<pk>\d+)/$', views.CoefficientDetail.as_view()),
    url(r'^custom_coefficient/(?P<college_id>\d+)/$', 'CollegeBot.views.custom_coefficient'),
    url(r'^api/(?P<pk>\d+)/$', views.Custom_CoefficientDetail.as_view()),
]
