import {GetActionsType} from "./store";


let initialState = {
    open: false,
    isLoading: false,
    isLanError: false
};

export type InitialStateType = typeof initialState;
export type AppActionsType = GetActionsType<typeof appAC>

const appReducer = (state = initialState, action: AppActionsType): InitialStateType => {
    switch (action.type) {
        case 'APP/SET_OPEN': {
            return {...state, open: action.open}
        }
        case 'APP/TOGGLE_LOADING': {
            return {...state, isLoading: action.isLoading}
        }
        case 'AUTH/SET_IS_LAN_ERROR': {
            return {...state, isLanError: action.isLanError}
        }
        default:
            return state;
    }
};

export const appAC = {
    setOpen: (open: boolean) => ({type: 'APP/SET_OPEN', open} as const),
    toggleLoading: (isLoading: boolean) => ({type: 'APP/TOGGLE_LOADING', isLoading} as const),
    setIsLanError: (isLanError: boolean) => ({type: 'AUTH/SET_IS_LAN_ERROR', isLanError} as const),
};

export default appReducer;