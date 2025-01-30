import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import { Container, Form, Button, Alert } from 'react-bootstrap';

const Login = () => {
    const { login } = useAuth();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [role, setRole] = useState('student'); // Default role
    const [error, setError] = useState('');
    const [success, setSuccess] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setSuccess(false);
        try {
            await login(email, password, role); // Include role in login
            setSuccess(true);
            navigate('/dashboard'); // Redirect to dashboard on success
        } catch (err) {
            setError('Failed to log in: ' + err.message);
        }
    };

    return (
        <Container className="py-5">
            <h1>Login</h1>
            {success && <Alert variant="success">Logged in successfully!</Alert>}
            {error && <Alert variant="danger">{error}</Alert>}
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control
                        type="email"
                        placeholder="Enter your email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </Form.Group>
                <Form.Group controlId="formBasicRole">
                    <Form.Label>Role</Form.Label>
                    <Form.Check 
                        type="radio" 
                        label="Student" 
                        name="role" 
                        value="student" 
                        checked={role === 'student'} 
                        onChange={(e) => setRole(e.target.value)} 
                    />
                    <Form.Check 
                        type="radio" 
                        label="Professor" 
                        name="role" 
                        value="professor" 
                        checked={role === 'professor'} 
                        onChange={(e) => setRole(e.target.value)} 
                    />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Login
                </Button>
            </Form>
        </Container>
    );
};

export default Login;