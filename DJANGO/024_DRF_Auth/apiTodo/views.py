from django.http.response import HttpResponse
import rest_framework
from .models import Todo
from .serializers import TodoSerializer
from rest_framework import  viewsets

# filter backend
from django_filters.rest_framework import DjangoFilterBackend
from rest_framework.filters import SearchFilter, OrderingFilter


# permissions import :
from rest_framework.permissions import (IsAuthenticated, AllowAny, IsAuthenticatedOrReadOnly, IsAdminUser)


# Create your views here.
def home(request):
    return HttpResponse(
        '<center><h1 style="background-color:powderblue;">Welcome to ApiTodo</h1></center>'
    )

#! Function Based Views

class TodoMVS(viewsets.ModelViewSet):
    permission_classes=[IsAuthenticatedOrReadOnly]
    queryset = Todo.objects.all()
    serializer_class = TodoSerializer

    # pagination_class = LargePageNumberPagination
    # pagination_class = MyLimitOffsetPagination
    # pagination_class = MyCursorPagination
    # filter_backends = [DjangoFilterBackend, SearchFilter, OrderingFilter]
    # filterset_fields = ['task', "priority"]
    # search_fields = ['task']
    # ordering_fields = ['task', "createdDate", "id"]





        
 