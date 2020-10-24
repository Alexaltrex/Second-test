import {getUserInfo} from "../../../store/auth-reducer";
import Profile from "./Profile";
import {connect} from "react-redux";
import {StateType} from "../../../store/store";
import {UserInfoType} from "../../../Types/types";

const mapStateToProps = (state: StateType): MapStatePropsType => ({
    userInfo: state.auth.userInfo,
    userId: state.auth.userId,
    userInfoStatus: state.auth.userInfoStatus,
    isLoading: state.app.isLoading
});

const ProfileContainer = connect<MapStatePropsType, MapDispatchPropsType, {}, StateType>
(mapStateToProps, {getUserInfo})(Profile);

export default ProfileContainer;

//-------------------------------TYPES----------------------------------------------------------
type MapStatePropsType = {
    userInfo: UserInfoType | null
    userId: null | number
    userInfoStatus: null | string
    isLoading: boolean
}
type MapDispatchPropsType = {
    getUserInfo: (userId: number) => void
}
export type ProfilePropsType = MapStatePropsType & MapDispatchPropsType;