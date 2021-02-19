import React from 'react'
import axios from "axios"

const Admin = ({data}) => {
    
    console.log(data)

    return (
        <h1> Secret Admin Page </h1>
    )
}


export async function getServerSideProps(context) {
    const res = await axios.get(`/api/users`)
    console.log(res.data)

    return {
        props: {data: res.data}, // will be passed to the page component as props
    }
}

export default Admin;