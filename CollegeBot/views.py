# View controller for the django app. The controller section handles the api
# calls for each
# created by Yazan Kittaneh 07-12-2016

from django.shortcuts import render
from django.http import HttpResponse, HttpResponseRedirect
from .models import Student, College, Coefficient, Custom_Coefficient
from rest_framework import generics
from .serializers import CollegeSerializer, CoefficientSerializer, Custom_CoefficientSerializer

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


def testJS(request):
    return render(request, 'CollegeBot/test.html')



"""
STUDENT MODEL CONTROLLERS
"""
def all_student(request):
    all_student = Student.objects.all()
    return render(request, 'CollegeBot/API/all/all_student.html', {'all_student': all_student})

class StudentDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Student.objects.all()
    serializer_class = CollegeSerializer

def student(request, student_id):
    student = Student.objects.get(pk=college_id)
    return render(request, 'CollegeBot/api/object/student.html', {'Student':student})


"""
COLLEGE MODEL CONTROLLERS
"""
def all_colleges(request):
    all_colleges = College.objects.all()
    return render(request, 'CollegeBot/api/all/all_colleges.html', {'all_colleges': all_colleges})

class CollegeDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = College.objects.all()
    serializer_class = CollegeSerializer

def college(request, college_id):
    college = College.objects.get(pk=college_id)
    return render(request, 'CollegeBot/api/object/college.html', {'College':college})

"""
COEFFICIENT MODEL CONTROLLERS
"""
def all_coefficients(request):
    all_coefficients = Coefficient.objects.all()
    return render(request, 'CollegeBot/api/all/all_coefficients.html', {'all_coefficients': all_coefficients})

class CoefficientDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Coefficient.objects.all()
    serializer_class = CoefficientSerializer

def coefficient(request, coefficient_id):
    coefficient = Coefficient.objects.get(pk=coefficient_id)
    return render(request, 'CollegeBot/api/object/Coefficient.html', {'Coefficient':coefficient})

"""
CUSTOM COEFFICIENT MODEL CONTROLLERS
"""
def all_custom_coefficients(request):
    all_custom_coefficients = Custom_Coefficient.objects.all()
    return render(request, 'CollegeBot/api/all/all_custom_coefficients.html', {'all_custom_coefficients': all_custom_coefficients})

class Custom_CoefficientDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Custom_Coefficient.objects.all()
    serializer_class = Custom_CoefficientSerializer

def custom_coefficient(request, custom_coefficient_id):
    custom_coefficient =  Custom_Coefficient.objects.get(pk=custom_coefficient_id)
    return render(request, 'CollegeBot/api/object/custom_coefficient.html', {'Custom_Coefficient':coefficient})
