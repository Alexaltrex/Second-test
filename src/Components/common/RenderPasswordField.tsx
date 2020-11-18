import React, {ChangeEvent, useState} from "react";
import FormControl from "@material-ui/core/FormControl";
import {makeStyles} from "@material-ui/styles";
import InputLabel from "@material-ui/core/InputLabel";
import InputAdornment from "@material-ui/core/InputAdornment";
import IconButton from "@material-ui/core/IconButton";
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import OutlinedInput from "@material-ui/core/OutlinedInput";
import LockIcon from '@material-ui/icons/Lock';
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
    root: {
        position: 'relative'
    },
    iconLeft: {
        position: 'absolute',
        left: -5,
        top: '50%',
        transform: 'translate(-100%, -50%)'
    },
    textField: {
        width: 300,
        marginBottom: 20
    },
    error: {
        paddingLeft: 14,
        paddingTop: 2
    },
    input: {
        height: 56
    }
});

type PropsType = {
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

const RenderPasswordField: React.FC<PropsType> = (props) => {
    const {label, input, placeholder, meta, disabled} = props;
    const [showPassword, setShowPassword] = useState(false)
    const [password, setPassword] = useState('')
    const classes = useStyles();
    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setPassword(event.target.value);
    };
    const handleClickShowPassword = () => {
        setShowPassword(!showPassword);
    };
    const handleMouseDownPassword = (event: React.MouseEvent) => {
        event.preventDefault();
    };

    return (
        <div className={classes.root}>
            <LockIcon className={classes.iconLeft}/>

            <FormControl className={classes.textField}
                         variant="outlined">

                <InputLabel htmlFor="outlined-adornment-password">{label}</InputLabel>

                <OutlinedInput
                    className={classes.input}
                    disabled={disabled}
                    id="outlined-adornment-password"
                    placeholder={placeholder}
                    type={showPassword ? 'text' : 'password'}
                    value={password}
                    error={meta.touched && meta.invalid}
                    onChange={handleChange}
                    {...input}

                    endAdornment={
                        <InputAdornment position="end">
                            <IconButton
                                aria-label="toggle password visibility"
                                onClick={handleClickShowPassword}
                                onMouseDown={handleMouseDownPassword}
                                edge="end"
                            >
                                {showPassword ? <Visibility/> : <VisibilityOff/>}
                            </IconButton>
                        </InputAdornment>
                    }
                    labelWidth={130}
                />

                {meta.touched && meta.invalid && <Typography color='error' variant='caption' className={classes.error}>
                    {meta.error}
                </Typography>}


            </FormControl>
        </div>
    )
};

export default RenderPasswordField;