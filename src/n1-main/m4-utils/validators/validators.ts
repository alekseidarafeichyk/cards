import {RegisterErrorType} from '../../m1-ui/Main/Pages/p2-register/Register';
import {AuthData} from '../../m1-ui/Main/Pages/p1-login/Login';

type valuesRegisterForm = {
    email : string
    password?: string
    repeatPassword?: string
}

export const validateRegisterForm = (values: valuesRegisterForm, errors:RegisterErrorType) => {
    if (!values.email) {
        errors.email = 'Field is required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Invalid email address';
    }

   if (!values.password) {
        errors.password = 'Field is required';
    } else if (values.password.length < 6) {
        errors.password = 'Must be 5 characters or more';
    }

    if (!values?.repeatPassword) {
        errors.repeatPassword = 'Field is required';
    } else if (values.repeatPassword.length < 6) {
        errors.password = 'Must be 5 characters or more';
    }
}

export const validateLoginForm = (values:valuesRegisterForm,errors: AuthData) => {
    if (!values.email) {
        errors.email = 'Field is required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Invalid email address';
    }

    if (!values.password) {
        errors.password = 'Field is required';
    } else if (values.password.length < 6) {
        errors.password = 'Must be 5 characters or more';
    }
}

export const validatePasswordRecoveryForm = (values:valuesRegisterForm,errors: {email?: string}) => {
    if (!values.email) {
        errors.email = 'Field is required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Invalid email address';
    }
}