from rest_framework import serializers

from modulo.models import ModuloModel

class ModuloSerializer(serializers.ModelSerializer):
    # aulas = serializers.SlugRelatedField(many=True, read_only=True, slug_field='nome')
    # aulas = serializers.RelatedField(many=True, read_only=True)

    class Meta:
        model = ModuloModel
        fields = ('modulo_id', 'modulo_uuid', 'nome', 'created_at')

    def to_representation(self, instance):
        representation = super().to_representation(instance)
        representation['qtd_aulas'] = instance.aulas.count()
        return representation


class ModuloShortSerializer(serializers.ModelSerializer):
    class Meta:
        model = ModuloModel
        fields = ('modulo_id', 'nome')

class ModuloFullSerializer(serializers.ModelSerializer):
    aulas = serializers.SlugRelatedField(many=True, read_only=True, slug_field='nome')

    class Meta:
        model = ModuloModel
        fields = ('__all__')
