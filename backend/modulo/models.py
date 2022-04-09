import uuid
from django.db import models

class ModuloModel(models.Model):
    id = models.IntegerField(unique=True, auto_created=True, editable=False)
    modulo_uuid = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    nome = models.CharField(max_length=255)
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ['nome']
