import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import Avatar from '@material-ui/core/Avatar';
import { signIn, signOut, useSession } from 'next-auth/client'
import { Button, Grid } from '@material-ui/core';
import Link from 'next/link';
import Skeleton from 'react-loading-skeleton';
import { useRouter } from 'next/router'

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


function Layout({ children }) {
    const classes = useStyles()
    const [session, loading] = useSession()
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const router = useRouter()

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
                                <Typography className={classes.title}> Animated Lamp! </Typography>
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
                                    <Button className={classes.btnHeader} variant="contained" color="secondary" onClick={() => {signIn(null, { callbackUrl: '/' })}} >Entrar</Button>
                                    <Button className={classes.btnHeader} variant="contained" color="secondary" onClick={() => {router.push("/signup")}} >Cadastro</Button>
                                </div>
                            )}

                        </Grid>
                    </Grid>

                </Toolbar>

            </AppBar>
            {loading &&
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
            }
            {!loading &&
                <div>
                    {children}
                </div>
            }

        </div>
    );
}

export default Layout