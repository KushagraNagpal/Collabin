// Dashboard.js

import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import Opportunities from './Opportunities'; // Adjust the path as needed
import './Dashboard.css';

const Dashboard = () => {
    return (
        <div className="dashboard-container">
            <header className="dashboard-header">
                <h1 className="dashboard-title">Dashboard</h1>
                <Link to="/profile" className="view-profile-link">View Profile</Link>
            </header>
            <div className="dashboard-cards">
                <div className="dashboard-card">
                    <h2 className="card-title">Deadline: February 15, 2025</h2>
                    <p className="card-content">
Project Description:
We are building an AI-driven platform to provide personalized career guidance to university students. The platform will use machine learning algorithms to analyze user profiles, career goals, and skillsets to recommend career paths, internships, and learning resources.

Required Skills and Experience:

Machine Learning Engineers: Experience with Python, TensorFlow, or PyTorch. Knowledge of recommendation systems is a plus.
UI/UX Designers: Proficiency in creating user-friendly interfaces using Figma or Adobe XD.
Backend Developers: Familiarity with Node.js, MongoDB, and API development.
Project Managers: Experienced in Agile methodology with strong organizational and communication skills.</p>
                </div>
                <div className="dashboard-card">
                    <h2 className="card-title">Deadline: March 30, 2025</h2>
                    <p className="card-content">
Project Description:
This project aims to create an online platform for hosting virtual science fairs, connecting students and professors to present and review research projects. The hub will feature live presentation rooms, project archives, and discussion boards to encourage collaboration across institutions.

Required Skills and Experience:

Full-Stack Developers: Expertise in MERN (MongoDB, Express.js, React, Node.js) stack and real-time collaboration tools like WebRTC.
Cloud Engineers: Experience in AWS or Azure to manage live streaming and data storage.
Education Experts: Professors or educators who can guide on structuring project reviews.
Marketing Specialists: Experience in digital marketing to promote the platform across universities.</p>
                </div>
                <div className="dashboard-card">
                    <h2 className="card-title">Deadline: December 31, 2024</h2>
                    <p className="card-content">
Project Overview:
We aim to develop a user-friendly e-commerce platform for sustainable products. The website will feature advanced search filters, real-time inventory tracking, secure payment gateways, and a rewards system encouraging eco-friendly purchases. The platform should prioritize responsive design and accessibility.

Required Skills and Experience:

Frontend Developers proficient in React.js, Next.js, or Vue.js.
Backend Developers with experience in Node.js, Express.js, and RESTful APIs.
UI/UX Designers skilled in Figma or Adobe XD to create intuitive interfaces.
Database experts with knowledge of MongoDB or PostgreSQL for data management.
Previous experience in building e-commerce platforms or payment integration is a plus.</p>
                </div>
                {/* Add more cards as needed */}
            </div>
            <div className="opportunities-section">
                
                <Opportunities /> {/* This will render the Opportunities component */}
            </div>
            <footer className="dashboard-footer">
                <Link to="/logout" className="logout-button">Logout</Link>
            </footer>
        </div>
    );
};

export default Dashboard;