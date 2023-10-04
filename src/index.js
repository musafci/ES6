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