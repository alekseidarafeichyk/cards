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
    forgot(email: string) {
        return instance.post<ResponseType>('/auth/forgot', {
            email: email,
            from: 'test-front-admin',
            message: `<div style="background-color: gold; padding: 15px">Password recover link:
                    <a href="https://alekseidarafeichyk.github.io/cards/#/new_password/$token$">link</a>
                </div>`
        })
    }
}

export const packsAPI = {
    getPacks(pageCount = 1000, page = 4, sortPacks = '0updated') {
        return instance.get(`/cards/pack?pageCount=${pageCount}&page=${4}&sortPacks=${sortPacks}`)
    }
}


// Types
export type AuthResponseType = {
    _id: string,
    email: string,
    rememberMe: boolean,
    isAdmin: boolean,
    name: string,
    verified: boolean,
    publicCardPacksCount: number,
    created: string,
    updated: string,
    __v: number,
    token: string,
    tokenDeathTime: number
    avatar?: string
}
export type AuthUserData = {
    email: string
    password: string
    rememberMe: boolean
}
type ResponseType = {
    info: string
    success: boolean
}