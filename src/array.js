const array = [[{name: 'ana', age: 18}, {name: 'ben', age: 19}], [{name: 'sam', age: 15}, {name: 'jim', age: 30}]]
console.log(array[0])

//for(let i = 0; i <= 4; i++){
    //console.log(array[i])
 //var name = array[i].name
 //var age = array[i].age
 //return age
//}

for(let subArray of array){
    for (let person of subArray){
        console.log(person.name + ':' + person.age)
    }
}