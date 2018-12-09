
//exemple 1
const add = function(nb1) {
return function(nb2){
return nb1 + nb2
}   
}

//exemple 2
const add = nb1 => nb2 => nb1 + nb2
     
const result = add(1)(2)
console.log(result) // affiche 3