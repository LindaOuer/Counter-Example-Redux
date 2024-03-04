import { combineReducers, configureStore } from "@reduxjs/toolkit";
import counterSlice from './CounterSlice';

const reducers = combineReducers({
    counter: counterSlice,
});

const store = configureStore({
    reducer: reducers,
    devTools: true,
});

// just to display the current state
store.subscribe(() => console.log(store.getState()));

export default store;
