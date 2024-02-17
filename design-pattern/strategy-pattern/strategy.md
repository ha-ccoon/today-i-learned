## What is strategy pattern?

**Defines a family of algorithms, encapsulate each one and make them interchangeable.**

- There are a bunch of algorithms to use and you can use them as needed
  The strategy pattern let the algorithm very independently from clients that use it.
- Let's say decouple the algorithm from the one (client) using the algorithm.
- Client does not have to vary if one of the algorithms varies.
- In other words, if you change the content of the algorithms, you don't necessarily have to change the client at the same time.

For example, if you have think of implementation of a list.
If the list had a sorting algorithm built into it, you can never change the sort algorithm.
However, if you use strategy pattern to inject a sorting strategy, then the sorting strategy can vary independently from the list so that you can customize as you wanted.
