import React from 'react';
import { signIn, signOut, useSession } from 'next-auth/client'
import {Button} from "@material-ui/core"

export default function Home() {
    const [ session, loading ] = useSession()

    return (
        <div>
            home
        </div>
    )
}