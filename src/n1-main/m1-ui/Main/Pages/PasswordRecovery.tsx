import React from 'react';
import {Input} from "../../common/Input/Input";
import {useFormik} from "formik";
import {Button} from "../../common/Button/Button";
import {setEmailToChangePasswordAC} from "../../../m2-bll/reducers/passwordRecovery";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../../m2-bll/store";

export const PasswordRecovery = () => {

    const EmailWithState = useSelector<RootState, string >(state => state.passwordRecover.email)
    const dispatch = useDispatch()

    const stateChangesF = (email: string) => {
        dispatch(setEmailToChangePasswordAC(email))
    }

    const formik = useFormik({
        initialValues: {
            email: ''
        },
        onSubmit: values => {
            stateChangesF(values.email)
            // alert(JSON.stringify(values, null, 2));
        },
    });

    return (
        <div>
            <form onSubmit={formik.handleSubmit}>
                <div>Email: </div>
                <Input placeholder={"email"}
                       id="email"
                       name="email"
                       type="email"
                       onChange={formik.handleChange}
                       value={formik.values.email}
                />
                <div>
                    <Button type="submit" name={"Send"}/>
                </div>
            </form>
            {EmailWithState}
        </div>
    )
}