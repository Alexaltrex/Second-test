import React from 'react';
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {Button, Paper} from "@material-ui/core";
import {LoginPropsType} from "./LoginContainer";
import {makeStyles} from "@material-ui/styles";
import Typography from "@material-ui/core/Typography";
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import Preloader from "../../common/Preloader";
import RenderTextField from "../../common/RenderTextField";
import RenderPasswordField from "../../common/RenderPasswordField";

const useStyles = makeStyles({
    root: {
        display: 'flex',
        justifyContent: 'center'
    },
    paper: {
        width: 400,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: 10,
        paddingBottom: 20,
        borderRadius: 15
    },
    error: {
        width: 300,
        marginBottom: 10,
    },
    button: {
        marginBottom: 10,
        width: 300,
    },
    title: {
        marginBottom: 20
    },
    fieldWrapper: {
        marginBottom: 20
    }
});

//-------------------------------FORM-----------------------------------------------------
const LoginForm: React.FC<InjectedFormProps<LoginFormValuesType, OwnPropsType> & OwnPropsType> = (props) => {
    const {handleSubmit, submitting, pristine, error, isLoading} = props;
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Paper elevation={6} className={classes.paper}>
                <form onSubmit={handleSubmit}>
                    <Typography
                        className={classes.title}
                        align='center'
                        color='primary'
                        variant='h4'
                    >
                        Войти в профиль
                    </Typography>

                    <div>
                        <Field
                            disabled={isLoading}
                            name='email'
                            component={RenderTextField}
                            placeholder='Введите свой email'
                            label='Электронная почта (max@test.com)'
                            icon={<MailOutlineIcon/>}
                        />
                    </div>

                    <div>
                        <Field
                            name='password'
                            disabled={isLoading}
                            component={RenderPasswordField}
                            placeholder='Введите свой пароль'
                            label='Пароль (12345)'
                        />
                    </div>

                    {
                        error &&
                        <Typography color='error' variant='subtitle1' className={classes.error}>
                            {error}
                        </Typography>
                    }

                    <div>
                        <Button type="submit"
                                color="primary"
                                variant="contained"
                                className={classes.button}
                                disabled={submitting || pristine || isLoading}>
                            Войти
                        </Button>
                    </div>

                </form>
            </Paper>

        </div>
    )
};

//----------------------------VALIDATE------------------------------------
export const empty: EmptyType = (str) => /^\s+$/.test(str);
const validate: LoginValidateType = (values) => {
    let errors = {} as LoginErrorsType;
    if (empty(values.email)) {
        errors.email = 'email field is empty'
    }
    if (!values.email) {
        errors.email = 'field is required'
    }
    if (empty(values.password)) {
        errors.password = 'password field is empty'
    }
    if (!values.password) {
        errors.password = 'field is required'
    }
    return errors;
};

//----------------------------REDUX-FORM------------------------------------------------
const LoginReduxForm = reduxForm<LoginFormValuesType, OwnPropsType>({
    form: 'login',
    validate
})(LoginForm);

//-----------------------------COMPONENT-------------------------------------------------------
const Login: React.FC<LoginPropsType> = (props) => {
    const {login, isLoading} = props;
    let onSubmit = (values: LoginFormValuesType) => {
        login(values.email, values.password);
    }
    return (
        <>
            <LoginReduxForm onSubmit={onSubmit} isLoading={isLoading}/>
            {isLoading && <Preloader/>}
        </>
    )

};

export default Login;

//--------------------------TYPES------------------------------------------
type EmptyType = (str: string) => boolean
type LoginErrorsType = {
    email: string | undefined
    password: string | undefined
}
type LoginFormValuesType = {
    email: string
    password: string
}
type OwnPropsType = {
    isLoading: boolean
}
export type LoginValidateType = (values: LoginFormValuesType) => LoginErrorsType;