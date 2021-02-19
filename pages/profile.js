import React from 'react'

const Profile = ({isAuth })=>{
    if (isAuth == undefined){
        console.log()
    }
    return (
        <h1> Secret Profile </h1>
    )
}


export default Profile;