import axios from 'axios';

const signUp = async ({name, email, password}) => {
    try{
        const response = await axios.post("/api/auth/signup",{name, email, password})
        return response
    }catch(error){
        return error.response.data
    }

}


export {signUp};