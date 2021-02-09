      
import React from 'react';

import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';

import CssBaseline from '@material-ui/core/CssBaseline';

import { signIn } from 'next-auth/client'



import { makeStyles } from '@material-ui/core/styles';
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
  submit: {
    margin: theme.spacing(3, 0, 0),
  },
}));

export default function SignIn() { 
  const classes = useStyles();

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>

        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        

        <Button className={classes.submit} variant='outlined'  onClick={() => signIn()}>Sign in with GitHub</Button>
        {/* <Button className={classes.submit} variant='outlined'  onClick={() => signIn('github')}>Sign in with GitHub</Button> */}

      </div>

    </Container>
  );
}