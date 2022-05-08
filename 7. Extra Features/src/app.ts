const addUID = <T extends {name:string, age:number}>(obj: T) => {
    let uid = Math.floor(Math.random() * 100);
    return { ...obj, uid };
}

let item = addUID({ name: 'Slava', age: 10 });
console.log(item.name) // Will work

// let item2 = addUID('Slava'); // Now this won't work
// console.log(item2)

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

/* Tuple */
let tuple: [string, number, boolean] = ["Hello", 10, true];