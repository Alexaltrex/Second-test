import {connect} from "react-redux";
import SidebarItem from "./SidebarItem";
import {sidebarAC} from "../../../store/sidebar-reducer";
import React from "react";
import {StateType} from "../../../store/store";

const mapStateToProps = (state: StateType) => ({
    currentItem: state.sidebar.currentItem
});

const setCurrentSidebarMenuItem = sidebarAC.setCurrentSidebarMenuItem;

const SidebarItemContainer = connect<MapStatePropsType, MapDispatchPropsType, OwnPropsType, StateType>
(mapStateToProps, {setCurrentSidebarMenuItem})(SidebarItem);

export default SidebarItemContainer;

//---------------------------------------------------------------------------
type MapStatePropsType = {
    currentItem: number
}
type MapDispatchPropsType = {
    setCurrentSidebarMenuItem: (currentItem: number) => void
}
type OwnPropsType = {
    to: string
    primary: string
    icon?: React.ReactElement
    ownIndex: number
}
export type SidebarItemPropsType = MapStatePropsType & MapDispatchPropsType & OwnPropsType;

