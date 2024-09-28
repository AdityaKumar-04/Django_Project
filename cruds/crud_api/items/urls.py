from django.urls import path
from . import views

urlpatterns = [
    path('items/', views.get_items),
    path('items/create/', views.create_item),
    path('items/update/<str:pk>/', views.update_item),
    path('items/delete/<str:pk>/', views.delete_item),
]
