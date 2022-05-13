 import os
os.system('cls' if os.name == 'nt' else 'clear')

# def print_type(data):
#     for i in data:
#         print(i, type(i))

# test = [122, 'Barry', [1,2,3], (1,2,3), {1,2,3}, True, lambda x:x]
# print_type(test)

# class Person:
#     name = 'Barry'
#     age = 45

# person1 = Person()
# person2 = Person()

# print(person1.name)
# print(person2.name)

# Person.job = 'teacher'

# print(person1.job)

# # class attributes vs instance attributes
# person1.location = 'Turkey'
# print(person2.location)
# person2.name = 'Aaron'
# print(person1.name)

# SELF keyword

# class Person:
#     name = 'Barry'
#     age = 45

#     def test(self):
#         print('test')

#     def set_details(self, name, age):
#         self.name = name
#         self.age = age

#     def get_details(self):
#         print(self.name, self.age)

# person1 = Person()
# person1.test()
# Person.test(person1)

# person1.get_details()
# person1.set_details('Aaron', 37)
# person1.get_details()

# static method

# class Person:
#     company = 'Clarusway'

#     def set_details(self, name, age):
#         self.name = name
#         self.age = age

#     def get_details(self):
#         print(self.name, self.age)

#     @staticmethod
#     def salute():
#         print('Hi there!')

# # print(Person.name)

# person1 = Person()
# person1.salute()

# special methods
# class Person:
#     company = 'Clarusway'

#     def __init__(self, name, age):
#         self.name = name
#         self.age = age

#     def __str__(self):
#         return f"{self.name} {self.age}"

#     def get_details(self):
#         print(self.name, self.age)

# person1 = Person('Barry',45)
# person1.get_details()

# liste = [4,2,9,11,5]
# print(liste)
# print(person1)
# print(person1.__str__())

# encapsulation and abstraction

# class Person:
#     company = 'Clarusway'

#     def __init__(self, name, age):
#         self.name = name
#         self.age = age
#         self._id = 5000
#         self.__id2 = 4000

#     def __str__(self):
#         return f"{self.name} {self.age}"

#     def get_details(self):
#         print(self.name, self.age)

# person1= Person('Aaron',37)
# print(person1._id)
# # print(person1.__id2)
# print(person1._Person__id2)

# liste = [4,2,9,11,5]
# liste.sort()
# print(liste)

# inheritance and polymorphism

class Person:
    company = 'Clarusway'

    def __init__(self, name, age):
        self.name = name
        self.age = age

    def __str__(self):
        return f"{self.name} {self.age}"

    def get_details(self):
        print(self.name, self.age)

class Lang:
    def __init__(self,langs):
        self.langs = langs

    def display_langs(self):
        print(self.langs)

class Employee(Person, Lang):
    def __init__(self, name, age, path, langs):
        # self.name = name
        # self.age = age
        super().__init__(name,age)
        self.path = path
        Lang.__init__(self, langs)
        # self.langs = langs

    # override
    def get_details(self):
        # print(self.name, self.age, self.path)
        super().get_details()
        print(self.path)

emp1 = Employee('Barry', 45, 'FS', ['Python', 'JS'])
emp1.get_details()
emp1.display_langs()

# person1 = Person('Aaron',37)
# person1.get_details()

print(Employee.mro())

## inner class

from django.db import models

class Article(models.Model):
    name = models.CharField(max_length=30)

    class Meta:
        ordering = ['name']
