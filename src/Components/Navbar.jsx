import { useState, useEffect } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'

const Navbar = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem('token');

        if (token) {
            setIsLoggedIn(true);
        } else {
            setIsLoggedIn(false);
        }
    }, [])

    const handleLogout = () => {
        localStorage.removeItem('token');
        setIsLoggedIn(false);
        navigate('/');
    }


    return (
        <div className="container mx-auto navbar bg-base-100">
            <div className="flex-1">
                    <NavLink  to="/" className="btn btn-ghost text-xl">Business</NavLink>
            </div>

            <div className="flex-none">
                <ul className="menu menu-horizontal px-1">
                    <li><NavLink  to='/' > Home</NavLink></li>
                    {isLoggedIn?(
                        <>
                        <li><NavLink  to='/article' > Add Article</NavLink></li>
                        <li><button  onClick={handleLogout} > Logout</button></li>
                        </>
                    ):(
                    <li><NavLink  to='/login' > Login</NavLink></li>
                    )}
                </ul>
            </div>
        </div>
    )
}

export default Navbar