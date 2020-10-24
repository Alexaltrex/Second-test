import {GetActionsType} from "./store";

let initialState = {
    currentItem: 0
};

export type InitialStateType = typeof initialState;
export type SidebarActionsType = GetActionsType<typeof sidebarAC>

const sidebarReducer = (state = initialState, action: SidebarActionsType): InitialStateType => {
    switch (action.type) {
        case 'SIDEBAR/SET_CURRENT_ITEM': {
            return {...state, currentItem: action.currentItem}
        }
        default:
            return state;
    }
};

export const sidebarAC = {
    setCurrentSidebarMenuItem: (currentItem: number) => ({type: 'SIDEBAR/SET_CURRENT_ITEM', currentItem} as const)
};

export default sidebarReducer;