import React, { useContext, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../providers/AuthProviders';

const Login = () => {

    const { signIn, signInWithGoogle, signInWithGithub } = useContext(AuthContext);
    const  [error, setError] = useState('');
    const navigate = useNavigate();
    const location = useLocation();
    // storing the last location accessed to reroute after login
    const from = location.state?.from?.pathname || '/';

    const handleLogin = event => {
        event.preventDefault();

        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        signIn(email, password)
            .then(result => {
                const loggedUser = result.user;
                setError('');
                form.reset();
                navigate(from);
            })
            .catch(error => {
                console.error(error);
                setError('Wrong email or password');
            })
    }

    const handleGoogleSingIn = () => {
        signInWithGoogle()
        .then(result => {
            const loggedUser = result.user;
            navigate(from);
        })
        .catch(error => {
            console.error(error);
        })
    }

    const handleGithubSingIn = () => {
        signInWithGithub()
        .then(result => {
            const loggedUser = result.user;
            navigate(from);
        })
        .catch(error => {
            console.error(error);
        })
    }

    return (
        <div className='mx-auto w-50 pt-5'>
            <h3>Login</h3>
            <Form onSubmit={handleLogin}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name='email' placeholder="Enter email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name='password' placeholder="Password" required />
                </Form.Group>
                <Button variant="danger" type="submit">
                    Login
                </Button>
                <p className='text-danger'>{error}</p>
                <Link to={'/register'}>
                    <p>New To delish?</p>
                </Link>
                <Button style={{marginRight: "10px"}} onClick={handleGoogleSingIn} variant="info">
                    Google Login
                </Button>
                <Button onClick={handleGithubSingIn} variant="dark">
                    Github Login
                </Button>
            </Form>
        </div>
    );
};

export default Login;