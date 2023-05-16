//Esta configuración del store permite que Redux pueda trabajar con funciones asíncronas (Redux Thunk)

import {createStore, applyMiddleware, compose} from 'redux';
import rootReducer from './reducer';
import thunkMiddleware from 'redux-thunk';

const composeEnhacer = window._REDUX_DEVTOOLS_EXTENSIONS_COMPOSE_ || compose;

const store = createStore(
    rootReducer,
    composeEnhacer(applyMiddleware(thunkMiddleware))   
);

export default store;