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