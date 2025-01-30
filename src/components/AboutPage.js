import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import './AboutPage.css'; // Ensure this file exists

const AboutPage = () => {
  return (
    <Container className="py-5">
      <h1>About Us</h1>
      <p className="lead">
      CollabIn is where innovation meets collaboration. We bridge the gap between students and professors, fostering connections that drive knowledge sharing, mentorship, and academic excellence.
      </p>
      <Row className="mt-4">
        <Col md={6}>
          <Card className="mb-4">
            <Card.Body>
              <Card.Title>Our Mission</Card.Title>
              <Card.Text>
              To empower students and professors by transforming academic potential into real-world impact through collaboration and shared expertise.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6}>
          <Card className="mb-4">
            <Card.Body>
              <Card.Title>What We Offer</Card.Title>
              <Card.Text>
              For Professors: Share research, post project prompts, and find talented students for collaboration.
              For Students: Seek guidance, explore opportunities, and connect with professors aligned with your interests.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <h2>Meet Our Team</h2>
      <Row>
        <Col md={3}>
          <Card className="mb-4">
            <Card.Img variant="top" src="/images/Kushagra.jpeg" alt="Team Member 1" />
            <Card.Body>
              <Card.Title>Kushagra Nagpal</Card.Title>
              <Card.Text>Developer and Code Architect</Card.Text>
            </Card.Body>
          </Card>
        </Col>
         
        <Col md={3}>
          <Card className="mb-4">
            <Card.Img variant="top" src="/images/Sparsh.jpg" alt="Team Member 2" />
            <Card.Body>
              <Card.Title>Sparsh Khanna</Card.Title>
              <Card.Text>Web Developer</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <h2>Get in Touch</h2>
      <p>If you have any questions or would like to learn more about our platform, feel free to <a href="/contact">contact us</a>.</p>
    </Container>
  );
};

export default AboutPage;