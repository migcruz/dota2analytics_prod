from rest_framework import serializers
from .models import Hero

class HeroSerializer(serializers.ModelSerializer):
    class Meta:
        model = Hero
        fields = ('id', 'hero_id', 'npc_name', 'name', 'npc_name', 'primary_attr', 'attack_type', 'roles', 'webm',
                  'icon', 'base_health', 'base_health_regen', 'base_mana', 'base_mana_regen', 'base_armor', 'base_mr', 'base_attack_min',
                  'base_attack_max', 'base_str', 'base_agi', 'base_int', 'str_gain', 'agi_gain', 'int_gain', 'attack_range',
                  'projectile_speed', 'attack_rate', 'move_speed', 'turn_rate', 'cm_enabled', 'legs' )
