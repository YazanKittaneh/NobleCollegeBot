from django.shortcuts import render
#from django.utils import simplejson
from django.http import HttpResponse, HttpResponseRedirect
from .models import College, Coefficient, Custom_Coefficient
#from django.shortcuts import render_template_to_response
from rest_framework import generics
from .serializers import CollegeSerializer
# created by Yazan Kittaneh 07-12-2016
# *1 cite: https://stackoverflow.com/questions/14160221/django-read-upload-a-csv

def index(request): #http://lethain.com/two-faced-django-part-5-jquery-ajax/
    query_results = College.objects.all()
    #return render_template_to_response("CollegeBot/index.html", {"my_data": query_results})
    return render(request, 'CollegeBot/index.html', {'query_results': query_results})

def coefficient(request): #http://lethain.com/two-faced-django-part-5-jquery-ajax/
    query_results = Coefficient.objects.all()
    return render(request, 'CollegeBot/coefficient.html', {'query_results': query_results})

def custom(request): #http://lethain.com/two-faced-django-part-5-jquery-ajax/
    query_results = Custom_Coefficient.objects.all()
    return render(request, 'CollegeBot/custom_coefficient.html', {'query_results': query_results})

"""
STUDENT MODEL CONTROLLERS
"""
def all_student(request):
    all_student = Student.objects.all()
    return render(request, 'CollegeBot/all_student.html', {'all_student': all_student})

class StudentDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Student.objects.all()
    serializer_class = CollegeSerializer

def student(request, student_id):
    student = Student.objects.get(pk=college_id)
    return render(request, 'CollegeBot/Student.html', {'Student':student})


"""
COLLEGE MODEL CONTROLLERS
"""
def all_colleges(request):
    all_colleges = College.objects.all()
    return render(request, 'CollegeBot/all_colleges.html', {'all_colleges': all_colleges})

class CollegeDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = College.objects.all()
    serializer_class = CollegeSerializer

def college(request, college_id):
    college = College.objects.get(pk=college_id)
    return render(request, 'CollegeBot/College.html', {'College':college})


"""
COEFFICIENT MODEL CONTROLLERS
"""
def all_coefficients(request):
    all_coefficients = Coefficient.objects.all()
    return render(request, 'CollegeBot/all_coefficients.html', {'all_coefficients': all_coefficients})

class CoefficientDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Coefficient.objects.all()
    serializer_class = CoefficientSerializer

def coefficient(request, coefficient_id):
    coefficient = Coefficient.objects.get(pk=coefficient_id)
    return render(request, 'CollegeBot/Coefficient.html', {'Coefficient':coefficient})

"""
CUSTOM COEFFICIENT MODEL CONTROLLERS
"""
def all_coefficients(request):
    all_coefficients = Coefficient.objects.all()
    return render(request, 'CoefficientBot/all_coefficients.html', {'all_coefficients': all_coefficients})

class CoefficientDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Coefficient.objects.all()
    serializer_class = CoefficientSerializer

def coefficient(request, coefficient_id):
    coefficient = Coefficient.objects.get(pk=coefficient_id)
    return render(request, 'CoefficientBot/Coefficient.html', {'Coefficient':coefficient})
