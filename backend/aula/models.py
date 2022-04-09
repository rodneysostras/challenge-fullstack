import uuid
from django.db import models
from modulo.models import ModuloModel

class AulaModel(models.Model):
    id = models.IntegerField(unique=True, auto_created=True, editable=False)
    aula_uuid = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    nome = models.CharField(max_length=255)
    ordem = models.IntegerField(unique=True)
    modulo = models.ForeignKey(ModuloModel, related_name='modulo_aulas', on_delete=models.CASCADE)
    estreia = models.DateTimeField()
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ['nome']

    def __str__(self):
        return '%d: %s' % (self.ordem, self.nome)
