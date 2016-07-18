from django.shortcuts import render
#from django.utils import simplejson
from django.http import HttpResponse, HttpResponseRedirect
from .models import College
# created by Yazan Kittaneh 07-12-2016
# *1 cite: https://stackoverflow.com/questions/14160221/django-read-upload-a-csv

def index(request): #http://lethain.com/two-faced-django-part-5-jquery-ajax/
    query_results = College.objects.all()
    return render(request, 'trialbot/index.html', {'query_results': query_results})
'''
    results = {'success':False}
    if request.method == u'GET':
         GET = request.GET
        results = {'success':True}
    json = simplejson.dumps(results)
    return HttpResponse(json, mimetype='application/json')
'''
