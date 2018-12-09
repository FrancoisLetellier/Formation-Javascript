//import userList from "./user-list";
import { userList } from './user-list'
import userService from './core/user.service'
export function initButton(users){
    const button = document.getElementById('userAdd')
    const extFilterE1 = document.getElementById('extFilter')
    button.addEventListener('click', () => {
        const name = document.forms.myform.elements.username.value
        const obj = {
            name 
        }
        userService
        .create(obj)
        .then((res) => {
            const userCreated = res.data
            users.push(userCreated)
            addUser(userCreated, users)
        })
        .catch((err) => {
           const { status } = err.response
           const error = new Error('mon erreur')
           error.status = status
           console.log(error)
           alert(error.message)
        })
    
    }) 
    extFilterE1.addEventListener('change', (event) => {
        const value = event.target.value
        // const { value } = event.target
        const usersFilter = users.filter(user => user.email.endsWith(value))
        ul.innerHTML = ''
        userList(usersFilter)
    })
}


export function addUser(userObj, users){
const ul = document.getElementById('user-list')
const li = document.createElement('li')
li.setAttribute('data-id', userObj.id)
const button = document.createElement('button')
button.textContent = 'Supprimer'
button.addEventListener('click', function(){
    removeUser.call(this,users)
})


li.textContent = userObj.name
li.appendChild(button)

ul.appendChild(li)
}

export function removeUser(users){
    const li = this.parentNode
    const userId = li.getAttribute('data-id')
    userService
    .delete(userId)
    .then(() =>{
    const index = users.findIndex(user => user.id == userId)
    users.splice(index, 1)
    console.log(users) 

    li.remove()
})
.catch((err) => {
    console.log(err)
})
}