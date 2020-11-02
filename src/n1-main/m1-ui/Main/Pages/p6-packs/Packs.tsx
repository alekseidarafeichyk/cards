import React, {useEffect, useState} from 'react';
import {Table} from "../../../common/Table/Table";
import {CommonSlider} from "../../../common/CommonSlider/CommonSlider";
import {useFormik} from "formik";
import {Input} from "../../../common/Input/Input";
import {Button} from "../../../common/Button/Button";
import style from "./Packs.module.css"
import {useDispatch, useSelector} from "react-redux";
import {
    getPacksAndMyPacksWithSearchTC,
    getPacksAndMyPacksTC,
} from "../../../../m2-bll/reducers/packsReducer";
import {Checkbox} from '@material-ui/core';
import {RootState} from "../../../../m2-bll/store";
import {Paginator} from './Paginator/Paginator';
import {
    initialStateGetRequestType,
    setCheckedMyPacksAC, setMaxAC, setMinAC, setPackNameAC, setSearchStatusAC,
} from "../../../../m2-bll/reducers/dataForGetRequestReducer";

export const Packs = () => {

    console.log("Packs rendering")

    const {pageCount, checkedMyPacks, packName, min, max} = useSelector<RootState, initialStateGetRequestType>(state => state.dataGetRequest)
    const userID = useSelector<RootState, string>(state => state.profile._id)
    let dispatch = useDispatch()


    const isAuth = useSelector<RootState,boolean>(state => state.login.isAuth)

    useEffect(() => {
        if(isAuth){
            dispatch(getPacksAndMyPacksTC())
        }
    }, [dispatch,isAuth])

    const [value, setValue] = useState([0, 16])

    const ChangeCheckbox = () => {
        if (!checkedMyPacks) {
            dispatch(getPacksAndMyPacksWithSearchTC(userID, packName, min, max, pageCount))
            dispatch(setCheckedMyPacksAC(true))
        } else {
            dispatch(getPacksAndMyPacksWithSearchTC("", packName, min, max, pageCount))
            dispatch(setCheckedMyPacksAC(false))
        }
    }

    const formik = useFormik({
        initialValues: {
            search: ''
        },
        onSubmit: values => {
            dispatch(setSearchStatusAC(true))
            if (checkedMyPacks) {
                dispatch(setPackNameAC(values.search))
                dispatch(setMinAC(value[0]))
                dispatch(setMaxAC(value[1]))
                dispatch(getPacksAndMyPacksWithSearchTC(userID, values.search, value[0], value[1], pageCount))
            } else {
                dispatch(setPackNameAC(values.search))
                dispatch(setMinAC(value[0]))
                dispatch(setMaxAC(value[1]))
                dispatch(getPacksAndMyPacksWithSearchTC("", values.search, value[0], value[1], pageCount))
            }
        }
    });

    return (
        <>
            <form onSubmit={formik.handleSubmit} className={style.formStyle}>
                <Input placeholder={"Search"}
                       id="search"
                       name="search"
                       type="text"
                       {...formik.getFieldProps('search')}
                />
                <CommonSlider value={value}
                              setValue={setValue}
                              min={0}
                              max={16}/>
                <div>
                    <Button type="submit" name={"Search"}/>
                </div>
            </form>
            <div><Checkbox checked={checkedMyPacks} onChange={ChangeCheckbox}/>My cards</div>
            <h1>Packs</h1>
            <Table/>
            <Paginator/>
        </>
    )
}