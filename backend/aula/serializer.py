from rest_framework import serializers

from aula.models import AulaModel

class AulaSerializer(serializers.ModelSerializer):
    class Meta:
        model = AulaModel
        fields = ('aula_id', 'nome', 'estreia', 'modulo')


class AulaShortSerializer(serializers.ModelSerializer):
    class Meta:
        model = AulaModel
        fields = ('aula_id', 'nome', 'estreia')
