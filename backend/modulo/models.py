import uuid
from django.db import models

class ModuloModel(models.Model):
    modulo_id = models.AutoField(primary_key=True, editable=False)
    modulo_uuid = models.UUIDField(unique=True, default=uuid.uuid4, editable=False)
    nome = models.CharField(unique=True, max_length=255)
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ['nome']

    def __str__(self):
        return self.nome
