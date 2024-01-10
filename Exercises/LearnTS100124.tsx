import React from 'react';
import { View, Text } from 'react-native';

const LearnTS100124 = () => {

    // =======================Function Overloading======================

    //==EX-1==> Same function name with different types param & return value

    function add(a: string, b: string): string;

    function add(a: number, b: number): number;

    function add(a: boolean, b: boolean): boolean;

    function add(a: any, b: any): any {
        return a + b;
    }

    // console.log(add("Hello ", "Steve")); // returns "Hello Steve" 
    // console.log(add(10, 20)); // returns 30 
    // console.log(add(false, false)); // returns 0
    // console.log(add(true, false)); // returns 1
    // console.log(add(true, true)); // returns 2



    //==EX-2==> Same function name with different types param but return value same

    // function display(x: string, y: string): void //Compiler Error: Duplicate function implementation
    // {
    //     console.log(x + y);
    // }

    // function display(x: number, y: number): void //Compiler Error: Duplicate function implementation
    // {
    //     console.log(x + y);
    // }

    // display("Hello ", "Steve"); // returns "Hello Steve"
    // display(10, 20); //  return 30



    //========================Rest Parameters====================

    // EX-1==>
    // function Greet(greeting: string, ...names: string[]) {
    // return greeting + " " + names.join(", ") + "!";
    // }

    // console.log(Greet("Hello"));// returns "Hello !"
    // console.log(Greet("Hello", "Steve", "Bill")); // returns "Hello Steve, Bill!"
    // console.log(Greet("Hello", "Steve", "Bill", "Vijay", "Dhaval")); // returns "Hello Steve, Bill!"

    // EX-2==> wrong way to use rest parameters

    // function Greet(...names: string[], greeting: string) {  // Compiler Error--> A rest parameter must be last in a parameter list.
        // return greeting + " " + names.join(", ") + "!";
    // }

    // console.log(Greet("Hello"));// Compiler Error--> An argument for 'greeting' was not provided.
    // console.log(Greet("Hello", "Steve")); // Compiler Error--> Argument of type 'string' is not assignable to parameter of type 'string[]'.
    // console.log(Greet("Hello", "Steve", "Bill")); // Compiler Error--> Expected 2 arguments, but got 3.






    return (
        <View>
            <Text style={{ color: 'white' }}>LearnTS100124</Text>
            <Text style={{ color: 'white' }}>Open Console for Results</Text>
        </View>
    );
}

export default LearnTS100124;
