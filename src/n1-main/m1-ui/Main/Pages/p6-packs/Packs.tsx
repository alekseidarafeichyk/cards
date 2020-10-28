import React, {useEffect, useState} from 'react';
import {Table} from "../../../common/Table/Table";
import {CommonSlider} from "../../../common/CommonSlider/CommonSlider";
import {useFormik} from "formik";
import {Input} from "../../../common/Input/Input";
import {Button} from "../../../common/Button/Button";
import style from "./Packs.module.css"
import {useDispatch} from "react-redux";
import {getPacksSearchTC, getSetPacks} from '../../../../m2-bll/reducers/packsReducer';
import {Paginator} from './Paginator/Paginator';


export const Packs = () => {



    let dispatch = useDispatch()

    useEffect(() => {
        dispatch(getSetPacks())
    }, [dispatch])

    const [value, setValue] = useState([0, 100])

    const formik = useFormik({
        initialValues: {
            search: ''
        },
        onSubmit: values => {
            dispatch(getPacksSearchTC(values.search, value[0], value[1]))
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

            <h1>Packs</h1>
            <Table/>
            <Paginator/>
        </>
    )
}