import React from 'react';
import { NavLink } from 'react-router-dom';
import style from './NavlinkCommon.module.css'

type NavlinkPropsType = {
    to: string
    linkName: string
}

export const NavLinkCommon  = (props: NavlinkPropsType) => {
    return <NavLink to={props.to} className={style.link} activeClassName={style.active}>{props.linkName}</NavLink>
}

