import React, {ChangeEvent} from 'react';
import style from './Paginator.module.css'
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../../../../../m2-bll/store';
import {getPacksThunk,} from '../../../../../m2-bll/reducers/packsReducer';
import Pagination from '@material-ui/lab/Pagination';
import {
    initialStateGetRequestType,
    setPageAC,
    setPageCountAC
} from '../../../../../m2-bll/reducers/dataForGetRequestReducer';

export const Paginator = () => {

    const {page, pageCount, cardPacksTotalCount, checkedMyPacks} = useSelector<RootState, initialStateGetRequestType>(state => state.dataGetRequest)
    const userID = useSelector<RootState, string>(state => state.profile._id)
    const dispatch = useDispatch()

    const HowManyCounts = Math.ceil(cardPacksTotalCount / pageCount)
    const changeSelect = (e: ChangeEvent<HTMLSelectElement>) => {
        dispatch(setPageCountAC(+e.currentTarget.value))
        if (checkedMyPacks) {
            dispatch(getPacksThunk(userID))
        } else {
            dispatch(getPacksThunk())
        }
    }

    const ChangePaginator = (event: ChangeEvent<unknown>, page: number) => {
        if (checkedMyPacks) {
            dispatch(setPageAC(page))
            dispatch(getPacksThunk(userID))
        } else {
            dispatch(setPageAC(page))
            dispatch(getPacksThunk())
        }
    }

    return (
        <div>
            <select onChange={changeSelect}>
                <option value={4}>4</option>
                <option value={5}>5</option>
                <option value={10}>10</option>
                <option value={20}>20</option>
                <option value={30}>30</option>
            </select>
            <div className={style.containerPages}>
                <Pagination count={HowManyCounts} color="secondary" page={page} onChange={ChangePaginator}/>
            </div>
        </div>
    )
}
