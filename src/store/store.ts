import {applyMiddleware, combineReducers, createStore} from "redux";
import thunkMiddleware from 'redux-thunk';
import authReducer from "./auth-reducer";
import newsReducer from "./news-reducer";
import { reducer as formReducer } from 'redux-form';
import sidebarReducer from "./sidebar-reducer";
import appReducer from "./app-reducer";

let rootReducer = combineReducers({
    auth: authReducer,
    news: newsReducer,
    sidebar: sidebarReducer,
    app: appReducer,
    form: formReducer
});

export type StateType = ReturnType<typeof rootReducer>
type PropertiesType<T> = T extends {[key: string]: infer U} ? U : never;
export type GetActionsType<T extends { [key: string]: (...args: any[]) => any }> = ReturnType<PropertiesType<T>>;

let store = createStore(rootReducer, applyMiddleware(thunkMiddleware));

// @ts-ignore
window.store = store;

export default store;