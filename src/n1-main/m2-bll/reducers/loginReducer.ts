import {authAPI, AuthUserData} from '../../m3-dal/api';
import {Dispatch} from 'redux';
import {setDeleteUserProfile} from './profileReducer';
import {SetStatusAC} from './loaderReducer';

const InitialState = {
    isAuth: false,
    status: 'idle'
}

type initialStateType = typeof InitialState

export const loginReducer = (state: initialStateType = InitialState, action: ActionsTypes) => {
    switch (action.type) {
        case 'LOGIN/SET_IS_AUTH':
            return {
                ...state,
                isAuth: action.isAuth
            }
        default :
            return state
    }
}

// Actions
const setIsAuth = (isAuth: boolean) => ({type: 'LOGIN/SET_IS_AUTH', isAuth} as const)

// Thunks
export const LogIn = (authUserData: AuthUserData) => (dispatch: Dispatch<ActionsTypes>) => {
    dispatch(SetStatusAC('loading'))
    authAPI.login({...authUserData})
        .then(response => {
            dispatch(SetStatusAC('succeeded'))
            dispatch(setDeleteUserProfile(response.data))
            dispatch(setIsAuth(true))
        }).catch(err => {
        dispatch(SetStatusAC('failed'))
        let error = err.response ? err.response.data.error : err.message
        console.log(error)
    })
}
export const LogOut = () => (dispatch: Dispatch<ActionsTypes>) => {
    dispatch(SetStatusAC('loading'))
    authAPI.logout()
        .then(response => {
            const defaultUserProfile = {
                _id: '',
                email: '',
                rememberMe: false,
                isAdmin: false,
                name: '',
                verified: false,
                publicCardPacksCount: 0,
                created: '',
                updated: '',
                __v: 0,
                token: '',
                tokenDeathTime: 0,
                avatar: 'Some avatar'
            }
            dispatch(SetStatusAC('succeeded'))
            dispatch(setDeleteUserProfile(defaultUserProfile))
            dispatch(setIsAuth(false))
        }).catch(err => {
        dispatch(SetStatusAC('failed'))
        let error = err.response ? err.response.data.error : err.message
        console.log(error)
    })

}

export const authMe = () => (dispatch: Dispatch) => {
    debugger
    authAPI.me()
        .then(response => {
            dispatch(setDeleteUserProfile(response.data))
            dispatch(setIsAuth(true))
        })
        .catch(err => {
            let error = err.response ? err.response.data.error : err.message
            console.log(error)
        })
}

// Types
type ActionsTypes =
    | ReturnType<typeof setIsAuth>
    | ReturnType<typeof setDeleteUserProfile>
    | ReturnType<typeof SetStatusAC>
