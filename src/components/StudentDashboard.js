// /Users/kushagra/collabin-projects/collabin-frontend/src/components/StudentDashboard.js
import React, { useEffect, useState } from 'react';
import { Container, Button, ListGroup } from 'react-bootstrap';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const StudentDashboard = () => {
    const [opportunities, setOpportunities] = useState([]);
    const navigate = useNavigate();
    const { logout } = useAuth();

    useEffect(() => {
        const fetchOpportunities = async () => {
            try {
                const response = await fetch('/api/opportunities');
                if (response.ok) {
                    const data = await response.json();
                    setOpportunities(data);
                } else {
                    throw new Error('Failed to fetch opportunities.');
                }
            } catch (error) {
                console.error('Error fetching opportunities:', error);
            }
        };

        fetchOpportunities();
    }, []);

    const handleLogout = async () => {
        try {
            await logout();
            navigate('/login');
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <Container className="py-5">
            <h1>Student Dashboard</h1>
            <div className="d-flex justify-content-between align-items-center mb-4">
                <Button variant="danger" onClick={handleLogout}>
                    Logout
                </Button>
            </div>
            <h2>Available Opportunities</h2>
            <ListGroup>
                {opportunities.map((opportunity) => (
                    <ListGroup.Item key={opportunity._id}>
                        <h5>{opportunity.title}</h5>
                        <p>{opportunity.description}</p>
                        <small>Deadline: {new Date(opportunity.deadline).toDateString()}</small>
                    </ListGroup.Item>
                ))}
            </ListGroup>
        </Container>
    );
};

export default StudentDashboard;
