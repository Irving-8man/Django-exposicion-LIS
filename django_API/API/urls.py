from django.urls import path,include
from rest_framework.routers import DefaultRouter #rutas dinamicas
from .views import  UsuarioDBViewSet
from rest_framework.documentation import include_docs_urls

#definimos el camino a seguir la api y sus registros de la API
router = DefaultRouter()
router.register(r'usuarios',UsuarioDBViewSet,basename='usuarios')

#Aqui guardamos las rutas GET, POST, PUT y DELETE
urlpatterns = [
    path('api/v1/',include(router.urls)),
    path('docs/',include_docs_urls(title="Usuarios API")),
]
