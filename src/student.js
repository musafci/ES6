import Person from './person.js';

class Student extends Person{
    
    constructor(name, age, id) {
        super(name, age);
        this.id = id;
    }

    print() {
        Person.print();
        console.log(`Id: ${this.id}`);
    }
}

export default Student;