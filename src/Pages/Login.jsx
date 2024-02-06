import { useState } from "react"
import Footer from "../Components/Footer"
import Login from "../Components/Login"
import Navbar from "../Components/Navbar"
import { useEffect } from "react"
import setAuthToken from "../utils/setAuthToken"


const LoginForm = () => {
    const [accessToken, setAccessToken] = useState(null);
    // const [user, setUser] = useState(null);

    useEffect(() => {
        const storedToken = localStorage.getItem('token');

        if (storedToken) {
            setAccessToken(storedToken)
            setAuthToken(storedToken)
        }
    }, [])


    return (
        <>
        <Navbar />
        <Login />
        <Footer />
        </>
    )
}

export default LoginForm