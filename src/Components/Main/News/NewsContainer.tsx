import {connect} from "react-redux";
import News from "./News";
import {getNews, newsAC} from "../../../store/news-reducer";
import {StateType} from "../../../store/store";
import {NewsType} from "../../../Types/types";
import {sidebarAC} from "../../../store/sidebar-reducer";

const mapStateToProps = (state: StateType): MapStatePropsType => ({
    news: state.news.news,
    isLoading: state.app.isLoading,
    isLanError: state.app.isLanError
});

const toggleFavorite = newsAC.toggleFavorite;
const setCurrentSidebarMenuItem = sidebarAC.setCurrentSidebarMenuItem;

const NewsContainer = connect<MapStatePropsType, MapDispatchPropsType, {}, StateType>
(mapStateToProps, {getNews, toggleFavorite, setCurrentSidebarMenuItem})(News);

export default NewsContainer;

//------------------------------TYPES----------------------------------------------------
type MapStatePropsType = {
    news: Array<NewsType  & {favorite: boolean}>
    isLoading: boolean
    isLanError: boolean
}
type MapDispatchPropsType = {
    getNews: () => void
    toggleFavorite: (id: number) => void
    setCurrentSidebarMenuItem: (currentItem: number) => void
}
export type NewsPropsType = MapStatePropsType & MapDispatchPropsType;
