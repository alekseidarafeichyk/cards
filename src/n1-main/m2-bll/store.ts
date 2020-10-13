import {applyMiddleware, combineReducers, createStore} from 'redux';
import thunkMiddleWare from 'redux-thunk';
import {loginReducer} from './reducers/loginReducer';
import {newPasswordReducer} from './reducers/newPasswordReducer';
import {passwordRecoveryReducer} from './reducers/passwordRecovery';
import {registerReducer} from './reducers/registerReducer';
import {profileReducer} from './reducers/profileReducer';

let reducers = combineReducers({
    login: loginReducer,
    newPassword: newPasswordReducer,
    passwordRecover : passwordRecoveryReducer,
    register: registerReducer,
    profile: profileReducer
})

export type RootState = ReturnType<typeof reducers>

let store = createStore(reducers, applyMiddleware(thunkMiddleWare))

export default store;

// @ts-ignore
window.store = store;
