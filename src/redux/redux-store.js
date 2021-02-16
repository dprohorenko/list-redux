import appReducer from "./app-reducer";
import {combineReducers, createStore} from "redux";

let reducers = combineReducers({
    app: appReducer
})

let store = createStore(reducers)

window.store = store

export default store