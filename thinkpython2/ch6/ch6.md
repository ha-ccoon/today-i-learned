## Chapter 6. Fruitful functions

### 6.1 Return values

```
e = math.exp(1.0)
height = radius * math.sin(radians)
```

The functions we have written are **void**. Casually, they have **no return value**; the return value is **None**.

In this chapter, we are going to write fruitful functions. 

```
def area(radius):
    a = math.pi * radius**2
    return a
```

We have seen the return statement before, but in a fruitful function the return statement includes an **expression**.

- This statement means: "Return immediately from this function and use the following expression as a return value."
- temprary variables like `a` can make debugging easier.

The expression can be arbitrarily complicated, so we could have written this function more concisely:

```
def area(radius):
    return math.pi * radius**2
```

It also useful to have multiple return statements, one in each branch of a conditional:

```
def absolute_value(x):
    if x < 0:
	return -x
    else:
	return x
```

Since these return statements are in an alternative conditional, only one runs.

- As soon as a return statement runs, the function terminates without executing any subsequent statements.
- **Dead code**: code that appears after a return statement, or any other place the flow of execution can never reach.

> 🔥 In a fruitful function, it is a good to ensure that every possible path through the program hits a **return statement**.

```
def absolute_vallue(x):
    if x < 0:
	return -x
    if x > 0:
	return x
```

- This function is incorrect because if x happens to be 0, neither condition is true, and the function ends without hitting a return statement.
- If the flow of execution gets to the end of a function, the return value is None, which is not the value of 0.

As an exercise, write a compare function that takes two values, x and y, and returns 1 if x > y, 0 if x == y, and -1 if x < y.

```
def compare(x, y):
    if x > y:
	return 1
    elif x == y:
	return 0
    else x < y:
	return -1
```

### 6.2 Incremental development

As you write larger functions, you might find yourself spending more time debugging.
