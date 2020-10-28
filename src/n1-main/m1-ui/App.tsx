import React, {useEffect} from 'react';
import './App.css';
import {Main} from './Main/Main';
import {HashRouter} from 'react-router-dom';
import {useDispatch} from 'react-redux';
import {authMe} from '../m2-bll/reducers/loginReducer';

const App = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(authMe())
    }, [dispatch])

    return (
        <div className={'App'}>
            <HashRouter>
                <Main/>
            </HashRouter>
        </div>
    );
}

export default App;
