# Understanding module.exports in Node.js
In Node.js, module.exports is used to export functions, objects, or variables from one file so that they can be used in another file.
Think of it like a way to share code between different files in a Node.js application.

## Why Use module.exports?
✅ Helps in organizing code into separate files.
✅ Makes the code reusable.
✅ Supports modularity, keeping the application clean and manageable.

### Basic Example of module.exports
Step 1: Create a file (math.js)
This file contains a function that we want to share with other files.


// math.js
function add(a, b) {
    return a + b;
}

// Exporting the function
module.exports = add;
Step 2: Import and Use It in Another File (app.js)
Now, we use the exported function in another file.


// app.js
const add = require("./math"); // Importing the module

console.log(add(5, 3)); // Output: 8
Exporting Multiple Functions or Variables
We can export multiple things using an object.

Step 1: Create (math.js) with multiple functions

// math.js

function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

// Export multiple functions
module.exports = {
    add,
    subtract
};
Step 2: Import (app.js) and Use

// app.js
const math = require("./math");

console.log(math.add(10, 5));       // Output: 15
console.log(math.subtract(10, 5));  // Output: 5
💡 Shortcut: Instead of math.add(10, 5), you can use destructuring:


const { add, subtract } = require("./math");

console.log(add(10, 5));       // Output: 15
console.log(subtract(10, 5));  // Output: 5
Using exports Instead of module.exports
You can also use exports instead of module.exports:


// math.js
exports.add = function (a, b) {
    return a + b;
};

exports.subtract = function (a, b) {
    return a - b;
};
🔹 This works the same way as module.exports.

🚨 Important:
module.exports and exports are not the same.
If you assign a new value to exports, it will break the connection with module.exports.

❌ Wrong usage (will not work as expected):


exports = { add, subtract }; // ❌ This will not work
✅ Correct way:

t
module.exports = { add, subtract }; // ✅ Works fine
Summary of module.exports
Feature	Description
Export a single function	module.exports = myFunction;
Export multiple functions	module.exports = { func1, func2 };
Import module	const myModule = require('./file');
Use exports (shortcut)	exports.func = function() {...};
When to Use module.exports vs exports?
Use module.exports when exporting a single function, class, or object.

Use exports when adding multiple properties (but don't reassign it).

# Difference Between module.exports and exports in Node.js
Both module.exports and exports are used to export functions, objects, or variables from one file so they can be used in another file. However, there is an important difference between them.

- example 
// Define functions

--------
math.js
--------
function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

// Add properties to `exports` (✅ Correct way)
exports.add = add;
exports.subtract = subtract;

-------
app.js
-------

const math = require("./math"); // Importing the module

console.log(math.add(10, 5));       // Output: 15
console.log(math.subtract(10, 5));  // Output: 5
