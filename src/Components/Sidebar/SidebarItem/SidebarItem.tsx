import {Link as RouterLink} from "react-router-dom";
import ListItemIcon from "@material-ui/core/ListItemIcon/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText/ListItemText";
import React from "react";
import ListItem from "@material-ui/core/ListItem";
import {SidebarItemPropsType} from "./SidebarItemContainer";

const SidebarItem: React.FC<SidebarItemPropsType> = (props) => {
    const {ownIndex, to, primary, icon, currentItem, setCurrentSidebarMenuItem,
        } = props;

    const onClick = () => {
        setCurrentSidebarMenuItem(ownIndex);
    };

    return (
        <li>
        <ListItem
            onClick={onClick}
            selected={ownIndex === currentItem}
            button
            component={RouterLink}
            to={to}>
            {icon
                ? <ListItemIcon color='primary'>
                {icon}
            </ListItemIcon>
                : null}
            <ListItemText primary={primary}/>
        </ListItem>
        </li>
    )
};

export default SidebarItem;