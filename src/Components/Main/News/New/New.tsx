import React, {useState} from 'react';
import {NewsType} from "../../../../Types/types";
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import {CardContent} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import {makeStyles} from "@material-ui/styles";
import CardActions from "@material-ui/core/CardActions";
import IconButton from "@material-ui/core/IconButton";
import FavoriteIcon from '@material-ui/icons/Favorite';
import clsx from 'clsx';
import CardActionArea from "@material-ui/core/CardActionArea";
import green from "@material-ui/core/colors/green";

const useStyles = makeStyles({
    cardRoot: {
        marginBottom: 10
    },
    cardHeaderRoot: {
        backgroundColor: green[900]
    },
    cardHeaderTitle: {
        color: 'white'
    },
    favorite: {
        color: 'red'
    }
})


const New: React.FC<PropsType> = (props) => {
    const {newItem, toggleFavorite} = props;
    const classes = useStyles();
    const [showFullText, setShowFullText] = useState(false)

    const onFavoriteClick = () => {
        toggleFavorite(newItem.id);
    };

    const onClick = () => {
        setShowFullText(true)
        console.log('test')
    };

    let newsText = (newItem.text.length > 60)
        ? `${newItem.text.slice(0, 60)}...`
        : newItem.text;

    return (
        <Card classes={{
            root: classes.cardRoot
        }}>
            <CardHeader title={newItem.title}
                        classes={{
                            root: classes.cardHeaderRoot,
                            title: classes.cardHeaderTitle
                        }}
            />

            {!showFullText && <CardActionArea onClick={onClick}>
                <CardContent>
                    <Typography variant="body1" color="textSecondary" component="p">
                        {newsText}
                    </Typography>
                </CardContent>
            </CardActionArea>}

            {showFullText && <CardContent>
                    <Typography variant="body1" color="textSecondary" component="p">
                        {newItem.text}
                    </Typography>
                </CardContent>}

            <CardActions disableSpacing>
                <IconButton aria-label="add to favorites" onClick={onFavoriteClick}>
                    <FavoriteIcon className={clsx(newItem.favorite && classes.favorite)}/>
                </IconButton>
            </CardActions>

        </Card>
    )
};

export default New;

//-------------------------------------------
type PropsType = {
    newItem: NewsType & { favorite: boolean }
    toggleFavorite: (id: number) => void
}