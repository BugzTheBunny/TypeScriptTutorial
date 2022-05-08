"use strict";
const addUID = (obj) => {
    let uid = Math.floor(Math.random() * 100);
    return Object.assign(Object.assign({}, obj), { uid });
};
let item = addUID({ name: 'Slava', age: 10 });
console.log(item.name); // Will work
let item2 = addUID('Slava');
