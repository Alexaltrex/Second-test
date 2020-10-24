import React from 'react';
import clsx from 'clsx';
import {makeStyles, Theme} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import {drawerWidth} from "../../CONST/const";
import {HeaderPropsType} from './HeaderContainer';
import {Button} from "@material-ui/core";
import {Link as RouterLink} from 'react-router-dom';

const useStyles = makeStyles((theme: Theme) => ({
    appBar: {
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    appBarShift: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: drawerWidth,
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    hide: {
        display: 'none',
    },
    title: {
        flexGrow: 1
    }
}));

const Header: React.FC<HeaderPropsType> = (props) => {
    const {open, setOpen, isAuth, logout} = props;
    const classes = useStyles();

    const onClick = () => {
        if (isAuth) {
            logout();
        }
    };

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    return (
        <AppBar
            position="fixed"
            className={clsx(classes.appBar, {
                [classes.appBarShift]: open,
            })}
        >
            <Toolbar>
                <IconButton
                    color="inherit"
                    aria-label="open drawer"
                    onClick={handleDrawerOpen}
                    edge="start"
                    className={clsx(classes.menuButton, open && classes.hide)}
                >
                    <MenuIcon/>
                </IconButton>
                <Typography variant="h6" noWrap className={classes.title}>
                    React is awesome
                </Typography>
                <Button color="inherit" component={RouterLink} to='/login' onClick={onClick}>
                    {(!isAuth) ? 'Войти' : 'Выйти'}
                </Button>
            </Toolbar>
        </AppBar>
    )
};

export default Header;
