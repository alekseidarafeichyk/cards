let EMAIL_TO_CHANGE_PASSWORD = 'EMAIL_TO_CHANGE_PASSWORD'

type ActionType = ReturnType<typeof setEmailToChangePasswordAC>

type InitialStateType = {
    email: string
}

const InitialState = {
    email: ""
}

export const passwordRecoveryReducer = (state: InitialStateType = InitialState, action: ActionType) => {
    switch (action.type) {
        case EMAIL_TO_CHANGE_PASSWORD:
            return {
                ...state,
                email: action.email
            }
        default :
            return state
    }
}
export const setEmailToChangePasswordAC = (email: string) => ({type: EMAIL_TO_CHANGE_PASSWORD, email} as const)