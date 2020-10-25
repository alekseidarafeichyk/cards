import {Dispatch} from 'redux';
import {registrationAPI} from '../../m3-dal/api';
import {SetStatusAC} from './loaderReducer';

const InitialState: InitialStateType = {
    isRegistered: false,
    serverError: '',
    status: 'idle'
}

export const registerReducer = (state = InitialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case 'REGISTER_USER': {
            return {
                ...state,
                isRegistered: action.isRegistered,
                serverError: action.error ? action.error : ''
            }
        }
        default :
            return state
    }
}

//actions
export const RegisterUserAC = (isRegistered: boolean, error = '') =>
    ({type: 'REGISTER_USER', isRegistered, error} as const);

//thunks
export const RegisterUserTC = (email: string, password: string) => (dispatch: Dispatch) => {
    dispatch(SetStatusAC('loading'));
    registrationAPI.registration(email, password)
        .then(res => {
            dispatch(SetStatusAC('succeeded'));
            dispatch(RegisterUserAC(true));
        })
        .catch(error => {
            dispatch(SetStatusAC('failed'));
            dispatch(RegisterUserAC(false, error.response.data.error));
        })
}

//types
export type InitialStateType = {
    isRegistered: boolean,
    serverError: string,
    status: RequestStatusType
}
type ActionsType =
    | ReturnType<typeof RegisterUserAC>
    | ReturnType<typeof SetStatusAC>
export type RequestStatusType = 'idle' | 'loading' | 'succeeded' | 'failed'