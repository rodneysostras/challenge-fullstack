from rest_framework import serializers

from aula.models import AulaModel
from modulo.serializer import ModuloShortSerializer

class AulaSerializer(serializers.ModelSerializer):
    modulo = ModuloShortSerializer(many=False, read_only=True)

    class Meta:
        model = AulaModel
        fields = "__all__"
