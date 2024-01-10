import React from 'react';
import { View, Text } from 'react-native';

const LearnTS100124_Classes = () => {

    // ========Inheritance =============

    class Person {
        name: string;

        constructor(name: string) {
            this.name = name;
        }
    }

    class Employee extends Person {
        empCode: number;

        constructor(empcode: number, name: string) {
            super(name);
            this.empCode = empcode;
        }

        displayName(): void {
            console.log("Name = " + this.name + ", Employee Code = " + this.empCode);
        }
    }

    let emp = new Employee(100, "Bill");
    emp.displayName(); // Name = Bill, Employee Code = 100


    // ============= Implements Interface =============

    interface IPerson {
        name: string;
        display(): void;
    }

    interface IEmployee {
        empCode: number;
    }

    class Employee1 implements IPerson, IEmployee {
        empCode: number;
        name: string;

        constructor(empcode: number, name: string) {
            this.empCode = empcode;
            this.name = name;
        }

        display(): void {
            console.log("Name = " + this.name + ", Employee1 Code = " + this.empCode);
        }
    }

    let per: IPerson = new Employee1(100, "Bill");
    per.display(); // Name = Bill, Employee1 Code = 100

    let emp1: IEmployee = new Employee1(100, "Bill");
    // emp1.display(); //Compiler Error: Property 'display' does not exist on type 'IEmployee'


    // =========== Interface extends Class ============

    class Person1 {
        name!: string;
    }

    interface IEmployee extends Person1 {
        empCode: number;
    }

    let emp2: IEmployee = { name: "James Bond", empCode: 1 }
    console.log("emp2", emp2);

    // =============== Method Overriding ==============

    class Car {
        name: string;
        // id:number;

        constructor(name: string) {
            this.name = name;
            // this.id = id;

        }

        run(speed: number = 0) {
            console.log("A " + this.name + " is moving at " + speed + " mph!");
        }
    }

    class Mercedes extends Car {

        constructor(name: string) {
            super(name);
        }

        run(speed = 150) {
            console.log('A Mercedes started')
            super.run(speed);
        }
    }

    let mercObj = new Mercedes("Mercedes-Benz GLA");
    mercObj.run();  // A Mercedes started A Mercedes-Benz GLA is moving at 150 mph!


    class Honda extends Car {

        constructor(name: string) {
            super(name);
        }

        run(speed = 100) {
            console.log('A Honda started')
            super.run(speed);
        }
    }

    let hondaObj = new Honda("Honda City")

    hondaObj.run(); // A Honda started A Honda City is moving at 100 mph!

    // ================== Data Modifiers ================

    //There are three types of access modifiers in TypeScript: public, private and protected.

    class Employee2 {
        public empName: string;
        protected empCode: number;

        constructor(name: string, code: number) {
            this.empName = name;
            this.empCode = code;
        }
    }

    class SalesEmployee extends Employee2 {
        private department: string;

        constructor(name: string, code: number, department: string) {
            super(name, code);
            this.department = department;
        }
    }

    let emp3 = new SalesEmployee("John Smith", 123, "Sales");
    // emp3.empCode; //Compiler Error --> Property 'empCode' is protected and only accessible within class 'Employee2' and its subclasses.

    return (
        <View>
            <Text style={{ color: 'white' }}>LearnTS100124_Classes</Text>
            <Text style={{ color: 'white' }}>Open Console for Results</Text>
        </View>
    );
}

export default LearnTS100124_Classes;
