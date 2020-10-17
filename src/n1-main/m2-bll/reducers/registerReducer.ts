type InitialStateType = {
    isRegistered: boolean,
    error: string
}

const InitialState : InitialStateType = {
    isRegistered: false,
    error: ''
}

type ActionsType = ReturnType<typeof isRegisterUserAC>

export const registerReducer = (state = InitialState, action: ActionsType) : InitialStateType => {
    switch (action.type) {
        case 'IS_REGISTER_USER': {
            return {
                ...state,
                isRegistered : action.isRegistered,
                error: action.error ? action.error : ''
            }
        }
        default :
            return state
    }
}

export const isRegisterUserAC = (isRegistered : boolean,error= '') =>
    ({type: 'IS_REGISTER_USER',isRegistered,error} as const)