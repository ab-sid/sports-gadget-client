import React, { useContext } from 'react';
import { useNavigate, useRouteError } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';

const DisplayError = () => {
    const { logOut } = useContext(AuthContext);
    const navigate = useNavigate();
    const error = useRouteError();
    const handleLogOut = () => {
        logOut()
            .then(() => {
                navigate('/login');
            })
            .catch(err => console.error(err))
    }
    return (
        <div>
            <p className='text-red-500'>Something Went Wrong</p>
            <p className='text-red-400'>{error.statusText || error.message}</p>
            <h4 className='text-2xl'>Please <button className='text-green' onClick={handleLogOut}>SignOut</button> and log back in</h4>
        </div>
    );
};

export default DisplayError;