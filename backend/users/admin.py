from django.contrib import admin
from .models import User, SocialNetwork, Project
from .forms import CustomUserCreationForm
from django.contrib.auth.admin import UserAdmin
# Register your models here.


class CustomUserAdmin(UserAdmin):
    model = User
    add_form = CustomUserCreationForm
    fieldsets = (
        *UserAdmin.fieldsets,
        (
            'Additional Information',
            {
                'fields': (
                    'summary',
                    'biography',
                    'orbi_url',
                    'profile_pic',
                )
            }
        )
    )


admin.site.register(User, CustomUserAdmin)
admin.site.register(SocialNetwork)
admin.site.register(Project)
