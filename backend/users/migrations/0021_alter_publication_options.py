# Generated by Django 4.0.4 on 2022-05-26 11:28

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('users', '0020_merge_20220526_0739'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='publication',
            options={'ordering': ['id']},
        ),
    ]
