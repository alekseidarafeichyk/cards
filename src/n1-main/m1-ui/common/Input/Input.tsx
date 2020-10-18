import React, {FC} from 'react';
import style from './Input.module.css'

type InputPropsType =
    React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> & {
    name?: string,
    id?: string
};

export const Input : FC<InputPropsType> = React.memo (({name,id,...rest}) => {
    return <input className={style.input} {...rest} id={id} ></input>
})