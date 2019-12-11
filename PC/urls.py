
from django.urls import path, include
from .views import DaterViewSet, PotentialViewSet, MessageViewSet # This library gives us all of the functions usually found in views.py
from rest_framework.routers import DefaultRouter
from .views import current_user, UserList

router = DefaultRouter()
router.register(r'', DaterViewSet, basename='daters')
router.register(r'', PotentialViewSet, basename='potentials')
router.register(r'', MessageViewSet, basename='messages')
urlpatterns = router.urls



urlpatterns = [
    path('current_user/', current_user),
    path('users/', UserList.as_view())
]