from django.urls import path, include
from rest_framework import routers

from aula.views import AulaViewSet
from modulo.views import ModuloViewSet

router = routers.DefaultRouter()
router.register(r'modulo', ModuloViewSet, basename="ModuloModel")
router.register(r'aula', AulaViewSet, basename="AulaModel")

urlpatterns = [
    path('api/', include(router.urls)),
    path('ping', include('ping.urls')),
]

handler404 = 'error.views.e404View'
