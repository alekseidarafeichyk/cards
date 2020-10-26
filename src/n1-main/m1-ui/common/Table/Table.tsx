import React from 'react';
import {useEffect} from 'react';
import {Link} from 'react-router-dom';
import Styles from './Table.module.css'
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../../../m2-bll/store';
import {cardPack, getSetPacks} from '../../../m2-bll/reducers/packsReducer';


export const Table = React.memo(() => {
    const packs = useSelector<RootState, Array<cardPack>>(state => state.packs.cardPacks)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getSetPacks())
    }, [dispatch])

    const renderRows = () => packs.map(row =>
        <tr key={row._id}>
            <td>{row.name}</td>
            <td>{row.cardsCount}</td>
            <td>{row.updated}</td>
            <td>''</td>
            <td>
                <button>delete</button>
            </td>
            <td>
                <button>update</button>
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
                    <button>add</button>
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