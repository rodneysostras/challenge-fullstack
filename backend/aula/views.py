from rest_framework import viewsets
from aula.models import AulaModel
from aula.serializer import AulaSerializer

class AulaViewSet(viewsets.ModelViewSet):
    queryset = AulaModel.objects.all()
    serializer_class = AulaSerializer
