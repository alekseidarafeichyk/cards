import {Dispatch} from 'redux';
import {registrationAPI} from '../../m3-dal/api';

const InitialState : InitialStateType = {
    isRegistered: false,
    error: '',
    status: 'idle'
}

export const registerReducer = (state = InitialState, action: ActionsType) : InitialStateType => {
    switch (action.type) {
        case 'REGISTER_USER': {
            return {
                ...state,
                isRegistered : action.isRegistered,
                error: action.error ? action.error : ''
            }
        }
        case 'SET_STATUS': {
            return {...state,status : action.status}
        }
        default :
            return state
    }
}

//actions
export const RegisterUserAC = (isRegistered : boolean, error= '') =>
    ({type: 'REGISTER_USER',isRegistered,error} as const);
export const SetStatusAC = (status: RequestStatusType) =>
    ({type: 'SET_STATUS',status} as const);

//thunks
export const RegisterUserTC = (email: string,password: string) => (dispatch: Dispatch) => {
            dispatch(SetStatusAC('loading'));
    registrationAPI(email, password)
        .then(res => {
            dispatch(SetStatusAC('succeeded'));
            dispatch(RegisterUserAC(true));
        })
        .catch(error => {
            dispatch(SetStatusAC('failed'));
            dispatch(RegisterUserAC(false,error.response.data.error));
        })
}

//types
type InitialStateType = {
    isRegistered: boolean,
    error: string,
    status: RequestStatusType
}
type ActionsType =
    | ReturnType<typeof RegisterUserAC>
    | ReturnType<typeof SetStatusAC>
export type RequestStatusType = 'idle' | 'loading' | 'succeeded' | 'failed'