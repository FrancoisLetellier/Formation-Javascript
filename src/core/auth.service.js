import http from 'axios'

class AuthService{
    constructor(){
        //impossible a faire sans axios
        http.interceptors.request.use((config) => {
            config.headers.authorization = localStorage.getItem('token')
            return config
        })
    }
    login(data){
        return http
        .post('https://reqres.in/api/login', data)
        .then((res) => {
        const token = res.data.token
        localStorage.setItem('token', token)
        
        })
    
}
}

export default new AuthService()