from django.urls import path, re_path, include
from django.shortcuts import render
from rest_framework import routers
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView

from aula.views import AulaViewSet
from modulo.views import ModuloViewSet

router = routers.DefaultRouter()
router.register(r'modulo', ModuloViewSet, basename="ModuloModel")
router.register(r'aula', AulaViewSet, basename="AulaModel")

def react(request):
    return render(request, 'index.html')

urlpatterns = [
    path('api/', include(router.urls)),
    path('api/auth/login', TokenObtainPairView.as_view(), name="token_obtain_pair"),
    path('api/auth/refresh-token', TokenRefreshView.as_view(), name="token_refresh"),
    path('ping', include('ping.urls')),
    re_path(r"^$", react),
    re_path(r"^(?:.*)/?$", react),
]

handler404 = 'error.views.e404View'
