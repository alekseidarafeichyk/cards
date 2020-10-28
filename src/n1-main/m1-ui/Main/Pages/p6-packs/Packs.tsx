import React, {useState} from 'react';
import {Table} from "../../../common/Table/Table";
import {CommonSlider} from "../../../common/CommonSlider/CommonSlider";
import {useFormik} from "formik";
import {Input} from "../../../common/Input/Input";
import {Button} from "../../../common/Button/Button";
import style from "./Packs.module.css"
import {useDispatch, useSelector} from "react-redux";
import {getMyPacksTC, getPacksSearchTC, getSetPacks} from "../../../../m2-bll/reducers/packsReducer";
import {Checkbox} from '@material-ui/core';
import {RootState} from "../../../../m2-bll/store";


export const Packs = () => {

    console.log("Packs rendering")

    const userID = useSelector<RootState, string>(state => state.profile._id)
    let dispatch = useDispatch()

    const [value, setValue] = useState([0, 100])
    const [checked, setChecked] = useState(false)

    const ChangeCheckbox = () => {
        if (!checked) {
            dispatch(getMyPacksTC(userID))
            setChecked(!checked)
        } else {
            dispatch(getSetPacks())
            setChecked(!checked)
        }
    }

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
            <div><Checkbox checked={checked} onChange={ChangeCheckbox}/>My cards</div>
            <h1>Packs</h1>
            <Table/>
        </>
    )
}