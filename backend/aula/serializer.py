from rest_framework import serializers

from aula.models import AulaModel

class AulaSerializer(serializers.ModelSerializer):
    class Meta:
        model = AulaModel
        fields = ['id', 'nome', 'modulo', 'data']
