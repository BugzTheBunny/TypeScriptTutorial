# Deeper dive into functions

TypeScript recognizes also if something is a function:

```
let greet = () => {
    console.log('Hello world')
}

//greet = 'Hello' // This will not work
```

You can define a function type variable:
```
let say_hi: Function;
say_hi = () => {
    console.log('Hello!')
}
```

We already know how to add types to a function parameters, but here is how to make an optional parameter:
```
let add = (a: number, b: number ,c?:number|string) => {
    console.log(a + b)
    console.log(c)
}
add(10,5) // This will work, but we are not giving c
```

we can also add a default value, if we don't pass something.  
`c` will still stay optional, but now it has a default value of 10.
```
let multiply = (a: number, b: number ,c:number|string = 10) => {
    console.log(a * b)
    console.log(c)
}
add(10,5)
```

Ofcourse you can return items from the function, but you also can specify what a functions should return:

here we declare that we want tu return a number.
```
const minus = (a: number, b: number): number => {
    return a - b
}

let result = minus(10,5)
```

also, it can return different types of items:
```
const minus = (a: number, b: number): number|string => {
    if (a - b == 5){
        return a - b
    } else {
        return "Hello"        
    }
}

let result = minus(10, 5)
let result2 = minus(20,5)
```

if we want expicitly to specify that a functions retuns void, we can do it like so:

```
const sayHello = (name: string): void => {
    console.log(`Hello ${name}`)
}
```
- **Aliases**  

A problem with working like this, is what if we want some functions contains same inputs, for example, if we have:
```
const func1 = (name: string, age: number, state: string | number, item: string | number) => {
    console.log(name,age,state,item)
}

const func2 = (name: string, age: number, state: string | number, item: string | number) => {
    console.log(name,age,state,item)
}

const func3 = (name: string, age: number, state: string | number, item: string | number) => {
    console.log(name,age,state,item)
}
const func4 = (name: string, age: number, state: string | number, item: string | number) => {
    console.log(name,age,state,item)
}
```
we are repeadely using `string|number` in these functions, so we are just repeating the code.
the solution for this is `Aliases`, we can declare our own `type`, like so:

```
type StrOrNum = string | number;

const func1 = (name: string, age: number, state: StrOrNum, item: StrOrNum) => {
    console.log(name,age,state,item)
}

const func2 = (name: string, age: number, state: StrOrNum, item: StrOrNum) => {
    console.log(name,age,state,item)
}

const func3 = (name: string, age: number, state: StrOrNum, item: StrOrNum) => {
    console.log(name,age,state,item)
}
const func4 = (name: string, age: number, state: StrOrNum, item: StrOrNum) => {
    console.log(name,age,state,item)
```

Like this we already have less code.

Same thing can be done with objects:
```
type PersonObj = { name: string, age: number, state: StrOrNum }

const func5 = (person: PersonObj):void => {
    console.log(person.name)
}

const func6 = (person: PersonObj):void => {
    console.log(person.age)
}

const func7 = (person: PersonObj):void => {
    console.log(person.state)
}
```

- **Function Signatures**

Function signatures allow you to create something like an interface for functions, **you can change the parameter names inside them**, but the types of parameters **must** stay the same.
```
let talk: (a: string, b: string) => void;

talk = (name: string, says: string) => {
    console.log(`${name} says ${says}`)
}

talk('Bugz','Hello!')
```

- Signature that retuns something: (return is a must ofcourse of the correct type), that's why we return 0 on `else`.
```
// example 2
let calc: (a: number, b: number, c: string) => number;

calc = (numOne: number, numTwo: number, operation: string) => {
    if (operation == 'add') {
        return numOne + numTwo
    } else {
        return 0
    }
}
```
- Note, that the same thing is works SAME with objects, they everything must match.