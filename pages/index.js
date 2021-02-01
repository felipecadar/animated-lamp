import React from 'react'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import Link from 'next/link'

export default function Page() {

  return (

    <Grid item container direction='column' justify='flex-start' alignItems='center' spacing={3} >

      <Grid item xs={10} sm={8} lg={6}>

        <Link href="/home">
          <Button>Home</Button>
        </Link>
      </Grid>

      <Grid item xs={10} sm={8} lg={6}>
        <Link href="/Login">
          <Button>Login</Button>
        </Link>

      </Grid>

    </Grid>
  )
}