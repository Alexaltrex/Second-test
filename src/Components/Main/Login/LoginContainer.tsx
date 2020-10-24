import {connect} from "react-redux";
import Login from "./Login";
import {login} from "../../../store/auth-reducer";
import {StateType} from "../../../store/store";

const mapStateToProps = (state: StateType) => ({
    loginStatus: state.auth.loginStatus,
    errorText: state.auth.errorText,
    //isLanError: state.app.isLanError,
    isLoading: state.app.isLoading
});

const LoginContainer = connect<MapStatePropsType, MapDispatchPropsType, {}, StateType>
(mapStateToProps, {login})(Login);

export default LoginContainer;

//--------------------------------------------------------
type MapStatePropsType = {
    loginStatus: null | string
    errorText: null | string
    //isLanError: boolean
    isLoading: boolean

}
type MapDispatchPropsType = {
    login: (email: string, password: string) => void
}
export type LoginPropsType = MapStatePropsType & MapDispatchPropsType;

