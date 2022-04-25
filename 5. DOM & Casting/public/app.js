"use strict";
const anchor = document.querySelector('a');
// console.log(anchor.href) // Wont work.
// first way to fix:
if (anchor) {
    console.log(anchor.href);
}
// second way to fix:
const anchor2 = document.querySelector('a');
console.log(anchor2);
// Classes
class Invoice {
    constructor(client, details, amount) {
        this.client = client;
        this.details = details;
        this.amount = amount;
    }
    // random method
    format() {
        return `${this.client} owes $${this.amount} for ${this.details}`;
    }
}
// Creating invoices
const inv = new Invoice('Mario', 'Work on Mario website', 200);
const invTwo = new Invoice('Luigi', 'Work on Luigi website', 200);
const invThree = new Invoice('Tom', 'Work on Tom website', 200);
// Declaring an array of type invoice
let invoices = [];
invoices.push(inv);
invoices.push(invTwo);
invoices.forEach(invoice => {
    console.log(invoice.details, invoice.client, invoice.format());
});
// form with class
const form = document.querySelector('new-item-form');
console.log(form);
// form with class as form
const form2 = document.querySelector('.new-item-form');
console.log(form);
// form children
const type = document.querySelector('#type');
const tofrom = document.querySelector('#tofrom');
const details = document.querySelector('#details');
const amount = document.querySelector('#amount');
//
form2.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log(type.value, tofrom.value, details.value, amount.value);
});
