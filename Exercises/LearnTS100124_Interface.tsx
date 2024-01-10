import React from 'react';
import { View, Text } from 'react-native';

const LearnTS100124_Interface = () => {

    // ========Structure of interface =============
/*
     interface IEmployee {
         empCode: number;
         empName: string;
         getSalary: (arg0: number) => number; // arrow function
         getManagerName(arg0: number): string;
     }
*/

    // EX-1===>

    interface KeyPair {
        key: number;
        value: string;
    }

    let kv1: KeyPair = { key: 1, value: "Steve" }; // OK

    // let kv2: KeyPair = { key: 1, val: "Steve" }; // Compiler Error: Object literal may only specify known properties, and 'val' doesn't exist in type 'KeyPair'

    // let kv3: KeyPair = { key: 1, value: 100 }; // Compiler Error: Type 'number' is not assignable to type 'string'.

    // ======Interface as Function Type=========

    interface KeyValueProcessor {
        (key: number, value: string): void;
    };

    function addKeyValue(key: number, value: string): void {
        console.log('addKeyValue: key = ' + key + ', value = ' + value)
    }

    // Ex-1---------------------

    let kvp: KeyValueProcessor = addKeyValue;
    kvp(1, 'Bill'); //Output: addKeyValue: key = 1, value = Bill 

    //--------Wrong way--------

    // function addKeyValue1 (key, value) {  // Compiler Error: Parameter 'key' implicitly has an 'any' type. & Parameter 'value' implicitly has an 'any' type.
    // console.log('addKeyValue: key = ' + key + ', value = ' + value)
    // }

    // kvp= addKeyValue1;
    // kvp(1,"Hello")  //Output: addKeyValue: key = 1, value = Hello


    // Ex-2---------------------


    function updateKeyValue(key: number, value: string): void {
        console.log('updateKeyValue: key = ' + key + ', value = ' + value)
    }


    kvp = updateKeyValue;
    kvp(2, 'Steve'); //Output: updateKeyValue: key = 2, value = Steve 

    // Ex-3--->Wrong way---------------------

    // function delete(key:number):void {   //Compiler Error --> Identifier expected. 'delete' is a reserved word that cannot be used here.
    // console.log('Key deleted.')
    // }

    //  kvp = delete;   //Compiler Error --> 'delete' cannot be called on an identifier in strict mode.
    // kvp(1)           //Compiler Error -->  An argument for 'value' was not provided.


    //===============Interface for Array Type==============

    interface NumList {
        [index: number]: number
    }

    let numArr: NumList = [1, 2, 3];
    numArr[0];
    numArr[1];
    console.log(numArr); // Output : [1, 2, 3]


    interface IStringList {
        [index: string]: string
    }

    let strArr: IStringList = {};
    strArr["TS"] = "TypeScript";
    strArr["JS"] = "JavaScript";
    console.log(strArr); // Output : {"JS": "JavaScript", "TS": "TypeScript"}

    //============Optional Property=====================

    interface IEmployee1 {
        empCode: number;
        empName: string;
        empDept?: string;
    }

    let empObj1: IEmployee1 = {   // OK
        empCode: 1,
        empName: "Steve"
    }
    console.log("empObj1", empObj1); // Output : {"empCode": 1, "empName": "Steve"}


    let empObj2: IEmployee1 = {    // OK
        empCode: 1,
        empName: "Bill",
        empDept: "IT"
    }
    console.log("empObj2", empObj2); // Output : {"empCode": 1, "empDept": "IT", "empName": "Bill"}


    // ================= Readonly Property ===============

    interface Citizen {
        name: string;
        readonly SSN: number;
    }

    let personObj: Citizen = { SSN: 110555444, name: 'James Bond' }

    personObj.name = 'Steve Smith'; // OK
    // personObj.SSN = 333666888; // Compiler Error : Cannot assign to 'SSN' because it is a read-only property.

    // ================= Extending Interfaces ===================

    interface IPerson {
        name: string;
        gender: string;
    }

    interface IEmployee2 extends IPerson {
        empCode: number;
    }

    let empObj3: IEmployee2 = {
        empCode: 1,
        name: "Bill",
        gender: "Male"
    }

    console.log("empObj3", empObj3);

    // =================== Implementing an Interface =================

    interface IEmployee3 {
        empCode: number;
        name: string;
        getSalary: (empCode: number) => number;
    }


    class Employee1 implements IEmployee3 {
        empCode: number;
        name: string;

        constructor(code: number, name: string) {
            this.empCode = code;
            this.name = name;
        }

        getSalary(empCode: number): number {

            console.log(empCode);

            return 20000;
        }
    }

    let emp = new Employee1(1, "Steve");
    console.log(emp);





    return (
        <View>
            <Text style={{ color: 'white' }}>LearnTS100124-Interface</Text>
            <Text style={{ color: 'white' }}>Open Console for Results</Text>
            <Text style={{ color: 'white' }}>This is also known as "duck typing" or "structural subtyping".</Text>
        </View>
    );
}

export default LearnTS100124_Interface;
