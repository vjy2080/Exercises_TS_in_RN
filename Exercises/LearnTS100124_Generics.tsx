import React from 'react';
import { View, Text } from 'react-native';

const LearnTS100124_Generics = () => {

    //================== Simple function ====>


    function getArray(items: any[]): any[] {
        return new Array().concat(items);
    }

    let myNumArr = getArray([100, 200, 300]);
    let myStrArr = getArray(["Hello", "World"]);

    myNumArr.push(400); // OK
    myStrArr.push("Hello TypeScript"); // OK

    myNumArr.push("Hi"); // OK
    myStrArr.push(500); // OK

    console.log(myNumArr); // [100, 200, 300, 400, "Hi"]
    console.log(myStrArr); // ["Hello", "World", "Hello TypeScript", 500]


    //================== Generics Function ===>


    function getArrayG<T>(items: T[]): T[] {  // It is not necessary to use keyword " T "
        return new Array<T>().concat(items);
    }

    // function getArrayG<G>(items: G[]): G[] {  
    // return new Array<G>().concat(items);
    // }

    let myNumArrG = getArrayG<number>([100, 200, 300]);
    let myStrArrG = getArrayG<string>(["Hello", "World"]);
    // let myNumArrG = getArrayG([100, 200, 300]);     // It is not necessary to specify <number>
    // let myStrArrG = getArrayG(["Hello", "World"]);  // It is not necessary to specify <string>

    myNumArrG.push(400); // OK
    myStrArrG.push("Hello TypeScript"); // OK

    // myNumArrG.push("Hi"); // Compiler Error --> Argument of type 'string' is not assignable to parameter of type 'number'.
    // myStrArrG.push(500); // Compiler Error --> Argument of type 'number' is not assignable to parameter of type 'string'.



    //============ Multiple Type Variables ===>



    function displayType<T, U>(id: T, name: U): void {
        console.log(typeof (id) + ", " + typeof (name));
    }

    displayType<number, string>(1, "Steve"); // number, string

    // Generic with Non-generic Type

    function displayType2<T>(id: T, name: string): void {
        console.log(typeof (id) + ", " + typeof (name));
    }

    displayType2<number>(1, "Steve"); // number, string



    //==========Generic with Interface =================

    interface KeyPair<T, U> {
        key: T;
        value: U;
    }

    let kv1: KeyPair<number, string> = { key: 1, value: "Dave" }; // OK
    console.log(kv1);

    let kv2: KeyPair<number, number> = { key: 1, value: 12345 }; // OK
    console.log(kv2);


    // ============================

    enum PrintMedia {
        Newspaper,
        Newsletter,
        Magazine,   
        Book
    }

    console.log(PrintMedia.Book);


    return (
        <View>
            <Text style={{ color: 'white' }}>LearnTS100124_Generics</Text>
            <Text style={{ color: 'white' }}>Open Console for Results</Text>
        </View>
    );
}

export default LearnTS100124_Generics;
