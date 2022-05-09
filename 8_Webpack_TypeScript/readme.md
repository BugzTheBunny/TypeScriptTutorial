# What is Webpack?
Webpack is a bundling tool, it helps with the workflow.
It helps to take all of the code and source from your code, and create an optimazied version of it, that is ready for distrebution.

# Basic Config
- Let's create a TS project:  
```
tsc --init
```
- Change `target` to `ES6` inside `tsconfig.json`
- Change `module` to `es2015` inside `tsconfig.json`
- Initialize `package.json` by using `npm init` (press `Enter` on all options)
# Installing WebPack
- install `webpack` , `webpack-cli` and `ts-loader` by running:

    (-D stands for saving the dev dependencies - so they are tracked inside `package.json`)

    ```
    npm install webpack webpack-cli ts-loader -D
    ```

    - `webpack` - The core webpack package that compiles all of the bundles of the code.
    - `webpack-cli` - allows us to run webpack commands from the command line.
    - `ts-loader` - teaches webpack how to compile TS into JS.
- Also lets add TypeScript to the dev dependencies.
```
npm install typescript -D
```
# Folder Structure
- `src` /
    - `index.ts`
- `public` /
    - `index.html`


`src` - (the source for the code - all of the TS will be here), add an empty `index.ts` file inside for now.

`public` or `dist`- the folder that will be deployed on the host, it has to contain at-least one HTML file, so let's create it inside and fill with some content.  
`public/index.html`
```
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>WebPack & TypeScript</title>
</head>
<body>
    <h1>SignUp!</h1>
    <form>
        <label for="name">Your Name</label>
        <input type="text" id="name" required>
        <label for="name">Your Email</label>
        <input type="email" id="email" required>
        <label for="age">Your Age</label>
        <input type="number" id="age" required>
        <button>Submit</button>
    </form>
</body>
</html>
```
# Flow
1. We will write the code inside the `src` folder.
2. Webpack then will take those files, and compile them into a single JS file bundle, and it will put it inside public folder, something like `bundle.js`
---
# Starting with Webpack

1. Create the webpack file in the root folder- `webpack.config.js` (**naming is important!**) - Note that it is a JS file, not a TS file.

2. Add teh following:
```
const path = require('path');

module.exports = {
    entry: './src/index.ts',
    mode:'development',
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: 'ts-loader',
                include: [path.resolve(__dirname,'src')]
            }
        ],
    },
    output: {
        publicPath: 'public',
        filename: 'bundle.js',
        path: path.resolve(__dirname,'public')
    }
}
```

What is all of this?
1. We are requiring (importing) `path`.
```
const path = require('path');
```
2. We are creating an object that webpack works with, in which inside, we have:
    - `entry` -  which is the files that we want to use the object on.
    - `module` -  what we will the object do, in our case, it will
        - `test` if for files (will find all `.ts` files by using regex)
        - it will `use` `ts-loader` which knows how to compile ts to js.
        - and we will `include` only the files in `src` file (the path.resolve... helps us to get the current absolute directory.)
    - `output` is the output we want, it our case, to compile all of TS into `bundle.js`
### [Full video here on this subject](https://www.youtube.com/watch?v=rI37HS-Vj8A&list=PL4cUxeGkcC9hOkGbwzgYFmaxB0WiduYJC&index=3&ab_channel=TheNetNinja)

after that, we add `build` command into the `package.json`:
```
...
  "scripts": {
    "build": "webpack",
    "test": "echo \"Error: no test specified\" && exit 1"
  },
...
```
add `console.log('Hello world!')` into `index.ts`.

run `npm run build`

now you will get the `bundle.js` file in public folder, which will look something like this:
```
(()=>{"use strict";console.log("Hello world!")})();
```

# Webpack Dev Server
Webpack dev server helps us to see changes in realtime, meaning, it will recompile the code on changes, and allow us to see the changes in real time.

1. Install the webpack dev server.
```
npm install webpack-dev-server -D
```

2. Add a new script.
```

```