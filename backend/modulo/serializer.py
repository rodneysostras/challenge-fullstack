from rest_framework import serializers

from modulo.models import ModuloModel

class ModuloSerializer(serializers.ModelSerializer):
    class Meta:
        model = ModuloModel
        fields = ['id', 'modulo_uuid', 'nome', 'created_at']
