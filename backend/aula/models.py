import uuid
from django.db import models
from modulo.models import ModuloModel

class AulaModel(models.Model):
    aula_id = models.AutoField(primary_key=True, editable=False)
    aula_uuid = models.UUIDField(unique=True, default=uuid.uuid4, editable=False)
    nome = models.CharField(unique=True, max_length=255)
    estreia = models.DateTimeField()
    created_at = models.DateTimeField(auto_now_add=True)

    modulo = models.ForeignKey(ModuloModel, on_delete=models.CASCADE, related_name="aulas")

    class Meta:
        ordering = ['nome']

    def __str__(self):
        return '%d: %s' % (self.aula_id, self.nome)
