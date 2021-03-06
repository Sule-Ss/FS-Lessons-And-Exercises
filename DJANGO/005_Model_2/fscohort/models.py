from distutils.command.upload import upload
from ssl import ALERT_DESCRIPTION_ACCESS_DENIED
from django.db import models

class Student(models.Model):
    first_name = models.CharField(max_length=50)
    last_name = models.CharField(max_length=50)
    number = models.IntegerField()
    about = models.TextField(null=True, blank=True)
    avatar = models.ImageField(null=True, blank=True, upload_to='media/')
    register_date = models.DateTimeField(auto_now_add=True)
    update_date = models.DateTimeField(auto_now=True)
    
    
    def __str__(self):
        return f"{self.first_name} - {self.last_name}"
    
    class Meta:
        ordering = ["number"]
        verbose_name_plural = "Öğrenciler"
        

        