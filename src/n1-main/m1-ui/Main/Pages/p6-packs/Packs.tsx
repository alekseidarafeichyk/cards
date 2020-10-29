import React, {useEffect, useState} from 'react';
import {Table} from "../../../common/Table/Table";
import {CommonSlider} from "../../../common/CommonSlider/CommonSlider";
import {useFormik} from "formik";
import {Input} from "../../../common/Input/Input";
import {Button} from "../../../common/Button/Button";
import style from "./Packs.module.css"
import {useDispatch, useSelector} from "react-redux";
import {
    getMyPacksSearchTC,
    getMyPacksTC,
    getPacksSearchTC,
    getSetPacks
} from "../../../../m2-bll/reducers/packsReducer";
import {Checkbox} from '@material-ui/core';
import {RootState} from "../../../../m2-bll/store";
import {Paginator} from './Paginator/Paginator';
import {
    initialStateGetRequestType,
    setCheckedMyPacksAC,
} from "../../../../m2-bll/reducers/dataForGetRequestReducer";

export const Packs = () => {

    console.log("Packs rendering")

    const {page, pageCount, cardPacksTotalCount, checkedMyPacks, ...rest} = useSelector<RootState, initialStateGetRequestType>(state => state.dataGetRequest)
    const userID = useSelector<RootState, string>(state => state.profile._id)
    let dispatch = useDispatch()

    useEffect(() => {
        if (checkedMyPacks) {
            debugger
            dispatch(getMyPacksTC(userID, pageCount, page))
        } else {
            dispatch(getSetPacks())
        }
    },[dispatch])

    const [value, setValue] = useState([0, 100])

    const ChangeCheckbox = () => {
        if (!checkedMyPacks) {
            debugger
            dispatch(getMyPacksTC(userID, pageCount, page))
            dispatch(setCheckedMyPacksAC(true))
        } else {
            dispatch(getSetPacks())
            dispatch(setCheckedMyPacksAC(false))
        }
    }

    const formik = useFormik({
        initialValues: {
            search: ''
        },
        onSubmit: values => {
            if (checkedMyPacks) {
                dispatch(getMyPacksSearchTC(userID, values.search, value[0], value[1], pageCount))

            } else {
                dispatch(getPacksSearchTC(values.search, value[0], value[1], pageCount))
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
                              max={100}/>
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