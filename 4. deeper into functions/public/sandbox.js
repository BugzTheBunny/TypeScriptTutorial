"use strict";
let greet = () => {
    console.log('Hello world');
};
// greet = 'Hello' // This will not work
let say_hi;
say_hi = () => {
    console.log('Hello!');
};
let add = (a, b, c) => {
    console.log(a + b);
};
add(10, 5);
let multiply = (a, b, c = 10) => {
    console.log(a * b);
    console.log(c);
};
add(10, 5);
const minus = (a, b) => {
    if (a - b == 5) {
        return a - b;
    }
    else {
        return "Hello";
    }
};
let result = minus(10, 5);
let result2 = minus(20, 5);
const sayHello = (name) => {
    console.log(`Hello ${name}`);
};
const func1 = (name, age, state, item) => {
    console.log(name, age, state, item);
};
const func2 = (name, age, state, item) => {
    console.log(name, age, state, item);
};
const func3 = (name, age, state, item) => {
    console.log(name, age, state, item);
};
const func4 = (name, age, state, item) => {
    console.log(name, age, state, item);
};
const func5 = (person) => {
    console.log(person.name);
};
const func6 = (person) => {
    console.log(person.age);
};
const func7 = (person) => {
    console.log(person.state);
};
// Function signatures
// example 1
let talk;
talk = (name, says) => {
    console.log(`${name} says ${says}`);
};
talk('Bugz', 'Hello!');
// example 2
let calc;
calc = (numOne, numTwo, operation) => {
    if (operation == 'add') {
        return numOne + numTwo;
    }
    else {
        return 0;
    }
};
