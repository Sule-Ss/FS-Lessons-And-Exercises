from django.http.response import HttpResponse

from .models import Todo
from .serializers import TodoSerializer

from rest_framework import mixins, viewsets

#pagination classes:
from .pagination import SmallMyPageNumberPagination, LargeMyPageNumberPagination, MyLimitOffsetPagination

# Create your views here.
def home(request):
    return HttpResponse(
        '<center><h1 style="background-color:powderblue;">Welcome to ApiTodo</h1></center>'
    )
  

class TodoMVS(viewsets.ModelViewSet):
    queryset = Todo.objects.all()
    serializer_class = TodoSerializer

    pagination_class = MyLimitOffsetPagination
        
    # @action(methods=["GET"], detail=False)
    # def todo_count(self, request):
    #     todo_count = Todo.objects.filter(done=False).count()
    #     count = {
    #         'undo-todos': todo_count
    #     }
    #     return Response(count)    


        
 