from django.http.response import HttpResponse

from .models import Todo
from .serializers import TodoSerializer

from rest_framework import mixins, viewsets

#? filter classes : 
from django_filters.rest_framework import DjangoFilterBackend
from rest_framework.filters import SearchFilter, OrderingFilter

#? pagination classes:
from .pagination import MyCursorPagination, SmallMyPageNumberPagination, LargeMyPageNumberPagination, MyLimitOffsetPagination

# Create your views here.


def home(request):
    return HttpResponse(
        '<center><h1 style="background-color:powderblue;">Welcome to ApiTodo</h1></center>'
    )


class TodoMVS(viewsets.ModelViewSet):
    queryset = Todo.objects.all()
    serializer_class = TodoSerializer

    # pagination_class = LargeMyPageNumberPagination
    # pagination_class = MyLimitOffsetPagination
    # pagination_class = MyCursorPagination
    filter_backends = [DjangoFilterBackend, SearchFilter, OrderingFilter]
    filter_backends = ['task', 'priority']
    search_fields = ['task']

    filter_backends = [OrderingFilter]
    ordering_fields = ['task', 'createdDate' ]


    #? cursor pagination için :
    # def get_queryset(self):
    #     queryset = Todo.objects.all()
    #     priority = self.request.query_params.get('priority')
    #     if priority is not None:
    #         queryset = queryset.filter(priority=priority)
    #     return queryset

   
