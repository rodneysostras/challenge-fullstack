# Generated by Django 4.0.3 on 2022-06-05 02:57

from django.db import migrations, models
import django.db.models.deletion
import uuid


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('modulo', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='AulaModel',
            fields=[
                ('aula_id', models.AutoField(editable=False, primary_key=True, serialize=False)),
                ('aula_uuid', models.UUIDField(default=uuid.uuid4, editable=False, unique=True)),
                ('nome', models.CharField(max_length=255, unique=True)),
                ('estreia', models.DateTimeField()),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('modulo', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='aulas', to='modulo.modulomodel')),
            ],
            options={
                'ordering': ['nome'],
            },
        ),
    ]
