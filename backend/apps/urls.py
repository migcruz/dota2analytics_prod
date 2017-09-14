from rest_framework.routers import DefaultRouter

from users.views import UserViewSet, GroupViewSet
from heroes.views import HeroViewSet

from django.conf.urls import url
hero_list = HeroViewSet.as_view({'get':'list'})
hero_detail = HeroViewSet.as_view({'get':'retrieve'})

router = DefaultRouter()
router.register(r'users', UserViewSet)
router.register(r'groups', GroupViewSet)

 # register the url link in /api so it can be clicked on (commenting this out doesnt invalidate /api/heroes)
router.register(r'heroes', HeroViewSet)

urlpatterns= [
    # url(r'^heroes/$', hero_list, name='hero-list'),
    url(r'^heroes/(?P<hero_id>\d+)/$', hero_detail, name='hero-detail') # overwrite the standard HeroViewSet urls by primary keys
    # url(r'^api-auth/', include('rest_framework.urls',namespace = 'rest_framework'))
]
urlpatterns += router.urls
