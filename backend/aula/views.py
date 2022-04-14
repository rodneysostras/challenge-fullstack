from django.http import Http404
from rest_framework import viewsets, status
from rest_framework.response import Response

from aula.models import AulaModel
from aula.serializer import AulaSerializer

class AulaViewSet(viewsets.ViewSet):
    def get_object(self, pk=None):
        try:
            return AulaModel.objects.get(pk=pk)
        except AulaModel.DoesNotExist:
            raise Http404

    def list(self, request):
        queryset = AulaModel.objects.all()
        serializer = AulaSerializer(queryset, many=True)
        return Response(serializer.data)

    def retrieve(self, request, pk=None):
        queryset = self.get_object(pk=pk)
        serializer = AulaSerializer(queryset)
        return Response(serializer.data)

    def create(self, request):
        serializer = AulaSerializer(data=request.data)

        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)

        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def update(self, request, pk=None):
        queryset = self.get_object(pk=pk)
        serializer = AulaSerializer(queryset, data=request.data)

        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)

        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def destroy(self, request, pk=None):
        Aula = self.get_object(pk=pk)
        Aula.delete()

        return Response(status=status.HTTP_204_NO_CONTENT)





