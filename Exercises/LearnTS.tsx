import React from 'react';
import { View, Text } from 'react-native';

const LearnTS = () => {

// ========  Type inference in complex objects  ==========

var arr = [10, null, 30, 40]; // infer --> var arr: (number | null)[]
var arr1 = [0, 1, "test"];  // infer --> var arr1: (string | number)[]

arr1.push('string'); // no error
// arr1.push(true); // error --> Argument of type 'boolean' is not assignable to parameter of type 'string | number'

// ---------------------------------------------

function sum(a: number, b: number) {
    return a + b;
}
var total: number = sum(10, 20); // no error
// var str: string = sum(10, 20); // error --> Type 'number' is not assignable to type 'string'.

function addStr(a: string, b: string) {
    return a.concat(b);
}

var add: string = addStr('hello', 'vijay');
// var sumStr: number = addStr('hello', 'vijay');  // error --> Type 'string' is not assignable to type 'number'.



// ========  Type Assertion in TypeScript  ==========


//----Ex-1---

let Code: any = 123;
let EmployeeCode = Code as number;
console.log(typeof (EmployeeCode));  //  Output --> number

//----Ex-2---

// ---------------------------------Problem---

let employee: unknown = {};
// employee.name = "John"; //Compiler Error: Property 'name' does not exist on type '{}'
// employee.code = 123; //Compiler Error: Property 'code' does not exist on type '{}'


// ---------------------------------Solution---

interface Employee1 {
    name: string;
    code: number;
}

let employee1 = {} as Employee1;

employee1.name = "John"; // OK
employee1.code = 123; // OK


// -----------------------------------Another Problem---

interface Employee2 {
    name: string;
    code: number;
}

// Compiler will provide autocomplete properties,but will not give an error if you forgot to add the properties
let employee2 = {
} as Employee2;
console.log(employee2.name); // undefined; 


// ========================if else statement====================


// --------------if,else if-------------
let x: number = 10, y = 20;

if (x > y) {
    console.log('x is greater than y.');
}
else if (x < y) {
    console.log('x is less than y.'); //This will be executed
}
else if (x == y) {
    console.log('x is equal to y');
}


//---------------Ternary operator----------

let d: number = 10, e = 20;

d > e ? console.log('d is greater than e.') : console.log('d is less than or equal to e.')

// output is --> x is less than or equal to y.

// =======================TypeScript - switch==============

let day: number = 4;

switch (day) {
    case 0:
        console.log("It is a Sunday.");
        break;
    case 1:
        console.log("It is a Monday.");
        break;
    case 2:
        console.log("It is a Tuesday.");
        break;
    case 3:
        console.log("It is a Wednesday.");
        break;
    case 4:
        console.log("It is a Thursday.");  //This will be executed
        break;
    case 5:
        console.log("It is a Friday.");
        break;
    case 6:
        console.log("It is a Saturday.");
        break;
    default:
        console.log("No such day exists!");
        break;
}

// ================TypeScript - for Loops===============

// --------------------For Loop---

for (let i:number = 0; i < 3; i++) {
    console.log("Block statement execution no." + i);
}

/* Output
Block statement execution no.0
Block statement execution no.1
Block statement execution no.2
*/

// ----------------- For of Loop---
// Ex-1

let arr2:number[] = [10, 20, 30, 40];

for (var val of arr2) {
  console.log(val); // prints values: 10, 20, 30, 40
}

//Ex-2

let str:string = "Hello World";

for (var char of str) {
  console.log(char); // prints chars: H e l l o  W o r l d
}

// ---------------For in Loop---
// Ex-1

let arr5:number[] = [10, 20, 30, 40];

for (var index in arr5) {
  console.log(index); // prints indexes: 0, 1, 2, 3

  console.log(arr[index]); // prints elements: 10, 20, 30, 40
}

//-------------While Loop-----

let i: number = 2;

while (i < 4) {
    console.log( "Block statement execution no." + i )
    i++;
}

/* Output
Block statement execution no.2
Block statement execution no.3
*/

//--------------Do while loop---

let i1: number = 4;
do {
    console.log( "Block statement execution no." + i1 )
    i1++;
} while ( i1 < 4)

/* Output
Block statement execution no.4
*/

//====================Typescript Named Functions================

//------------------Function Parameters---
function Greet(greeting: string, name: string ) : string {
    return greeting + ' ' + name + '!';
}

Greet('Hello','Steve');//OK, returns "Hello Steve!"
// Greet('Hi'); // Compiler Error: Expected 2 arguments, but got 1.
// Greet('Hi','Bill','Gates'); //Compiler Error: Expected 2 arguments, but got 3.

//-----------------Optional Parameters---

function GreetA(greeting: string, name?: string ) : string {
    return greeting + ' ' + name + '!';
}

GreetA('Hello','Steve');//OK, returns "Hello Steve!"
GreetA('Hi'); // OK, returns "Hi undefined!".
// GreetA('Hi','Bill','Gates'); //Compiler Error: Expected 2 arguments, but got 3.

//--------------Default Parameters---

function GreetB(name: string, greeting: string = "Hello") : string {
    return greeting + ' ' + name + '!';
}

GreetB('Steve');//OK, returns "Hello Steve!"
GreetB('Steve', 'Hi'); // OK, returns "Hi Steve!".
GreetB('Bill'); //OK, returns "Hello Bill!"
GreetB('Bill',undefined); //OK, returns "Hello Bill!"


//====================Arrow Functions=================

let multiply = (a:number,b:number):number => {
    return a*b;
}

multiply(2,5); // Ok, returns 10


// ---------------------------------

class Employee {
    empCode: number;
    empName: string;

    constructor(code: number, name: string) {
        this.empName = name;
        this.empCode = code;
    }

    display = () => console.log('Employee code:'+' '+this.empCode +' is for ' + this.empName)
}
let emp = new Employee(1, 'Ram');
emp.display();  // Employee code 1 is for Ram


  return (
    <View>
      <Text>Open Console for Results</Text>
    </View>
  );
}

export default LearnTS;
