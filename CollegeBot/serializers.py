from rest_framework import serializers
from .models import Student, College, Coefficient, Custom_Coefficient

#Serializer classes that are called in the views.py 

class StudentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Student
        fields = '__all__'

class CollegeSerializer(serializers.ModelSerializer):
    class Meta:
        model = College

class CollegeListSerializer(serializers.ListSerializer):
    class Meta:
        model = College

class CoefficientSerializer(serializers.ModelSerializer):
    class Meta:
        model = Coefficient

class Custom_CoefficientSerializer(serializers.ModelSerializer):
    class Meta:
        model = Custom_Coefficient
