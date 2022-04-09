from django.shortcuts import render
from django.http import JsonResponse

def e404View(request, exception):
    data = {'error': 404, 'description': 'not found'}
    return JsonResponse(data)
