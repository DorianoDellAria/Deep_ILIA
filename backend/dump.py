import setup
from users.models import Publication

# dump all publications
print(Publication.objects.all().delete())
