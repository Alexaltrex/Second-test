import {TextField} from "@material-ui/core";
import React from "react";
import {makeStyles} from "@material-ui/styles";

const useStyles = makeStyles({
    root: {
        position: 'relative'
    },
    iconLeft: {
        position: 'absolute',
        left: -5,
        top: '50%',
        transform: 'translate(-100%, -70%)'
    },
    textField: {
        width: 300,
        marginBottom: 20
    }
});

type PropsType = {
    icon: React.ReactElement
    label: string
    input: any
    placeholder: string
    meta: {
        touched: boolean
        invalid: boolean
        error: string
    }
    disabled: boolean
}

const RenderTextField: React.FC<PropsType> = (props) => {
    const {icon, label, input, placeholder, meta: {touched, invalid, error}, disabled} = props;
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <div className={classes.iconLeft}>
                {icon}
            </div>

            <TextField
                className={classes.textField}
                disabled={disabled}
                variant="outlined"
                label={label}
                placeholder={placeholder}
                error={touched && invalid}
                helperText={touched && error}
                {...input}

            />
        </div>
    )
};

export default RenderTextField;