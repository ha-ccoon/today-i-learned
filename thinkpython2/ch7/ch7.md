## Chapter 7. Iteration

This chapter is about **iteration**, which is the ability to run a block of statements repeatedly. We saw a kind of iteration, using recursion and `for` loop from the previous chapters.

### 7.1 Reassignment

It's legal to make more than one assignment to the same variable. A new assignment makes an existing variable refer to a new value.

![1695509144906](image/ch7/1695509144906.png)

There is a common source of confusion.

Python uses the equal sign (=) for assignment, it is tempting to interpret a statement like `a = b` as a mathematical proposition of equality; that is, the claim that a and b are equal. But this interpretation is wrong.

- Frist, euqality is symmetric relationship and assignment is not.

  - In mathmematics, if `a = 7` then `7 = a`. But in Python, the statement `a = 7` is legal and `7 = a` is not.
- Also, a proposition of equality is either true or false for all time.

  - If `a = b` now, then a will always equal b.
  - In Python, an assignment statement can make two variables equal, but they don't have to stay that way.

    ```
    >>> a = 5
    >>> b = a	# a and b are now equal
    >>> a = 3	# a and b are no longer equal
    >>> b
    5
    ```
  - The third line changes the value of `a` but does not change the value of `b`, so thaey are no longer equal.

Reassigning variables is often useful, but you should use it with caution as the values of variables change frequently, it can make the code difficult to read and debug.

### 7.2 Updating variables

A common kind of reassignment is an **update**, where the new value of the variable depends on the old.

```
x = x + 1
```

- This means "get the current value of x, add one, and then update x with the new value".
- If you try to update a variable that doesn't exist, you get an error, becuase Python evaluates the right side before it assigns a value to x.
- Before you can update a variable, you have to **initialize** it, usually with a simple assignment.
  ```
  >>> x = 0
  >>> x = x + 1
  ```

Updating a variable by adding 1 is called an **increment**; subtracting 1 is called a **decrement**.

### 7.3 The while statement

Computers are often used to automate repetitive tasks that are identical or similar. In a computer program, repetition is also called **iteration**.

Representatively, there is `for` statement we have learned from the previoius chapter, and the other is `while` statement.

```
def countdown(n):
    while n > 0:
	print(n)
	n = n - 1
    print('Blastoff!')
```

- It means, "While n is greater than 0, display the value of n and then decrement n. When you get to 0, display the word `Blastoff`!"

Here is the flow of execution for a while statement:

1. Determine wheter the condition is true or false.
2. If false, exit the `while` statement and continue execution at the next statement.
3. If the condition is true, run the body and then go back to step 1.

This type of flow is called a **loop** because the third step loops back around to the top.

- The body of the loop should change the value of one or more variables so that the *condition becomes false* eventually and the loop terminates.
- Otherwise the loop will repeat forever, which is called an **infinite loop**.

```
def sequence(n):
    while n != 1:
	print(n)
	if n % 2 == 0: 
	    n = n / 2
	else:
	    n = n*3 + 1
```

- The condition for this loop is `n != 1`, so the loop will continue until `n` is 1.
- Since n sometimes increases and decreases, there is no obvious proof that `n` will ever reach 1, or that the program terminates.
- For example, if the argument passed to `sequence` is 3, the resulting values of n are 3, 10, 5, 16, 8, 4.

### 7.4 break

Sometimes you don't know it's time to end a loop until you get half way through the body.

In that case you can yse the break statement to jump out of the loop.

```
while True:
    line = input('>')
    if line == 'done':
    print(line)

print('Done!')
```

- The loop condition is True, which is always true, so the loop runs until it hits the break statement.
- Each time through, it prompts the user with an angle bracket.
- If the user types `done`, the **break** statement exists the loop.
- Otherwise the program echoes whatever the user types and goes back to the top of the loop.

This way of writing while loops is common 

- Because you can check the condition anywhere in the loop.
- You can express the stop condition affirmatively ("stop when this happens") rather than negatively ("keep going until that happens").

### 7.5 Square roots

Loops are often used in programs that compute numerical results by starting with an approximate answer and iteratively improving it.

For example, one way of computing square roots is Newton's method.

![1695526683771](image/ch7/1695526683771.png)

In general, it is dangerous to test float equality.

- Floating-point values are only approximately right: most rational numbers, like 1/3, and irrational numbers, like root 2, can't be represented exeactly with a `float`.
- In this case, rather than checking whether x and y are exactly equal, it is safter to use the built-in function abs to compute the absolute value.
