// @flow
import React, {useState} from 'react';
import Styles from "../Table/Table.module.css";
import {Input} from "../Input/Input";
import {updatePackAC, updatePackTC} from "../../../m2-bll/reducers/packsReducer";
import {useDispatch} from "react-redux";
import {Button} from "../Button/Button";

type Props = {
    id: string | null
    name:string
};
export const EditableField = (props: Props) => {

    const [editMode, setEditMode] = useState(false)
    const [value, setValue] = useState(props.name)
    const  dispatch = useDispatch()


    const onEnableEditMode = () => {
        setEditMode(true)
    }

    const onDisableEditMode = (id:string) => {
        dispatch(updatePackTC(id, value))
        setEditMode(false)
    }

    const onUpdateValue = (e: React.FormEvent<HTMLInputElement>) => {
        setValue(e.currentTarget.value)
    }

    return (
        editMode
            ? <>
                <Button className={Styles.editButton} name={'ok'} onClick={() => onDisableEditMode(props.id!)}/>
                <Input value={value} onChange={onUpdateValue}/>
            </>
           : <>
                {props.name}
                <Button className={Styles.editButton} name={'edit'} onClick={() => onEnableEditMode()}/>
            </>

    )
}