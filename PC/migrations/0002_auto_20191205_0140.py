# Generated by Django 3.0 on 2019-12-05 01:40

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('PC', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='dater',
            name='dater_photo',
            field=models.ImageField(null=True, upload_to='images/'),
        ),
        migrations.AlterField(
            model_name='dater',
            name='pet_photo',
            field=models.ImageField(null=True, upload_to='images/'),
        ),
    ]