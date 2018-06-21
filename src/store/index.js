import {
    createStore,
    combineReducers,
    applyMiddleware
} from 'redux';

import {composeWithDevTools} from 'redux-devtools-extension';
import {callsReducer} from "./Calls/reducers";
import {localStorageMiddleware, reHydrateStore} from "./middlewares/localStorageMiddleware";

const store = createStore(
    combineReducers({
        calls: callsReducer
    }),
    reHydrateStore(),
    composeWithDevTools(
        applyMiddleware(
            localStorageMiddleware,
        )
    )
);

export default store;
