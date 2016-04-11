## Mary McGreal
## SoftDev2 pd3
## HW07: Quicksort
## 2016-04-06
import random

def quickSort(List):
    if len(List) > 0:
        p = List[0]
        LH = [x for x in List if x < p]
        RH = [x for x in List if x > p]
        return quickSort(LH) + [p] + quickSort(RH)
    return []

L1 = []
for x in range(0,15):
    L1.append(random.randrange(100))


L2 = []
for x in range(0,15):
    L2.append(random.randrange(100))

print "quicksort(L1):\n L1 = " + str(L1) + "\n qSort L1 = " + str(quickSort(L1))
print "\n"
print "quicksort(L2):\n L2 = " + str(L2) + "\n qSort L2 = " + str(quickSort(L2))

