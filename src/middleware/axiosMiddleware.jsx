import axios from "axios";
import setAuthToken from "../utils/setAuthToken";


const instance = axios.create({
    baseURL: import.meta.env.VITE_REACT_APP_API_URL
});

instance.interceptors.request.use((config) => {
    const token = localStorage.getItem('token')
    setAuthToken(token)
    return config
})

export default instance