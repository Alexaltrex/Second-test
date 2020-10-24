import React from 'react';
import clsx from 'clsx';
import {makeStyles, Theme} from '@material-ui/core/styles';
import {Redirect, Route} from "react-router-dom";
import ProfileContainer from "./Profile/ProfileContainer";
import LoginContainer from "./Login/LoginContainer";
import NewsContainer from "./News/NewsContainer";
import About from "./About/About";
import {drawerWidth} from "../../CONST/const";
import {MainPropsType} from "./MainContainer";

const useStyles = makeStyles((theme: Theme) => ({
    drawerHeader: {
        display: 'flex',
        alignItems: 'center',
        padding: theme.spacing(0, 1),
        // necessary for content to be below app bar
        ...theme.mixins.toolbar,
        justifyContent: 'flex-end',
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        marginLeft: -drawerWidth,
    },
    contentShift: {
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
        marginLeft: 0,
    },
}));

const Main: React.FC<MainPropsType> = (props) => {
    const {isAuth, open} = props;
    const classes = useStyles();

    return (
        <main className={clsx(classes.content, {
            [classes.contentShift]: open,
        })}>
            <div className={classes.drawerHeader}/>
            <Route path='/about' component={About}/>
            <Route path='/news' component={NewsContainer}/>
            <Route path='/profile'>
                {isAuth ? <ProfileContainer/> : <Redirect to='/login'/>}
            </Route>
            <Route path='/login'>
                {!isAuth ? <LoginContainer/> : <Redirect to='/profile'/>}
            </Route>
        </main>
    )
};

export default Main;

//@types/react-router-dom





