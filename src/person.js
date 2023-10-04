class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    getName() {
        return this.name;
    }
    
    setName(name) {
        this.name = name;
    }

    print() {
        console.log(`Name: ${this.name}, Age: ${this.age}`);
    }
}

export default Person;