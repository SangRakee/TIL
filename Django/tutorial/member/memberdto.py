#from django.shortcuts import render
from .models import Member
from rest_framework import serializers,viewsets

# Create your views here.
class MemberSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model=Member
        fields=['id','name','email'] 


