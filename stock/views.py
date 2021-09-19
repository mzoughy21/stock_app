from django.shortcuts import render

# Create your views here.
def Article_list(request):
    return render(request, 'stock/Article_list.html',{})
