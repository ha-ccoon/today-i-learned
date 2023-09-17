## Chapter1. The way of the program

The single most important skill for a computer scientis is problem solving.

Problem solving means the ability to formualte problems, think creatively about solutions, and express a solution clearly and accurately.

### 1.1 What is a program?

A program is a sequence of instructions that specifies **how to perform a computation**.

The details look different in different languages, but a few basic instructions appear the same as below:

- Input: get data
- Output: display data on the screen, save it
- Math: perform basic mathmatical operations
- Conditional execution: check for certain conditions and run the appropriate code
- Repetition: perform some action reqpeatedly, usually with some variation

### 1.2 Running Python

The Python interpreter is a program that reads and executes Python code.The first three lines contain infomation about the interpreter and the operating system it's running on.- Python version: 3.11.2

![1693735263479](image/ch1/1693735263479.png)

- The last line is a **prompt** that indicates that the interpreter is ready for you to enter code.

![1693739196661](image/ch1/1693739196661.png)

### 1.3 The first program

- Print Statement: display a result on the screen.
  - The quatation marks in the program amrk the beginning and end of the text to be displayed.
  - The parentheses indicate that print is a function.

![1693739071493](https://file+.vscode-resource.vscode-cdn.net/Users/minha/Documents/study/computer-science/thinkpython2/image/ch1/1693739071493.png)

### 1.4 Arithmetic operators

- Operators: special symbols that represent computations like addition and multiplication.

  ```
  40 + 2 = 42
  43 - 1 = 42
  6 * 7 = 42
  84 / 2 = 42.0

  // exponentation
  6**2 + 6 = 42

  6 ^ 2 = 4
  ```

You might wonder why the result for line 4 is 42.0 instead of 42. It will be explained in the next section.

In other languages, ^ is used for exponentation, but in Python it is a bitwise operator called XOR.

#### Bitwise operator

In Python, bitwise operators are used to perform bitwise calculations on integers. (Only for integers)

The integers are first converted into binary and then operations are performed on each bit or corresponding pair of bits. The result is then returned in decimal format.

- Results bit 1,if any of the operand bit is 1 but not both, otherwise results bit 0.

### 1.5 Values and types

- **Value**: one of the basic things a program works with, like a letter or a number, such as 2, 42.0, and 'Hello, World'
- **Type**: these values belong to different types.
  - 2 is an integer
  - 42.0 is a floating-point number
  - 'Hello, World' is a string

![1693740716113](image/ch1/1693740716113.png)

- The word `class` is used in the sense of a category; a type is a category of values
  - ss integers belong to the type `int`, strings belong to `str` and flaoting-point numbers belong to `float`

If you type a large integer using commas between groups of digits, this is actually not legal in Python. Becaue Python inteprets 1,000,000 as a comma-seperated sequence of integers.

![1693741005393](image/ch1/1693741005393.png)

### 1.6 Formal and natural Languages

- Natural languages: the languages people speak, such as English and Korean. They were not defigned by people; they evolved naturally.
- Formal languages: languages that are designed by people for specific applications.
  - notation: mathematicians use is a formal language that is particularly good at denoting relationships among numbers and symbols.

> Programming languages are formal languages that have been designed to express computations.

Formal languages tend to have strict **syntax** rules that govern the structure of statements. For example, in mathmatics the statement 3 + 3 = 6 has correct syntax, but `3+ =3$6` does not.

There are two flavors in syntax rules, pertaining to **tokens and structure.**

1. Tokens

- Tokens are the smallest individual unit of the language, such as words, numbers, and chemical elements.
- One of the problems with `3+ =3$6` is that $ is not a legal token in mathmatics.
- Foe ex

2. Structure

- The second type of syntax rule pertains to the way tokens are combined.
- The equation 3 +/3 is illegal because even though + and / are legal tokens, you can't have one right after the other.

When you read a sentence in English or a statement in a formal language, you have to figure out the structure. This process is called **parsing**.

Although, formal and natural languages have many features in common - tokens, structrue, and syntax - there are many differences.

ambiguity

- redundancy
- literalness

The difference between formal and natural language is like the difference between poetry and prose:

- Poetry: words are used for their sounds as well as for their meaning, and the whole poem together creates an effect or emotional response. Ambiguity is not only common but often deliberate.
- Prose: the literal meaning of words is more important, and the structure contributes more meaning. Prose is more amenable to anlysis than poetry but still often ambiguous.

### 1.7 Debugging

Programming errors are called **bugs** and the process of tracking them down is called **debugging**.

### 1.9 Exercise
