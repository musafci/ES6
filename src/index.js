/** 
 * Const is a keyword in JavaScript which is used to declare a constant value.
*/

/*
    const x = 10;
    x = 20; // This will throw an error, because we are trying to reassign a value to a constant variable.
    console.log(x);
*/


/*
    const arr =[];
    arr.push(10);
    arr.push(20);

    arr = []; // This will throw an error, because we are trying to reassign a value to a constant variable.

    console.log(arr); // This will print [10, 20] to the console.
*/



/** 
 * Let vs Const vs Var 
*/


/*
    var num = 10;
    if(true) {
        var num = 20; // This will override the value of num to 20.
        console.log(num); // This will print 20 to the console.
    }
    console.log(num); // This will print 20 to the console.
*/



/*
    let num = 10;
    if (true) {
        let num = 20; // This will not override the value of num to 20.
        console.log(num) // This will print 20 to the console.
    }
    console.log(num); // This will print 10 to the console.
*/


/*
    function demo() {
        {
            let num = 10;
            console.log(num); // This will print 10 to the console.
            {
                const num = 20;
                console.log(num); // This will print 20 to the console.
            }
            num = 30;
            console.log(num); // This will print 30 to the console.
        }
        console.log(num); // This will throw an error, because num is not defined.
    }

    demo();
*/



/**
 * Template String And Multi line String
 */ 


/*
    const name = 'John';
    const age = 30;
    const email = 'john@mail.com';

    // const details = 'Name: ' + name + ' Age: ' + age + ' Email: ' + email; // traditional way
    const details = `Name: ${name} Age: ${age} Email: ${email}`; // template string way
    console.log(details);
*/



/**
 *  Arrow Function
 */ 


/*
    let print = () => {
        console.log('Hello World');
    }
    print();

    let add = (a, b) => {
        return a + b;
    }
    console.log(add(10, 20));

    let sqr = x => x * x;
    console.log(sqr(10));
*/


/**
 *  Enhance Object | New Object Syntax
 */ 

/*
    let name = "musa";
    let email = "musa@mail.com";

    // traditional way
    let user = {
        name: name,
        email: email,
        print() {
            console.log(this.name, this.email);
        }
    }
    // new object syntax with es6
    let user2 = {
        name,
        email,
        print () {
            console.log(this.name, this.email);
        }
    }

    user.print();
    user2.print();
*/

/**
 * Destructuring Array And Object 
*/

/*
    // Array Destructuring Example:1
    let arr = [10, 20, 30];
    let [a, b, c] = arr;
    console.log(a);

    // Array Destructuring Example:2
    let getNumber = () => [100, 200];
    let [x, y, z] = getNumber();
    console.log(x);
    console.log(y);
    console.log(z); // 'undefined' because the getNumber return only 2 elements.

    // Array Destructuring Assignment and Rest syntax
    let getUsers = () => ['John', 'Jane', 'Jack', 'Jill', 'Jonney'];
    let [u1, u2, ...restUsers] = getUsers();
    console.log(u1);
    console.log(u2);
    console.log(restUsers);
*/

/*
    // Object Destructuring Example:1
    let obj = {
        name: 'John',
        email: 'john@mail.com',
    }
    let {name, email} = obj; 
    console.log(name, "", email);
*/



/**
 * Rest And Spread Operator
 * A rest parameter allows you to represent an indefinite number of arguments as an array.
 * Notice that the rest parameters must appear at the end of the argument list. The following code will result in an error:
 * 
 * The spread operator allows you to spread out elements of an iterable object such as an array, map, or set.
*/

/*
    // Rest Operator example:1
    let arr3 = (...num) => {
        console.log("Rest Operator example 1: ", num);
    }
    arr3(10, 20, 30);


    // Rest Operator example:2
    let sum = (...num) => {
        return num.reduce((a, b) => (a + b));
    }
    let result = sum(10, 20, 30, 40, 50);
    console.log("Rest Operator example 2:", result);


    // Spread Operator example:1
    let arr = [10, 20, 30];
    let arr2 = [...arr, 40, 50];
    console.log("Spread Operator example 1:", arr2);


    // Spread Operator example:2
    let obj1 = {
        name: 'John',
        email: 'john@mail.com'
    }

    let obj2 = {
        obj1,
        name: "John Doe",
        phone: "1234567890",
    }

    console.log("Spread Operator example 2:", obj2);
*/



/**
 * Module System
 * An ES6 module is a JavaScript file that executes in strict mode only. 
 * It means that any variables or functions declared in the module won’t be added automatically to the global scope.
*/

/*
    // Import an entire module as an object
    import * as math from './math.js';
    console.log(math);
    console.log(math.add(10, 20));

    // Import single function
    import {add, sub, mul, div, mod} from './math.js';
    console.log(add(10, 20));
    console.log(sub(100, 20));
    console.log(mul(10, 20));
    console.log(div(100, 20));
    console.log(div(10, 3));
*/


/**
 * Classes
 * Unlike other programming languages such as Java and C#, JavaScript classes are syntactic sugar over the prototypal inheritance. In other words, ES6 classes are just special functions.
*/

/*
    import Person from './person.js';
    let person = new Person("John Doe", 30);
    console.log(person.name);
    person.print();

    person.setName("Bill Gates");
    console.log(person.getName());
*/


/**
 * Inheritance
 * Implementing JavaScript inheritance using extends and super
*/

/*
    import Student from './student.js';
    let student = new Student("John Doe", 30, "123");
    student.print();
*/


/**
 * Promises
 * A promise is an object that encapsulates the result of an asynchronous operation.
 * A promise object has a state that can be one of the following: Pending, Fulfilled with a value, Rejected for a reason
 * 
 * In the beginning, the state of a promise is pending, indicating that the asynchronous operation is in progress. Depending on the result of the asynchronous operation, the state changes to either fulfilled or rejected.
 * The fulfilled state indicates that the asynchronous operation was completed successfully:
 * The rejected state indicates that the asynchronous operation failed.
*/

    /**
     * Creating a promise
     * To create a promise object, you use the Promise() constructor:
     * The promise constructor accepts a callback function that typically performs an asynchronous operation. This function is often referred to as an executor.
     * In turn, the executor accepts two callback functions with the name 'resolve' and 'reject'.
     * If the asynchronous operation completes successfully, the executor will call the resolve() function to change the state of the promise from pending to fulfilled with a value.
     * In case of an error, the executor will call the reject() function to change the state of the promise from pending to rejected with the error reason.
     * Once a promise reaches either fulfilled or rejected state, it stays in that state and can’t go to another state.
     * 
     */

    /*
    const promise = new Promise((resolve, reject) => {
        // contain an operation
        // ...
      
        // return the state
        if (success) {
          resolve(value);
        } else {
          reject(error);
        }
    });
    */


    /**
     * Consuming a Promise: then, catch, finally
     * 
     * The then() method :: To get the value of a promise when it’s fulfilled, you call the then() method of the promise object. 
     * The following shows the syntax of the then() method: promise.then(onFulfilled,onRejected);
     * 
     * The catch() method :: If you want to get the error only when the state of the promise is rejected, you can use the catch() method of the Promise object:
     * promise.catch(onRejected);
     * 
     * The finally() method :: Sometimes, you want to execute the same piece of code whether the promise is fulfilled or rejected.
     */


    /**
     * A practical JavaScript Promise example
    */

    /*
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(data => {
        console.log(data);
    })
    .catch(error => {
        console.log(error)
    })
    */