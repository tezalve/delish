import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProviders';
import { Button } from 'react-bootstrap';

const Navb = () => {
    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
        .then(() => [])
        .then(error => console.error(error));
    }

    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="mx-auto">
                    <ul className="navbar-nav align-items-center">
                        <li className="nav-item active p-1">
                            <Link className='text-reset text-decoration-none' to={"/"}>Delish</Link>
                        </li>
                        <li className="nav-item active p-1">
                            <Link className='text-reset text-decoration-none' to={"/"}>Home</Link>
                        </li>
                        <li className="nav-item p-1">
                            <Link className='text-reset text-decoration-none' to={"/blog"}>Blog</Link>
                        </li>
                        <li className="nav-item p-1">
                            {
                                user ?
                                    <>
                                        <span className='p-1'>{user.email}</span>
                                        <Button onClick={handleLogOut}>
                                            Signout
                                        </Button>
                                    </>
                                    :
                                    <>
                                        <Link className='text-reset text-decoration-none' to={"/login"} >
                                            Login
                                        </Link>
                                    </>
                            }
                        </li>
                    </ul>
                </div>

            </nav>
        </div>
    );
};

export default Navb;