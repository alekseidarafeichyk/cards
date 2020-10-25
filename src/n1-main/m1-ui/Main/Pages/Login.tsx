import React from 'react';
import {useFormik} from 'formik';
import {Input} from '../../common/Input/Input';
import {Button} from '../../common/Button/Button';
import {useDispatch, useSelector} from 'react-redux';
import {LogIn} from '../../../m2-bll/reducers/loginReducer';
import {RootState} from '../../../m2-bll/store';
import {Redirect} from 'react-router-dom';
import style from './Login.module.css'
import {profile} from '../../routes/RoutePass';
import {validateLoginForm} from '../../../m4-utils/validators/validators';
import {Loader} from '../../common/Loader/Loader';
import {RequestStatusType} from '../../../m2-bll/reducers/registerReducer';

export type AuthData = {
    email?: string
    password?: string
    rememberMe?: boolean
}

export const Login = () => {
    const dispatch = useDispatch()
    const isAuth = useSelector((state: RootState) => state.login.isAuth)
const status = useSelector<RootState,RequestStatusType>(state => state.loader.status)

    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
            rememberMe: false
        },
        validate: values => {
            const errors: AuthData = {};
            validateLoginForm(values,errors)
            return errors;
        },
        onSubmit: values => {
            dispatch(LogIn({...values}))

        },
    });

    if (isAuth) {
        return <Redirect to={profile}/>
    }

    return (
        <div className={style.formContainer}>
            <form onSubmit={formik.handleSubmit}>
                <Input
                    id={'email'}
                    type={'text'}
                    placeholder={'Enter your email'}
                    {...formik.getFieldProps('email')}
                />
                {formik.errors.email ? <div className={style.error}>{formik.errors.email}</div> : null}
                <Input
                    id={'password'}
                    placeholder={'password'}
                    type={'password'}
                    {...formik.getFieldProps('password')}
                />
                {formik.errors.password ? <div className={style.error}>{formik.errors.password}</div> : null}
                remember me <input
                type={'checkbox'}
                {...formik.getFieldProps('rememberMe')}
            />
                {status === 'loading' ?
                    <Loader/>
                    :
                    <Button type="submit" name="Sign In"/>
                }
            </form>
        </div>
    )
}