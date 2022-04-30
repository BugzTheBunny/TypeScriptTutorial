# Modules

We are able to use different types of modules importing ways, for example we can use in here the ES6 type.

1. open tsconfig.json
2. change `"module": "commonjs"` to `"module": "es2015"`
3. change `"target": "es2016"` to `"target": "es6"`
4. open the `index.html`
5. change `<script src='app.js'></script>` to `<script type="module" src='app.js'></script>`
6. now you can use the module system.

**Let's use it!**

- create `src>classes>invoice.ts`
```
export class Invoice {

    constructor(
        readonly client: string,
        private details: string,
        public amount: number
    ){}

    // random method
    format() {
        return `${this.client} owes $${this.amount} for ${this.details}`
    }
}
```
Note that we added `export` keyword, so we are able to export the class outside.

now to import it, it's **IMPORTANT** to use `.js` in the end of the file, because we will be using `Invoice.js` in the app browser, not `Invoice.ts`

- `app.ts`
    ```
    import {Invoice} from './classes/invoice.js'
    ```

This will work, and the code will run, BUT the problem with it, is that it does not bundle everything into one package, meaning the browser will load a few JS files, instead of one, which is bad, but can be fixed with webpack.

----
# Interfaces

Cool enough, unlike JS, TypeScript has Interfaces!  
`interface` will look like this with its implementation:
```
interface isPerson {
    name: string;
    age: number;
    speak(a: string): void;
    spend(b:number): number;
}

const me: isPerson = {
    name: "Slava",
    age: 27,
    speak(text: string): void{
        console.log(text)
    },
    spend(amount: number): number{
        return amount;
    }
}
```

you can implement interfaces into classes by using `implements`, for example:

`src/interfaces/HasFormatter.ts`:
```
export interface HasFormatter {
    format(): string;
}
```

class:
```
import { HasFormatter } from "../interfaces/HasFormatter"
export class Invoice implements HasFormatter{

    constructor(
        readonly client: string,
        private details: string,
        public amount: number
    ){}

    // random method
    format() {
        return `${this.client} owes $${this.amount} for ${this.details}`
    }
}
```

This will force the class to implement the things from the interface.