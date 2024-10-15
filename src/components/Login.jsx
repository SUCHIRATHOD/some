import React from 'react';

import { Container, Form, Button, Card } from 'react-bootstrap';
import '../styles/Login.css'; // Import the custom CSS file

const Login = () => {
  return (
    <Container id="d-main" className="d-flex justify-content-center align-items-center">
      <Card className="sec1">
        <Card.Body className="sec1-d1">
          <h1 className="text-center">LOGIN HERE!!</h1>
          <Form action="Third.html">
            <Form.Group controlId="formBasicEmail">
              <Form.Label><span>Email:</span></Form.Label>
              <Form.Control type="email" placeholder="Enter your email" />
            </Form.Group>

            <Form.Group controlId="formBasicPassword" className="mt-3">
              <Form.Label><span>Password:</span></Form.Label>
              <Form.Control type="password" placeholder="Enter your password" />
            </Form.Group>

            <Button id="btn1" variant="danger" type="submit" className="mt-3">
              Login
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default Login;
