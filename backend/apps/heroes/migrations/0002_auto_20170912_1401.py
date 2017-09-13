# -*- coding: utf-8 -*-
# Generated by Django 1.9.4 on 2017-09-12 18:01
from __future__ import unicode_literals

import django.contrib.postgres.fields
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('heroes', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='hero',
            name='agi_gain',
            field=models.FloatField(default=0.0),
        ),
        migrations.AddField(
            model_name='hero',
            name='attack_range',
            field=models.IntegerField(default=0),
        ),
        migrations.AddField(
            model_name='hero',
            name='attack_rate',
            field=models.FloatField(default=0.0),
        ),
        migrations.AddField(
            model_name='hero',
            name='attack_type',
            field=models.CharField(default='', max_length=6),
        ),
        migrations.AddField(
            model_name='hero',
            name='base_agi',
            field=models.IntegerField(default=0),
        ),
        migrations.AddField(
            model_name='hero',
            name='base_armor',
            field=models.IntegerField(default=0),
        ),
        migrations.AddField(
            model_name='hero',
            name='base_attack_max',
            field=models.IntegerField(default=0),
        ),
        migrations.AddField(
            model_name='hero',
            name='base_attack_min',
            field=models.IntegerField(default=0),
        ),
        migrations.AddField(
            model_name='hero',
            name='base_health',
            field=models.IntegerField(default=0),
        ),
        migrations.AddField(
            model_name='hero',
            name='base_health_regen',
            field=models.FloatField(default=0.0),
        ),
        migrations.AddField(
            model_name='hero',
            name='base_int',
            field=models.IntegerField(default=0),
        ),
        migrations.AddField(
            model_name='hero',
            name='base_mana',
            field=models.IntegerField(default=0),
        ),
        migrations.AddField(
            model_name='hero',
            name='base_mana_regen',
            field=models.FloatField(default=0.0),
        ),
        migrations.AddField(
            model_name='hero',
            name='base_mr',
            field=models.IntegerField(default=0),
        ),
        migrations.AddField(
            model_name='hero',
            name='base_str',
            field=models.IntegerField(default=0),
        ),
        migrations.AddField(
            model_name='hero',
            name='cm_enabled',
            field=models.BooleanField(default=True),
        ),
        migrations.AddField(
            model_name='hero',
            name='hero_id',
            field=models.IntegerField(default=0),
        ),
        migrations.AddField(
            model_name='hero',
            name='icon',
            field=models.CharField(default='', max_length=100),
        ),
        migrations.AddField(
            model_name='hero',
            name='int_gain',
            field=models.FloatField(default=0.0),
        ),
        migrations.AddField(
            model_name='hero',
            name='legs',
            field=models.IntegerField(default=0),
        ),
        migrations.AddField(
            model_name='hero',
            name='move_speed',
            field=models.IntegerField(default=0),
        ),
        migrations.AddField(
            model_name='hero',
            name='npc_name',
            field=models.CharField(default='', max_length=50),
        ),
        migrations.AddField(
            model_name='hero',
            name='primary_attr',
            field=models.CharField(default='', max_length=3),
        ),
        migrations.AddField(
            model_name='hero',
            name='projectile_speed',
            field=models.IntegerField(default=0),
        ),
        migrations.AddField(
            model_name='hero',
            name='roles',
            field=django.contrib.postgres.fields.ArrayField(base_field=models.CharField(default='', max_length=12), default=list, size=None),
        ),
        migrations.AddField(
            model_name='hero',
            name='str_gain',
            field=models.FloatField(default=0.0),
        ),
        migrations.AddField(
            model_name='hero',
            name='turn_rate',
            field=models.FloatField(default=0.0),
        ),
        migrations.AddField(
            model_name='hero',
            name='webm',
            field=models.CharField(default='', max_length=100),
        ),
        migrations.AlterField(
            model_name='hero',
            name='name',
            field=models.CharField(default='', max_length=50),
        ),
    ]
