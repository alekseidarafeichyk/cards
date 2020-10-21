import axios from 'axios';

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://neko-back.herokuapp.com/2.0',
})

export const ApiAuth = {
    me(token: string) {
        instance.post<AuthResponseType>('/auth/me', {token})
    },

    login(email: string, password: string, rememberMe: boolean) {
        instance.post<AuthResponseType>('/auth/login', {email, password, rememberMe})
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