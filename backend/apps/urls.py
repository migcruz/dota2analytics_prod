from rest_framework.routers import DefaultRouter

from users.views import UserViewSet, GroupViewSet
from heroes.views import HeroViewSet

router = DefaultRouter()
router.register(r'users', UserViewSet)
router.register(r'groups', GroupViewSet)
router.register(r'heroes', HeroViewSet)
urlpatterns = router.urls
