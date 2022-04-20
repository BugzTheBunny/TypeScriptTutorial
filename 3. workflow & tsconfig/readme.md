# Better Workflow & tsconfig

Currently we were writing all of the code inside `sandbox.ts`
this structure is not right, because for bigger projects we will need much more seperation and modularity.

**so here is one example of a structure:**

`public` - items that are published to the webserver  
`src` - things that we don't need to be published 
```
public\ 
    sandbox.js
    index.html
    styles.css
src\
    sandbox.ts
```

But how do we compile now? because the compiler will save the `sandbox.js` inside src, and we don't want to copy it every time.

we need `tsconfig.json`  
we create it by  running:
`tsc --init`

it will create the file, with a lot of configurations available, right now, we are looking for `rootDir`  and `outDir` configuration insde of the file.  
- `rootDir` is where the ts files are.  
- `outDir` is to where the compiler should compile the files.

We will set it like so:
```
...
    "outDir": "./public",
...
    "rootDir": "./src",
...
```

after doing this, we do not need to specify file names, because the compiler will just take the typescript files from `./src` and will compile them into `./public`

so now all we need is just to run `tsc -w`

We can add `sandbox2.ts` and save it to see that it is being compiled.

What if we add `app.ts` outside of src?

the compiler will try to compile it, but it will show an error, to fix that kind of behaviour we need to add `include` in the end of the `tsconfig.json` file like so:
```
    "skipLibCheck": true
  },
  "include": ["src"]
}
```

Now the compiler will only look for files inside `src`.