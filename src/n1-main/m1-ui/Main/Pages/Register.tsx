import React from 'react';
import {Input} from '../../common/Input/Input';
import {Button} from '../../common/Button/Button';
import style from './Register.module.css'
import {useFormik} from 'formik';

export const Register = () => {

    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
            repeatPassword: '',
        },
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2));
        },
    });

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
                <Button type="submit" name={'Register'}/>
            </form>
        </div>
    )
}