from rest_framework import viewsets #esto te permite no repetir el CRUD de manera automatica
from Usuarios.models import UsuarioDB # el modelo para las querys 
from .serializers import UsuarioDBSerializer #y el serializador


# Creamos todas las vistas para nuestros endpoints con solo heredar de viewsets, 
#define el end para consulta, borrar, actualizar, listar todo
class UsuarioDBViewSet(viewsets.ModelViewSet):
  queryset = UsuarioDB.objects.all() #Los datos que son consultados
  serializer_class = UsuarioDBSerializer #se serializa
