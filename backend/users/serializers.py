from rest_framework import serializers
from .models import User, Project, Publication, SocialNetwork


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = '__all__'


class ProjectSerializer(serializers.ModelSerializer):
    class Meta:
        model = Project
        fields = '__all__'


class PublicationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Publication
        fields = '__all__'


class SocialNetworkSerializer(serializers.ModelSerializer):
    class Meta:
        model = SocialNetwork
        fields = '__all__'
