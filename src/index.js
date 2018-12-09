import isArray from 'lodash/isArray'
import { User, MY_CONSTANT  } from './user'
import http from 'axios'
//import usersData from './user-data'
import usersList from './user-list';
import { initButton } from './user-add'
import userService, { UserService } from './core/user.service'

document.addEventListener('DOMContentLoaded', () => {
    const nav = document.querySelector('nav')
    const strong = document.createElement('strong')
    strong.innerText = 'New Menu'
    nav.appendChild(strong)
    //console.log(nav instanceof HTMLElement)
    //av.innerHTML = '<strong>New Menu</strong>'
    //const button = document.query Selector('#changeText')
    const button = document.getElementById('changerText')
    button.addEventListener('click', () => {
        strong.textContent = 'Modified' 
    })
   // http.get('https://jsonplaceholder.typicode.com/users')
   userService.get()
    .then((res) => {
        //return res.json()
  //  }).then((usersData) => {
        const usersData = res.data
        usersList(usersData)
        initButton(usersData)
    })
    
})

const names = ['jim', 'ana']
console.log(names instanceof Array)

if(isArray(names)){
    console.log('est un tableau')
}
const user = new User()
user.avatar()