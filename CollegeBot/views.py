# View controller for the django app. The controller section handles the api
# calls for each
# created by Yazan Kittaneh 07-12-2016
#cite for serializers: https://www.youtube.com/watch?v=QW_5xCCPWFk

from django.shortcuts import render
from django.http import HttpResponse, HttpResponseRedirect
from .models import Student, College, Coefficient, Custom_Coefficient
from rest_framework import generics
from .serializers import CollegeSerializer, CoefficientSerializer, Custom_CoefficientSerializer
from rest_framework.views import APIView
from rest_framework.response import Response

def testJS(request):
    return render(request, 'CollegeBot/test.html')


"""
STUDENT MODEL CONTROLLERS
"""

#Searilizes the Student objects so you can call their JSON data one by one
#or all at once
class StudentDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Student.objects.all()
    serializer_class = CollegeSerializer

    def get(self, request):
        # Note the use of `get_queryset()` instead of `self.queryset`
        #queryset = get_queryset()
        queryset = Student.objects.all()[:5]
        serializer = StudentSerializer(queryset, many=True)
        return Response(serializer.data)


def student(request, student_id):
    student = Student.objects.get(pk=college_id)
    return render(request, 'CollegeBot/api/object/student.html', {'Student':student})


"""
COLLEGE MODEL CONTROLLERS
"""

#Searilizes the College objects so you can call their JSON data one by one
#or all at once
class CollegeDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = College.objects.all()
    serializer_class = CollegeSerializer


    def get(self, request):
        # Note the use of `get_queryset()` instead of `self.queryset`
        #queryset = get_queryset()
        #if isinstance(college_id,int):
        #    queryset = College.objects.get(pk=college_id)
        #else:
        queryset = College.objects.all()[:5]
        serializer = CollegeSerializer(queryset, many=True)
        return Response(serializer.data)


def college(request, college_id):
    college = College.objects.get(pk=college_id)
    return render(request, 'CollegeBot/api/object/college.html', {'College':college})

"""
COEFFICIENT MODEL CONTROLLERS
"""

#Searilizes the Coefficient objects so you can call their JSON data one by one
#or all at once
class CoefficientDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Coefficient.objects.all()
    serializer_class = CoefficientSerializer

    def get(self, request):
        # Note the use of `get_queryset()` instead of `self.queryset`
        #queryset = get_queryset()
        queryset = Coefficient.objects.all()[:5]
        serializer = CoefficientSerializer(queryset, many=True)
        return Response(serializer.data)


def coefficient(request, coefficient_id):
    coefficient = Coefficient.objects.get(pk=coefficient_id)
    return render(request, 'CollegeBot/api/object/Coefficient.html', {'Coefficient':coefficient})

"""
CUSTOM COEFFICIENT MODEL CONTROLLERS
"""

#Searilizes the Custom Coefficient objects so you can call their JSON data one by one
#or all at once
class Custom_CoefficientDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Custom_Coefficient.objects.all()
    serializer_class = Custom_CoefficientSerializer

    def get(self, request):
        queryset = Custom_Coefficient.objects.all()[:5]
        serializer = Custom_CoefficientSerializer(queryset, many=True)
        return Response(serializer.data)


def custom_coefficient(request, custom_coefficient_id):
    custom_coefficient =  Custom_Coefficient.objects.get(pk=custom_coefficient_id)
    return render(request, 'CollegeBot/api/object/custom_coefficient.html', {'Custom_Coefficient':coefficient})
