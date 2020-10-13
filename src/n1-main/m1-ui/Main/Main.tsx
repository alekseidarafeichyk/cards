import React from 'react';
import style from './Main.module.css'
import {Header} from './Header/Header';
import {Routes} from '../routes/Route';

export const Main = () => {
    return (
        <>
            <Header/>
            <Routes/>
        </>
    )
}