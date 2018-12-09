import { addUser } from './user-add'

export default function(users) {
    const ul = document.getElementById('user-list')
    for(let user of users){
        addUser(user, users)
    }
}

