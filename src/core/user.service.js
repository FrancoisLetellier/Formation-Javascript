import http from 'axios'

export class UserService {
    constructor(){
        this.url = 'https://jsonplaceholder.typicode.com/users'
    }
    get(){
        return http.get(this.url)
        // retrun fetch(this.url).then(res => res.json())
    }
    create(data){
        return http.post(this.url, data)
    }

delete(id){
return http.delete(`${this.url}/${id}`)
}
}
export default new UserService()