import React, {useEffect} from 'react';
import {useFormik} from 'formik';
import style from './NewPassword.module.css'
import {Input} from '../../../common/Input/Input';
import {Button} from '../../../common/Button/Button';
import {Redirect, useParams} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import {setNewPasswordAC, setNewPasswordTC} from '../../../../m2-bll/reducers/newPasswordReducer';
import {RootState} from '../../../../m2-bll/store';
import {login} from '../../../routes/RoutePass';
import {modalSuccessNewPassword} from '../../../../m4-utils/modals/modals';

export const NewPassword = React.memo(() => {
    const {token} = useParams();
    const dispatch = useDispatch();
    const info = useSelector<RootState, string>(state => state.newPassword.info)


    useEffect(() =>{
        return () => {
            dispatch(setNewPasswordAC('','',''))
        }
    })

    const formik = useFormik({
        initialValues: {
            newPassword: ''
        },
        // validate : (values: { email: string }) => {
        //     const errors: { email?: string } = {};
        //     validatePasswordRecoveryForm(values,errors)
        //     return errors;
        // },
        onSubmit: values => {
            dispatch(setNewPasswordTC(values.newPassword, token))
        }
    });

    if (info) {
        modalSuccessNewPassword(info)
        return <Redirect to={login}/>
    }

    return (
        <div className={style.newPasswordContainer}>
            <form onSubmit={formik.handleSubmit} className={style.formNewPassword}>
                <div>New Password:</div>
                <Input placeholder={'new Password'}
                       id="newPassword"
                       name="newPassword"
                       type="text"
                       {...formik.getFieldProps('newPassword')}
                />
                <Button type="submit" name={'Send'}/>
            </form>
        </div>
    )
})