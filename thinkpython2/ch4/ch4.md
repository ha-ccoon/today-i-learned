## Chapter 4. Case study: interface design

### 4.1 The turtle module

```
import turtle
bob = turtle.Turtle()
print(bob)
turtle.mainloop()
```

- When you run this code, it should create a new window with small arrow that represents the turtle.
- The `turtle` module provides a function called `Turtle` that creates a turtle object, and we assign to a variable named bob.
- print(bob) displays the memory address of Turtle object: `<turtle.Turtle object at 0x0000019B77C1AFD0>`
- `mainloop` function tells the window to wait fo r the user to do soemthing.

Once you create a Turtle, you can call **a method** to move it around the window. A method is similar to a function, but it uses different syntax.

```
bob.fd(100)
bob.bk(100)
```

- Calling a method is like making a request
  - method `fd`: you are asking bob to move forward.
  - method `bk`: move backward.
  - method `lt`: left turn.
  - method `rt`: right turn.
- The argument of fd is a distance in pixels, so the actual size depends on your display.

![1694414327758](image/ch4/1694414327758.png)

### 4.2 Simple repetition

We can do the same thing conciesly with a `for` statement.

- It similar to a function definition.
  - Header that ends with a colon and an indeted body.
  - The body can contin anynumber of statements.
- A `for` statement is also called a **loop** because the flow of execution runs through the body and then loops back to the top.

```
for i in range(4):
print('Hello!')
```

Using for statement, you can easliy fraw a square:

```
for i inrange(4):  
    bob.fd(100)  
    bob.lt(90)
```

### 4.3 Exercises

> Write a function called `square` that takes a parameter named `t`, which is a turtle. It should use the turtle to draw a square.
> Write a function call that passes bob as an argument to square, and then run the program again.

```
import turtle
bob = turtle.Turtle()

def square(t):
  for i in range(4):
    t.fd(100)
    t.lt(90)
  
square(bob) 
```

> Add another parameter, named `length`, to `square`.
> Modify the body so length of the sides is `length`, and then modify the function call to provide a second argument. Run the program again. Test your program with a range of values for length.

### 4.4 Encapsulation

The fisrt exercise asks  you to put your square-drawing code into a function definition and then call the function, apssing the parameter.

```
def square(t):
    for i in range(4):
	t.fd(100)
	t.lt(90)

square(bob)
```

- Inside the function, t refers to the same turtle bob, so `t.lt(90)` has the same effect as `bob.lt(90)`.
- In that case, **why not call the parameter as bob**? The idea is that `t` can be any turtles, not just `bob`, so you could create another turtle and pass it as an argument to square:

```
alice = turtle.Turtle()
square(alice)
```

Wrapping apiece of code up in a function is called **encapsulation**.

- It attaches a name to the code, which serves as a kkind of documentation.
- It is useful when  you re-use the code, it is more concise to call a function twice than to copy and paste the body.

### 4.5 Generalization
