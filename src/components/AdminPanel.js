import React, { useEffect, useState } from 'react';
import { Container, Table, Alert } from 'react-bootstrap';

const AdminPanel = () => {
    const [users, setUsers] = useState([]);
    const [error, setError] = useState('');

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await fetch('/api/users', {
                    method: 'GET',
                    headers: {
                        'Authorization': `Bearer ${yourAuthToken}`, // Include token if needed
                    },
                });

                if (!response.ok) {
                    throw new Error('Failed to fetch users');
                }

                const data = await response.json();
                setUsers(data);
            } catch (err) {
                setError(err.message);
            }
        };

        fetchUsers();
    }, []);

    return (
        <Container className="py-5">
            <h1>User Profiles</h1>
            {error && <Alert variant="danger">{error}</Alert>} {/* Display error message */}
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Username</th>
                        <th>Profile Picture</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map(user => (
                        <tr key={user._id}>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>{user.username}</td>
                            <td>
                                {user.profilePicture ? (
                                    <img src={user.profilePicture} alt="Profile" style={{ width: '50px', height: '50px', borderRadius: '50%' }} />
                                ) : (
                                    'No picture'
                                )}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </Container>
    );
};

export default AdminPanel;