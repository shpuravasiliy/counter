import {combineReducers, compose, legacy_createStore as createStore} from 'redux';
import {loadState, saveState} from './localStorage';
import {throttle} from 'lodash';
import {counterReducer} from './counter-reducer';

const rootReducer = combineReducers({
    state: counterReducer,
});

declare global {
    interface Window {
        __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
    }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export type rootReducerType = ReturnType<typeof rootReducer>

const persistedState = {
    state: loadState()
}


export const store = createStore(rootReducer, persistedState, composeEnhancers());

store.subscribe(throttle(() => {
    saveState({
        ...store.getState().state,
    });
}, 1000));