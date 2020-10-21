import React from 'react';
import {useFormik} from "formik";
import {Input} from "../../common/Input/Input";
import {Button} from "../../common/Button/Button";
import {useDispatch, useSelector} from "react-redux";
import {LogIn} from "../../../m2-bll/reducers/loginReducer";
import {RootState} from "../../../m2-bll/store";
import {Redirect} from 'react-router-dom';


type AuthData = {
    email?: string
    password?: string
    rememberMe?: boolean
}

export const Login = () => {
    const dispatch = useDispatch()

    const isAuth = useSelector((state: RootState) => state.login.isAuth)


    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
            rememberMe: false
        },
        validate: values => {
            const errors: AuthData = {};
            if (!values.email) {
                errors.email = 'Field is required';
            } else if (
                !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
            ) {
                errors.email = 'Invalid email address';
            }

            if (!values.password) {
                errors.password = 'Field is required';
            }
            return errors;
        },
        onSubmit: values => {
            dispatch(LogIn(values.email, values.password, values.rememberMe))
        },
    });

    if (isAuth) {
        return <Redirect to={'/'}/>
    }

    return (
        <form onSubmit={formik.handleSubmit}>
            <Input
                id={'email'}
                type={'text'}
                placeholder={'Enter your email'}
                {...formik.getFieldProps('email')}
            />
            {formik.errors.email ? <div>{formik.errors.email}</div> : null}
            <Input
                id={'password'}
                placeholder={'password'}
                type={'password'}
                {...formik.getFieldProps('password')}
            />
            remember me <input
                type={'checkbox'}
                {...formik.getFieldProps('password')}
            />
            {formik.errors.email ? <div>{formik.errors.password}</div> : null}
            <Button type="submit" name="Sign In"></Button>
        </form>
    )
}