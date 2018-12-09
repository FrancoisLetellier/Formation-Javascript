/*new Promise((resolve, reject) =>{
setTimeout(() => {
    //reject(new Error('mon erreur'))
    resolve('hey')
},2000)

}).then((str) => {
    console.log(str)
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('hey2')
        }, 3000)
    }).then(() => {
        console.log('test')
        return 'hey2'
    })
}).then((str2) => {
    console.log(str2)
}).then(() => {
    console.log('next')
}).catch(() => {
    console.log(err)
})
*/

async function translate() {
  //  return new Promise((resolve) => {
  try{
  const str = await p()     
  console.log('translate', str)
        
        //resolve()
    //})
}catch (err) {
    console.log(err)
}
}

translate().then(() => {
    console.log('terminé !')
})