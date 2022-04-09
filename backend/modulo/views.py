from rest_framework import viewsets
from modulo.models import ModuloModel
from modulo.serializer import ModuloSerializer

class ModuloViewSet(viewsets.ModelViewSet):
    queryset = ModuloModel.objects.all()
    serializer_class = ModuloSerializer
