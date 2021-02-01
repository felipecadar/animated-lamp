import React from 'react'

import Grid from '@material-ui/core/Grid'
import { useSession } from 'next-auth/client'
import { makeStyles } from '@material-ui/core/styles';
import { useRouter } from 'next/router'

import LoginBox from '../src/LoginBox';

const useStyles = makeStyles((theme) => ({

}));


export default function Page() {
    const classes = useStyles();
    const [session, loading] = useSession()
    const router = useRouter()

    if (session?.user) router.push("/home")

    return (

        <Grid item container direction='row' justify='center' alignItems='flex-start' >

            <Grid item xs={10} sm={8} lg={6}>

                <LoginBox />

            </Grid>

        </Grid>
    )
}