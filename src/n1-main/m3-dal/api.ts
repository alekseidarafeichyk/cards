import axios from 'axios';
import {initialStateGetRequestType} from '../m2-bll/reducers/dataForGetRequestReducer';

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
    getPacks(requestParameters:initialStateGetRequestType, userID=''){
        const {pageCount,page,sortPacks,max,min,packName} = requestParameters
        return instance.get(`/cards/pack?packName=${packName}&min=${min}&max=${max}&pageCount=${pageCount}&page=${page}&sortPacks=${sortPacks}&user_id=${userID}`)
    },
    addPack(packName: string) {
        return instance.post('/cards/pack', {cardsPack: {name: packName}})
    },
    deletePack(id: string | null) {
        return instance.delete(`/cards/pack?id=${id}`)
    },
    updatePack(id: string | null, name: string) {
        return instance.put('/cards/pack', {cardsPack: {_id: id, name}})
    },
}


export const cardsAPI = {
    getCards(packId: string , pageCount = 4, page = 1) {
        return instance.get(`/cards/card?pageCount=${pageCount}&page=${page}&cardsPack_id=${packId}`)
    },
    addCard(packId: string) {
        return instance.post('/cards/card', {card: {cardsPack_id: packId}})
    },
    deleteCard(id: string | null) {
        return instance.delete(`/cards/card?id=${id}`)
    },
    updateCard(id: string | null, question: string, comments: string) {
        return instance.put('/cards/card', {card: {_id: id, question, comments}})
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