let greet = () => {
    console.log('Hello world')
}

// greet = 'Hello' // This will not work

let say_hi: Function;
say_hi = () => {
    console.log('Hello!')
}

let add = (a: number, b: number ,c?:number|string) => {
    console.log(a + b)
}
add(10, 5)

let multiply = (a: number, b: number ,c:number|string = 10) => {
    console.log(a * b)
    console.log(c)
}
add(10, 5)

const minus = (a: number, b: number): number|string => {
    if (a - b == 5){
        return a - b
    } else {
        return "Hello"        
    }
}

let result = minus(10, 5)
let result2 = minus(20,5)

const sayHello = (name: string): void => {
    console.log(`Hello ${name}`)
}

// Allaias
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
}

// Functios allaias
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

// Function signatures

// example 1
let talk: (a: string, b: string) => void;

talk = (name: string, says: string) => {
    console.log(`${name} says ${says}`)
}
talk('Bugz', 'Hello!')

// example 2
let calc: (a: number, b: number, c: string) => number;

calc = (numOne: number, numTwo: number, operation: string) => {
    if (operation == 'add') {
        return numOne + numTwo
    } else {
        return 0
    }
}