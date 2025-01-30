// /Users/kushagra/collabin-projects/collabin-frontend/src/components/ProfessorDashboard.js
import React, { useState } from 'react';
import { Container, Button, Form } from 'react-bootstrap';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const ProfessorDashboard = () => {
    const [opportunity, setOpportunity] = useState({
        title: '',
        description: '',
        deadline: '',
    });
    const navigate = useNavigate();
    const { logout } = useAuth();

    const handleLogout = async () => {
        try {
            await logout();
            navigate('/login');
        } catch (error) {
            console.error(error);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('/api/opportunities', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(opportunity),
            });

            if (response.ok) {
                alert('Opportunity posted successfully!');
                setOpportunity({ title: '', description: '', deadline: '' });
            } else {
                throw new Error('Failed to post opportunity.');
            }
        } catch (error) {
            console.error('Error posting opportunity:', error);
            alert('An error occurred while posting the opportunity.');
        }
    };

    return (
        <Container className="py-5">
            <h1>Professor Dashboard</h1>
            <div className="d-flex justify-content-between align-items-center mb-4">
                <Button variant="danger" onClick={handleLogout}>
                    Logout
                </Button>
            </div>
            <Form onSubmit={handleSubmit}>
                <Form.Group controlId="opportunityTitle" className="mb-3">
                    <Form.Label>Title</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Enter title"
                        value={opportunity.title}
                        onChange={(e) =>
                            setOpportunity({ ...opportunity, title: e.target.value })
                        }
                    />
                </Form.Group>
                <Form.Group controlId="opportunityDescription" className="mb-3">
                    <Form.Label>Description</Form.Label>
                    <Form.Control
                        as="textarea"
                        rows={3}
                        placeholder="Enter description"
                        value={opportunity.description}
                        onChange={(e) =>
                            setOpportunity({ ...opportunity, description: e.target.value })
                        }
                    />
                </Form.Group>
                <Form.Group controlId="opportunityDeadline" className="mb-3">
                    <Form.Label>Deadline</Form.Label>
                    <Form.Control
                        type="date"
                        value={opportunity.deadline}
                        onChange={(e) =>
                            setOpportunity({ ...opportunity, deadline: e.target.value })
                        }
                    />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Post Opportunity
                </Button>
            </Form>
        </Container>
    );
};

export default ProfessorDashboard;
