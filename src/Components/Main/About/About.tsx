import React from 'react';
import ExtensionIcon from '@material-ui/icons/Extension';
import {List} from "@material-ui/core";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";

type PropsType = {
    text: string
    color: 'primary' | 'secondary'
};

const ListItemCustom: React.FC<PropsType> = (props) => {
    const {text, color} = props;

    return (
        <ListItem>
            <ListItemIcon>
                <ExtensionIcon color={color}/>
            </ListItemIcon>
            <ListItemText primary={text}/>
        </ListItem>
    )
}

const About: React.FC = () => {
    const description = [
        'Интерфейс создан на базе React',
        'Управление state - глобальным: redux, react-redux, локальным: react hook useState',
        'Побочные эффекты - react hook useEffect, redux-thunk',
        'Роутинг - react-router-dom',
        'Сетевые запросы: axios',
        'Работа с формами - redux-form',
        'Дизайн - Material-UI',
        'Типизация - typescript'
    ];


    const ListItemElements = description.map((item, i) => <ListItemCustom key={i} text={item} color={(i % 2 === 0) ? 'primary' : 'secondary'}/>);
    const preventDefault = (event: React.SyntheticEvent) => event.preventDefault();

    return (
        <>
            <Typography variant="h6">
                <Link href="https://github.com/maxfarseer/tz-webinars/tree/tz-2-react-redux-router-async"
                      onClick={preventDefault}>
                    Второе тестовое задание
                </Link> Максима Пацианского.Уровень работы с асинхронными запросами. Понимание взаимодействия клиента и
                сервера.
            </Typography>

            <List>
                {ListItemElements}
            </List>

        </>
    )
};

export default About;