import React from 'react';
import {Input} from "../../common/Input/Input";
import {useFormik} from "formik";
import {Button} from "../../common/Button/Button";
import {
    InitialStateType,
    passwordRecoveryTC,
    setSaveServerResponseAC,
    setServerErrorAC
} from "../../../m2-bll/reducers/passwordRecovery";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../../m2-bll/store";
import {dataInForgotType} from "../../../m3-dal/api";


export const PasswordRecovery = () => {

    const {serverResponse, serverError} = useSelector<RootState, InitialStateType>(state => state.passwordRecover)
    const dispatch = useDispatch()

    const onSubmit = (values: { email: string }) => {
        const dataInForgot: dataInForgotType = {
            email: values.email,
            from: "",
            message: `<div style="background-color: gold; padding: 15px">Password recover link:
                    <a href="http://localhost:3000/alekseidarafeichyk/cards#/password_recovery/$token$">link</a>
                </div>`
        }
        dispatch(passwordRecoveryTC(dataInForgot))
    }

    const clearState = () => {
        dispatch(setSaveServerResponseAC(""))
        dispatch(setServerErrorAC(""))
    }

    const formik = useFormik({
        initialValues: {
            email: ''
        },
        onSubmit,
    });

    return (
        <div>
            <form onSubmit={formik.handleSubmit}>
                <div>Email:</div>
                <Input placeholder={"email"}
                       id="email"
                       name="email"
                       type="email"
                       onChange={formik.handleChange}
                       value={formik.values.email}
                       onFocus={clearState}
                />
                <div>
                    <Button type="submit" name={"Send"}/>
                </div>
            </form>
            {serverResponse || serverError}
        </div>
    )
}