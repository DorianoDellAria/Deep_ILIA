from rest_framework import serializers
from .models import User, Project, Publication, SocialNetwork
import logging

logger = logging.getLogger(__name__)


class SocialNetworkSerializer(serializers.ModelSerializer):

    class Meta:
        model = SocialNetwork
        fields = ('id', 'type', 'link')


class ProjectSerializer(serializers.ModelSerializer):
    class Meta:
        model = Project
        fields = '__all__'


class PublicationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Publication
        fields = '__all__'


class UserSerializer(serializers.ModelSerializer):
    social_networks = SocialNetworkSerializer(many=True)
    projects = ProjectSerializer(many=True, read_only=True)
    publications = PublicationSerializer(many=True, read_only=True)
    password = serializers.CharField(write_only=True)

    class Meta:
        model = User
        fields = ('id', 'summary', 'username', 'password', 'orbi_url',
                  'profile_pic', 'biography', 'social_networks', 'projects', 'publications')

    def create(self, validated_data):
        # logger.error('UserSerializer.create')
        social_networks_data = validated_data.pop('social_networks')
        user = User.objects.create_user(**validated_data)
        user.set_password(validated_data['password'])
        for social_network_data in social_networks_data:
            SocialNetwork.objects.create(UserId=user, **social_network_data)
        return user
