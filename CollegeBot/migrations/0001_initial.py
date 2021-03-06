# -*- coding: utf-8 -*-
# Generated by Django 1.9.7 on 2016-07-18 20:27
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Coefficient',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('COMPETATIVENESS', models.CharField(default='Test', max_length=50, null=True)),
                ('MATCHCODE', models.CharField(default='0', max_length=50, null=True)),
                ('GPACOEF', models.DecimalField(decimal_places=5, default='000000000', max_digits=8, null=True)),
                ('ACTCOEF', models.DecimalField(decimal_places=5, default='000000000', max_digits=8, null=True)),
                ('INTERCEPT', models.DecimalField(decimal_places=5, default='000000000', max_digits=8, null=True)),
            ],
        ),
        migrations.CreateModel(
            name='College',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('UNITID', models.IntegerField(default='0')),
                ('INSTNM', models.CharField(default='Test', max_length=100, null=True)),
                ('CITY', models.CharField(default='Test', max_length=50, null=True)),
                ('STABBR', models.CharField(default='Test', max_length=50, null=True)),
                ('TYPE', models.CharField(default='Test', max_length=50, null=True)),
                ('DISTFROMCHICAGO', models.CharField(default='Test', max_length=50, null=True)),
                ('SIMPLEBARRONS', models.CharField(default='Test', max_length=50, null=True)),
                ('NETPRICE0_30', models.CharField(default='Test', max_length=50, null=True)),
                ('NETPRICE30_48', models.CharField(default='Test', max_length=50, null=True)),
                ('PERCENT_MALE', models.CharField(default='Test', max_length=50, null=True)),
                ('ADJ6YRGRAD', models.CharField(default='Test', max_length=50, null=True)),
                ('ADJ6YRGRAD_AA_HISP', models.CharField(default='Test', max_length=50, null=True)),
                ('RETENTIONAAH', models.CharField(default='Test', max_length=50, null=True)),
                ('ADJACT25', models.CharField(default='Test', max_length=50, null=True)),
                ('WEBSITE', models.CharField(default='Test', max_length=50, null=True)),
                ('MEAN_UNMET_NEED', models.CharField(default='Test', max_length=50, null=True)),
                ('MIN_UNMET_NEED', models.CharField(default='Test', max_length=50, null=True)),
                ('MAX_UNMET_NEED', models.CharField(default='Test', max_length=50, null=True)),
                ('LOCALE', models.CharField(default='Test', max_length=50, null=True)),
                ('NUMBER_UNDERGRADS', models.CharField(default='Test', max_length=50, null=True)),
                ('PUB_PRIVATE', models.CharField(default='Test', max_length=50, null=True)),
                ('MONEYFY14_CATEGORY', models.CharField(default='Test', max_length=50, null=True)),
                ('NOBLEALUMNI', models.CharField(default='Test', max_length=50, null=True)),
                ('NETPRICE48_75', models.CharField(default='Test', max_length=50, null=True)),
                ('PERCENT_PELL', models.CharField(default='Test', max_length=50, null=True)),
                ('MONEYFY13', models.CharField(default='Test', max_length=50, null=True)),
                ('MONEYFY14', models.CharField(default='Test', max_length=50, null=True)),
                ('ADJACT50', models.CharField(default='Test', max_length=50, null=True)),
            ],
        ),
        migrations.CreateModel(
            name='Custom_Coefficient',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('SCHOOLCODE', models.CharField(default='Test', max_length=50, null=True)),
                ('GPACOEF', models.DecimalField(decimal_places=5, default='000000000', max_digits=8, null=True)),
                ('ACTCOEF', models.DecimalField(decimal_places=5, default='000000000', max_digits=8, null=True)),
                ('INTERCEPT', models.DecimalField(decimal_places=5, default='000000000', max_digits=8, null=True)),
            ],
        ),
        migrations.CreateModel(
            name='Student',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('ACT', models.IntegerField(default='0')),
                ('GPA', models.DecimalField(decimal_places=2, default='0000000', max_digits=3)),
                ('Index', models.CharField(default='Test', max_length=50, null=True)),
                ('Strategy', models.IntegerField(default='0')),
                ('Fit', models.CharField(default='Test', max_length=1, null=True)),
                ('Reach', models.CharField(default='Test', max_length=1, null=True)),
                ('Safety', models.CharField(default='Test', max_length=1, null=True)),
                ('Secure', models.CharField(default='Test', max_length=1, null=True)),
                ('Race', models.CharField(default='Test', max_length=1, null=True)),
            ],
        ),
    ]
