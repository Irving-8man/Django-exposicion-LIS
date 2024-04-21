from django.db import models

# Create your models here.
class UsuarioDB(models.Model):
    nombre = models.CharField(max_length=75,verbose_name="Nombre")
    apellido = models.CharField(max_length=75,verbose_name="Apellido")
    edad = models.IntegerField(verbose_name="Edad")

    class Meta:
      db_table = "Usuarios"
      verbose_name = "Usuario"
      verbose_name_plural = "Usuarios"
    
    def __str__(self) -> str:
        return self.nombre
