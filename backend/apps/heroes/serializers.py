from rest_framework import serializers
from .models import Hero, Ability


class AbilitySerializer(serializers.HyperlinkedModelSerializer):
    # url = serializers.HyperlinkedIdentityField(
    #     view_name='hero-detail',
    #     lookup_field='hero_id'
    # )
    class Meta:
        model = Ability
        fields = ('ability_name', 'heroid', 'ability_info' )
        # lookup_field = 'hero_id'
        # extra_kwargs = {
        #     'url': {'lookup_field': 'hero_id'}
        # }
        

class HeroSerializer(serializers.HyperlinkedModelSerializer):
    abilities = AbilitySerializer(many=True, read_only=True)

    url = serializers.HyperlinkedIdentityField(
        view_name='hero-detail',
        lookup_field='hero_id'
    )
    class Meta:
        model = Hero
        fields = ('id', 'hero_id', 'name', 'localized_name', 'primary_attr', 'attack_type', 'roles', 'img', 'webm',
                  'icon', 'url', 'base_health', 'base_health_regen', 'base_mana', 'base_mana_regen', 'base_armor', 'base_mr', 'base_attack_min',
                  'base_attack_max', 'base_str', 'base_agi', 'base_int', 'str_gain', 'agi_gain', 'int_gain', 'attack_range',
                  'projectile_speed', 'attack_rate', 'move_speed', 'turn_rate', 'cm_enabled', 'legs', 'abilities' )
        # lookup_field = 'hero_id'
        # extra_kwargs = {
        #     'url': {'lookup_field': 'hero_id'}
        # }
