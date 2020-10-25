import {RequestStatusType} from './registerReducer';

const InitialState: InitialStateType = {
    status: 'idle'
}


export const loaderReducer = (state = InitialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case 'SET_STATUS': {
            return {...state, status: action.status}
        }
        default :
            return state
    }
}

//actions
export const SetStatusAC = (status: RequestStatusType) =>
    ({type: 'SET_STATUS', status} as const);

// types
type ActionsType = ReturnType<typeof SetStatusAC>
type InitialStateType = {
    status: RequestStatusType
}