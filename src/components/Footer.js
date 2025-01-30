import React from 'react';
import { Container } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer className="bg-dark text-white py-3 mt-auto">
      <Container className="text-center">
        <p>© 2024 Collabin. All rights reserved.</p>
        <p>
          <a href="/privacy" className="text-white text-decoration-none">
            Privacy Policy
          </a>{' '}
          |{' '}
          <a href="/terms" className="text-white text-decoration-none">
            Terms of Service
          </a>
        </p>
      </Container>
    </footer>
  );
};

export default Footer;