from rest_framework import serializers
from .models import Dater, Potential, Message

class DaterSerializer(serializers.ModelSerializer):
    class Meta:
        model = Dater
        fields = ['gender', 'interested_in', 'astrological_sign', 'age', 'height', 'dater_name', 'dater_email_address', 'dater_telephone', 'address_line_1', 'address_line_2', 'city', 'state', 'zip', 'ethnicity', 'body_type', 'looking_for', 'has_children', 'has_children_no', 'education', 'religion', 'smokes', 'smokes_vape', 'dater_story', 'dater_photo', 'pet_photo', 'pet_name', 'pet_breed', 'pet_color', 'pet_age', 'pet_story']

class PotentialSerializer(serializers.ModelSerializer):
    class Meta:
        model = Potential
        fields = ['dater'] 

class MessageSerializer(serializers.ModelSerializer):
    class Meta:
        model = Message
        fields = ['title', 'message_text', 'dater', 'potential', 'created_date'] 