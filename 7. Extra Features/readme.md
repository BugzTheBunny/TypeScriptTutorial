# Generics

A Generic is a function that you can add to any objects, for example, the following code will take an object (Any type) and append a UID for it.

```
const addUID = (obj: object) => {
    let uid = Math.floor(Math.random() * 100);
    return {...obj, uid}
}

let item = addUID({ name: 'Slava', age: 10 });
// console.log(item.name) // Wont work

```
this will work, but you can't access the properties of the object, because typescript does not know what type of object that is, and what it has.

to fix it, we can add `<T>`
```
const addUID = <T>(obj: T) => {
    let uid = Math.floor(Math.random() * 100);
    return { ...obj, uid };
}

let item = addUID({ name: 'Slava', age: 10 });
console.log(item.name) // Will work
```

This way, typescript will catch the type of the object that is transfered to the function.

The problem with this, is that when we do this, we can send anything to the function, so:
```
let item2 = addUID('Slava');
console.log(item2)
```
will work.

In this case, we need to extend the `<T>`

```
const addUID = <T extends {name:string, age:number}>(obj: T) => {
    let uid = Math.floor(Math.random() * 100);
    return { ...obj, uid };
}

// let item2 = addUID('Slava'); // Now this won't work
// console.log(item2)
```

- Generics & Interfaces

Let's assume we want to put an interface, in which one of the fields should be Generic.
For example here:
```
interface Resource {
    uid: number;
    resourceName: string;
    data: ...;
}
```
we want the `data` field to be string, or int, or object, it should be able to hold anything.

in this case, we are using Generics in the interface, by adding `<T>` again.
```
interface Resource<T>{
    uid: number;
    resourceName: string;
    data: T;
}

const item3: Resource<number> = {
    uid: 10,
    resourceName: 'Home',
    data: 5
}

const item4: Resource<string> = {
    uid: 10,
    resourceName: 'Home',
    data: 'Some data'
}
```
Like so we allow the object to be created with different types in the `data`


# Enums

You can create and access Enums in TypeScript like so:
```
/* Enums */
enum ResourceType { BOOK, AUTHOR, FILM, DIRECTOR, PERSON }

interface Item {
    price: number,
    type: ResourceType
}

const newItem: Item = {
    price: 20,
    type: ResourceType.PERSON
}
```
You if will log the type, it will show a number, because Enums are initially getting associated with the Index in the Array, so 
`Book` will be shown as `0`, and `Film` as `2`.

# Tuples

The way to define a tuple is to define an array, but to predefine the types that will enter to the array.

like so:
```
/* Tuple */
let tuple: [string, number, boolean] = ["Hello", 10, true];
```
You can change the values inside, but you can't change the types.