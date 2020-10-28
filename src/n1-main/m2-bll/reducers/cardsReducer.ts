
const InitialState: InitialStateType = {
    cardPacks: [{
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


export const packsReducer = (state = InitialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case 'SET_CARDS':
            return {...state, ...action.cards}
        // case "SET_MY_PACKS":
        //     return {...state, ...action.packs}
        // case "ADD_PACK":
        //     return {...state, cardPacks: [action.pack, ...state.cardPacks]}
        // case "DELETE_PACK":
        //     return {
        //         ...state,
        //         cardPacks: state.cardPacks.filter((pack) => pack._id !== action.id)
        //     }
        // case "UPDATE_PACK":
        //     return {
        //         ...state,
        //         cardPacks: state.cardPacks.map((pack) => pack._id === action.id ? {...pack, name: action.name} : pack)
        //     }
        default :
            return state
    }
}
//
// //actions
export const setCards = (cards: cardsType) => ({type: 'SET_CARDS', cards} as const)
// export const setMyPacks = (packs: InitialStateType) => ({type: 'SET_MY_PACKS', packs} as const)
// export const addingPackAC = (pack: cardPack) => ({type: 'ADD_PACK', pack} as const)
// export const updatePackAC = (id: string | null, name: string) => ({type: 'UPDATE_PACK', id, name} as const)
// export const deleteAC = (id: string | null) => ({type: 'DELETE_PACK', id} as const)
//
// //thunks
// export const getSetPacks = () => (dispatch: Dispatch) => {
//     packsAPI.getPacks()
//         .then(res => {
//             dispatch(setPacks(res.data))
//         })
//         .catch((err) => {
//             alert(err)
//         })
// }
//
// export const getMyPacksTC = (userID: string) => (dispatch: Dispatch) => {
//     packsAPI.getMyPacks(userID)
//         .then(res => {
//             dispatch(setMyPacks(res.data))
//         })
//         .catch((err) => {
//             alert(err)
//         })
// }
//
// export const getPacksSearchTC = (packName: string, min: number, max: number) => (dispatch: Dispatch) => {
//     packsAPI.getPacksSearch(packName, min, max)
//         .then((res) => {
//             dispatch(setPacks(res.data))
//         })
//         .catch((err) => {
//             console.log({...err})
//         })
// }
//
// export const addingPackTC = () => (dispatch: Dispatch) => {
//     packsAPI.addPack()
//         .then((res) => {
//             dispatch(addingPackAC(res.data.newCardsPack))
//         })
//         .catch((err) => {
//             console.log({...err})
//         })
// }
//
// export const deletePackTC = (id: string | null) => (dispatch: Dispatch) => {
//     packsAPI.deletePack(id)
//         .then((res) => {
//             dispatch(deleteAC(res.data.deletedCardsPack._id))
//             console.log(res)
//         })
//         .catch((err) => {
//             console.log({...err})
//         })
// }
//
// export const updatePackTC = (id: string | null, name: string) => (dispatch: Dispatch) => {
//     packsAPI.updatePack(id, name)
//         .then((res) => {
//             console.log(res)
//             dispatch(updatePackAC(id, name))
//         })
//         .catch((err) => {
//             console.log({...err})
//         })
// }

// types
export type InitialStateType = {
    cardPacks: Array<cardsType>
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
//     | ReturnType<typeof addingPackAC>
//     | ReturnType<typeof updatePackAC>
//     | ReturnType<typeof setMyPacks>
//     | ReturnType<typeof deleteAC>
