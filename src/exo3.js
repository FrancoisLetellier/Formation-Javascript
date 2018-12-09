class Person {
    constructor(name){
        this.name = name
    }
    setAge(age){
       this.age = age
    }
    getAge(){
        return this.age
    }
}

const person1 = new Person('jim')
person1.setAge(18)

const person2 = new Person('ana')
//person2.setAge(person1.getAge() + 10) // l'age de jim + 10
person2.setAge(person1.age + 10)


//exemple 2 

class Person {
    constructor(name){
        this.name = name
    }
    get age(){
      return this._age
    }
    set age(nb){
        this._age = nb
       
    }
}

const person1 = new Person('jim')
person1.setAge(18)

const person2 = new Person('ana')
//person2.setAge(person1.getAge() + 10) // l'age de jim + 10
person2.age = person1.age + 10