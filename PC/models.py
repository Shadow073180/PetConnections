# Create your models here.
from django.db import models
from django.utils import timezone
from django.contrib.auth.models import User

# Create your models here.

class Dater(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    gender = models.CharField(max_length=10)
    interested_in = models.CharField(max_length=10)
    astrological_sign = models.CharField(max_length=40)
    age = models.IntegerField()
    height = models.IntegerField()
    dater_name = models.CharField(max_length=55)
    dater_email_address = models.CharField(max_length=55)
    dater_telephone = models.CharField(max_length=30)
    address_line_1 = models.CharField(max_length=55)
    address_line_2 = models.CharField(max_length=25, null=True)
    city = models.CharField(max_length=30)
    state = models.CharField(max_length=2)
    zip = models.CharField(max_length=5)
    ethnicity = models.CharField(max_length=30)
    body_type = models.CharField(max_length=15)
    looking_for = models.CharField(max_length=25)
    has_children = models.BooleanField()
    has_children_no = models.IntegerField(null=True)
    education = models.CharField(max_length=20)
    religion = models.CharField(max_length=15)
    smokes = models.BooleanField()
    smokes_vape = models.BooleanField(null=True)
    dater_story = models.TextField()
    dater_photo = models.ImageField(upload_to='images/', null=True)
    pet_photo = models.ImageField(upload_to='images/', null=True)
    pet_name = models.CharField(max_length=30)
    pet_breed = models.CharField(max_length=30)
    pet_color = models.CharField(max_length=20)
    pet_age = models.IntegerField()
    pet_story = models.TextField()

    
    def __str__(self):
        return f"{self.dater_name}"

class Potential(models.Model):
    dater = models.ForeignKey(Dater, on_delete=models.CASCADE, related_name='potentials')

    def __str__(self):
        return f"{self.dater}"

class Message(models.Model):
    title = models.CharField(max_length = 255)
    message_text = models.TextField()
    dater = models.ForeignKey(Dater, on_delete=models.CASCADE,   related_name='messages')
    potential = models.ForeignKey(Potential, on_delete=models.CASCADE, related_name='messages')
    created_date = models.DateField()

    def __str__(self):
        return f"{self.title}"