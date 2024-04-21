from django.contrib import admin
from .models import UsuarioDB

# Register your models here.
admin.site.index_title = "Hola Irving"

#agregar el modelo que deseemos editar con un decorador
@admin.register(UsuarioDB)
class AutorAdmin(admin.ModelAdmin):
    #Son los que podemos editar como admin
    fields = ["nombre","apellido","edad"]
    #Son lo que nos va mostrar en el dashboar
    list_display = ["nombre","apellido","edad"]