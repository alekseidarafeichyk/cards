const initialState: initialStateGetRequestType = {
    packName: "",
    min: 0,
    max: 20,
    sortPacks: "1updated",
    page: 1,
    pageCount: 10,
    checkedMyPacks: false,
    cardPacksTotalCount: 1,
}


export const dataForGetRequestReducer = (state = initialState, action: ActionType): initialStateGetRequestType => {
    switch (action.type) {
        case "SET_PACK_NAME": {
            return {...state, packName: action.packName}
        }
        case "SET_MIN": {
            return {...state, min: action.min}
        }
        case "SET_MAX": {
            return {...state, max: action.max}
        }
        case "SET_SORT_PACKS": {
            return {...state, sortPacks: action.sortPacks}
        }
        case "SET_PAGE": {
            return {...state, page: action.page}
        }
        case "SET_PAGE_COUNT": {
            return {...state, pageCount: action.pageCount}
        }
        case "SET_CHECKED_MY_PACKS": {
            return {...state, checkedMyPacks: action.checked}
        }
        case "SET_PACKS_TOTAL_COUNT": {
            return {...state, cardPacksTotalCount: action.TotalCount}
        }
        default:
            return state
    }
}

// action creators
export const setPackNameAC = (packName: string) => ({type: 'SET_PACK_NAME', packName} as const)
export const setMinAC = (min: number) => ({type: 'SET_MIN', min} as const)
export const setMaxAC = (max: number) => ({type: 'SET_MAX', max} as const)
export const setSortPacksAC = (sortPacks: sortPacksType) => ({type: 'SET_SORT_PACKS', sortPacks} as const)
export const setPageAC = (page: number) => ({type: 'SET_PAGE', page} as const)
export const setPageCountAC = (pageCount: number) => ({type: 'SET_PAGE_COUNT', pageCount} as const)
export const setCheckedMyPacksAC = (checked: boolean) => ({type: 'SET_CHECKED_MY_PACKS', checked} as const)
export const setPacksTotalCountAC = (TotalCount: number ) => ({type: 'SET_PACKS_TOTAL_COUNT', TotalCount} as const)

// types
export type initialStateGetRequestType = {
    packName: string
    min: number
    max: number
    sortPacks: sortPacksType
    page: number
    pageCount: number
    checkedMyPacks: boolean
    cardPacksTotalCount: number
}
export type sortPacksType = "1updated" | "0updated"

type ActionType = ReturnType<typeof setPackNameAC>
    | ReturnType<typeof setMinAC>
    | ReturnType<typeof setMaxAC>
    | ReturnType<typeof setSortPacksAC>
    | ReturnType<typeof setPageAC>
    | ReturnType<typeof setPageCountAC>
    | ReturnType<typeof setCheckedMyPacksAC>
    | ReturnType<typeof setPacksTotalCountAC>



