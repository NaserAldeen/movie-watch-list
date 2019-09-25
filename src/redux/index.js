import { createStore, compose, combineReducers } from "redux";

import reducer from "./reducers/reducer";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer, composeEnhancers());

export default store;
