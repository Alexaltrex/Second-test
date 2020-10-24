import {connect} from "react-redux";
import Header from "./Header";
import {appAC} from "../../store/app-reducer";
import {authAC} from "../../store/auth-reducer";
import {StateType} from "../../store/store";

const mapStateToProps = (state: StateType): MapStatePropsType  => ({
    isAuth: state.auth.isAuth,
    open: state.app.open
});

const setOpen = appAC.setOpen;
const logout = authAC.logout;

const HeaderContainer = connect<MapStatePropsType, MapDispatchPropsType, {}, StateType>
(mapStateToProps, {logout, setOpen})(Header);

export default HeaderContainer;

//------------------------------------------------------------------------
type MapStatePropsType = {
    isAuth: boolean
    open: boolean
}

type MapDispatchPropsType = {
    logout: () => void
    setOpen: (open: boolean) => void
}

export type HeaderPropsType = MapStatePropsType & MapDispatchPropsType


