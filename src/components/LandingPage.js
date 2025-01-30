import React, { useState } from 'react';
import { Container, Row, Col, Carousel, Button, Modal } from 'react-bootstrap';
import Signup from './Signup'; // Import the Signup component
import Login from './Login'; // Import the Login component

const LandingPage = () => {
  const [showModal, setShowModal] = useState(false);
  const [isLogin, setIsLogin] = useState(true); // State to toggle between Login and Signup

  const handleShow = () => setShowModal(true);
  const handleClose = () => setShowModal(false);
  const toggleForm = () => setIsLogin(!isLogin); // Toggle between Login and Signup

  return (
    <Container fluid className="landing-page text-center py-5 bg-light">
      <Row>
        <Col>
          <h1>Welcome to Collabin!</h1>
          <p className="lead">Collaborate, innovate, and create together.</p>
          <Button variant="primary" onClick={handleShow} className="mt-3">
            Get Started
          </Button>
        </Col>
      </Row>
      <Row className="mt-5">
        <Col>
          <Carousel>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://www.acacia.edu/wp-content/uploads/2024/01/Teacher-Collaboration-scaled.jpg"
                alt="First slide"
              />
              <Carousel.Caption>
                <h3>Collaboration Made Easy</h3>
                <p>Join a thriving community of innovators.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://media.istockphoto.com/id/1300822108/photo/group-of-unrecognisable-international-students-having-online-meeting.jpg?s=612x612&w=0&k=20&c=-X6IUTSdDMfJrFdQFhrDuwhnMrM1BLjfrLzydpibCTA="
                alt="Second slide"
              />
              <Carousel.Caption>
                <h3>Share Your Ideas</h3>
                <p>Transform your concepts into reality with expert help.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://b2332085.smushcdn.com/2332085/wp-content/uploads/2024/11/24_USU_Salesforce-Announcement_UST.jpg?lossy=1&strip=1&webp=1"
                alt="Third slide"
              />
              <Carousel.Caption>
                <h3>Learn and Grow</h3>
                <p>Access resources and mentorship to enhance your skills.</p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </Col>
      </Row>

      {/* Modal for Login/Signup */}
      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{isLogin ? 'Login' : 'Sign Up'}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {isLogin ? <Login /> : <Signup />}
          <div className="text-center mt-3">
            <Button variant="link" onClick={toggleForm}>
              {isLogin ? "Don't have an account? Sign Up" : "Already have an account? Login"}
            </Button>
          </div>
        </Modal.Body>
      </Modal>
    </Container>
  );
};

export default LandingPage;