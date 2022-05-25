from django.urls import path
from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
)

from . import views

urlpatterns = [
    path('get_user/<str:username>', views.get_user,
         name='get_user'),
    path('get_users/', views.get_users, name='get_users'),
    path('get_publications/<str:username>',
         views.get_user_publications, name='get_user_publications'),
    path('get_user_projects/', views.get_user_projects, name='get_user_projects'),
    path('get_user_social_networks/', views.get_user_social_networks,
         name='get_user_social_networks'),
    path('get_projects/', views.get_projects, name='get_projects'),
    path('get_publications/', views.get_publications, name='get_publications'),
    path('create_user/', views.create_user, name='create_user'),
    path('create_project/', views.create_project, name='create_project'),
    path('token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
]
