import React from 'react';
import {Input} from '../../common/Input/Input';
import {Button} from '../../common/Button/Button';
import style from './Register.module.css'
import {useFormik} from 'formik';
import {useDispatch, useSelector} from 'react-redux';
import {RegisterUserTC, RequestStatusType} from '../../../m2-bll/reducers/registerReducer';
import {RootState} from '../../../m2-bll/store';
import {Redirect} from 'react-router-dom';
import {login} from '../../routes/RoutePass';
import { Loader } from '../../common/Loader/Loader';

export const Register = () => {

    const dispatch = useDispatch();
    const error = useSelector<RootState, string>(state => state.register.error)
    const isRegistered = useSelector<RootState, boolean>(state => state.register.isRegistered)
    const status = useSelector<RootState,RequestStatusType>(state => state.register.status)


    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
            repeatPassword: '',
        },
        onSubmit: values => {
            dispatch(RegisterUserTC(values.email, values.password))
        },
    });

    if (isRegistered) {
        return <Redirect to={login}/>
    }

    const errorElement =  error ? <div className={style.error}>{error}</div> : null

    return (
        <div className={style.containerForm}>
            <form className={style.form} onSubmit={formik.handleSubmit}>
                <Input type={'text'}
                       id={'email'}
                       placeholder={'Email'}
                       {...formik.getFieldProps('email')}
                />
                <Input type={'password'}
                       id={'password'}
                       placeholder={'Password'}
                       {...formik.getFieldProps('password')}
                />
                <Input type={'password'}
                       id={'repeatPassword'}
                       placeholder={'Repeat password'}
                       {...formik.getFieldProps('repeatPassword')}
                />
                {status === 'loading' ?
                    <Loader/>
                    :
                    <Button type="submit" name={'Register'}/>
                }
            </form>
            {errorElement}
        </div>
    )
}