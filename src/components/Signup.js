import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { Alert, Button, Form } from 'react-bootstrap';

const Signup = () => {
    const { signup } = useAuth();
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [role, setRole] = useState('student'); // Default role
    const [error, setError] = useState('');
    const [success, setSuccess] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setSuccess(false);
        try {
            await signup({ username, email, password, role }); // Include role in signup
            setSuccess(true);
        } catch (err) {
            setError(err.message);
        }
    };

    return (
        <div className="signup-container">
            <h1>Sign Up</h1>
            {error && <Alert variant="danger">{error}</Alert>}
            {success && <Alert variant="success">Account created successfully!</Alert>}
            <Form onSubmit={handleSubmit}>
                <Form.Group controlId="formBasicUsername">
                    <Form.Label>Username</Form.Label>
                    <Form.Control 
                        type="text" 
                        placeholder="Enter username" 
                        value={username} 
                        onChange={(e) => setUsername(e.target.value)} 
                        required 
                    />
                </Form.Group>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control 
                        type="email" 
                        placeholder="Enter email" 
                        value={email} 
                        onChange={(e) => setEmail(e.target.value)} 
                        required 
                    />
                </Form.Group>
                <Form.Group controlId="formBasicPassword">
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
                    Sign Up
                </Button>
            </Form>
        </div>
    );
};

export default Signup;