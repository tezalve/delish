import React, { useContext, useState } from 'react';
import { Button, Form, Spinner } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../providers/AuthProviders';
import { toast } from 'react-toastify';

const Login = () => {

    const { signIn, signInWithGoogle, signInWithGithub } = useContext(AuthContext);
    const [error, setError] = useState('');
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
                toast.success(`Welcome ${loggedUser.displayName}`)
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
                toast.success(`Welcome ${loggedUser.displayName}`)
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
                toast.success(`Welcome ${loggedUser.displayName}`)
                navigate(from);
            })
            .catch(error => {
                console.error(error);
            })
    }

    const { loading } = useContext(AuthContext);
    if (loading) {
        return (
            <div>
                <Spinner style={{ position: "fixed", left: "50%" }} animation="border" variant="primary" />
            </div>
        );
    }


    return (
        <div className='mx-auto w-50 pt-5'>
            <div className='shadow p-3 mb-5 bg-white rounded'>
                <h3 className='text-center py-4'>Login</h3>
                <Form onSubmit={handleLogin} >
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
                    <Link style={{ color: "grey" }} to={'/register'}>
                        <p>New To delish?</p>
                    </Link>
                    <Button style={{ marginRight: "10px" }} onClick={handleGoogleSingIn} variant="info">
                        Google Login
                    </Button>
                    <Button onClick={handleGithubSingIn} variant="dark">
                        Github Login
                    </Button>
                </Form>
            </div>
        </div>
    );
};

export default Login;