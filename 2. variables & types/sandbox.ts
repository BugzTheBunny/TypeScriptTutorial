let character = "mario";
let age = 30;
let isBlackBelt = false;

character = "Luigi" // this will work

const circ = (diameter:number) => {
    return diameter * Math.PI
}

console.log(circ(7.5))

let names = ['Luigi', 'Yoshi', 'Mario'];

names.push('Bunny')
// names.push(5) // This will not work.
// names[0] = 5 // This will also not work

let numbers = [1, 2, 3, 4]
numbers.push(5)
// numbers.push('Hello') // This will not work
// numbers[0] = 'Hello' // This will not work

let mixed_array = ['Yoshi', 20, 'Thomas', 40]
mixed_array.push(5)
mixed_array.push('Bunny')

let person = {
    name: 'Josh',
    age: 45,
    job: 'Developer',
    is_working: true
}

// person.age = "Ten" // This will not work
// person.skills = ['Java','Python','TypeScript']

person = {
    name: 'Tom',
    age: 35,
    job: 'Developer',
    is_working: true
}

let person_name:string;
let person_age:number;
let person_logged:boolean;

let state: string | number;
state = 'Hello'
state = 10

let people: string[]
let ages: number[]
let logged: boolean[]

let items: (string | number)[]
items.push('Hi')
items.push(15)
// items.push(true) // This will not work

let human: object;
human = {
    name: 'Bob',
    age: 15
}
// human = 10 // this will not work

let alien: {
    name: string,
    age: number,
    is_offplanet: boolean
}

let anything: any;
anything = {}
anything = []
anything = 'Hi'
anything = 10

let anything_object: {
    name: any,
    age: any,
    working: any
}

anything_object.age = 10
anything_object.age = "Ten"