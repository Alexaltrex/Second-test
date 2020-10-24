import React from 'react';
import HeaderContainer from "./Components/Header/HeaderContainer";
import MainContainer from "./Components/Main/MainContainer";
import {createStyles, makeStyles} from "@material-ui/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import SidebarContainer from "./Components/Sidebar/SidebarContainer";

const useStyles = makeStyles(() =>
    createStyles({
        root: {
            display: 'flex',
        }
    }),
);

const App: React.FC = () => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <CssBaseline />
            <HeaderContainer/>
            <SidebarContainer/>
            <MainContainer/>
        </div>
    );
}

export default App;
