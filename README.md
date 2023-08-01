# Basic Information Site

The purpose of this project was to create a very basic informational site that contains 4 pages:
- Index
- About
- Contact Me
- 404

The project allowed me to practice my Node.js skills as well as learning how to incorporate TypeScript into a Node.js project.

## Usage
First you must install all the necessary dependencies. You can accomplish this with the following command: `npm install`

After your dependencies are installed, you have two options to run the project: 
1. You can run the project without manually compiling the code by using `npx ts-node .\index.ts`
2. You can run the project by manually compiling the TypeScript code into JavaScript first. To do this, you first need to run the following command: `npx tsc`. This will create a index.js file in the dist directory. You can then run this with a standard node command like this: `node .\dist\index.js`
