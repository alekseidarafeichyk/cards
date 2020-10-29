import axios from 'axios';
import {InitialStateType} from '../m2-bll/reducers/packsReducer';

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
    getPacksAndMyPacks(userID = "", pageCount = 4, page = 1) {
        return instance.get<InitialStateType>(`/cards/pack?pageCount=${pageCount}&page=${page}&user_id=${userID}`)
    },
    getPacksAndMyPacksWithSearch(userID: string | undefined, packName = "", min = 0, max = 100, pageCount = 10, page: number | undefined) {
        return instance.get<InitialStateType>(`/cards/pack?packName=${packName}&min=${min}&max=${max}&pageCount=${pageCount}&page=${page}&user_id=${userID}`)
    },
    addPack() {
        return instance.post('/cards/pack', {cardsPack: {name: "check adding"}})
    },
    deletePack(id: string | null) {
        return instance.delete(`/cards/pack?id=${id}`)
    },
    updatePack(id: string | null, name: string) {
        return instance.put('/cards/pack', {cardsPack: {_id: id, name}})
    },
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