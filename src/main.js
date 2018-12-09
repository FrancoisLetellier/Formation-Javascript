var name = 'sam'
var name2 = +'2'
var pi = 3.14159265
var names = [
    'ana',
    'jim',
    'ben',
]

var person = {
    name: 'ana',
    age: 18
}

// var test = undefined

// console.log(person.name)
// console.log(person['name'])

console.log(name[4])
console.log(person.country)

var isMinor = person.age < 18
var name = 'sam'


if (isMinor){
    //variable locale let name permet de ne pas d'écraser deuyx variable
   let name = 'ben' 
   console.log('est mineur')
  // console.log(name)
}else{
    console.log('est majeur')
}

console.log(name)

function foo(){
    name = 'jim'
    console.log(name) //jim
}

foo()
console.log(name) //ben

var myFunction = function(){
    console.log('ok')
}

myFunction()

var add = function(nb1, nb2){
    return nb1 + nb2
}

var result = add(10, 20)

console.log(result)

//for

for(var i=0 ; i < name.length ; i++){
    var name = name[i]
}

for(var name of names){

}

//map
var array = [1,2,3]
//array = array.map(function(){
//})
//exemple 1
var callback = function(nb){
    return nb * 2
}
// exemple 2
const array = [1,2,3].map(nb => nb * 2)

//exemple 3
const array = [1, 2, 3].map(function(nb){
    return nb * 2
})



//

array = array.map(callback)
console.map(array)


let name ='ana'
// on peut pas modifier la valeur const à la différence de let
const name = 'sam' 
name = 'robert'

const name3 = 'jim'
if(name3 == 'jim'){

}

//creation d'une classe
class User{
    constructor(){
        this.name = 'jim'
    }
    avatar(){
        const url = function(self){
            return '/images/' + self.name + 'jpg'
        }
       return url(this)
    }
}

//exemple 2

class User{
    constructor(){
        this.name = 'jim'
    }
    avatar(){
        const url = function(){
            return '/images/' + this.name + 'jpg'
        }
       return url()
    }
}

// exemple 3

class User{
    constructor(){
        this.name = 'jim'
    }
    avatar(){
        const url = () => '/images/' + this.name + 'jpg'
        return url()
    }
}

//exemple 4
class User{
    constructor(){
        this.name = 'jim'
    }
    avatar(){
        const url = () => {
            return '/images/' + this.name + 'jpg'
        }
       return url()
    }
}

//exemple 5

class User{
    constructor(){
        this.name = 'jim'
    }
    avatar(){
        const url = ext => '/images/' + this.name + ext
        return url('png')
    }
}


//exemple 6

//attention utiliser `` altgr 7 pour faire accent grave 
class User{
    constructor(){
        this.name = 'jim'
    }
    avatar(){
        const url = () => {
            return `/images/${this.name}.${ext}`
        }
       return url('png')
    }
}

// pour les quatres exemples
const user = new User()
console.log(user.avatar())