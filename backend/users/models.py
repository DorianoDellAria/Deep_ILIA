import profile
from django.db import models
from django.contrib.auth.models import AbstractUser
from django_resized import ResizedImageField

import os
from uuid import uuid4


def wrapper(instance, filename):
    ext = filename.split('.')[-1]
    # get filename
    filename = '{}.{}'.format(uuid4().hex, ext)
    # return the whole path to the file
    return os.path.join('profile_pics', filename)

# Create your models here.


class User(AbstractUser):
    Summary = models.CharField(max_length=200)
    Biography = models.CharField(max_length=200)
    Orbi_url = models.CharField(max_length=200)
    profile_pic = ResizedImageField(
        size=[117, 117], upload_to=wrapper, crop=['middle', 'center'], blank=True, null=True)
    # profile_pic = models.ImageField(
    #     upload_to=wrapper, blank=True)


class Publication(models.Model):
    UserId = models.ForeignKey(User, on_delete=models.CASCADE)
    Citation = models.CharField(max_length=600)
    Link = models.CharField(max_length=100)


class SocialNetwork(models.Model):
    UserId = models.ForeignKey(
        User, on_delete=models.CASCADE, related_name='social_networks')
    Type = models.CharField(max_length=50)
    Link = models.CharField(max_length=50)


class Project(models.Model):
    Title = models.CharField(max_length=50)
    Image_url = models.CharField(max_length=50)
    Description = models.CharField(max_length=200)
    Status = models.CharField(max_length=50)
    Date = models.DateField(null=True)
    ProjectMembers = models.ManyToManyField(User, related_name='projects')
