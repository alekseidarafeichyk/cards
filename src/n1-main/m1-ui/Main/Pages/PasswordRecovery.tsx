import React from 'react';
import {Input} from "../../common/Input/Input";
import {useFormik} from "formik";
import {Button} from "../../common/Button/Button";
import {
    InitialStateType,
    passwordRecoveryTC,
    SaveServerErrorAC,
    SaveServerResponseAC,
} from "../../../m2-bll/reducers/passwordRecoveryReducer";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../../m2-bll/store";
import {dataInForgotType} from "../../../m3-dal/api";
import style from "./PasswordRecovery.module.css"
import {Loader} from "../../common/Loader/Loader";


export const PasswordRecovery = () => {

    const {serverResponse, serverError, status} = useSelector<RootState, InitialStateType>(state => state.passwordRecover)
    const dispatch = useDispatch()

    const clearServerResponseAndError = () => {
        dispatch(SaveServerResponseAC(""))
        dispatch(SaveServerErrorAC(""))
    }

    const onSubmit = (values: { email: string }) => {
        const dataInForgot: dataInForgotType = {
            email: values.email,
            from: "test-front-admin",
            message: `<div style="background-color: gold; padding: 15px">Password recover link:
                    <a href="https://alekseidarafeichyk.github.io/cards/#/new_password/$token$">link</a>
                </div>`
        }
        dispatch(passwordRecoveryTC(dataInForgot))
    }

    const validate = (values: { email: string }) => {
        const errors: { email?: string } = {};
        if (!values.email) {
            errors.email = 'Required';
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
            errors.email = 'Invalid email address';
        }
        return errors;
    }

    const formik = useFormik({
        initialValues: {
            email: ''
        },
        validate,
        onSubmit,
    });

    return (
        <div className={style.forgotStyle}>
            <form onSubmit={formik.handleSubmit} className={style.formForgot}>
                <div>Your Email:</div>
                <Input placeholder={"Email"}
                       id="email"
                       name="email"
                       type="email"
                       onFocus={clearServerResponseAndError}
                       {...formik.getFieldProps('email')}
                />
                {formik.errors.email ? <div className={style.error}>{formik.errors.email}</div> : null}
                <div>
                    <Button type="submit" name={"Send"}
                            disabled={status === "loading" || !!serverError || !!serverResponse}/>
                </div>
            </form>
            {status === "loading" ? <Loader/> : null}
            {serverResponse || serverError}
        </div>
    )
}