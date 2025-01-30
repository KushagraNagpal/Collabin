import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Profile.css'; // Ensure this path is correct

const Profile = () => {
    const [userInfo, setUserInfo] = useState({
        username: '',
        email: '',
        phoneNumber: '',
        skills: [],
    });

    const [editing, setEditing] = useState(false);
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(true);

    // Fetch user profile data
    useEffect(() => {
        const fetchProfile = async () => {
            try {
                const response = await axios.get('/api/auth/me'); // Backend endpoint
                if (response.status === 200) {
                    setUserInfo(response.data);
                    setError('');
                } else {
                    throw new Error('Failed to fetch profile data');
                }
            } catch (err) {
                console.error('Error fetching profile:', err); // Log the error for debugging
                setError('Failed to load profile. Please check your connection or try again later.');
            } finally {
                setLoading(false);
            }
        };

        fetchProfile();
    }, []);

    const handleChange = (e) => {
        setUserInfo({ ...userInfo, [e.target.name]: e.target.value });
    };

    const handleSave = async () => {
        try {
            const updatedData = {
                ...userInfo,
                skills: Array.isArray(userInfo.skills)
                    ? userInfo.skills
                    : userInfo.skills.split(',').map((skill) => skill.trim()),
            };
            const response = await axios.put('/api/users/update', updatedData);
            if (response.status === 200) {
                setUserInfo(response.data);
                setError('');
                setEditing(false);
            } else {
                throw new Error('Failed to save profile changes');
            }
        } catch (err) {
            console.error('Error saving profile:', err); // Log the error for debugging
            setError('Failed to save changes, please try again.');
        }
    };

    if (loading) return <p>Loading profile...</p>;
    if (error) return <p className="error-message">{error}</p>;

    return (
        <div className="profile-container">
            <h1 className="profile-header">Profile</h1>
            {editing ? (
                <div className="profile-edit">
                    <div className="form-group">
                        <label htmlFor="username">Username</label>
                        <input
                            type="text"
                            id="username"
                            name="username"
                            value={userInfo.username}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={userInfo.email}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="phoneNumber">Phone Number</label>
                        <input
                            type="text"
                            id="phoneNumber"
                            name="phoneNumber"
                            value={userInfo.phoneNumber}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="skills">Skills</label>
                        <input
                            type="text"
                            id="skills"
                            name="skills"
                            value={Array.isArray(userInfo.skills) ? userInfo.skills.join(', ') : userInfo.skills}
                            onChange={handleChange}
                            placeholder="Comma-separated skills"
                        />
                    </div>
                    <div className="button-group">
                        <button onClick={handleSave}>Save</button>
                        <button onClick={() => setEditing(false)}>Cancel</button>
                    </div>
                </div>
            ) : (
                <div className="profile-details">
                    <p><strong>Username:</strong> {userInfo.username}</p>
                    <p><strong>Email:</strong> {userInfo.email}</p>
                    <p><strong>Phone Number:</strong> {userInfo.phoneNumber || 'Not provided'}</p>
                    <p><strong>Skills:</strong> {Array.isArray(userInfo.skills) ? userInfo.skills.join(', ') : 'None'}</p>
                    <button onClick={() => setEditing(true)}>Edit</button>
                </div>
            )}
        </div>
    );
};

export default Profile;