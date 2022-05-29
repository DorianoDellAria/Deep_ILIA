from django.db import models
from django.contrib.auth.models import AbstractUser
from django.utils.timezone import now
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

    class Meta:
        ordering = ['id']


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


class New(models.Model):
    title = models.CharField(max_length=200)
    date = models.DateField(null=True, blank=True)
    description = models.TextField()
    image_url = models.ImageField(upload_to=partners, blank=True)


class Event(models.Model):
    title = models.CharField(max_length=200)
    date = models.DateField(null=True, blank=True)
    description = models.TextField()
    image_url = models.ImageField(upload_to=partners, blank=True)


class Application(models.Model):
    name = models.CharField(max_length=200)
    description = models.CharField(max_length=200)
    abstract = models.TextField()
    video_id = models.CharField(max_length=200, blank=True)
    application_uri = models.CharField(max_length=200, blank=True)
    application_host = models.CharField(max_length=200, blank=True)
    github_url = models.CharField(max_length=200, blank=True)
    site_url = models.CharField(max_length=200, blank=True)


class ApplicationFeedback(models.Model):
    application_id = models.ForeignKey(
        Application, on_delete=models.CASCADE, related_name='feedbacks')
    user_id = models.ForeignKey(
        User, on_delete=models.CASCADE, related_name='feedbacks')
    feedback = models.TextField()
    date = models.DateTimeField(default=now)
