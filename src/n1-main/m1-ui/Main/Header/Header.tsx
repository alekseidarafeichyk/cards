import React from 'react';
import style from './Header.module.css'
import {NavLinkCommon} from '../../common/Navlink/NavlinkCommon';
import {cards, login, newPassword, packs, passwordRecovery, profile, register} from '../../routes/RoutePass';

export const Header = () => {
    return (
        <div className={style.header}>
            <NavLinkCommon to={login} linkName={'Login'}/>
            <NavLinkCommon to={register} linkName={'Register'}/>
            <NavLinkCommon to={passwordRecovery} linkName={'Password Recovery'}/>
            <NavLinkCommon to={newPassword} linkName={'New Password'}/>
            <NavLinkCommon to={profile} linkName={'Profile'}/>
            <NavLinkCommon to={packs} linkName={'Packs'}/>
        </div>)
}