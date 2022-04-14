from rest_framework import serializers

from modulo.models import ModuloModel
from aula.serializer import AulaShortSerializer

class ModuloSerializer(serializers.ModelSerializer):
    class Meta:
        model = ModuloModel
        fields = ('modulo_id', 'nome')

    def to_representation(self, instance):
        representation = super().to_representation(instance)
        representation['qtd_aulas'] = instance.aulas.count()
        return representation


class ModuloShortSerializer(serializers.ModelSerializer):
    class Meta:
        model = ModuloModel
        fields = ('modulo_id', 'nome')

class ModuloFullSerializer(serializers.ModelSerializer):
    aulas = AulaShortSerializer(many=True)

    class Meta:
        model = ModuloModel
        fields = ('modulo_id', 'nome', 'aulas')
