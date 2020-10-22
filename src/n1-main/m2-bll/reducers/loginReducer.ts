import {authApi, AuthUserData} from "../../m3-dal/api";
import {Dispatch} from "redux";

const InitialState = {
    isAuth: false
}

type initialStateType = typeof InitialState

export const loginReducer = (state: initialStateType = InitialState, action: ActionsTypes) => {
    switch (action.type) {
        case 'LOGIN/SET_IS_AUTH':
            return {
                ...state,
                isAuth: action.isAuth
            }
        default : return state
    }
}

// Actions

const setIsAuth = (isAuth: boolean)=> ({type: 'LOGIN/SET_IS_AUTH', isAuth} as const)

// Thunks

export const LogIn = (authUserData: AuthUserData) => (dispatch: Dispatch<ActionsTypes>) => {
        authApi.login({...authUserData}).then(response => {
            dispatch(setIsAuth(true))
        }).catch(err => {
            let error = err.response ? err.response.data.error : err.message
            console.log(error)
        })
}

export const authMe = () => (dispatch: Dispatch) => {
    authApi.me().then(response => response).catch(err => {
        let error = err.response ? err.response.data.error : err.message
        console.log(error)
    })
}

// Types
type ActionsTypes =  ReturnType<typeof setIsAuth>

