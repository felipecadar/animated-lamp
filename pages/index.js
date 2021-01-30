import React from 'react'
import { signIn, signOut, useSession } from 'next-auth/client'

import { Button } from '@material-ui/core'

export default function Page() {
  const [ session, loading ] = useSession()

  return <>
    {!session && <>
      Not signed in <br/>
      <Button variant='outlined' color='primary' onClick={signIn}>Sign in</Button>
    </>}
    
    {session && <>
      Signed in as {session.user.email} <br/>
      <Button variant='outlined' color='secondary' onClick={signOut}>Sign out</Button>
    </>}
  </>
}