import {Dispatch} from 'redux';
import {packsAPI} from '../../m3-dal/api';

const InitialState: InitialStateType = {
    cardPacks: [{
        _id: null,
        user_id: null,
        user_name: null,
        private: null,
        name: null,
        path: null,
        grade: null,
        shots: null,
        cardsCount: null,
        type: null,
        rating: null,
        created: null,
        updated: null,
        more_id: null,
        __v: null,
        deckCover: null
    },
    ],
    page: null,
    pageCount: null,
    cardPacksTotalCount: null,
    minCardsCount: null,
    maxCardsCount: null,
    token: null,
    tokenDeathTime: null,
}


export const packsReducer = (state = InitialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case 'SET_PACKS':
            return {...state, ...action.packs}
        default :
            return state
    }
}

//actions
export const setPacks = (packs: InitialStateType) => ({type: 'SET_PACKS', packs} as const)

//thunks
export const getSetPacks = () => (dispatch: Dispatch) => {
    packsAPI.getPacks()
        .then(res => {
            dispatch(setPacks(res.data))
        })
        .catch((err) => {

        })
}

// types
export type InitialStateType = {
    cardPacks: Array<cardPack>
    page: number | null
    pageCount: number | null
    cardPacksTotalCount: number | null
    minCardsCount: number | null
    maxCardsCount: number | null
    token: string | null
    tokenDeathTime: number | null
}
export type cardPack = {
    _id: string | null
    user_id: string | null
    user_name: string | null
    private: boolean | null
    name: string | null
    path: string | null
    grade: number | null
    shots: number | null
    cardsCount: number | null
    type: string | null
    rating: number | null
    created: string | null
    updated: string | null
    more_id: string | null
    __v: number | null
    deckCover: null
}
type ActionsType =
    | ReturnType<typeof setPacks>
