import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import Avatar from '@material-ui/core/Avatar';
import { signIn, signOut, useSession, getSession } from 'next-auth/client'
import { Button, Grid } from '@material-ui/core';
import Link from 'next/link';
import Skeleton from 'react-loading-skeleton';
import { useRouter } from 'next/router'

function LoadingScreen() {
    return (
        <Grid container direction="row" spacing={1} justify="center" >
            <Grid item xs={8} sm={5} md={3} >
                <Skeleton count={20} />
            </Grid>

            <Grid item xs={8} sm={5} md={3} >
                <Skeleton count={20} />
            </Grid>

            <Grid item xs={8} sm={5} md={3} >
                <Skeleton count={20} />
            </Grid>
        </Grid>
    )
}

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    appbar: {
        marginRight: theme.spacing(2),
    },
    title: {
        flex: 1,
    },
    btnHeader: {
        marginLeft: theme.spacing(2),
    }
}));

const handleChange = (event) => {
    setAuth(event.target.checked);
};

const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
};


// SET PAGES CONFIG HERE PLLLSSSS
const adminList = [
    "/admin",
]

const privateList = [
    "/profile",
]

const publicList = [
    "/singup",
    "/signin",
    "/api/auth/signin",
]



function Layout({ children, ...pageProps }) {
    const classes = useStyles();
    const [session, loading] = useSession();
    const [valid, setValid] = useState(false);
    const [passedValidation, setPassed] = useState(false);
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const router = useRouter()

    //secure_app
    console.log("------------Enter Layout------------")
    if (!passedValidation) {

        if (!loading) {
            console.log("Not Loading")
            if (!session) { // not authenticated
                console.log("Not Session")

                if (privateList.indexOf(router.asPath) > -1 || adminList.indexOf(router.asPath) > -1) {
                    if (valid) setValid(false);
                    router.push("/signup")
                } else {
                    if (!valid) setValid(true);
                }


            } else { //authenticated
                console.log("Session")
                console.log(session.user)

                if (publicList.indexOf(router.asPath) > -1) {
                    if (valid) setValid(false);
                    router.push("/")
                } else {
                    if (!valid) setValid(true);
                }

                if (adminList.indexOf(router.asPath) > -1 && session.user.idAdmin == false) {
                    if (valid) setValid(false);
                    router.push("/")

                } else {
                    if (!valid) setValid(true);
                }
                

            }
            setPassed(true);
        }
        else {
            console.log("Loading")
            return (
                <LoadingScreen />
            )
        }
    }


    const handleChange = (event) => {
        setAuth(event.target.checked);
    };

    const handleMenu = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    <Grid
                        container
                        direction="row"
                        justify="space-between"
                        alignItems="center"
                    >
                        <Grid item>
                            <Link href="/">
                                <Typography className={classes.title}> Meu Gestor </Typography>
                            </Link>
                        </Grid>
                        <Grid item>
                            {session && (
                                <div>
                                    <IconButton
                                        aria-label="account of current user"
                                        aria-controls="menu-appbar"
                                        aria-haspopup="true"
                                        onClick={handleMenu}
                                        color="inherit"
                                    >
                                        <Avatar alt={session.user.name} src={session.user.image} />
                                    </IconButton>
                                    <Menu
                                        id="menu-appbar"
                                        anchorEl={anchorEl}
                                        anchorOrigin={{
                                            vertical: 'top',
                                            horizontal: 'right',
                                        }}
                                        keepMounted
                                        transformOrigin={{
                                            vertical: 'top',
                                            horizontal: 'right',
                                        }}
                                        open={open}
                                        onClose={handleClose}
                                    >
                                        <MenuItem onClick={signOut}>Sair</MenuItem>
                                    </Menu>

                                </div>
                            )}

                            {!session && (
                                <div>
                                    <Button className={classes.btnHeader} variant="contained" color="secondary" onClick={() => { router.push("/signin") }} >Entrar</Button>
                                    <Button className={classes.btnHeader} variant="contained" color="secondary" onClick={() => { router.push("/signup") }} >Cadastro</Button>
                                </div>
                            )}

                        </Grid>
                    </Grid>

                </Toolbar>

            </AppBar>

            {(!loading && valid) &&
                < div >
                    {children}
                </div>
            }

        </div >
    );
}

export default Layout

export async function getServerSideProps(context) {
    const session = await getSession(context)
    return {
        props: { session }
    }
}