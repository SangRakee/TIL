from django.urls import path,include
from . import views


urlpatterns = [
    path('', views.memberList,name="member"),
    path('detail/<str:pk>', views.memberDetail,name="detail"),
    path('create', views.memberCreate,name="create"),
    path('update/<str:pk>', views.memberUpdate,name="update"),
    path('delete/<str:pk>', views.memberDelete,name="delete"),
    
]
