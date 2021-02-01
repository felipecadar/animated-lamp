import React from 'react';
import {useSession } from 'next-auth/client'
import { useRouter } from 'next/router'

function Home() {
    const router = useRouter()

    const [ session, loading ] = useSession()
    if (!loading && !session) router.push('/Login')

    return (
        <div>
            home
        </div>
    )
}


export default Home