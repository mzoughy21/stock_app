from django.conf import settings
from django.db import models
from django.utils import timezone
CHOICES = (
        ('sa', 'Salons'),
        ('ch', 'Chambres'),
        ('cu', 'Cuisine'),
        ('Br', 'Bureaux'),
        ('tb', 'Tables'),
    )
    
class Article(models.Model):
    name = models.CharField(max_length=200)
    price = models.DecimalField(max_digits=12,decimal_places=10)
    Disponibility = models.BooleanField()
    catogory = models.CharField(max_length=300, choices = CHOICES)
    image = models.ImageField(upload_to='static/',height_field=None,max_length=100, default=None, blank=True, null=True)

    def publish(self):
        self.published_date = timezone.now()
        self.save()

    def __str__(self):
        return self.catogory
# Create your models here.

