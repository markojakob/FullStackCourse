class Person {
    constructor(name,age){
        this.name = name
        this.age = age
    }

    greet(){
        console.log("Hello minu nimi on " + this.name + " ja olen " + this.age + " vana")
    }
}

const kelly = new Person("Kelly", 18)
kelly.greet()

const aleks = new Person("Aleks", 18)
aleks.greet()