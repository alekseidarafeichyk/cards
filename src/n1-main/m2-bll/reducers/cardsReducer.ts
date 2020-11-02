import { cardsAPI } from "../../m3-dal/api"
import {Dispatch} from "redux";
import {dialogModal} from "../../m4-utils/modals/modals";

const InitialState: InitialStateType = {
    cards: [{
        __v: null,
        _id: null,
        answer: null,
        cardsPack_id: null,
        created: null,
        grade: null,
        question: null,
        rating: null,
        shots: null,
        type: null,
        updated: null,
        user_id: null
    },
    ],
    cardsTotalCount: null,
    maxGrade: null,
    minGrade: null,
    pageCount: null,

}


export const cardsReducer = (state = InitialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case 'SET_CARDS':
            return {...state, ...action.cards}
        case "ADD_CARD":
            return {...state, cards: [action.cards, ...state.cards]}
        case "DELETE_CARD":
            return {
                ...state,
                cards: state.cards.filter((card) => card._id !== action.id)
            }
        case "UPDATE_CARD":
            return {
                ...state,
                cards: state.cards.map((card) => card._id === action.id ? {...card, name: action.name} : card)
            }
        default :
            return state
    }
}

// //actions
export const setCards = (cards: cardsType) => ({type: 'SET_CARDS', cards} as const)
export const addingCardAC = (cards: cardsType) => ({type: 'ADD_CARD', cards} as const)
export const updateCardAC = (id: string | null, name: string) => ({type: 'UPDATE_CARD', id, name} as const)
export const deleteCardAC = (id: string | null) => ({type: 'DELETE_CARD', id} as const)

//thunks
export const getCards = (packId:string) => (dispatch: Dispatch) => {
    cardsAPI.getCards(packId)
        .then(res => {
            dispatch(setCards(res.data))
        })
        .catch((err) => {
            alert(err)
        })
}

export const addingCardTC = (packId:string) => (dispatch: Dispatch) => {
    cardsAPI.addCard(packId)
        .then((res) => {
            dispatch(addingCardAC(res.data.newCard))
        })
        .catch((err) => {
            console.log({...err})
        })
}

export const deleteCardTC = (id: string | null) => (dispatch: Dispatch) => {
    cardsAPI.deleteCard(id)
        .then((res) => {
            dispatch(deleteCardAC(res.data.deletedCards._id))
        })
        .catch((err) => {
            console.log({...err})
        })
}

export const updateCardTC = (id: string | null, question: string, comments: string) => (dispatch: Dispatch) => {
    cardsAPI.updateCard(id, question, comments)
        .then((res) => {
            console.log(res)
            dispatch(updateCardAC(id, question))
        })
        .catch((err) => {
            console.log({...err})
        })
}

// types
export type InitialStateType = {
    cards: Array<cardsType>
    cardsTotalCount: number | null,
    maxGrade: number | null,
    minGrade: number | null,
    pageCount: number | null,

}
export type cardsType = {
    answer: string | null
    question: string | null
    cardsPack_id: string | null
    grade: number | null
    rating: number | null
    shots: number | null
    type: string | null
    user_id: string | null
    created: string | null
    updated: string | null
    __v: number | null
    _id: string | null
}
type ActionsType =
    | ReturnType<typeof setCards>
    | ReturnType<typeof addingCardAC>
    | ReturnType<typeof updateCardAC>
    | ReturnType<typeof deleteCardAC>
