'''

p="myNoobPass1234"

[x for x in p]  ->  ['m', 'y', 'N', 'o', 'o', 'b', 'P', 'a', 's', 's', '1', '2', '3', '4']

[x for x in "1234"]    ->  ['1', '2', '3', '4']


UC_LETTERS="ABCDEFGHIJKLMNOPQRSTUVWXYZ"

[ x for x in p if x in UC_LETTERS ]   ->  ['N', 'P']

[ 1 for x in p if x in UC_LETTERS ]   ->  [1, 1]

[ 1 if x in UC_LETTERS else 0 for x in p ]  ->  [0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0]

'''


UC_LETTERS="ABCDEFGHIJKLMNOPQRSTUVWXYZ"
lc_letters="abcdefghijklmnopqrstuvwxyz"
digits="0123456789"
special_chars = ".?!&#,;:-_*"
p="myNoobPass1234"

def password_authentication(p):
    ucs = [x for x in p if x in UC_LETTERS]
    lcs = [x for x in p if x in lc_letters]
    nums = [x for x in p if x in digits]

    if len(ucs) > 0 and len(lcs) > 0 and len(nums) > 0:
        print "This password has been verified.\n"
        return True
    
    else:
        if len(uc) == 0:
            print "Error: password must contain at least one upper case letter\n"
        elif len(lc) == 0:
            print "Error: password must contain at least one lower case letter\n"
        elif len(nums) == 0:
            print "Error: password must contain at least one number\n"
        return False

def password_strength(p):
    if password_authentication(p) == true: 
        ucs = [x for x in p if x in UC_LETTERS]
        lcs = [x for x in p if x in lc_letters]
        nums = [x for x in p if x in digits]
        chars = [x for x in p if x in special_chars]
        print "This password has been verified."
        length = len(password)
  #define strength here!!!

        if strength < 5:
            print "Password strength: WEAK\n"
            print "Rating: " + str(strength)
        elif strength < 8:
            print "Password strength: GOOD\n"
            print "Rating: " + str(strength)
        else:
            if len(char) == 0:
                    strength = 8
            print "Password strength: STRONG\n"
            if strength > 10:
                strength = 10
            print "Rating: " + str(strength)

    else:
        print "Error: this password does not meet the requirements."




password_authentication(p)
#password_strength(p)












