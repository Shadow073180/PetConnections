from django.shortcuts import render

# Create your views here.
from .models import Dater, Potential, Message
from .serializers import DaterSerializer, PotentialSerializer, MessageSerializer
from rest_framework import viewsets

class DaterViewSet(viewsets.ModelViewSet):
    queryset = Dater.objects.all()
    serializer_class = DaterSerializer

class PotentialViewSet(viewsets.ModelViewSet):
    queryset = Potential.objects.all()
    serializer_class = PotentialSerializer

class MessageViewSet(viewsets.ModelViewSet):
    queryset = Message.objects.all()
    serializer_class = MessageSerializer
