import React from 'react';
import style from './Route.module.css'
import {Route} from 'react-router-dom';
import {login, newPassword, packs, passwordRecovery, profile, register} from './RoutePass';
import {Login} from '../Main/Pages/p1-login/Login';
import {Register} from '../Main/Pages/p2-register/Register';
import {PasswordRecovery} from '../Main/Pages/p3-passwordRecovery/PasswordRecovery';
import {NewPassword} from '../Main/Pages/p4-newPassword/NewPassword';
import {Profile} from '../Main/Pages/p5-profile/Profile';
import {Packs} from "../Main/Pages/p6-packs/Packs";

export const Routes = () => {
    return (
        <div className={style.routes}>
            <Route path={login} render={() => <Login/>}/>
            <Route path={register} render={() => <Register/>}/>
            <Route path={passwordRecovery} render={() => <PasswordRecovery/>}/>
            <Route path={newPassword} render={() => <NewPassword/>}/>
            <Route path={profile} render={() => <Profile/>}/>
            <Route path={packs} render={() => <Packs/>}/>
        </div>
    )
}