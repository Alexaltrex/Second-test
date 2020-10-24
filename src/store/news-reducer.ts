import {newsAPI} from "../DAL/api";
import {GetActionsType, StateType} from "./store";
import {appAC, AppActionsType} from "./app-reducer";
import {ThunkAction} from "redux-thunk";
import {NewsType} from "../Types/types";

let initialState = {
     news: [] as Array<NewsType & {favorite: boolean}>
};

export type InitialStateType = typeof initialState;
type NewsActionsType = GetActionsType<typeof newsAC>
type ThunkType = ThunkAction<Promise<void>, StateType, unknown, NewsActionsType | AppActionsType>

const newsReducer = (state = initialState, action: NewsActionsType): InitialStateType => {
    switch (action.type) {
        case 'NEWS/SET_NEWS': {
            let news = [];
            for (let i=0; i < action.news.length; i++){
                news.push({...action.news[i], favorite: false})
            }
            return {...state, news: news}
        }
        case 'NEWS/TOGGLE_FAVORITE': {
            //const newItem = {...state.news[action.id], favorite: !state.news[action.id].favorite};
            return {...state, news: state.news.map(item => {
                if (item.id === action.id) {
                    return {...item, favorite: !item.favorite}
                } else {
                    return item
                }

            })}
        }
            default:
            return state;
    }
};

export const newsAC = {
    setNews: (news: Array<NewsType>) => ({type: 'NEWS/SET_NEWS', news} as const),
    toggleFavorite: (id: number) => ({type: 'NEWS/TOGGLE_FAVORITE', id} as const)
};

export const getNews = (): ThunkType => async (dispatch) => {
    try {
        dispatch(appAC.toggleLoading(true));
        let data = await newsAPI.getNews();
        if (data.status === 'ok') {
            dispatch(newsAC.setNews(data.data));
        } 
    } catch (e) {
        dispatch(appAC.setIsLanError(true));
    } finally {
        dispatch(appAC.toggleLoading(false));
    }
    
};

export default newsReducer;