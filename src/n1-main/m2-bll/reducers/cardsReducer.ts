import { cardsAPI, learnAPI } from "../../m3-dal/api"
import {Dispatch} from "redux";

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
                cards: state.cards.map((card) => card._id === action.id ? {...card, question: action.question, answer: action.answer} : card)
            }
        default :
            return state
    }
}

// //actions
export const setCards = (cards: cardsType) => ({type: 'SET_CARDS', cards} as const)
export const addingCardAC = (cards: cardsType) => ({type: 'ADD_CARD', cards} as const)
export const updateCardAC = (id: string | null, question: string, answer: string) => ({type: 'UPDATE_CARD', id, question, answer} as const)
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

export const addingCardTC = (packId:string, question: string, answer: string) => (dispatch: Dispatch) => {
    cardsAPI.addCard(packId, question, answer)
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
            dispatch(deleteCardAC(res.data.deletedCard._id))
        })
        .catch((err) => {
            console.log({...err})
        })
}

export const updateCardTC = (id: string | null, question: string, answer: string) => (dispatch: Dispatch) => {
    cardsAPI.updateCard(id, question, answer)
        .then((res) => {
            console.log(res)
            dispatch(updateCardAC(id, question, answer))
        })
        .catch((err) => {
            console.log({...err})
        })
}

export const sendGradeTC = (grade: number, card_id: string | null) => () => {
    learnAPI.sendGrade(grade, card_id)
        .then(res => {
            console.log("then ", res)
        })
        .catch(err => {
            console.log("err ", {...err})
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
