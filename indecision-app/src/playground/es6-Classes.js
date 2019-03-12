class Person{
    constructor(name = 'Anonymous', age=0) {
        this.name = name;
        this.age=age;
    }

    getGreeting(){        
        return `Hi! My name is ${this.name} and I am ${this.age}`;
    }
}

class Student extends Person{
    constructor(name, age, major){
        super(name,age);
        this.major = major;
    }

    hasMajor(){
        return !!this.major;
    }

    getGreeting(){
        let greeting = super.getGreeting();
        
        if(this.hasMajor()){
            greeting += `.My major is ${this.major}`;
        
        return greeting;    
        }
    }
}
const me = new Student("Harsh", 27, "CS");
console.log(me.getGreeting());
console.log(me.hasMajor());

const others =  new Student();
console.log(others);
console.log(others.hasMajor());