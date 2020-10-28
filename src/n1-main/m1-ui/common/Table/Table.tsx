import React from 'react';
import {Link} from 'react-router-dom';
import Styles from './Table.module.css'
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../../../m2-bll/store';
import {
    addingPackTC,
    cardPack,
    deletePackTC,
    getSetPacks,
    updatePackTC,
    desSortAC,
    ascendSortAC
} from '../../../m2-bll/reducers/packsReducer';


export const Table = React.memo(() => {

    console.log("Table rendering")

    const newName = "new checked name"

    const packs = useSelector<RootState, Array<cardPack>>(state => state.packs.cardPacks)
    const dispatch = useDispatch()


    const onClickAddPack = () => {
        dispatch(addingPackTC())
    }

    const onClickDeletePack = (id: string | null) => {
        dispatch(deletePackTC(id))
    }

    const onClickUpdatePack = (id: string | null, newName: string) => {
        dispatch(updatePackTC(id, newName))
    }

    const onClickDescendingSort = () => {
        dispatch(desSortAC())

    }

    const onClickAscendingSort = () => {
        dispatch(ascendSortAC())

    }

    const renderRows = () => packs.map(row =>
        <tr key={row._id}>
            <td>{row.name}</td>
            <td>{row.cardsCount}</td>
            <td>{row.updated}</td>
            <td>''</td>
            <td>
                <button onClick={() => onClickDeletePack(row._id)}>delete</button>
            </td>
            <td>
                <button onClick={() => onClickUpdatePack(row._id, newName)}>update</button>
            </td>
            <td><Link to={'#'}>cards</Link></td>
        </tr>
    )
    return (
        <table className={Styles.table}>
            <thead>
            <tr>
                <th>Name</th>
                <th>
                    CardsCount
                    <button className={Styles.arrow}>/\</button>
                    <button className={Styles.arrow}>\/</button>
                </th>
                <th>Update</th>
                <th>Url</th>
                <th>
                    <button onClick={onClickAddPack}>Add</button>
                </th>
                <th></th>
                <th></th>
            </tr>
            </thead>
            <tbody>
            {renderRows()}
            </tbody>
        </table>
    );
})