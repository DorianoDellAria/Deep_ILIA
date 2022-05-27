import profile
from xmlrpc.client import TRANSPORT_ERROR
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


def partners(instance, filename):
    ext = filename.split('.')[-1]
    # get filename
    filename = '{}.{}'.format(uuid4().hex, ext)
    # return the whole path to the file
    return os.path.join('project', filename)

# Create your models here.


class User(AbstractUser):
    # TODO: TextField
    summary = models.CharField(max_length=200)
    biography = models.TextField()
    orbi_url = models.CharField(max_length=200, blank=True)
    profile_pic = ResizedImageField(
        size=[500, 500], upload_to=wrapper, crop=['middle', 'center'], blank=True, null=True)
    # profile_pic = models.ImageField(
    #     upload_to=wrapper, blank=True)


class Publication(models.Model):
    user_id = models.ForeignKey(
        User, on_delete=models.CASCADE, related_name='publications')
    citation = models.TextField()
    link = models.CharField(max_length=100)


class SocialNetwork(models.Model):
    user_id = models.ForeignKey(
        User, on_delete=models.CASCADE, related_name='social_networks')
    type = models.CharField(max_length=50)
    link = models.CharField(max_length=50, blank=True)


class Project(models.Model):
    title = models.CharField(max_length=200)
    start_date = models.DateField(null=True, blank=True)
    end_date = models.DateField(null=True, blank=True)
    description = models.TextField()
    image_url = models.ImageField(upload_to=partners, blank=True)
    partner_url = models.ImageField(upload_to=partners, blank=True)
    coordinators = models.ManyToManyField(
        User, related_name='projects_coordinated', blank=True)
    researchers = models.ManyToManyField(
        User, related_name='projects_research', blank=True)
    collaborators = models.ManyToManyField(
        User, related_name='projects_collab', blank=True)
