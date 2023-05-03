import React, { useContext } from 'react';
import './Navb.css'
import { NavLink } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProviders';
import { Button, Image } from 'react-bootstrap';

const Navb = () => {
    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then(() => [])
            .then(error => console.error(error));
    }

    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light justify-content-center">
                <ul className="navbar-nav align-items-center d-flex justify-content-around">
                    <li className="nav-item active p-1">
                        <NavLink id='home' className='text-decoration-none' style={{color: "grey"}} to={"/"}>
                            Delish
                        </NavLink>
                    </li>
                    <li className="nav-item active p-1">
                        <NavLink id='home' className='text-decoration-none' style={({ isActive }) => (isActive ? { borderBottom: "2px solid grey", color: 'red' } : { color: 'grey' })} to={"/"}>
                            Home
                        </NavLink>
                    </li>
                    <li className="nav-item p-1">
                        <NavLink id='blog' className='text-decoration-none' to={"/blog"} style={({ isActive }) => (isActive ? { borderBottom: "2px solid grey", color: 'red' } : { color: 'grey' })}>
                            Blog
                        </NavLink>
                    </li>
                    <li className="nav-item p-1">
                        {
                            user ?
                                <>
                                    <span className='p-1'>
                                        <Image title={user.displayName} className='' style={{ width: "50px", height: "50px" }} src={user.photoURL} roundedCircle></Image>
                                    </span>
                                    <Button className='btn-danger' onClick={handleLogOut}>
                                        Signout
                                    </Button>
                                </>
                                :
                                <>
                                    <NavLink id='login' className='text-decoration-none' to={"/login"} style={({ isActive }) => (isActive ? { borderBottom: "2px solid grey", color: 'red' } : { color: 'grey' })}>
                                        Login
                                    </NavLink>
                                </>
                        }
                    </li>
                    {
                        user ? '' 
                        : 
                        <li className="nav-item p-1">
                        <NavLink id='blog' className='text-decoration-none' to={"/register"} style={({ isActive }) => (isActive ? { borderBottom: "2px solid grey", color: 'red' } : { color: 'grey' })}>
                            Register
                        </NavLink>
                    </li>
                    }
                </ul>
            </nav>
        </div>
    );
};

export default Navb;