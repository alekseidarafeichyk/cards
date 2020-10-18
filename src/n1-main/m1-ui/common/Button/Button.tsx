import React, {FC} from 'react';
import style from './Button.module.css'

type ButtonPropsType =
    React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> &
    { name?: string };

export const Button : FC<ButtonPropsType> =React.memo( ({name,...rest}) => {
    return <button className={style.button} {...rest}>
        {name}
    </button>
})