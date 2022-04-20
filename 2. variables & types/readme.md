# Variables and Types.

Main difference between TypeScript and JavaScript is that typescript uses strict types.

if you define a string as string, you can't change it later to a different type.
- default types
    ```
    let character = "mario";
    let age = 30;
    let isBlackBelt = false;

    character = "Luigi" // this will work
    age = "Old" // this will not work, they are different types
    ```

The types are the same as you can find in JS.

You can specify what will enter into a function, bu default you would do this:
```
const circ = (diameter) => {
    return diameter * Math.PI
}

console.log(circ('abc'))
```
and it would work, and return `NaN`

But to specify a type of item you want to input into the function, you have to do it like so:
```
const circ = (diameter:number) => {
    return diameter * Math.PI
}

console.log(circ('abc')) // The compiler will break here.
```
But this will work
```
console.log(circ(7.5))
```
- ### _**Arrays**_

    Arrays also are stricted to one type of item, if you put only one type, the kind is set on declaration.

    - **So this will be only array of strings:**
        ```
        let names = ['Luigi', 'Yoshi', 'Mario'];

        names.push('Bunny')
        // names.push(5) // This will not work.
        // names[0] = 5 // This will also not work
        ```
    - **This will be only numbers:**
        ```
        let numbers = [1, 2, 3, 4]
        numbers.push(5)
        // numbers.push('Hello') // This will not work
        // numbers[0] = 'Hello' // This will not work
        ```
    - **And this will be a mixed array:**
        ```
        let mixed_array = ['Yoshi', 20, 'Thomas', 40]
        mixed_array.push(5)
        mixed_array.push('Bunny')
        ```

- ### _**Objects**_
    Objects work pretty much the same, but they variables inside of them are also type stricted.

    So like previously, you will not be able to assign a number to a string in the object for example.

    You also can't add elements that didn't exist previously, like `skills` in the example.
    ```
    let person = {
        name: 'Josh', // Strict String
        age: 45, // Strict Number
        job: 'Developer', // Strict String
        is_working: true // Strict Boolean
    }

    // person.age = "Ten" // This will not work
    // person.skills = ['Java','Python','TypeScript'] // Will not work.
    ```
    You can overide the whole object, but it MUST contain the same structure and types.
    
    - Will not work
        ```
        person = {
            name: 'Tom',
            age: 35,
            job: 'Developer',
        }
        ```
    - Will  work
        ```
        person = {
            name: 'Tom',
            age: 35,
            job: 'Developer',
            is_working: true
        }
        ```

----
# Explicit Types and declerations

You can declare empty variables with excpilit types.
```
let person_name:string;

let person_age:number;

let person_logged:boolean;
```
But we can use `unions` to declare for example if a variable is a string or a number

```
let state: string | number;
state = 'Hello'
state = 10
```

Same with arrays:
```
let people: string[]

let ages: number[]

let logged: boolean[]
```

But we can use `unions`, to declare different type arrays:
```
let items: (string | number)[] = []

items.push('Hi')

items.push(15)

// items.push(true) // This will not work
```

Same thing with objects:

```
let human: object;
human = {
    name: 'Bob',
    age: 15
}
// human = 10 // this will not work
```

You can also declare an object, and declare what types of variables will be inside of it like so:
```
let alien: {
    name: string,
    age: number,
    is_offplanet: boolean
}
```
If we want to make a variable to be any type, and to tell TypeScript that we want to make it possible to change the type of it in the future, we can use `any` as a type.
```
let anything: any;
anything = {}
anything = []
anything = 'Hi'
anything = 10
```

we can also decrale the same inside an object:
```
let anything_object: {
    name: any,
    age: any,
    working: any
}

anything_object = {
    name: 'asd',
    age: 15,
    working: 90
}
```