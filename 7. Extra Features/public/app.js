"use strict";
const addUID = (obj) => {
    let uid = Math.floor(Math.random() * 100);
    return Object.assign(Object.assign({}, obj), { uid });
};
let item = addUID({ name: 'Slava', age: 10 });
console.log(item.name); // Will work
const item3 = {
    uid: 10,
    resourceName: 'Home',
    data: 5
};
const item4 = {
    uid: 10,
    resourceName: 'Home',
    data: 'Some data'
};
/* Enums */
var ResourceType;
(function (ResourceType) {
    ResourceType[ResourceType["BOOK"] = 0] = "BOOK";
    ResourceType[ResourceType["AUTHOR"] = 1] = "AUTHOR";
    ResourceType[ResourceType["FILM"] = 2] = "FILM";
    ResourceType[ResourceType["DIRECTOR"] = 3] = "DIRECTOR";
    ResourceType[ResourceType["PERSON"] = 4] = "PERSON";
})(ResourceType || (ResourceType = {}));
const newItem = {
    price: 20,
    type: ResourceType.PERSON
};
/* Tuple */
let tuple = ["Hello", 10, true];
