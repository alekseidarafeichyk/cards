import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import Styles from './Table.module.css'
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../../../m2-bll/store';
import {
    addingPackTC,
    cardPack,
    deletePackTC,
    updatePackTC,
    getPacksAndMyPacksWithSearchTC, updatePackAC
} from '../../../m2-bll/reducers/packsReducer';
import {initialStateGetRequestType, setSortPacksAC} from "../../../m2-bll/reducers/dataForGetRequestReducer";
import {Input} from "../Input/Input";


export const Table = React.memo(() => {

    console.log("Table rendering")

    const newName = "new checked name"
    const userID = useSelector<RootState, string>(state => state.profile._id)
    const {page, pageCount, checkedMyPacks, packName, min, max} = useSelector<RootState, initialStateGetRequestType>(state => state.dataGetRequest)
    const packs = useSelector<RootState, Array<cardPack>>(state => state.packs.cardPacks)

    // Edit Item function
    const [editMode, setEditMode] = useState(false)
    const [value, setValue] = useState('')

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
        dispatch(setSortPacksAC("0updated"))
        if (checkedMyPacks) {
            dispatch(getPacksAndMyPacksWithSearchTC(userID, packName, min, max, pageCount, page, "0updated"))
        } else {
            dispatch(getPacksAndMyPacksWithSearchTC("", packName, min, max, pageCount, page, "0updated"))
        }

    }

    const onClickAscendingSort = () => {
        dispatch(setSortPacksAC("1updated"))
        if (checkedMyPacks) {
            dispatch(getPacksAndMyPacksWithSearchTC(userID, packName, min, max, pageCount, page, "1updated"))
        } else {
            dispatch(getPacksAndMyPacksWithSearchTC("", packName, min, max, pageCount, page, "1updated"))
        }

    }

    // Edit mode event handlers

    const onEnableEditMode = () => {
        setEditMode(true)
    }

    const onDisableEditMode = (id:string) => {
            dispatch(updatePackAC(id, value))
            setEditMode(false)
    }

    const setEditButton = () => {

    }

    const onUpdateValue = (e: React.FormEvent<HTMLInputElement>) => {
        setValue(e.currentTarget.value)
    }

    const renderRows = () => packs.map(row =>
        <tr key={row._id}>
            <td>
                {editMode ?
                    <button className={Styles.editButton} onClick={() => onDisableEditMode(row._id!)}>ok</button> :
                    <button className={Styles.editButton} onClick={() => onEnableEditMode()}>edit</button>}
                {editMode ? <Input name={row.name!} onChange={() => onUpdateValue}/> : `${row.name}`}
            </td>
            <td>{row.cardsCount}</td>
            <td>{row.updated}</td>
            <td>''</td>
            <td>
                <button onClick={() => onClickDeletePack(row._id)}>delete</button>
            </td>
            <td>
                <button onClick={() => onClickUpdatePack(row._id, newName)}>update</button>
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