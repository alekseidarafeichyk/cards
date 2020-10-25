import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../../../../m2-bll/store';
import {Redirect} from 'react-router-dom';
import {login} from '../../../routes/RoutePass';
import {AuthResponseType} from '../../../../m3-dal/api';
import {Button} from '../../../common/Button/Button';
import {LogOut} from '../../../../m2-bll/reducers/loginReducer';
import {RequestStatusType} from '../../../../m2-bll/reducers/registerReducer';
import {Loader} from '../../../common/Loader/Loader';

export const Profile = () => {
    const isAuth = useSelector<RootState, boolean>(state => state.login.isAuth)
    const user = useSelector<RootState, AuthResponseType>(state => state.profile)
    const status = useSelector<RootState, RequestStatusType>(state => state.loader.status)
    const dispatch = useDispatch()

    if (!isAuth) {
        return <Redirect to={login}/>
    }

    const logoutHandler = () => {
        dispatch(LogOut())
    }

    return (
        <div>
            <div>
                <span>name : {user.name}</span>
            </div>
            <div>
                <span>avatar : {user.avatar}</span>
            </div>
            <div>
                <span>publicCardPacksCount : {user.publicCardPacksCount}</span>
            </div>
            {status === 'loading' ? <Loader/> :
                <Button onClick={logoutHandler} name={'Logout'}/>}
        </div>
    )
}