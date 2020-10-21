import {authApi} from "../../m3-dal/api";
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

export const LogIn = (email: string, password: string, rememberMe: boolean) => async (dispatch: Dispatch<ActionsTypes>) => {
    try{
        let response = await authApi.login(email, password, rememberMe)
        dispatch(setIsAuth(true))
    } catch (err) {
        alert(err)
    }
}

// Types
type ActionsTypes =  ReturnType<typeof setIsAuth>

