import React, {useEffect, useState} from 'react';
import {Table} from '../../../common/Table/Table';
import {CommonSlider} from '../../../common/CommonSlider/CommonSlider';
import {useFormik} from 'formik';
import {Input} from '../../../common/Input/Input';
import {Button} from '../../../common/Button/Button';
import style from './Packs.module.css'
import {useDispatch, useSelector} from 'react-redux';
import {getPacksThunk,} from '../../../../m2-bll/reducers/packsReducer';
import {Checkbox} from '@material-ui/core';
import {RootState} from '../../../../m2-bll/store';
import {Paginator} from './Paginator/Paginator';
import {
    initialStateGetRequestType,
    setCheckedMyPacksAC,
    setMaxAC,
    setMinAC,
    setPackNameAC,
    setSearchStatusAC,
} from '../../../../m2-bll/reducers/dataForGetRequestReducer';

export const Packs = () => {

    console.log('Packs rendering')

    const {checkedMyPacks} = useSelector<RootState, initialStateGetRequestType>(state => state.dataGetRequest)
    const userID = useSelector<RootState, string>(state => state.profile._id)
    let dispatch = useDispatch()

    const maxCardsCount = useSelector<RootState, number>(state => state.packs.maxCardsCount)

    const isAuth = useSelector<RootState, boolean>(state => state.login.isAuth)

    useEffect(() => {
        if (isAuth) {
            dispatch(getPacksThunk())
        }
    }, [dispatch, isAuth])

    const [value, setValue] = useState([0, maxCardsCount])

    const ChangeCheckbox = () => {
        if (!checkedMyPacks) {
            dispatch(setCheckedMyPacksAC(true))
            dispatch(getPacksThunk(userID))
        } else {
            dispatch(setCheckedMyPacksAC(false))
            dispatch(getPacksThunk())
        }
    }

    const formik = useFormik({
        initialValues: {
            search: ''
        },
        onSubmit: values => {
            dispatch(setMinAC(value[0]))
            dispatch(setMaxAC(value[1]))
            dispatch(setPackNameAC(values.search))
            dispatch(setSearchStatusAC(true))
            if (checkedMyPacks) {
                dispatch(getPacksThunk(userID))
            } else {
                dispatch(getPacksThunk())
            }
        }
    });

    return (
        <>
            <form onSubmit={formik.handleSubmit} className={style.formStyle}>
                <Input placeholder={'Search'}
                       id="search"
                       name="search"
                       type="text"
                       {...formik.getFieldProps('search')}
                />
                <CommonSlider value={value}
                              setValue={setValue}
                              min={0}
                              max={maxCardsCount}/>
                <div>
                    <Button type="submit" name={'Search'}/>
                </div>
            </form>
            <div><Checkbox checked={checkedMyPacks} onChange={ChangeCheckbox}/>My cards</div>
            <h1>Packs</h1>
            <Table/>
            <Paginator/>
        </>
    )
}