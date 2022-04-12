from django.shortcuts import get_object_or_404
from rest_framework import viewsets
from rest_framework.response import Response


from modulo.models import ModuloModel
from modulo.serializer import ModuloSerializer, ModuloFullSerializer

class ModuloViewSet(viewsets.ViewSet):

    def list(self, request):
        queryset = ModuloModel.objects.all()
        serializer = ModuloSerializer(queryset, many=True)
        return Response(serializer.data)

    def retrieve(self, request, pk=None):
        queryset = ModuloModel.objects.all()
        modulo = get_object_or_404(queryset, pk=pk)
        serializer = ModuloFullSerializer(modulo)
        return Response(serializer.data)

