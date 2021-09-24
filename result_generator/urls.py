from django.urls import path
from django.conf.urls import url
from . import views

app_name = 'CMS'

urlpatterns = [
    path('', views.index, name="index"),
    path('result/', views.generate_result, name='result')
]