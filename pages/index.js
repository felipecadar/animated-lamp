import React from 'react'
import { signIn, signOut, useSession } from 'next-auth/client'

import { Button, Grid, AppBar, Typography, Toolbar } from '@material-ui/core'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { blue, red } from '@material-ui/core/colors';
import LoginBox from '../components/LoginBox';


const useStyles = makeStyles((theme) => ({
  signinBox: {
    // backgroundColor: red[600],
  },
  emptySpace: {
    // backgroundColor: blue[600],
  },
}));


export default function Page() {
  const classes = useStyles();
  const [ session, loading ] = useSession()

  return (
    


    <Grid item container direction='row' justify='center' alignItems='flex-start' >

      <Grid item xs={10} sm={8} lg={6} className={classes.signinBox}>

      {!session &&
        <LoginBox/>
      }

      
      
      </Grid>

    </Grid>
  )
}