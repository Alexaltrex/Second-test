import React, {useEffect} from 'react';
import Preloader from "../../common/Preloader";
import {ProfilePropsType} from "./ProfileContainer";
import {makeStyles} from "@material-ui/styles";
import {Typography} from "@material-ui/core";
import RowCustom from "../../common/RowCustom";
import Chip from "@material-ui/core/Chip";

const useStyles = makeStyles({
    img: {
        width: 30,
        display: 'inline-block'
    },
    title: {
        marginBottom: 20
    },
    chip: {
        marginRight: 5
    },
    link: {
        textDecoration: 'none',
        marginRight: 5
    }

});

const Profile: React.FC<ProfilePropsType> = (props) => {
    const classes = useStyles();
    const {userId, getUserInfo, isLoading, userInfo, userInfoStatus} = props;

    useEffect(() => {
        if (userId) {
            getUserInfo(userId);
        }
    }, [userId, getUserInfo]);

    if (isLoading) {
        return <Preloader/>
    }

    const languagesElements = userInfo
        ? userInfo.languages.map((el, i) => <Chip label={el}
                                                  color={'primary'}
                                                  key={i}
                                                  className={classes.chip}/>)
        : null

    const socialElements = userInfo
        ? userInfo.social
            .sort((a, b) => {
                if (a.label === 'web') {
                    return -1;
                }
                if (b.label === 'web') {
                    return 1;
                }
                return 0;
            })
            .map((el, i) => <a key={i}
                               href={el.link}
                               target="_blank"
                               rel="noopener noreferrer"
                               className={classes.link}>
                <img src={`${process.env.PUBLIC_URL}/${el.label}.png`}
                     className={classes.img}
                     alt=""/>
            </a>)
        : null


    return (
        <>
            <Typography
                className={classes.title}
                align='center'
                color='primary'
                variant='h4'
            >
                Профиль
            </Typography>

            {userInfo && userInfoStatus === 'ok' && <div>
                <div>
                    <RowCustom leftContent='Город:' rightContent={userInfo.city}/>
                    <RowCustom leftContent='Знание языков:'
                               rightContent={languagesElements}
                    />
                    <RowCustom leftContent='Социальные сети:'
                               rightContent={socialElements}
                    />
                </div>
            </div>}
            {userInfoStatus === 'err' && <div>Пользователь не найден</div>}
        </>
    )
};

export default Profile;