import {authAPI} from "../DAL/api";
import {stopSubmit, reset} from "redux-form";
import {GetActionsType, StateType} from "./store";
import {appAC, AppActionsType} from "./app-reducer";
import {UserInfoType} from "../Types/types";
import {ThunkAction} from "redux-thunk";
import {sidebarAC, SidebarActionsType} from "./sidebar-reducer";

let initialState = {
    isAuth: false,
    userId: null as null | number,
    loginStatus: null as null | string, // статус ответа с сервера при логинизации
    errorText: null as null | string, // выводимый в компонетне Login тект ошибки
    userInfo: null as null | UserInfoType, // данные о пользователи
    userInfoStatus: null as null | string, // статус запроса данных о пользователе

};

export type InitialStateType = typeof initialState;
type AuthActionsType = GetActionsType<typeof authAC>
type ThunkType = ThunkAction<Promise<void>, StateType, unknown, AuthActionsType | AppActionsType | SidebarActionsType>

const authReducer = (state = initialState, action: AuthActionsType): InitialStateType => {
    switch (action.type) {
        case 'AUTH/SET_IS_AUTH': {
            return {...state, isAuth: action.isAuth}
        }
        case 'AUTH/SET_USER_ID': {
            return {...state, userId: action.userId}
        }
        case 'AUTH/LOGOUT': {
            return {...state, isAuth: false, userId: null}
        }
        case 'AUTH/SET_LOGIN_STATUS': {
            return {...state, loginStatus: action.loginStatus}
        }
        case 'AUTH/SET_ERROR_TEXT': {
            switch (action.errorText) {
                case "wrong_email_or_password": {
                    return {...state, errorText: 'Имя пользователя или пароль введены не верно'}
                }
                default:
                    return state;
            }
        }
        case 'AUTH/SET_USER_INFO': {
            return {...state, userInfo: action.userInfo}
        }
        case 'AUTH/SET_USER_INFO_STATUS': {
            return {...state, userInfoStatus: action.userInfoStatus}
        }

        default:
            return state;
    }
};

//-------------------------- ACTIONS CREATORS --------------------------------------
export const authAC = {
    setIsAuth: (isAuth: boolean) => ({type: 'AUTH/SET_IS_AUTH', isAuth} as const),
    setUserId: (userId: number) => ({type: 'AUTH/SET_USER_ID', userId} as const),
    logout: () => ({type: 'AUTH/LOGOUT'} as const),
    setLoginStatus: (loginStatus: null | string) => ({
        type: 'AUTH/SET_LOGIN_STATUS',
        loginStatus: loginStatus
    } as const),
    setErrorText: (errorText: string) => ({type: 'AUTH/SET_ERROR_TEXT', errorText} as const),
    setUserInfo: (userInfo: UserInfoType) => ({type: 'AUTH/SET_USER_INFO', userInfo} as const),
    setUserInfoStatus: (userInfoStatus: null | string) => ({
        type: 'AUTH/SET_USER_INFO_STATUS',
        userInfoStatus
    } as const),
};

//------------------------------ THUNKS ---------------------------------------------
export const login = (email: string, password: string):ThunkType => async (dispatch) => {
    try {
        dispatch(appAC.toggleLoading(true));
        let data = await authAPI.login(email, password);
        dispatch(appAC.toggleLoading(false));
        dispatch(appAC.setIsLanError(false));
        dispatch(authAC.setLoginStatus(data.status));
        if (data.status === 'ok') {
            dispatch(authAC.setIsAuth(true));
            dispatch(authAC.setUserId(data.data.id));
            dispatch(sidebarAC.setCurrentSidebarMenuItem(2));
        } else if (data.status === 'err') {
            //dispatch(setErrorText(data.message));
            dispatch(reset('login'));
            dispatch(stopSubmit('login', {_error: 'Имя пользователя или пароль введены не верно'}));
        }
    } catch (e) {
        dispatch(appAC.setIsLanError(true));
        dispatch(appAC.toggleLoading(false));
    }
};

export const getUserInfo = (userId: number): ThunkType => async (dispatch) => {
    try {
        dispatch(appAC.toggleLoading(true));
        dispatch(appAC.setIsLanError(false));
        let data = await authAPI.getUserInfo(userId);
        dispatch(appAC.toggleLoading(false));
        if (data.status === 'ok') {
            dispatch(authAC.setUserInfo(data.data));
            dispatch(authAC.setUserInfoStatus('ok'));
            dispatch(appAC.toggleLoading(false));
        } else {
            dispatch(authAC.setUserInfoStatus('err'));
            dispatch(appAC.toggleLoading(false));
        }
    } catch (e) {
        dispatch(appAC.setIsLanError(true));
        dispatch(appAC.toggleLoading(false));
    }
}

export default authReducer;
