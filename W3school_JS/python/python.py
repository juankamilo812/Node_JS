# #Creating a Comment
# print("Hello, World!")

# #Python Indentation
# if 5 > 2:
#   print("Five is greater than two!")

# #Python Variables
#   x = 5
# y = "Hello, World!"

# print(x)
# print(y)

# #Creating Variables
# x = 4
# x = "Sally"
# print(x)

# #And you can assign the same value to multiple variables in one line:

# x = y = z = "Orange"

# print(x)
# print(y)
# print(z)

# # Output Variables

# x = "una belleza"
# print("Python is " + x)

# #You can also use the + character to add a variable to another variable:

# x = "Python is "
# y = "awesome"
# z =  x + y
# print(z)

# #For numbers, the + character works as a mathematical operator:

# x = 5
# y = 10
# print(x * y)

# #Global Variables


# x = "una chimba"

# def myfunc():
#   print("Python is " + x)

# myfunc()

# x = "awesome"


# #Create a variable inside a function, with the same name as the global variable
# x = "awesome"

# def myfunc1():
#   x = "fantastic"
#   print("Python is " + x)

# myfunc1()

# print("Python is " + x)

# #The global Keyword

# def myfunc2():
#   global l
#   l = "maravilloso"

# myfunc2()

# print("Python is " + l)

# #To change the value of a global variable inside a function, 
# # refer to the variable by using the global keyword:

# m = "chevere "

# def myfunc3():
#   global m
#   m = "vacano"

# myfunc3()

# print("camilo es " + m)


#Getting the Data Type

# x = 5
# y = "Hello World"
# z = 20.5
# k = 1j
# L= ["apple", "banana", "cherry"]
# T = x = ("apple", "banana", "cherry")
# M = range(6)
# N = {"name" : "John", "age" : 36}
# O = {"apple", "banana", "cherry"}
# B = frozenset({"apple", "banana", "cherry"})
# C = True
# A = b"Hello"
# D = bytearray(5)
# E = memoryview(bytes(5))

# print (type (x) , type (y) , type (z), type (k), type (L), type (T), type (M),type (N),type (O),type (B), type (C),type (A),type (D),type (E))

# Float can also be scientific numbers with an "e" to indicate the power of 10.

# x = 35e3
# y = 12E4
# z = -87.7e100

# print(type(x))
# print(type(y))
# print(type(z))

#Complex

# x = 3+5j
# y = 5j
# z = -5j

# print(type(x))
# print(type(y))
# print(type(z))


#convert from int to float:
# x = float(1)

#convert from float to int:
# y = int(2.8)

#convert from int to complex:
# z = complex(x)

# print(x)
# print(y)
# print(z)

# Random Number
# import random
# print(random.randrange(1,5))

#Specify a Variable Type

# x = int(1)
# y = int(2.8)
# z = int("3")
# print(x)
# print(y)
# print(z)

#String Literals
# print("Hello")
# print('Hello')

#Multiline Strings
# a = """Lorem ipsum dolor sit amet,
# consectetur adipiscing elit,
# sed do eiusmod tempor incididunt
# ut labore et dolore magna aliqua."""
# print(a)

# #Strings are Arrays
# a = "Hello, World!"
# print(a[4],a[2])

# #Slicing
# b = "Hello, World!"
# print(b[2:6])

# #Negative Indexing
# b = "Hello, World!"
# print(b[-8:-2])

# #String Length
# a = "Hello, World!"
# print(len(a))

#String Methods
# a = "          Hello, World! "
# print(a.strip())

#The lower() method returns the string in lower case:                                                                                                                                    

# a = "  PRUEBA !"
# print(a.lower())

#The upper() method returns the string in upper case:

# a = "Hello, World!"
# print(a.upper())

#The replace() method replaces a string with another string:

# a = "Hello, WorlH!"
# print(a.replace("H", "J"))

# a = "Hello, World!"
# b = a.split(",")
# print(b)

#Check String
# txt = "The rain in Spain stays mainly in the plain"
# x = "ain" in txt
# print(x)

#Check if the phrase "ain" is NOT present in the following text:
# txt = "The rain in Spain stays mainly in the plain"
# x = "ain" not in txt
# print(x) 

#String Concatenation
# a = "Hello"
# b = "World"
# c = a + " " + b
# print(c)

#String Format
# age = 36
# txt = "My name is John, I am {}"
# print(txt.format(age))

#The format() method takes unlimited number of arguments, and are placed into the respective placeholders:
# quantity = 3
# itemno = 567
# price = 49.95
# myorder = "I want {} pieces of item {} for {} dollars."
# print(myorder.format(quantity, itemno, price))

#You can use index numbers {0} to be sure the arguments are placed in the correct placeholders:
# quantity = 3
# itemno = 567
# price = 49.95
# myorder = "I want to pay {2} dollars for {0} pieces of item {1}."
# print(myorder.format(quantity, itemno, price)) 

#To fix this problem, use the escape character \":
# txt = "We are the so-called \"Vikings\" from the north."
# print(txt) 

# #New Line
# txt = "Hello\nWorld!"
# print(txt) 

#	Carriage Return
# txt = "\110\145\154\154\157"
# print(txt) 

#Boolean Values

# print(10 > 9)
# print(10 == 9)
# print(10 < 9)

#-Print a message based on whether the condition is True or False:
# a = 200
# b = 33

# if b > a:
#   print("b is greater than a")
# else:
#   print("b is not greater than a")

#Evaluate Values and Variables
# print(bool("Hello"))
# print(bool("15"))


#Most Values are True

# class myclass():
#   def __len__(self):
#     return 0

# myobj = myclass()
# print(bool(myobj))

#Some Values are False

# print(bool(False))
# print(bool(None))
# print(bool(0))
# print(bool(""))
# print(bool(()))
# print(bool([]))
# print(bool({}))

#Python Identity Operators
#is

# x = ["apple", "banana"]
# y = ["apple", "banana"]
# z = x

# print(x is z)

# # returns True because z is the same object as x

# print(x is y)

# # returns False because x is not the same object as y, even if they have the same content

# print(x == y)

# # to demonstrate the difference betweeen "is" and "==": this comparison returns True because x is equal to y

#is

# x = ["apple", "banana"]
# y = ["apple", "banana"]
# z = x

# print(x is not z)

# # returns False because z is the same object as x

# print(x is not y)

# # returns True because x is not the same object as y, even if they have the same content

# print(x != y)

# to demonstrate the difference betweeen "is not" and "!=": this comparison returns False because x is equal to y


#Python Membership Operators

# x = ["apple", "banana"]

# print("pineapple" not in x)

# # returns True because a sequence with the value "pineapple" is not in the list