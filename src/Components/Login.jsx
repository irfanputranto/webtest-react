import { useState } from "react"
import { useNavigate } from "react-router-dom";

import AuthService from "../services/AuthService";
import setAuthToken from "../utils/setAuthToken";


const Login = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const token = await AuthService.login(email, password);
            localStorage.setItem('token', token)
            setAuthToken(token)

            navigate('/');
        } catch (error) {
            console.error("login error:", error);
        }
    }

    return (
        <>
        <div className="container mx-auto  ">
            <section className="flex items-center justify-center h-screen">
                <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                    <form onSubmit={handleLogin}>
                        <h2 className="text-center mb-2">Login</h2>
                        <div className="mb-4">
                            <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">Email</label>
                            <input type="email" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="email@gmail.com" value={email} onChange={(e) => setEmail(e.target.value)} required/>
                        </div>
                        <div className="mb-6">
                            <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">Password</label>
                            <input type="password" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="******************" value={password} onChange={(e) => setPassword(e.target.value)} required/>
                        </div>
                        <div className="flex items-center justify-between">
                                <button className="btn btn-primary">Login</button>
                        </div>
                    </form>
                </div>
            </section>
        </div>
        </>
    )
}

export default Login