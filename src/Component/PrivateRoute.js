import React, { useContext } from 'react';
import { AuthContext } from './Context/UserContext';
import { Navigate, useLocation } from 'react-router-dom';
import LoadingSpiner from './LoadingSpiner ';

const PrivateRoute = ({ children }) => {


    const { user, loading } = useContext(AuthContext)
    const location = useLocation()
    // console.log(loading)
    if (loading) {
        return <LoadingSpiner></LoadingSpiner>
    }

    if (user && user.uid) {
        return children
    }

    return (
        <div>
            <Navigate to='/login' state={{ from: location }} replace />
        </div>
    );
};

export default PrivateRoute;