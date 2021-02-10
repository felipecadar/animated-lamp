
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

    const [name, setname] = useState("");
    const [email, setemail] = useState("");
    const [pass, setpass] = useState("");
    const [passConfirm, setpassConfirm] = useState("");

    const [validadeFieldPass, setvalidadeFieldPass] = useState(false);


    const handleClick = (e) => {
        e.preventDefault();
        console.log({ name, email, pass, passConfirm })
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
                                onChange={(e) => { setname(e.target.value) }}
                                autoComplete="name"
                                name="name"
                                variant="outlined"
                                required
                                fullWidth
                                id="name"
                                label="Nome"
                                autoFocus
                            />
                        </Grid>

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
                        <Grid item xs={12}>
                            <TextField
                                onChange={(e) => { setpassConfirm(e.target.value) }}
                                variant="outlined"
                                required
                                fullWidth
                                disabled={pass.length == 0}
                                error={!(pass === passConfirm) && (passConfirm.length > 0)}
                                name="passwordConfirm"
                                label="Confirmar Senha"
                                type="password"
                                id="passwordConfirm"
                                autoComplete="current-password"
                            />
                        </Grid>
                        {/* <Grid item xs={12}>
                            <FormControlLabel
                                control={<Checkbox value="allowExtraEmails" color="primary" />}
                                label="I want to receive inspiration, marketing promotions and updates via email."
                            />
                        </Grid> */}
                    </Grid>
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                        onClick={handleClick}
                        disabled={email.length == 0 || name.length == 0 || pass.length == 0 || passConfirm.length == 0 || !(pass === passConfirm)}
                    >
                        Fazer meu cadastro!
                    </Button>
                    <Grid container justify="flex-end">
                        <Grid item>
                            <Button onClick={() => {signIn(null, { callbackUrl: '/' })}}>
                                Já tem conta? Então faz o login aqui.
                            </Button>
                        </Grid>
                    </Grid>
                </form>
            </div>

        </Container>
    );
}