console.log("----------om----------");

class Person{
    constructor(fName,lname){
        this.fName=fName;
        this.lname=lname;
    }

    displayFullName(){
        return this.fName+" "+this.lname;
    }
}

let person1=new Person("Virat","kohli");
let person2=new Person("Sachin","Tendulkar");
console.log(person1);
console.log(typeof(person2));
console.log(typeof(Person));
console.log(person1.displayFullName());
console.log(Person.prototype);
console.log("----------------");
console.log(Object.getPrototypeOf(person1));


// Animal Class


class Animal{
    constructor(name){
        this.name=name;
    }

    eat(){
        return `${this.name} is Eating`;
    }

    makeSound(){
        return `${this.name} is Shouting`;
    }
}

class Dog extends Animal{
    constructor(name,breed){
        super(name);
        this.breed=breed;
    }

    sniff(){
        return `${this.name} is sniffing`;
    }

    whichBreed(){
        return `${this.name} belongs to German Shepord breed`;
    }

    
}

class Cat extends Animal{
    constructor(name,breed){
        super(name);
        this.breed=breed;
    }

    Kned(){
        return `${this.name} is Knedding`;
    }

    whichBreed(){
        return `${this.name} belongs to cat breed`;
    }

    
}
console.log("-----------Dog class--------");
let dog=new Dog("Dog","German Shepard");
console.log(dog);
console.log(dog.eat());
console.log(dog.makeSound());
console.log(dog.sniff());
console.log(dog.whichBreed());
console.log("-----------cat class--------");
let cat=new Cat("Cat","Persian Cat");
console.log(cat);
console.log(cat.eat());
console.log(cat.makeSound());
console.log(cat.Kned());
console.log(cat.whichBreed());