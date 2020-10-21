import React from 'react';
import {useFormik} from "formik";
import {Input} from "../../common/Input/Input";
import {Button} from "../../common/Button/Button";


type AuthData = {
    email?: string
    password?: string
    rememberMe?: boolean
}

export const Login = () => {
    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
            rememberMe: false
        },
        validate: values => {
            const errors: AuthData = {};
            if (!values.email) {
                errors.email = 'Required';
            } else if (
                !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
            ) {
                errors.email = 'Invalid email address';
            }

            if (!values.password) {
                errors.password = 'Required';
            }
            return errors;
        },
        onSubmit: values => {

        },
    });
    return (
        <form onSubmit={formik.handleSubmit}>
            <Input
                id={'login'}
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
            <input
                type={'checkbox'}
                {...formik.getFieldProps('password')}
            />
            {formik.errors.email ? <div>{formik.errors.password}</div> : null}
            <Button type="submit" name="Sign In"></Button>
        </form>
    );
}