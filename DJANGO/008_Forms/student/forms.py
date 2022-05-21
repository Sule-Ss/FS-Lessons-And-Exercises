from django import forms
from .models import Student

# studentformsiple yapısı models içinde de var. 
# O yüzden StudentFormdaki gibi sadece import etmek yeterli.
class StudentFormSimple(forms.Form):
    first_name = forms.CharField(max_length=50)
    last_name = forms.CharField(max_length=50)
    number = forms.IntegerField(required=False)

class StudentForm(forms.ModelForm):
    class Meta:
        model = Student
        fields = '__all__'
        # fields ın tamamını değil de bazılarını almak istiyorsak :
        # fields = ["first_name", "last_name"]
        labels = {"last_name": "Surname"}