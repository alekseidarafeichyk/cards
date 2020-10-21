import axios from 'axios';

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://neko-back.herokuapp.com/2.0',
})

export const ApiAuth = {
    login() {
        instance.post('/auth/login',{})
    }
}