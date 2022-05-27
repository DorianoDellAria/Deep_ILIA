from rest_framework.response import Response
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated
from rest_framework.generics import ListAPIView
from .models import User, Project, Publication, SocialNetwork
from .serializers import UserSerializer, ProjectSerializer, PublicationSerializer, SocialNetworkSerializer
from .pagination import CustomPagination
import logging

logger = logging.getLogger(__name__)

# Create your views here.


@api_view(['GET'])
def get_users(request):
    users = User.objects.all()
    serializer = UserSerializer(users, many=True)
    return Response(serializer.data)


@api_view(['GET'])
def get_user(request, username):
    user = User.objects.get(username=username)
    serializer = UserSerializer(user)
    return Response(serializer.data)


@api_view(['GET'])
def get_group(request, group_name):
    # find users that belong to the group
    users = User.objects.filter(groups__name=group_name)
    serializer = UserSerializer(users, many=True)
    return Response(serializer.data)


@api_view(['POST'])
def create_user(request):
    # logger.error('create_user')
    serializer = UserSerializer(data=request.data)
    # logger.error(request.data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data, status=201)
    return Response(serializer.errors, status=400)


@api_view(['GET'])
def get_user_publications(request, username):
    publications = User.objects.get(username=username).publication_set.all()
    serializer = PublicationSerializer(publications, many=True)
    return Response(serializer.data)


@api_view(['POST'])
def get_user_projects(request):
    user_id = request.data.get('user_id')
    if not user_id:
        return Response({'error': 'user_id is required'}, status=400)
    projects = User.objects.get(id=user_id).project_set.all()
    serializer = ProjectSerializer(projects, many=True)
    return Response(serializer.data)


@api_view(['POST'])
def get_user_social_networks(request):
    user_id = request.data.get('user_id')
    if not user_id:
        return Response({'error': 'user_id is required'}, status=400)
    social_networks = User.objects.get(id=user_id).socialnetwork_set.all()
    serializer = SocialNetworkSerializer(social_networks, many=True)
    return Response(serializer.data)


@api_view(['GET'])
def get_projects(request):
    projects = Project.objects.all()
    serializer = ProjectSerializer(projects, many=True)
    return Response(serializer.data)


@api_view(['POST'])
@permission_classes([IsAuthenticated])
def create_project(request):
    serializer = ProjectSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data, status=201)
    return Response(serializer.errors, status=400)


class GetPublicationsView(ListAPIView):
    serializer_class = PublicationSerializer
    pagination_class = CustomPagination
    queryset = Publication.objects.all()


class GetUserPublicationsView(ListAPIView):
    serializer_class = PublicationSerializer
    pagination_class = CustomPagination

    def get_queryset(self):
        username = self.kwargs.get('username')
        if not username:
            return Publication.objects.none()
        user = User.objects.filter(username=username).first()
        if not user:
            return Publication.objects.none()
        return Publication.objects.filter(user_id=user.id)


@api_view(['POST'])
@permission_classes([IsAuthenticated])
def update_image(request):
    user = request.user
    user.profile_pic = request.data.get('image')
    user.save()
    return Response({'message': 'image updated'})
