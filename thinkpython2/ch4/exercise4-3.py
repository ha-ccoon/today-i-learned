import turtle
bob = turtle.Turtle()

def square(t, length):
  for i in range(4):
    t.fd(length)
    t.lt(90)
    
square(bob, 100)

def polygon(t, n, length):
  angle = 360 / n
  for i in range(n):
    t.fd(length)
    t.lt(angle)

def circle(t, r):
  
  

circle(r)  