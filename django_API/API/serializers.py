from rest_framework import serializers
from Usuarios.models import UsuarioDB #Llama el modelo de la app

#serializador
#Aqui agregamos el modelo que se va a serializar, con sus campos
class UsuarioDBSerializer(serializers.ModelSerializer):
  class Meta:
    model = UsuarioDB
    fields = '__all__'