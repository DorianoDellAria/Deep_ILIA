from django.db import models
from django.contrib.auth.models import AbstractUser

# Create your models here.


class User(AbstractUser):
    Summary = models.CharField(max_length=200)
    Biography = models.CharField(max_length=200)


class Publication(models.Model):
    UserId = models.ForeignKey(User, on_delete=models.CASCADE)
    Name = models.CharField(max_length=50)
    Year = models.IntegerField()
    Journal = models.CharField(max_length=50)
    Author = models.CharField(max_length=50)


class SocialNetwork(models.Model):
    UserId = models.ForeignKey(User, on_delete=models.CASCADE, related_name='social_networks')
    Type = models.CharField(max_length=50)
    Link = models.CharField(max_length=50)


class Project(models.Model):
    Title = models.CharField(max_length=50)
    Image_url = models.CharField(max_length=50)
    Description = models.CharField(max_length=200)
    Status = models.CharField(max_length=50)
    Date = models.DateField(null=True)
    ProjectMembers = models.ManyToManyField(User, related_name='projects')

