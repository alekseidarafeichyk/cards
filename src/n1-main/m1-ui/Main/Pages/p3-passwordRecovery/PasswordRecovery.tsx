import React from 'react';
import {Input} from '../../../common/Input/Input';
import {useFormik} from 'formik';
import {Button} from '../../../common/Button/Button';
import {
    InitialStateType,
    passwordRecoveryTC,
    SaveServerErrorAC,
    SaveServerResponseAC,
} from '../../../../m2-bll/reducers/passwordRecoveryReducer';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../../../../m2-bll/store';
import style from './PasswordRecovery.module.css'
import {Loader} from '../../../common/Loader/Loader';
import {validatePasswordRecoveryForm} from '../../../../m4-utils/validators/validators';
import {RequestStatusType} from '../../../../m2-bll/reducers/registerReducer';

export const PasswordRecovery = () => {

    const {serverResponse, serverError} = useSelector<RootState, InitialStateType>(state => state.passwordRecover)
    const status = useSelector<RootState,RequestStatusType>(state =>state.loader.status )
    const dispatch = useDispatch()

    const clearServerResponseAndError = () => {
        dispatch(SaveServerResponseAC(""))
        dispatch(SaveServerErrorAC(""))
    }

    const formik = useFormik({
        initialValues: {
            email: ''
        },
        validate : (values: { email: string }) => {
            const errors: { email?: string } = {};
            validatePasswordRecoveryForm(values,errors)
            return errors;
        },
        onSubmit: values => {
            dispatch(passwordRecoveryTC(values.email))
        }
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