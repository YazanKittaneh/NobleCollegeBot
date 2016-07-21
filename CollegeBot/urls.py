from django.conf.urls import url, include
from . import views
from rest_framework.urlpatterns import format_suffix_patterns

urlpatterns = [
    url(r'^$', views.index, name='index'),
    #url(r'^coefficient$', views.coefficient, name='coefficient'),
    #url(r'^custom$', views.custom, name='custom'),
    url(r'^(?P<college_id>\d+)/$', 'CollegeBot.views.college'),
    url(r'^api/(?P<pk>\d+)/$', views.CollegeDetail.as_view()),
]


urlpatterns = format_suffix_patterns(urlpatterns)
