import React, { useState } from 'react';
import { Container, Form, Button, Alert } from 'react-bootstrap';

const ContactPage = () => {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        // Simple validation
        if (!email || !message) {
            setError('Please fill in both fields.');
            return;
        }

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, message }),
            });

            if (response.ok) {
                setSuccess(true);
                setEmail('');
                setMessage('');
                setError('');
            } else {
                const errorText = await response.text(); // Get the error message
                setError('Failed to send message: ' + errorText);
            }
        } catch (err) {
            setError('An error occurred. Please try again later.');
        }
    };

    return (
        <Container className="py-5">
            <h1>Contact Us</h1>
            {success && <Alert variant="success">Your message has been sent successfully!</Alert>}
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
                <Form.Group className="mb-3" controlId="formBasicMessage">
                    <Form.Label>Message</Form.Label>
                    <Form.Control
                        as="textarea"
                        rows={3}
                        placeholder="Your message"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        required
                    />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </Container>
    );
};

export default ContactPage;