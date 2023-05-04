import React, { useContext } from 'react';
import { AuthContext } from '../providers/AuthProviders';
import { Navigate, useLocation } from 'react-router-dom';
import { ProgressBar, Spinner } from 'react-bootstrap';

const PrivateRoute = ({ children }) => {

    const { user, loading } = useContext(AuthContext);
    const location = useLocation();

    // to shwo spiiner & progress bar while fetching data
    if (loading) {
        return (
            <div>
                <ProgressBar animated now={100} />
                <Spinner style = {{position: "fixed", left: "50%"}} animation="border" variant="primary" />
            </div>
        );
    }

    if (user) {
        return children;
    }

    // saving the last route before login 
    return <Navigate to="/login" state={{ from: location }} replace={true} ></Navigate>
};

export default PrivateRoute;