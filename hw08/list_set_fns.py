## Mary McGreal
## SoftDev2 pd3
## HW08: List Manipulations
## 2016-04-08

def union(A, B):
    return [x for x in A if x not in B] + B

def intersection(A, B):
    return [x for x in A if x in B]

def set_difference(U, A):
    return [x for x in U if x not in A]

def symmetric_difference(A, B):
    return union(set_difference(A,B), set_difference(B,A))

def cartesian_product(A, B):
    return [(x,y) 
            for x in A 
            for y in B ]



A = [1, 2, 3]
B = [2, 3, 4]

print union(A, B)

print intersection(A, B)

print set_difference(A, B)
print set_difference(B, A)

print symmetric_difference(A, B)

print cartesian_product(A, B)