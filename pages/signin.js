
import React, { useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { signIn, useSession } from 'next-auth/client'
import { signUp } from "../src/services/auth";
import { useToasts } from 'react-toast-notifications'
import {useRouter} from 'next/router'

const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(3),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));

export default function SignUp() {
    const classes = useStyles();
    const { addToast } = useToasts();
    const router = useRouter();

    const [name, setname] = useState("");
    const [email, setemail] = useState("");
    const [pass, setpass] = useState("");
    const [passConfirm, setpassConfirm] = useState("");
    const [loading, setloading] = useState("");

    const handleClick = async (e) => {
        e.preventDefault();
        
        setloading(true);


        signIn("email-login", {redirect: false, email, password:pass })
        .then( succ => {
            setloading(false);
            console.log("succ")
            console.log(succ)
        })
        .catch( error => {
            setloading(false);
            console.log("error")
            console.log(error)
        })

        


    }

    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div className={classes.paper}>
                <Avatar className={classes.avatar}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                    Cadastro
        </Typography>
                <form className={classes.form} noValidate>
                    <Grid container spacing={2}>

                        <Grid item xs={12}>
                            <TextField
                                onChange={(e) => { setemail(e.target.value) }}
                                variant="outlined"
                                required
                                fullWidth
                                id="email"
                                label="Email"
                                name="email"
                                autoComplete="email"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                variant="outlined"
                                onChange={(e) => { setpass(e.target.value) }}
                                required
                                fullWidth
                                name="password"
                                label="Senha"
                                type="password"
                                id="password"
                                autoComplete="current-password"
                            />
                        </Grid>

                    </Grid>
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                        onClick={handleClick}
                        disabled={email.length == 0 || pass.length == 0}
                    >
                        Entrar!
                    </Button>
                    <Grid container justify="flex-end">
                        <Grid item>
                            <Button onClick={() => { router.push("/signup") }}>
                                Não tem conta? Então crie uma aqui.
                            </Button>
                        </Grid>
                    </Grid>
                </form>
            </div>

        </Container>
    );
}