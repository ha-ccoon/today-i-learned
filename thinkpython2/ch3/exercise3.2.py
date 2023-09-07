def print_twice(bruce):
    print(bruce)
    print(bruce)    

def do_twice(f, minha):
    f()
    f()
    
def print_spam():
    print('spam')
    
do_twice(print_spam, minha)

print_twice(print_spam, spam)
print_twice(print_spam, spam)