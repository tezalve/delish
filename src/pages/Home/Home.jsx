import React, { useContext } from 'react';
import { AuthContext } from '../../providers/AuthProviders';
import { Image } from 'react-bootstrap';

const Home = () => {

    const { user } = useContext(AuthContext);

    return (
        <div>
            <h2>Home</h2>
            {
                user ?
                    <>
                        <h2>{user.displayName}</h2>
                        <Image src={user.photoURL} fluid />;
                    </>
                    :
                    <>
                    </>
            }
        </div>
    );
};

export default Home;