from django.shortcuts import render

# Create your views here.
def ListaCompras(request):
    return render(request, "listacompras/index.html")