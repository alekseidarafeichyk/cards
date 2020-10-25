import {AuthResponseType} from '../../m3-dal/api';

const InitialState : AuthResponseType = {
    _id:'',
    email:'',
    rememberMe:false,
    isAdmin:false,
    name:'',
    verified:false,
    publicCardPacksCount:0,
    created:'',
    updated:'',
    __v:0,
    token:'',
    tokenDeathTime: 0,
    avatar: 'Some avatar'
}

export const profileReducer = (state = InitialState, action: ActionsType): AuthResponseType => {
    switch (action.type) {
        case 'SET-DELETE-USER': {
            return {...state, ...action.user}
        }
        default : return state
    }
}

//actions
export const setDeleteUserProfile = (user: AuthResponseType) =>({type: 'SET-DELETE-USER', user} as const)

//types
type ActionsType = ReturnType<typeof setDeleteUserProfile>