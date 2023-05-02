import React, { useContext } from 'react';
import { AuthContext } from '../providers/AuthProviders';
import { Navigate } from 'react-router-dom';
import { ProgressBar } from 'react-bootstrap';

const PrivateRoute = ({ children }) => {

    const { user, loading } = useContext(AuthContext);

    if (loading) {
        return <ProgressBar animated now={100} />;
    }

    if (user) {
        return children;
    }

    return <Navigate to="/login" replace={true} ></Navigate>
};

export default PrivateRoute;