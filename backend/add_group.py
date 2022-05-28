import setup
from django.contrib.auth.models import Group


if __name__ == '__main__':
    Group.objects.update_or_create(name='Professor')
    Group.objects.update_or_create(name='PhD_Student')
