from django.http import Http404
from rest_framework import viewsets, status
from rest_framework.response import Response
from rest_framework.permissions import AllowAny, IsAuthenticated

from modulo.models import ModuloModel
from modulo.serializer import ModuloSerializer, ModuloFullSerializer

class ModuloViewSet(viewsets.ViewSet):
    def get_permissions(self):
        if self.request.method == 'GET':
            self.permission_classes = [AllowAny]
        else:
            self.permission_classes = [IsAuthenticated]

        return super(ModuloViewSet, self).get_permissions()

    def get_object(self, pk=None):
        try:
            return ModuloModel.objects.get(pk=pk)
        except ModuloModel.DoesNotExist:
            raise Http404

    def list(self, request):
        queryset = ModuloModel.objects.all()
        serializer = ModuloSerializer(queryset, many=True)
        return Response(serializer.data)

    def retrieve(self, request, pk=None):
        queryset = self.get_object(pk=pk)
        serializer = ModuloFullSerializer(queryset)
        return Response(serializer.data)

    def create(self, request):
        serializer = ModuloSerializer(data=request.data)

        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)

        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def update(self, request, pk=None):
        queryset = self.get_object(pk=pk)
        serializer = ModuloSerializer(queryset, data=request.data)

        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)

        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def destroy(self, request, pk=None):
        modulo = self.get_object(pk=pk)
        modulo.delete()

        return Response(status=status.HTTP_204_NO_CONTENT)
