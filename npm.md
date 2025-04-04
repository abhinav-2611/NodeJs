 ## What is NPM?

NPM stands for Node Package Manager.
It's the default package manager for Node.js, and it's used to install, manage, and share packages (i.e., libraries or tools) that help in building JavaScript applications.

🔧 Think of NPM like this:
Imagine you're building a house 🏠 — instead of making every brick and nail yourself, you order ready-made materials.
Similarly, when building an app, instead of writing everything from scratch, you install packages (tools/libraries) using NPM.

✅ With NPM, you can:
Install JavaScript libraries (like Express, React, Lodash, etc.)

Share your own packages with others.

Manage dependencies (i.e., packages your app needs to run).

Run scripts (like npm start, npm test, etc.)

# 📦 Some Common NPM Commands:

Command	Purpose
- npm init	Initializes a new project and creates a package.json file
- npm install <package-name>	Installs a package
- npm install	Installs all dependencies listed in package.json
- npm uninstall <package-name>	Removes a package
- npm update	Updates all the installed packages
- npm list	Lists installed packages

## node_modules, package.json, and package-lock.json — are core parts of how NPM works in a Node.js project. Let’s go through them one by one in a simple way:

# 📁 1. node_modules folder
This is the folder where all your installed packages (dependencies) live.

When you run npm install, NPM downloads packages from the internet and puts them in this folder.

Example: If you install express, it will be saved here along with its own dependencies.

⚠️ Usually not pushed to GitHub — it’s huge, and you don’t need it there because you can regenerate it from package.json.

# 📄 2. package.json
This is the blueprint or metadata file for your project.

It contains:

Project name, version, description

List of dependencies

Scripts you can run (like npm start)

Example:

{
  "name": "my-app",
  "version": "1.0.0",
  "scripts": {
    "start": "node index.js"
  },
  "dependencies": {
    "express": "^4.18.2"
  }
}
🔑 You can run npm init to create this file.

# 📄 3. package-lock.json
This file locks the exact versions of every installed package and its sub-packages.

Ensures that everyone gets the same setup, even if the versions in package.json are flexible (like ^1.0.0).

It's auto-generated when you run npm install and should be committed to Git.

💡 Summary:

- node_modules/	Actual code of installed packages
- package.json	Project metadata + list of dependencies
- package-lock.json	Exact versions of all installed packages (for consistency)