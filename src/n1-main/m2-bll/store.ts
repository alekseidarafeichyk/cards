import {applyMiddleware, combineReducers, createStore} from 'redux';
import thunkMiddleWare from 'redux-thunk';
import {loginReducer} from './reducers/loginReducer';
import {newPasswordReducer} from './reducers/newPasswordReducer';
import {passwordRecoveryReducer} from './reducers/passwordRecoveryReducer';
import {registerReducer} from './reducers/registerReducer';
import {profileReducer} from './reducers/profileReducer';
import {loaderReducer} from './reducers/loaderReducer';
import {packsReducer} from './reducers/packsReducer';
import {dataForGetRequestReducer} from "./reducers/dataForGetRequestReducer";

let reducers = combineReducers({
    login: loginReducer,
    newPassword: newPasswordReducer,
    passwordRecover : passwordRecoveryReducer,
    register: registerReducer,
    profile: profileReducer,
    loader: loaderReducer,
    packs: packsReducer,
    dataGetRequest: dataForGetRequestReducer
})

export type RootState = ReturnType<typeof reducers>

let store = createStore(reducers, applyMiddleware(thunkMiddleWare))

export default store;

// @ts-ignore
window.store = store;
