# Compiling TS

first of all, we need to install TS compiler by using
`npm install -g typescript`.

After we done it, we can at first create a file named `sandbox.ts` (`.ts` stands for `typescript`), and add this to there:
```
const character = 'mario';
console.log(character);
const inputs = document.querySelector('input');
console.log(inputs)
```
But you will first need to compile it to JavaScript, as browsers don't understand TypeScript.

You can compile TS to JS by using `tsc` command.  
`tsc sandbox.ts sandbox.js`  
`tsc` stands for TypeScript Compiler  
the first filename is the one you want to compile, the other second is the compiled output file.
You can ignore using the second argument if you want the output file to have the same name.  
`tsc sandbox.ts` will still result with `sandbox.js` file.

Now when you run the index (I'm using VSCode with Live Server), you can see that the code from above is working.

---
Let's add logging of these fields:
```
inputs.forEach(input => {
    console.log(input);
})
```
Now we need to compile again... `tsc sandbox.ts` .. But this is not practicle, we don't want run this command manually everytime we change something, so for that we have 
```
tsc sandbox.ts -w
```
`-w` stands for Watch, meaning the compiler will be watching the file for changes, and will compile everytime something is changed.

That's how you compile TypeScript.