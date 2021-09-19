from django.urls import path
from . import views
urlpatterns = [
    path('', views.Article_list, name='Article_list'),

]