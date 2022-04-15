from django.urls import path, include
from rest_framework import routers
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView

from aula.views import AulaViewSet
from modulo.views import ModuloViewSet

router = routers.DefaultRouter()
router.register(r'modulo', ModuloViewSet, basename="ModuloModel")
router.register(r'aula', AulaViewSet, basename="AulaModel")

urlpatterns = [
    path('api/', include(router.urls)),
    path('api/auth/login', TokenObtainPairView.as_view(), name="token_obtain_pair"),
    path('api/auth/refresh-token', TokenRefreshView.as_view(), name="token_refresh"),
    path('ping', include('ping.urls')),
]

handler404 = 'error.views.e404View'
