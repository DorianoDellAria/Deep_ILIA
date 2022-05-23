from django.db import models

# Create your models here.


class User(models.Model):
    Name_surname = models.CharField(max_length=50)
    Summary = models.CharField(max_length=200)
    Biography = models.CharField(max_length=200)
    Is_admin = models.BooleanField(default=False)
    # Publications = models.OneToManyField(Publication)


class Publication(models.Model):
    UserId = models.ForeignKey(User, on_delete=models.CASCADE)
    Name = models.CharField(max_length=50)
    Year = models.IntegerField()
    Journal = models.CharField(max_length=50)
    Author = models.CharField(max_length=50)


class SocialNetwork(models.Model):
    UserId = models.ForeignKey(User, on_delete=models.CASCADE)
    Type = models.CharField(max_length=50)
    Link = models.CharField(max_length=50)


class Project(models.Model):
    ...


class ProjectMembers(models.Model):
    UserId = models.ForeignKey(User, on_delete=models.CASCADE)
    ProjectId = models.ForeignKey(Project, on_delete=models.CASCADE)
    Role = models.CharField(max_length=50)
    Start_date = models.DateField()
    End_date = models.DateField()
    Description = models.CharField(max_length=200)
