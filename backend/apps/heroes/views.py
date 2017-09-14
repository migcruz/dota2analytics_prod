from rest_framework import viewsets
from .serializers import HeroSerializer
from .models import Hero
# Create your views here.

class HeroViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows groups to be viewed or edited.
    """
    queryset = Hero.objects.all()
    serializer_class = HeroSerializer
    lookup_field = 'hero_id'
