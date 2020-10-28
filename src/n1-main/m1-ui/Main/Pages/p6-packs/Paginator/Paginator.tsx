import React, {ChangeEvent} from 'react';
import style from './Paginator.module.css'
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../../../../../m2-bll/store';
import {getSetPacks} from '../../../../../m2-bll/reducers/packsReducer';
import {PageIcon} from './PageIcon/PageIcon';

export const Paginator = () => {
    const dispatch = useDispatch()

    const numberPages = useSelector<RootState, number>(state => state.paginator.pageCount)
    const currentPage = useSelector<RootState, number>(state => state.paginator.currentPage)
    const portionPacksOnPage = useSelector<RootState,number>(state => state.paginator.portionPacksOnPage)

    let pages = []
    for (let i = 1; i <= numberPages; i++) {
        pages.push(i)
    }

    const changePortionPacks = (e: ChangeEvent<HTMLSelectElement>) => {
        dispatch(getSetPacks(+e.currentTarget.value,currentPage))
    }

    const changePage = (pageNumber: number) => {
        dispatch(getSetPacks(portionPacksOnPage,pageNumber))
    }

    return (
        <div>
            <select onChange={changePortionPacks}>
                <option value={10}>10</option>
                <option value={20}>20</option>
                <option value={30}>30</option>
                <option value={40}>40</option>
                <option value={50}>50</option>
            </select>
            <div className={style.containerPages}>
               <PageIcon currentPage={currentPage} changePage={changePage} pages={pages}/>
            </div>
        </div>
    )
}
