# #Python Collections (Arrays)

# thislist = ["apple", "banana", "cherry"]
# print(thislist)

# #Access Items

# thislist = ["apple", "banana", "cherry"]
# print(thislist[1])

# #Negative Indexing
# thislist = ["apple", "banana", "cherry"]
# print(thislist[-1])

# #Range of Indexes
# thislist = ["apple", "banana", "cherry", "orange", "kiwi", "melon", "mango"]
# print(thislist[2:5])

# thislist = ["apple", "banana", "cherry", "orange", "kiwi", "melon", "mango"]
# print(thislist[:4])

# thislist = ["apple", "banana", "cherry", "orange", "kiwi", "melon", "mango"]
# print(thislist[2:])

# #Range of Negative Indexes

# thislist = ["apple", "banana", "cherry", "orange", "kiwi", "melon", "mango"]
# print(thislist[-4:-1])


# #Change Item Value
# thislist = ["apple", "banana", "cherry"]
# thislist[1] = "blackcurrant"
# print(thislist)

# #Loop Through a List
# thislist = ["apple", "banana", "cherry"]
# for x in thislist:
#   print(x)

# #List Length

# thislist = ["apple", "banana", "cherry"]
# print(len(thislist))

# #Add Items
# thislist = ["apple", "banana", "cherry"]
# thislist.append("greem")
# print(thislist)

# thislist = ["apple", "banana", "cherry"]
# thislist.insert(1, "puple")
# print(thislist)

# #Remove Item
# thislist = ["apple", "banana", "cherry"]
# thislist.remove("banana")
# print(thislist)

# thislist = ["apple", "banana", "cherry"]
# thislist.pop()
# print(thislist)

# thislist = ["apple", "banana", "cherry"]
# del thislist[0]
# print(thislist)

# thislist = ["apple", "banana", "cherry"]
# del thislist
# print(thislist)

#Copy a List

#Join Two Lists
# list1 = ["a", "b" , "c"]
# list2 = [1, 2, 3]
# list3 = list1 + list2
# print(list3)


# list1 = ["a", "b" , "c"]
# list2 = [1, 2, 3]

# list1.extend(list2)
# print(list1)

# #The list() Constructor
# thislist = list(("apple", "banana", "cherry")) # note the double round-brackets
# print(thislist)


# #count
# fruits = ["apple", "banana", "cherry"]

# x = fruits.count("cherry")

# print(x)

#Python List reverse() Method
# fruits = ['apple', 'banana', 'cherry']
# fruits.reverse()
# print (fruits)

#sort
# cars = ['Ford', 'BMW', 'Volvo']

# cars.sort()
# print (cars)


fruits = ['apple', 'banana', 'cherry', 'orange']
x = fruits.copy('apple','s','a','e')
print (fruits)