from django.urls import path, include
from modulo.views import ModuloViewSet
from rest_framework import routers

router = routers.DefaultRouter()
router.register(r'modulo', ModuloViewSet)

urlpatterns = [
    path('', include(router.urls)),
    path('ping', include('ping.urls')),
]

handler404 = 'error.views.e404View'
