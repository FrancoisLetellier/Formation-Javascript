const calculator = {
   //exec : function (obj){
     // exec(obj){
    //const{operator, values} = obj
   
    // defaultValue: 10
    exec({ operator, values }) {
      if(obj.operator == '+'){
          return obj.values[0] + obj.values[1]
      }
      else if(obj.operator == '-') {
          return obj.values[0] - obj.values[1]
      }

      //return values[0] + (operator == '+' ? 1: -1)
      // * values[1]
      // + this.defaultValue
   }
}
 
const value1 = calculator.exec({
    operator: '+',
  values: [1, 2]
})
 
const value2 = calculator.exec({
    operator: '-',
  values: [1, 2]
})
 
console.log(value1, value2) // affiche 3, -1