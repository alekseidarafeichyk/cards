import axios from 'axios';

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://neko-back.herokuapp.com/2.0',
})

export const forgotAPI = {
    forgot(dataInForgot: dataInForgotType) {
        return instance.post<ResponseType>("/auth/forgot", dataInForgot)
    }
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