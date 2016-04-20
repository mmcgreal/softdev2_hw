## Mary McGreal
## SoftDev2 pd3
## HW09: Decorators for timing, logging
## 2016-04-09

def time_logging(f):
    def inner( *args ):
        import time
        start_time = time.time()
        run = f(*args)
        time = time.time() - start_time
        return "execution time: " + str(time) + "\n" + str(run)
    return inner
    

def fname_logging(f):
    def inner( *args ):
        run = f( *args )
        arg_str = ""
        for arg in args:
            arg_str += str(arg) + ", "
        arg_str = arg_str[:-2]
        return "function name: " + f.func_name + "\n" + \
               "arguments: " + arg_str + "\n" + \
               "result: " + str(run)
    return inner

@time_logging
@fname_logging
def intersection(A, B):
    return [x for x in A if x in A and x in B]

A = [1, 2, 3]
B = [2, 3, 4]
print intersection(A, B)

