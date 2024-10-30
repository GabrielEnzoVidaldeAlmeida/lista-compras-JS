from django.urls import path
from listacompras.views import ListaCompras

urlpatterns = [
    path('', ListaCompras, name="ListaCompras"),
]