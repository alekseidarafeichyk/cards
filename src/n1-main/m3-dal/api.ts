import axios from 'axios';

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://neko-back.herokuapp.com/2.0',
})

export const authApi = {
    me(token: string) {
       return instance.post<AuthResponseType>('/auth/me', {token})
    },

    login(email: string, password: string, rememberMe: boolean) {
       return instance.post<AuthResponseType>('/auth/login', {email, password, rememberMe})
    }
}

// Types

type AuthResponseType = {
    email: string
    isAdmin: boolean
    name: string
    rememberMe: boolean
    token: string,
    tokenDeathTime: number,
    __v: number,
    _id: string,
    success: boolean
}