from django.conf.urls import url, include
from . import views
from rest_framework.urlpatterns import format_suffix_patterns

urlpatterns = [
    url(r'^$', 'CollegeBot.views.testJS'),
    #url(r'^coefficient$', views.coefficient, name='coefficient'),
    #url(r'^custom$', views.custom, name='custom'),

    ####College API urls###
    #non '/' ending
    url(r'^college/(?P<college_id>\d+)$', 'CollegeBot.views.college'),
    url(r'^api/college/(?P<pk>\d+)$', views.CollegeDetail.as_view()),
    #url(r'^api/college/all$', 'CollegeBot.views.all_colleges'),
    url(r'^api/college/all$', views.CollegeDetail.as_view()),
    #TODO: Figure out why the as_view() method can't be called onto the CollegeDetail.list method
    # '/' ending
    url(r'^college/(?P<college_id>\d+)/$', 'CollegeBot.views.college'),
    url(r'^api/college/(?P<pk>\d+)/$', views.CollegeDetail.as_view()),
    #url(r'^api/college/all/$', 'CollegeBot.views.all_colleges'),
    url(r'^api/college/all/$', views.CollegeDetail.as_view()),


    ###Coefficient API urls###
    #non '/' ending
    url(r'^coefficient/(?P<coefficient_id>\d+)$', 'CollegeBot.views.coefficient'),
    url(r'^api/coefficient/(?P<pk>\d+)$', views.CoefficientDetail.as_view()),
    url(r'^api/coefficient/all$', 'CollegeBot.views.all_coefficients'),

    # '/' ending
    url(r'^coefficient/(?P<coefficient_id>\d+)/$', 'CollegeBot.views.coefficient'),
    url(r'^api/coefficient/(?P<pk>\d+)/$', views.CoefficientDetail.as_view()),
    url(r'^api/coefficient/all/$', 'CollegeBot.views.all_coefficients'),


    ###Custom Coefficient API urls###
    #non '/' ending
    url(r'^custom_coefficient/(?P<custom_coefficient_id>\d+)$', 'CollegeBot.views.custom_coefficient'),
    url(r'^api/custom_coefficient/(?P<pk>\d+)$', views.Custom_CoefficientDetail.as_view()),
    url(r'^custom_coefficient/all$', 'CollegeBot.views.all_custom_coefficients'),


    url(r'^custom_coefficient/(?P<custom_coefficient_id>\d+)/$', 'CollegeBot.views.custom_coefficient'),
    url(r'^api/custom_coefficient/(?P<pk>\d+)/$', views.Custom_CoefficientDetail.as_view()),
    url(r'^custom_coefficient/all/$', 'CollegeBot.views.all_custom_coefficients'),

]

urlpatterns = format_suffix_patterns(urlpatterns)
