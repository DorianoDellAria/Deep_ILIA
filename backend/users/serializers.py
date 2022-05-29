from rest_framework import serializers
from .models import User, Project, Publication, SocialNetwork, New, Event, Application
import logging

logger = logging.getLogger(__name__)


class SocialNetworkSerializer(serializers.ModelSerializer):

    class Meta:
        model = SocialNetwork
        fields = ('id', 'type', 'link')


class PublicationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Publication
        fields = '__all__'


class UserSerializer(serializers.ModelSerializer):
    social_networks = SocialNetworkSerializer(many=True)
    password = serializers.CharField(write_only=True)
    # publications = PublicationSerializer(
    #     many=True, read_only=True)
    profile_pic = serializers.ImageField(read_only=True)

    class Meta:
        model = User
        fields = ('id', 'summary', 'username', 'password', 'orbi_url',
                  'profile_pic', 'biography', 'social_networks', 'email', 'first_name', 'last_name')

    def create(self, validated_data):
        # logger.error('UserSerializer.create')
        social_networks_data = validated_data.pop('social_networks')
        user = User.objects.create_user(**validated_data)
        user.set_password(validated_data['password'])
        for social_network_data in social_networks_data:
            SocialNetwork.objects.create(user_id=user, **social_network_data)
        return user


class MemberSerializer(serializers.ModelSerializer):

    class Meta:
        model = User
        fields = ('id', 'username', 'profile_pic')


class ProjectSerializer(serializers.ModelSerializer):

    coordinators = MemberSerializer(many=True, read_only=True)
    researchers = MemberSerializer(many=True, read_only=True)
    collaborators = MemberSerializer(many=True, read_only=True)

    class Meta:
        model = Project
        fields = '__all__'


class NewSerializer(serializers.ModelSerializer):
    class Meta:
        model = New
        fields = '__all__'


class EventSerializer(serializers.ModelSerializer):
    class Meta:
        model = Event
        fields = '__all__'

    

class ApplicationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Application
        fields = '__all__'
