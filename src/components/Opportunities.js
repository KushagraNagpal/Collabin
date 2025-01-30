// /Users/kushagra/collabin-projects/collabin-frontend/src/components/Opportunities.js
import React, { useEffect, useState } from 'react';
import { Container, Table, Alert } from 'react-bootstrap';

const Opportunities = () => {
    const [opportunities, setOpportunities] = useState([]);
    const [error, setError] = useState('');

    useEffect(() => {
        const fetchOpportunities = async () => {
            try {
                const response = await fetch('/api/opportunities'); // Ensure this matches your backend route
                if (!response.ok) {
                    throw new Error('Failed to fetch opportunities');
                }
                const data = await response.json();
                console.log('Fetched opportunities:', data); // Log the fetched opportunities
                setOpportunities(data);
            } catch (err) {
                setError(err.message); // Set the error message
            }
        };

        fetchOpportunities();
    }, []);

    return (
        <Container className="py-5">
            <h1>Open Opportunities</h1>
            {error && <Alert variant="danger">{error}</Alert>} {/* Display error message */}
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Opportunity Title</th>
                        <th>Description</th>
                        <th>Application Deadline</th>
                    </tr>
                </thead>
                <tbody>
                    {opportunities.length > 0 ? (
                        opportunities.map((opp) => (
                            <tr key={opp._id}>
                                <td>{opp.title}</td>
                                <td>{opp.description}</td>
                                <td>{new Date(opp.deadline).toLocaleDateString()}</td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="3" className="text-center">No opportunities available</td>
                        </tr>
                    )}
                </tbody>
            </Table>
        </Container>
    );
};

export default Opportunities;