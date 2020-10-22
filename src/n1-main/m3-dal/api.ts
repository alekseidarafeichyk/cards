import axios from 'axios';

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://neko-back.herokuapp.com/2.0',
})

export const authApi = {
    me() {
       return instance.post<AuthResponseType>('/auth/me', {})
    },

    login(authUserData: AuthUserData) {
       return instance.post<AuthResponseType>('/auth/login', {...authUserData})
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

export type AuthUserData = {
    email: string
    password: string
    rememberMe: boolean
}