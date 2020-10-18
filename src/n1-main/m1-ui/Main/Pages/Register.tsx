import React from 'react';
import {Input} from '../../common/Input/Input';
import {Button} from '../../common/Button/Button';
import style from './Register.module.css'
import {useFormik} from 'formik';
import {useDispatch, useSelector} from 'react-redux';
import {InitialStateType, RegisterUserTC} from '../../../m2-bll/reducers/registerReducer';
import {RootState} from '../../../m2-bll/store';
import {Redirect} from 'react-router-dom';
import {login} from '../../routes/RoutePass';
import {Loader} from '../../common/Loader/Loader';

type FormikErrorType = {
    email?: string
    password?: string
    repeatPassword?: string
}

export const Register = () => {
    const dispatch = useDispatch();
    const {isRegistered, serverError, status} = useSelector<RootState, InitialStateType>(state => state.register)

    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
            repeatPassword: '',
        },validate: (values) => {
            const errors: FormikErrorType = {};
            if (!values.email) {
                errors.email = 'Required';
            } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
                errors.email = 'Invalid email address';
            }
            if (!values.password) {
                errors.password = 'Required';
            } else if (values.password.length < 6) {
                errors.password = 'Must be 5 characters or more';
            }
            if (!values.repeatPassword) {
                errors.repeatPassword = 'Required';
            } else if (values.password.length < 6) {
                errors.password = 'Must be 5 characters or more';
            }
            return errors;
        },
        onSubmit: values => {
            dispatch(RegisterUserTC(values.email, values.password))
        },
    });

    if (isRegistered) {
        return <Redirect to={login}/>
    }

    const errorElement = serverError ? <div className={style.error}>{serverError}</div> : null
    return (
        <div className={style.containerForm}>
            <form className={style.form} onSubmit={formik.handleSubmit}>
                <Input type={'text'}
                       id={'email'}
                       placeholder={'Email'}
                       {...formik.getFieldProps('email')}
                />
                {formik.errors.email ? <div className={style.error}>{formik.errors.email}</div> : null}
                <Input type={'password'}
                       id={'password'}
                       placeholder={'Password'}
                       {...formik.getFieldProps('password')}
                />
                {formik.errors.password ? <div className={style.error}>{formik.errors.password}</div> : null}
                <Input type={'password'}
                       id={'repeatPassword'}
                       placeholder={'Repeat password'}
                       {...formik.getFieldProps('repeatPassword')}
                />
                {formik.errors.repeatPassword ? <div className={style.error}>{formik.errors.repeatPassword}</div> : null}
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