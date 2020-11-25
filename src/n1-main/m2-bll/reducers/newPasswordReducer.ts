import { Dispatch } from "redux"
import {forgotAPI, packsAPI} from '../../m3-dal/api';

const InitialState = {
    info: '',
    error: '',
    resetPasswordToken : ''
}

export const newPasswordReducer = (state = InitialState, action: ActionType) => {
    switch (action.type) {
        case 'SET_NEW_PASSWORD':
            return {
                ...state,
                error: action.error,
                info: action.info
            }
        default :
            return state
    }
}

export const setNewPasswordAC = (info: string, error: string,resetPasswordToken:string) => ({type: 'SET_NEW_PASSWORD', info, error,resetPasswordToken} as const)

export const setNewPasswordTC = (password: string,resetPasswordToken:string) => (dispatch: Dispatch<any>) => {
    forgotAPI.setNewPassword(password,resetPasswordToken)
        .then(res => {
            dispatch(setNewPasswordAC(res.data.info,'',resetPasswordToken))
        })
        .catch(res => {
            dispatch(setNewPasswordAC('',res.response.data.error,resetPasswordToken))
        })
}

type ActionType = ReturnType<typeof setNewPasswordAC>