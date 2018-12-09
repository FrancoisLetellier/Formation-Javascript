import template from './login.template'
import emailValidator from '../shared/validators/email.validator'
import authService from '../core/auth.service'
import escape from 'escape-html'

export class LoginComponent{
    constructor(){
        this._el = document.createElement('login')
        this.render()
    }
    render(){
        //const params = location.search.split('=')
        const url = new URLSearchParams(location.search)
        this._el.innerHTML = template({
            title: escape(url.get('title'))
        })
        this.form = this._el.querySelector('#loginForm')
       /*const event = await new Promise((resolve) => {
           this.form.addEventListener('submit', (event))
       })*/
       
       
         new Promise((resolve) => {
            this.form.addEventListener('submit', (event) => {
             resolve(event)       
            })
        }).then((event) => {
            event.preventDefault()
            return this.login()
        }).then(() => {
            console.log('terminé')
        })
        
        /*this.form.addEventListener('submit', /*(event) =>{
            /*this.login()
            event.preventDefault()
        })*/
    }
    login(){
       try {
           // console.log('test')
       const emailInput = this.form.elements.email
       if(!emailValidator(emailInput)){
        emailInput.classList.add('is-invalid')
        alert('Email invalide')
        return
       }
       const data = {
        email: this.form.elements.email.value,
        password: this.form.elements.password.value
       }
       //console.log(data)
     authService.login(data)
       }
       catch (err) {
           console.log(err)
       }
    }
    get element(){
        return this._el
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const appEl = document.getElementById('app')
    const component = new LoginComponent()
    appEl.appendChild(component.element)


})

