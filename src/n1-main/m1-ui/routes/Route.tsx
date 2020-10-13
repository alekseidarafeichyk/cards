import React from 'react';
import style from './Route.module.css'
import {Route} from 'react-router-dom';
import {login, newPassword, passwordRecovery, profile, register} from './RoutePass';
import {Login} from '../Main/Pages/Login';
import {Register} from '../Main/Pages/Register';
import {PasswordRecovery} from '../Main/Pages/PasswordRecovery';
import {NewPassword} from '../Main/Pages/NewPassword';
import { Profile } from '../Main/Pages/Profile';

export const Routes = () => {
    return (
        <div className={style.routes}>
            <Route path={login} render={()=> <Login/>}/>
            <Route path={register} render={()=> <Register/>}/>
            <Route path={passwordRecovery} render={()=> <PasswordRecovery/>}/>
            <Route path={newPassword} render={()=> <NewPassword/>}/>
            <Route path={profile} render={()=> <Profile/>}/>
        </div>
    )
}