#  🔁 require() vs import

## 🔁 `require()` vs `import` in Node.js

### 📌 1. Module System
- **`require()`**: Uses CommonJS (default in older Node.js)
- **`import`**: Uses ES Modules (modern JS standard)

### 📌 2. Syntax
- **`require()`**: `const fs = require('fs')`
- **`import`**: `import fs from 'fs'`

### 📌 3. File Extension
- **`require()`**: Works without `.js` (e.g., `require('./app')`)
- **`import`**: Often requires `.js` (e.g., `import './app.js'`)

### 📌 4. Synchronous vs Asynchronous
- **`require()`**: Synchronous (runs during runtime)
- **`import`**: Asynchronous (supports top-level `await`)

### 📌 5. Default in Node.js
- **`require()`**: ✅ Default in older Node.js
- **`import`**: ✅ Default in modern front-end tools and Node.js v14+

### 📌 6. Used In
- **`require()`**: Older Node.js apps
- **`import`**: Modern JS apps (React, TypeScript, etc.)

### 📌 7. Module Type Setting
- **`require()`**: No extra config needed
- **`import`**: Requires `"type": "module"` in `package.json` or use `.mjs` extension




## 📦 1. require() — CommonJS (Traditional Node.js)

`// utils.js`
function greet(name) {
  return `Hello, ${name}`;
}

module.exports = greet;

`// app.js`
const greet = require('./utils');
console.log(greet('Abhinav'));
No extra config needed.

Still widely used in most Node.js backends.

🧪 2. import — ES Modules (Modern way)

`// utils.js`
export function greet(name) {
  return `Hello, ${name}`;
}

`// app.js`
import { greet } from './utils.js';
console.log(greet('Abhinav'));

<But to use this in Node.js:
Add "type": "module" in package.json>

{
  "type": "module"
}
Or use .mjs file extensions instead of .js

💡 Which one should you use?
Your Case	Suggestion
✅ Simple backend app	Use require()
🚀 Modern app with React/TypeScript or front-end + back-end consistency	Use import
🧪 Learning both?	Try both in small projects to understand better
