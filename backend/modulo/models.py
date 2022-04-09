import uuid
from django.db import models

class ModuloModel(models.Model):
    id = models.AutoField(primary_key=True, editable=False)
    modulo_uuid = models.UUIDField(unique=True, default=uuid.uuid4, editable=False)
    nome = models.CharField(max_length=255)
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ['nome']
