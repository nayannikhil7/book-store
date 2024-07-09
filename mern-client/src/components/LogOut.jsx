import React, { useContext } from 'react'
import { AuthContext } from '../contects/AuthProvider'
import { useLocation, useNavigate } from 'react-router-dom';

const LogOut = () => {
    const { logOut } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();

    const from = location.state?.from?.pathname || "/"
    const handleLogout = () => {
        logOut().then(() => {
            // Sign-out successful.
            alert("Logged out successfully!!!!")
            navigate(from, { replace: true })
        }).catch((error) => {
            // An error happened.
        });
    }
    return (
        <div className='h-screen bg-teal-100 flex items-center justify-center'>
            <button className='bg-red-700 px-8 py-2 text-white rounded hover:bg-red-400' onClick={handleLogout}>LogOut</button>
        </div>
    )
}

export default LogOut