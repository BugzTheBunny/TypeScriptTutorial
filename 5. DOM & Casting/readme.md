# The DOM & Type Casting

first of all change `sandbox.ts` to `app.ts` (also do it in `index.html`)

let's get an `a` tag from the DOM
```
const anchor = document.querySelector('a')

console.log(anchor.href)
```

if we do this, TS wont compile the code, because it doe's not know if the element exists in the DOM or not, so it says that the value may be null, therefor it can't compile.

there are a few ways to handle it:
-   Wrap it with an if
    ```
    // first way to fix:
    if (anchor) {
        console.log(anchor.href)
    }
    ```
- Tell typescript as a developer, that there is a value for sure, by adding `!`, it means, that you are telling TS that you are sure that there is a value coming from the tag.
    ```
    // second way to fix:
    const anchor2 = document.querySelector('a')!
    console.log(anchor2)
    ```

also, as you can see, when you do that, TS will recognize it as an anchor tag, and will provide you with some extensions for that.

this will work when you are using it with a tag.
but when you want to do it with a class name, for example if we take the form:

```
// form with class
const form = document.querySelector('.new-item-form')!
console.log(form)
```
This will find the form by class, but it will recognize it as a `Element` not as `FormElement`.

in order to fix it, we can use `as` syntax.

```
// form with class as form
const form2 = document.querySelector('.new-item-form') as HTMLFormElement
console.log(form)
```
We can also do the same with the children of the form:
```
// form children
const type = document.querySelector('#type') as HTMLSelectElement
const tofrom = document.querySelector('#tofrom') as HTMLInputElement
const details = document.querySelector('#details') as HTMLInputElement
const amount = document.querySelector('#amount') as HTMLInputElement
```

Using the same way, we can add event listeners:
```
// form with class as form
const form2 = document.querySelector...

// form children
...

//
form2.addEventListener('submit', (e: Event) => {
    e.preventDefault();
    console.log(
        type.value,
        tofrom.value,
        details.value,
        amount.value,
    )
})
```
The above code will print the children values after the form is submited because we added an event listener which takes `Event` type parameters as a value, `Event` is built in in TS.

## **Classes**

Classes are pretty much the same as in JS, with types decleration.
```
// Classes
class Invoice {
    client: string;
    details: string;
    amount: number;

    constructor(
        client:string,details:string,amount:number) {
        this.client = client;
        this.details = details;
        this.amount = amount;
    }

    // random method
    format() {
        return `${this.client} owes $${this.amount} for ${this.details}`
    }
}
```

And you can create arrays of the type of the class you created.
```
// Creating invoices
const inv = new Invoice('Mario', 'Work on Mario website', 200)
const invTwo = new Invoice('Luigi', 'Work on Luigi website', 200)
const invThree = new Invoice('Tom', 'Work on Tom website', 200)

// Declaring an array of type invoice
let invoices: Invoice[] = [];
invoices.push(inv);
invoices.push(invTwo);
```

- **Public, Private & Readonly**

You can define the type of the property of a class by using private / public / readonly.

By default they are all public.

- **private:**  
    - You can't access this property outside of the class, you can still change the value withing the class.

- **readonly:**
    - Readonly allows you to read the data from outside the class, but you can't change it anywhere, not from inside the class also, it's just getting its value and that's it.

```
class Invoice {
    readonly client: string;
    private details: string;
    public amount: number;
```

Shorthand for creating a class:
instead of this:
```
class Invoice {
    client: string;
    details: string;
    amount: number;

    constructor(
        client:string,details:string,amount:number) {
        this.client = client;
        this.details = details;
        this.amount = amount;
    }

    // random method
    format() {
        return `${this.client} owes $${this.amount} for ${this.details}`
    }
}
```
you can use:
```
class Invoice {
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

this will work only if u use the modifiers before the properties.