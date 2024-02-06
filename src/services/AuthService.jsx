/* eslint-disable no-useless-catch */
import axios from "axios"

const apiUrl = import.meta.env.VITE_REACT_APP_API_URL

const AuthService = {
    login: async (email, password) => {
        try {
            const res = await axios.post(`${apiUrl}/login`, {email, password});
            return res.data.authorization.token;
        } catch (error) {
            throw error;
        }
    }
}


export default AuthService