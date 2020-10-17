import React from 'react';
import {Input} from "../../common/Input/Input";
import {useFormik} from "formik";

export const PasswordRecovery = () => {

    const formik = useFormik({
        initialValues: {
            email: ''
        },
        // validate,
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2));
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
                    <button type="submit">Send</button>
                </div>
            </form>
        </div>
    )
}