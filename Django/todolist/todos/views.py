from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.decorators import api_view
from .api import TodoSerializer
from .models import Todo

# Create your views here.
@api_view(['GET'])
def todoList(request):
    todos = Todo.objects.all()
    serializer=TodoSerializer(todos,many=True)
    return Response(serializer.data)

@api_view(['GET'])
def todoDetail(request,pk):
    todo=Todo.objects.get(id=pk)
    serializer=TodoSerializer(todo)
    return Response(serializer.data)

@api_view(['DELETE'])
def todoDelete(request,pk):
    todo=Todo.objects.get(id=pk)
    todo.delete()
    return Response('Deleted!! ')

@api_view(['PUT'])
def todoUpdate(request,pk):
    todo=Todo.objects.get(id=pk)
    serializer=TodoSerializer(instance=todo,data=request.data)
    if(serializer.is_valid()):
        serializer.save()
    return Response(serializer.data)

@api_view(['POST'])
def todoCreate(request):
    serializer=TodoSerializer(data=request.data)
    if(serializer.is_valid()):
        serializer.save()
    return Response(serializer.data)
