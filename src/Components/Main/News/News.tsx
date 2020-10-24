import React, {useEffect, useState} from 'react';
import New from "./New/New";
import Preloader from "../../common/Preloader";
import {NewsPropsType} from "./NewsContainer";
import {Typography} from "@material-ui/core";
import Badge from "@material-ui/core/Badge";
import ImportContactsIcon from '@material-ui/icons/ImportContacts';
import {makeStyles} from "@material-ui/styles";
import FavoriteIcon from '@material-ui/icons/Favorite';
import clsx from "clsx";
import IconButton from "@material-ui/core/IconButton";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";
import Button from "@material-ui/core/Button";
import { Link as RouterLink} from 'react-router-dom';

const useStyles = makeStyles({
    panel: {
        display: 'flex',
        margin: 10,
        marginBottom: 20
    },
    panelItem: {
        marginRight: 60,
        display: 'flex',
        alignItems: 'center'
    },
    panelItemTitle: {
        marginRight: 10
    },
    favorite: {
        color: 'red'
    },
    title: {
        marginBottom: 20
    },
});

const News: React.FC<NewsPropsType> = (props) => {
    const {news, isLoading, getNews, toggleFavorite, isLanError, setCurrentSidebarMenuItem} = props;
    const classes = useStyles();

    const [showOnlyFavorite, setShowOnlyFavorite] = useState(false);

    const [open, setOpen] = React.useState(false);
    useEffect(() => {
        if (isLanError) {
            setOpen(true)
        }
    }, [isLanError]);

    const handleOk = () => {
        //setOpen(false);
        setCurrentSidebarMenuItem(1)
    };

    let newsElements = news
        ? news.map(newItem => {
            if (showOnlyFavorite) {
                if (newItem.favorite) {
                    return <New key={newItem.id}
                                newItem={newItem}
                                toggleFavorite={toggleFavorite}
                    />
                } else {
                    return null
                }
            } else {
                return <New key={newItem.id}
                            newItem={newItem}
                            toggleFavorite={toggleFavorite}
                />
            }
        })
        : null;

    useEffect(() => {
        getNews();
    }, [getNews]);

    const onClick = () => {
        setShowOnlyFavorite(!showOnlyFavorite);
    }

    return (
        <>
            <Dialog
                disableBackdropClick
                disableEscapeKeyDown
                maxWidth="xs"
                aria-labelledby="confirmation-dialog-title"
                open={open}
            >
                <DialogTitle id="confirmation-dialog-title">Error</DialogTitle>
                <DialogContent>
                    Сервер недоступен
                </DialogContent>
                <DialogActions>
                    {/*<Button autoFocus onClick={handleOk} color="primary">*/}
                    {/*    Ok*/}
                    {/*</Button>*/}
                    <Button color="primary" component={RouterLink} to="/about" onClick={handleOk}>
                        Ok
                    </Button>
                </DialogActions>
            </Dialog>

            <Typography
                className={classes.title}
                align='center'
                color='primary'
                variant='h4'
            >
                Новости
            </Typography>

            {
                isLoading || !news
                    ? <Preloader/>
                    : <>
                        <div className={classes.panel}>

                            <div className={classes.panelItem}>
                                <Typography variant='subtitle1' color='primary' component='span'
                                            className={classes.panelItemTitle}>
                                    {'Количество новостей:'}
                                </Typography>
                                <Badge badgeContent={news.length}
                                       color="primary"
                                       max={99999}
                                       showZero>
                                    <ImportContactsIcon/>
                                </Badge>
                            </div>

                            <div className={classes.panelItem}>
                                <Typography variant='subtitle1' color='primary' component='span'
                                            className={classes.panelItemTitle}>
                                    {'Показывать только отмеченные'}
                                </Typography>
                                <IconButton aria-label="add to favorites" onClick={onClick}>
                                    <FavoriteIcon className={clsx(showOnlyFavorite && classes.favorite)}/>
                                </IconButton>
                            </div>

                        </div>

                        <div>{newsElements}</div>

                    </>
            }
        </>
    )
};

export default News;