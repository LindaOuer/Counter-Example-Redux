import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./Reducers/counterReducer.js";
import { legacy_createStore as createStore } from "redux";
import AllReducers from "./Reducers/index.js";

// Basic Form
// const store = createStore( counterReducer );

// Add Redux devtools extension
// const store = createStore(
//     counterReducer,
//     window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// );

// Use Multiple reducers
// const store = createStore(
//     AllReducers,
//     window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// );

// ConfigureStore takes an object reducer and returns a Store with middleware added.
const store = configureStore({
    reducer: AllReducers,
    devTools: true,
});

// just to display the current state
store.subscribe(() => console.log(store.getState()));

export default store;
