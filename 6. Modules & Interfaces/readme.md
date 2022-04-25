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