# from rest_framework import pagination
from rest_framework.pagination import PageNumberPagination, LimitOffsetPagination


class SmallMyPageNumberPagination(PageNumberPagination):
    page_size = 1
    page_query_param = 'sayfa'


class LargeMyPageNumberPagination(PageNumberPagination):
    page_size = 5
    page_query_param = 'sayfa'


class MyLimitOffsetPagination(LimitOffsetPagination):
    default_limit = 1
