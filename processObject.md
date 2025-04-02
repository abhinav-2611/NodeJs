# Node.js process Object – Explained Simply
The process object in Node.js gives us information about the current running Node.js program. It is a global object, which means you can use it anywhere in your Node.js application without requiring any module.

## Why is process Important?

The process object helps us:
✅ Get environment variables (like system settings).
✅ Read command-line arguments.
✅ Exit the program manually.
✅ Get information about memory usage, Node version, and OS.

## How to Use the process Object?

You can use the process object directly in Node.js. Just open the Node.js REPL (node command in terminal) and try these examples.

1. Get Command-Line Arguments (process.argv)
When you run a Node.js script, you can pass arguments like this:


node myScript.js arg1 arg2 arg3

- In the script (myScript.js):


console.log(process.argv);

🔹 Output:

[ 'C:\\Program Files\\nodejs\\node.exe',
  'C:\\Users\\User\\myScript.js',
  'arg1',
  'arg2',
  'arg3' ]
🔹 process.argv is an array where:

argv[0] → Path to Node.js

argv[1] → Path to the script

argv[2], argv[3]... → Arguments you passed

💡 Use Case: If you want to take user input from the command line.

2. Get Environment Variables (process.env)
You can access system environment variables using process.env.


console.log(process.env.USER); // On Linux/macOS
console.log(process.env.USERNAME); // On Windows
💡 Use Case: Store API keys, database credentials, or configurations.

3. Get the Current Working Directory (process.cwd())
To know which directory your script is running from:


console.log("Current directory:", process.cwd());
4. Exit a Program (process.exit())
If you want to stop a Node.js script, use:


console.log("Exiting program...");
process.exit(); // Immediately stops the script
💡 Use Case: Stop execution when an error occurs.

5. Check Memory Usage (process.memoryUsage())
To see how much memory your program is using:


console.log(process.memoryUsage());
🔹 Output (example):


{
  rss: 23658496,
  heapTotal: 6144000,
  heapUsed: 3432336,
  external: 123456
}
💡 Use Case: Monitor memory leaks.

6. Get Node.js Version (process.version)
To check the Node.js version:


console.log("Node.js version:", process.version);
7. Get OS Information (process.platform)
To check which operating system Node.js is running on:


console.log("Platform:", process.platform);
🔹 Common values:

'win32' → Windows

'linux' → Linux

'darwin' → macOS

8. Listen for Exit Events (process.on())
Before the program exits, you can perform cleanup tasks:


process.on("exit", () => {
  console.log("Process is exiting...");
});

# Summary
Feature	Description

process.argv	Get command-line arguments
process.env	Get environment variables
process.cwd()	Get current working directory
process.exit()	Exit the program
process.memoryUsage()	Get memory usage details
process.version	Get Node.js version
process.platform	Get OS information
process.on('exit', callback)	Listen for exit events