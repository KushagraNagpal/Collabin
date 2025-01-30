import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import './FeaturesPage.css'; // Ensure this file exists

const FeaturesPage = () => {
  return (
    <Container className="py-5">
      <h1>Features</h1>
      <p className="lead">
        Explore the features that make collaboration seamless on Collabin.
      </p>
      <Row className="mt-4">
        <Col md={4}>
          <Card className="mb-4">
            <Card.Img variant="top" src="/images/ResearchOpportunities.jpg" alt="Feature 1" />
            <Card.Body>
              <Card.Title>Research Opportunities</Card.Title>
              <Card.Text>
                Discover research projects that align with your interests and skills.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="mb-4">
            <Card.Img variant="top" src="https://cdn-icons-png.flaticon.com/512/917/917465.png" alt="Feature 2" />
            <Card.Body>
              <Card.Title>Collaboration Tools</Card.Title>
              <Card.Text>
                Utilize our suite of collaboration tools to work efficiently with your team.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="mb-4">
            <Card.Img variant="top" src="/images/MentorshipProg.jpg" alt="Feature 3" />
            <Card.Body>
              <Card.Title>Mentorship Program</Card.Title>
              <Card.Text>
                Get guidance from experienced professors and industry experts.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col md={4}>
          <Card className="mb-4">
            <Card.Img variant="top" src="/images/Resourcelibrary.jpg" alt="Feature 4" />
            <Card.Body>
              <Card.Title>Resource Library</Card.Title>
              <Card.Text>
                Access a vast library of research papers, articles, and tutorials.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="mb-4">
            <Card.Img variant="top" src="/images/CommunityForum.jpg" alt="Feature 5" />
            <Card.Body>
              <Card.Title>Community Forum</Card.Title>
              <Card.Text>
                Engage with our community of researchers, students, and professors.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="mb-4">
            <Card.Img variant="top" src="https://www.simplilearn.com/ice9/free_resources_article_thumb/Project_Management.jpg" alt="Feature 6" />
            <Card.Body>
              <Card.Title>Project Management</Card.Title>
              <Card.Text>
                Organize and track your projects with our intuitive project management tool.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default FeaturesPage;