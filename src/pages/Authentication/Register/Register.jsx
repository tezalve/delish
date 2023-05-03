import React, { useContext, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { AuthContext } from '../../../providers/AuthProviders';
import { updateProfile } from 'firebase/auth';
import { useLocation, useNavigate } from 'react-router-dom';
const Register = () => {

    const { user, createUser } = useContext(AuthContext);
    const  [perror, setPerror] = useState('');
    const  [success, setSuccess] = useState('');

    
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

    const handleRegister = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const url = form.url.value;
        if(password.length < 6){
            setPerror('Password length needs to be atleast 6');
            return;
        }

        createUser(email, password)
            .then(result => {
                const loggedUser = result.user;
                updateUserData(result.user, name, url);
                setSuccess(`Successfully registered ${name}`)
                setPerror('');
                console.log(loggedUser);
                form.reset();
                navigate(from);
            })
            .catch(error => {
                console.log(error);
            })

        const updateUserData = (user, name, url) => {
            updateProfile(user, {
                displayName: name,
                photoURL: url
            })
            .then(() => {
                console.log('user name url updated');
            })
            .catch(error => {
                console.log(error);
            })
        }
    }

    return (
        <div>
            <h3>Register</h3>
            <Form onSubmit={handleRegister} className='mx-auto w-50 pt-5'>
                <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" name="name" placeholder="*Enter name" required/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name="email" placeholder="*Enter email" required/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name="password" placeholder="*Password" required/>
                    <p className='text-danger'>{perror}</p>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicURL">
                    <Form.Label>Photo URL</Form.Label>
                    <Form.Control type="text" name="url" placeholder="Photo URL (Optional)" />
                </Form.Group>

                <Button variant="danger" type="submit">
                    Register
                </Button>

                <p className='text-success'>{success}</p>
            </Form>
        </div>
    );
};

export default Register;