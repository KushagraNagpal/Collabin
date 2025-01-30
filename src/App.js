import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import 'bootstrap/dist/css/bootstrap.min.css';

// Import all components
import LandingPage from './components/LandingPage';
import Signup from './components/Signup';
import Login from './components/Login';
import Profile from './components/Profile';
import AboutPage from './components/AboutPage';
import FeaturesPage from './components/FeaturesPage';
import NavigationBar from './components/Navbar';
import Footer from './components/Footer';
import ContactPage from './components/ContactPage';
import Dashboard from './components/Dashboard'; 
import ProtectedRoute from './components/ProtectedRoute'; 
import ProfessorDashboard from './components/ProfessorDashboard'; // Check the file path
import StudentDashboard from './components/StudentDashboard'; // Check the file path


import './App.css';

function App() {
    return (
        <AuthProvider>
            <Router>
                <NavigationBar />
                <main>
                    <Routes>
                        <Route path="/" element={<LandingPage />} />
                        <Route path="/signup" element={<Signup />} />
                        <Route path="/login" element={<Login />} />
                        <Route path="/dashboard" element={
                            <ProtectedRoute>
                                <Dashboard />
                            </ProtectedRoute>
                        } />
                        <Route path="/professor-dashboard" element={
                            <ProtectedRoute>
                                <ProfessorDashboard />
                            </ProtectedRoute>
                        } />
                        <Route path="/student-dashboard" element={
                            <ProtectedRoute>
                                <StudentDashboard />
                            </ProtectedRoute>
                        } />
                        <Route path="/profile" element={<Profile />} />
                        <Route path="/about" element={<AboutPage />} />
                        <Route path="/features" element={<FeaturesPage />} />
                        <Route path="/contact" element={<ContactPage />} />
                    </Routes>
                </main>
                <Footer />
            </Router>
        </AuthProvider>
    );
}

export default App;
