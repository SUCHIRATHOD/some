import React from 'react';
import { Container, Form, Button, Row, Col } from 'react-bootstrap';
import '../styles/Contact.css'; // Import the CSS file

const ContactPage = () => {
    const handleSubmit = (event) => {
        event.preventDefault();
        // Handle form submission logic here
        alert('Form submitted!');
    };

    return (
        <Container className="contact-container mt-5">
            <h2 className="text-center">Contact Us</h2>
            <Row>
                <Col md={6} className="mx-auto">
                    <Form onSubmit={handleSubmit} className="contact-form">
                        <Form.Group controlId="formName">
                            <Form.Label>Name</Form.Label>
                            <Form.Control type="text" placeholder="Enter your name" required />
                        </Form.Group>

                        <Form.Group controlId="formEmail">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" placeholder="Enter your email" required />
                        </Form.Group>

                        <Form.Group controlId="formMessage">
                            <Form.Label>Message</Form.Label>
                            <Form.Control as="textarea" rows={3} placeholder="Your message" required />
                        </Form.Group>

                        <Button variant="primary" type="submit" className="w-100">
                            Submit
                        </Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    );
};

export default ContactPage;
