import React from 'react';
import {Link} from 'react-router-dom';
import Styles from './Table.module.css'
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../../../m2-bll/store';
import {

    cardPack,
    deletePackTC,
    getPacksThunk,
} from '../../../m2-bll/reducers/packsReducer';
import {
    initialStateGetRequestType,
    setSortPacksAC
} from "../../../m2-bll/reducers/dataForGetRequestReducer";
import {EditableField} from "../EditableField/EditableField";

import {Modal} from "../../../m4-utils/modals/modals";



export const Table = React.memo(() => {
    const userID = useSelector<RootState, string>(state => state.profile._id)
    const {checkedMyPacks} = useSelector<RootState, initialStateGetRequestType>(state => state.dataGetRequest)
    const packs = useSelector<RootState, Array<cardPack>>(state => state.packs.cardPacks)
    const dispatch = useDispatch()

    const onClickAddPack = () => {
        Modal('Enter name pack', 'successTittle', dispatch)
        }

    const onClickDeletePack = (id: string | null) => {
        dispatch(deletePackTC(id))
    }

    const onClickDescendingSort = () => {
        dispatch(setSortPacksAC('0cardsCount'))
        checkedMyPacks ? dispatch(getPacksThunk(userID)) : dispatch(getPacksThunk())
    }

    const onClickAscendingSort = () => {
        dispatch(setSortPacksAC('1cardsCount'))
        checkedMyPacks ? dispatch(getPacksThunk(userID)) : dispatch(getPacksThunk())
    }

    const renderRows = () => packs.map(row =>
        <tr key={row._id}>
            <td>
                <EditableField id={row._id} name={row.name!}/>
            </td>
            <td>{row.cardsCount}</td>
            <td>{row.updated}</td>
            <td>''</td>
            <td>
                <button onClick={() => onClickDeletePack(row._id)}>delete</button>
            </td>
            <td><Link to={`/cards/${row._id}`}>cards</Link></td>
        </tr>
    )
    return (
        <table className={Styles.table}>
            <thead>
            <tr>
                <th>Name</th>
                <th>
                    CardsCount
                    <button className={Styles.arrow} onClick={onClickAscendingSort}>/\</button>
                    <button className={Styles.arrow} onClick={onClickDescendingSort}>\/</button>
                </th>
                <th>Update</th>
                <th>Url</th>
                <th>
                    <button onClick={() => onClickAddPack()}>Add</button>
                </th>
                <th></th>
            </tr>
            </thead>
            <tbody>
            {renderRows()}
            </tbody>
        </table>
    );
})