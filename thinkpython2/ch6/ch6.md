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

- **Incremental development**: the goal of incremental development is to avoid long debugging sessions by adding and testing only a small amount of code at a time.

![1695249087614](image/ch6/1695249087614.png)The first step is to consider what a distance function should look lie in Python. In other words,what are the inputs (parameters) and what is the output (return value)?

- In this case, the inputs are two points, which represent using four numbers.
- The return value is the distance represented by a floating-point value.

  ```
  def distance(x1, x2, y1, y2):
      return 0.0
  ```
- Obviously, this version doesn't compute distances; it always returns zero. But it's syntatically correct, and it runs.
- You can test it before you make it more complicated.

To test the new function, call it with sample arguments:

```
distance(1, 2, 4, 6)
>>> 0.0
```

- These values will have horizontal distance of 3 and the vertical distance of 4; that way, the result is 5, the hypotenus of a 3-4-5 right triangle.
- When testing a function, it's good to know the right answer.

At this point we have confirmed that the function is syntatically correct, and we can start dadding code to the body. A next step is to find the differences `x2 - x1` and `y2 - y1`.

```
distance(1, 2, 4, 6)
    dx = x2 - x1
    dy = y2 - y1
    print('dx is', dx)
    print('dy is', dy)
    return 0.0
```

- If the function is working, it should display `dx` is 3 and `dy` is 4.
- If so, we know that the function is getting the right arguments and performing the first computation correctly.
- If not, there are only a few lines to check.

Next, we compute the sum of squares of dx and dy:

```
distance(1, 2, 4, 6)
    dx = x2 - x1
    dy = y2 - y1
    dsquared = dx**2 + dy**2
    print('dsquared is', dsquared)
    return 0.0
```

Finally, you check the complete result of this function:

```
distance(1, 2, 4, 6)
    dx = x2 - x1
    dy = y2 - y1
    dsquared = dx**2 + dy**2
    result = math.sqrt(dsquared)
    return result
```

If that works correctly, you are done. Otherwise, you might want to print the value of result before the `return` statement.

The final version of the function doesn't display anything when it runs; it only returns a value.

- The print statements we wrote are useful for debugging, but once you get the function working, you should remove them.
- **Scaffolding**: it is helpful for building the program but is not part of the final product.

The key aspects of the process are the below.

1. Start with a working program and make small ingremental changes. At any point, if there is an error, you should have a good idea where it is.
2. Use variables to hold intermediate values so you can display and check them.
3. Once the program is working, you need to remove the scaffolding or consolidate mutiple statements into compound expressions, but only if it does not make the program difficult to read.

### 6.3 Composition

### 6.4 Boolean functions

Functoins can return booleans, which is often conveninent for hiding complicated tests in side functions.

```
def is_divisible(x, y):
    if x % y == 0:
	return True
    else:
	return False
```

### 6.5 More reqursion

A **recursive definition** is similar to a circular definition, in the sense that the definition contains a reference to the thing being defined.

Here you looked up the definition of the factorial function, denoted with the symbol !, you might get something liek this:

- This definition says that the factorial of 0 is 1, and the factorial of any other value, `n`, is n multiplied by the factorial of `n-1`.

![1695453526395](image/ch6/1695453526395.png)

If you can write a recursive definition of something, you can write a Pythong pogram to evaluate it.

```
def factorial(n):
    if n == 0:
	return 1
```

- The first step is to decide what the parametes should be. In this case, it's clear that factorial takes an integer:

  ```
  def factorial(n):
  ```
- If the argument happens to be 0, all we have to do is return 1:

  ```
  def factorial(n):
      if n == 0:
  	return 1
  ```
- Otherwise, we have to make a recursive call to find the factorial of `n-1` and then mutiply it by `n`:

  ```
  def factorial(n):
      if n == 0:
  	return 
      else:
  	recurse = factorial(n-1)
  	result = n * recurse
  	return result
  ```
- The stack diagram below shows how this sequence of function calls look like.

  ![1695455375408](image/ch6/1695455375408.png)

### 6.6 Leap of faith

Following the flow of execution is one way to read programs, but it can quickly become overwhelming. An alternative is **leap of faith**.

- When you come to a function call, instead of following the flow of execution, you assume that the function works correctly and returns the right result.
- For example, when you use built-in functions, you just assume that they work because the people who wrote the buit-in functions were good programmers.

### 6.7 One more example

After `factorial`, the most common example of a recursively defined mathematical function is fibonacci, which has the following definition:

![1695456062378](image/ch6/1695456062378.png)

Translated into Python, it lookd like this:

```
def fibonacci(n):
    if n == 0:
	return 0
    elif n == 1:
	return 1
    else:
	return fibonacci(n-1) + fibonacci(n-2)
```

### 6.8 Checking types

What happens if we call factorial and give it 1.5 as an argument? 

```
>>> factorial(1.5)
RuntimeError: Maximum recursion depth exceeded
```

It looks like an infinite recursion. How can that be?

- The function has a base case - when `n == 0`. But if `n` is not an integer, we can miss the base case and recurse forever.
  - In the first reqursive call, the value of n is `0.5`. In the next, it is `-0.5`.
  - From there, it gets smaller (more negative), but it will never be `0`.

We have two choices.

- We can try to generalize the `factorial` function to work with floating-point numbers.

  - This called **gamma function**.
- We can also make `factorial` check the type of its argument.

  - We can use the build-in function `isinstance` to verify the type of the argument:

    ```
    def factorial(n):
        if not isinstance(n, int):
    	print('Factorial is only defined for integers.')
            return None
        elif n < 0:
            print('Factorial is not defined for negative integers.')
            return None
        elif n == 0:
            return 1
        else:
            return n * factorial(n-1)
    ```
  - The first base case handles nonintegers; the second handles negative integers. In both cases, the program prints an error message and returns None to `indicate` that somehitng went wrong.

The program like `isinstance` demonstrates a pattern sometimes called a **guardian**.

- The first two conditionals act as guardians, protecting the code that follows from values that might cause an error.
- The guardians make it possible to prove the correctness of the code.

### 6.9 Debugging

Breaking a large program into smaller functions creates natural checkpoints for debugging. If a function is not working, there are three possiblities to consider:

- There is something wrong with the **arguments** the function is getting; a precondition is violated.
- There is something wrong with the **function**; a postcondition is violated.
- There is something wrong with the return value or the way it it being used.

Here are the approaches of how to make checkpoints in the flow of execution:

- To rule out the firsts possiblitiey, you can add a `print` statement at the beginning of the function and display the values of the parameters or the types. Or you can write code that checks the preconditions explicitly.

- If the parameters look good, add a `print` statement before each `return` statement and display the return value. Consider calling the function with values that make it easy to check the result.

- If the function seems to be working, look at the function call to make sure the return values is being used correctly.
