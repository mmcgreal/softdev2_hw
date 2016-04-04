"""
#sample code:
def inc(x):
    return x + 1

f = inc

#print f(10)


def h(x):
    return lambda y: x + y

print h(1)
print h(2)
print h(1)(3)
print h(2)(5)

#b=h(1)

def f(x):
    def g(y):
        return x + y
    return g

a=f(1)
b=h(1)
#end of sample code
"""

def repeat(string):
    def iterations(num):
        return string * num
    return iterations

#closures
r1 = repeat("hello")
r2 = repeat("goodbye")

print r1(2)
print r2(2)
print repeat('cool')(3)




