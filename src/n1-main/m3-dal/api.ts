import axios from 'axios';

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://neko-back.herokuapp.com/2.0',
    // baseURL: 'http://localhost:7542/2.0/',
})

export const authAPI = {
    me() {
        return instance.post<AuthResponseType>('/auth/me', {})
    },
    login(authUserData: AuthUserData) {
        return instance.post<AuthResponseType>('/auth/login', {...authUserData})
    },
    logout() {
        return instance.delete('/auth/me')
    },
}

export const registrationAPI = {
    registration(email: string, password: string) {
        return instance.post('/auth/register', {email, password});
    }
}

export const forgotAPI = {
    forgot(dataInForgot: dataInForgotType) {
        return instance.post<ResponseType>('/auth/forgot', dataInForgot)
    }
}

// Types
export type AuthResponseType = {
    _id:string,
    email:string,
    rememberMe:boolean,
    isAdmin:boolean,
    name:string,
    verified:boolean,
    publicCardPacksCount:number,
    created:string,
    updated:string,
    __v:number,
    token:string,
    tokenDeathTime: number
    avatar? : string
}
export type AuthUserData = {
    email: string
    password: string
    rememberMe: boolean
}
export type dataInForgotType = {
    email: string
    from: string
    message: string
}
type ResponseType = {
    info: string
    success: boolean
}