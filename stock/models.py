from django.conf import settings
from django.db import models
from django.utils import timezone
class Article(models.Model):
    name = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    price = models.DecimalField(max_digits=12,decimal_places=10)
    Disponibility = models.BooleanField()
    catogory = models.TextField(max_length=500)
    image = models.ImageField(upload_to=None,height_field=None,max_length=100)

    def publish(self):
        self.published_date = timezone.now()
        self.save()

    def __str__(self):
        return self.title
# Create your models here.
