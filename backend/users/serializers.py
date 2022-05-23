from rest_framework import serializers
from .models import User, Project, Publication, SocialNetwork
import logging

logger = logging.getLogger(__name__)

class SocialNetworkSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = SocialNetwork
        fields = ('id', 'Type', 'Link')


class UserSerializer(serializers.ModelSerializer):
    social_networks = SocialNetworkSerializer(many=True)

    class Meta:
        model = User
        fields = ('id', 'Name_surname', 'Summary',
                  'Biography', 'Is_admin', 'social_networks')

    def create(self, validated_data):
        # logger.error('UserSerializer.create')
        social_networks_data = validated_data.pop('social_networks')
        user = User.objects.create(**validated_data)
        for social_network_data in social_networks_data:
            SocialNetwork.objects.create(UserId=user, **social_network_data)
        return user


class ProjectSerializer(serializers.ModelSerializer):
    class Meta:
        model = Project
        fields = '__all__'


class PublicationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Publication
        fields = '__all__'
