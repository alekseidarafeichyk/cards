const initialState = {
    portionPacksOnPage: 10,
    pageCount : 1,
    currentPage: 1
}

export const paginatorReducer = (state=initialState,action:ActionsType) => {
    switch (action.type) {
        case 'SET_DATA':
            return {...state, portionPacksOnPage: action.portionPacksOnPage,currentPage: action.currentPage,pageCount: action.pageCount}
        default :
            return state
    }
}

//action
export const setDataPaginator = (currentPage: number, portionPacksOnPage: number, pageCount:number) => ({type:'SET_DATA',currentPage,portionPacksOnPage,pageCount} as const)

//types
type ActionsType = ReturnType<typeof setDataPaginator>