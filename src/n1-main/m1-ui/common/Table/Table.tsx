import React, {useEffect, useRef, useState} from 'react';
import {Link} from 'react-router-dom';
import Styles from './Table.module.css'
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../../../m2-bll/store';
import {addingPackTC, cardPack, deletePackTC, getPacksThunk, updatePackTC} from '../../../m2-bll/reducers/packsReducer';
import {
    initialStateGetRequestType,
    setPackNameAC,
    setSortPacksAC
} from '../../../m2-bll/reducers/dataForGetRequestReducer';
import {Input} from '../Input/Input';
import {EditableField} from '../EditableField/EditableField';

// Modal windows library
import withReactContent from 'sweetalert2-react-content'
import Swal from 'sweetalert2';

const MySwal = withReactContent(Swal)


export const Table = React.memo(() => {

    console.log('Table rendering')

    const newName = 'new checked name'
    const userID = useSelector<RootState, string>(state => state.profile._id)
    const {page, pageCount, checkedMyPacks, packName, min, max} = useSelector<RootState, initialStateGetRequestType>(state => state.dataGetRequest)
    const packs = useSelector<RootState, Array<cardPack>>(state => state.packs.cardPacks)
    const dispatch = useDispatch()

    const [inputValue, setInputValue] = useState(packName)
    const inputEl = useRef<any>('');

    useEffect(() => {
        dispatch(setPackNameAC(inputValue))
    }, [inputValue])

    const onUpdatePackName = (e: React.ChangeEvent<HTMLInputElement>) => {
        // setInputValue(e.currentTarget.value)
        // dispatch(setPackNameAC(e.currentTarget.value))
    }

    const onClickAddPack = () => {
        // Modal window
        MySwal.fire({
            title: 'Введите название колоды',
            html: <Input ref={inputEl} onChange={onUpdatePackName}/>,
            showCancelButton: true,
            confirmButtonText: `Сохранить`,
        }).then((result) => {
            if (result.isConfirmed) {
                dispatch(addingPackTC('aaaa'))
                Swal.fire('Колода создана', '', 'success')
            }
        })
    }


    const onClickDeletePack = (id: string | null) => {
        dispatch(deletePackTC(id))
    }

    const onClickUpdatePack = (id: string | null, newName: string) => {
        dispatch(updatePackTC(id, newName))
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
                    <button onClick={() => onClickAddPack()}>Add</button>
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