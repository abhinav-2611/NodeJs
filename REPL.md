# Node.js REPL (Read-Eval-Print Loop)

Node.js REPL is an interactive shell that allows you to execute JavaScript code in a command-line environment. It is useful for quickly testing and debugging small snippets of code.

## What Does REPL Stand For?
R → Read: Reads user input, parses it, and stores it.

E → Eval: Evaluates the input JavaScript code.

P → Print: Prints the result of the evaluation.

L → Loop: Loops back to take the next input.

## How to Start Node.js REPL?
Open a terminal (Command Prompt, PowerShell, or Bash).

Type: node

You will see the > prompt, which indicates that the REPL is ready for input.

## Basic REPL Commands
1. Executing JavaScript Expressions
You can enter any valid JavaScript code, and it will be executed immediately:

> 2 + 3
5
> console.log("Hello, Node!")
Hello, Node!
undefined

2. Using Variables
You can declare and use variables:

> let x = 10;
> x * 2
20

3. Multi-line Code
If you enter a block of code (like a function), REPL allows multi-line inputs:

> function greet(name) {
... return "Hello, " + name;
... }
> greet("Abhinav")
'Hello, Abhinav'

4. Special REPL Commands
.exit → Exit the REPL (or use Ctrl + D).

.help → Displays REPL commands.

.clear → Clears the REPL environment.

.load filename.js → Loads and executes a JavaScript file.

.save filename.js → Saves the current REPL session to a file.

## Why Use REPL?
- Quick JavaScript testing without creating files.

- Debugging small code snippets.

- Experimenting with Node.js features.

- Would you like a hands-on exercise to practice REPL? 🚀