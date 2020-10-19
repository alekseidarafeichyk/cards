import {Dispatch} from "redux";
import {dataInForgotType, forgotAPI} from "../../m3-dal/api";

type ActionType = ReturnType<typeof setEmailToChangePasswordAC>
    | ReturnType<typeof setSaveServerResponseAC>
    | ReturnType<typeof setServerErrorAC>

export type InitialStateType = {
    email: string
    serverResponse: string
    serverError: string
}

const InitialState = {
    email: "",
    serverResponse: "",
    serverError: ""
}

export const passwordRecoveryReducer = (state: InitialStateType = InitialState, action: ActionType) => {
    switch (action.type) {
        case "EMAIL_TO_CHANGE_PASSWORD":
            return {
                ...state,
                email: action.email
            }
        case "SAVE_SERVER_RESPONSE":
            return {
                ...state,
                serverResponse: action.answer
            }
        case "SAVE_SERVER_ERROR":
            return {
                ...state,
                serverError: action.error

            }
        default :
            return state
    }
}

export const setEmailToChangePasswordAC = (email: string) => ({type: 'EMAIL_TO_CHANGE_PASSWORD', email} as const)
export const setSaveServerResponseAC = (answer: string) => ({type: 'SAVE_SERVER_RESPONSE', answer} as const)
export const setServerErrorAC = (error: string) => ({type: 'SAVE_SERVER_ERROR', error} as const)

export const passwordRecoveryTC = (dataInForgot: dataInForgotType) => (dispatch: Dispatch) => {
    forgotAPI.forgot(dataInForgot)
        .then((res) => {
            dispatch(setEmailToChangePasswordAC(dataInForgot.email))
            dispatch(setSaveServerResponseAC(res.data.info))
        })
        .catch((err: serverErrorType) => {
           dispatch(setServerErrorAC(err.response.data.error))
        })
}

type serverErrorType = {
    response: {data: dataServerErrorType}
}
type dataServerErrorType = {
    email: string
    error: string
    in: string
}