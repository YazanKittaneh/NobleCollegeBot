# -*- coding: utf-8 -*-
# Generated by Django 1.9.7 on 2016-07-14 18:42
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('trialbot', '0010_auto_20160714_1840'),
    ]

    operations = [
        migrations.AlterField(
            model_name='college',
            name='INSTNM',
            field=models.CharField(default='Test', max_length=100),
        ),
    ]
