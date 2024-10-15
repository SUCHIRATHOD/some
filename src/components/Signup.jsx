import React from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import '../styles/Signup.css'; // Import custom styles

const SignupPage = () => {
    const handleSubmit = (event) => {
        event.preventDefault();
        // Handle form submission logic here
        alert('Signup submitted!');
    };

    return (
        <Container className="signup-container mt-5">
            <section className="signup-section">
                <h1>SIGNUP HERE!!</h1>
                <Form onSubmit={handleSubmit}>
                    <Form.Group controlId="formUsername">
                        <Form.Label>UserName:</Form.Label>
                        <Form.Control type="text" placeholder="Enter your username" required />
                    </Form.Group>

                    <Form.Group controlId="formFirstName">
                        <Form.Label>First Name:</Form.Label>
                        <Form.Control type="text" placeholder="Enter your first name" required />
                    </Form.Group>

                    <Form.Group controlId="formLastName">
                        <Form.Label>Last Name:</Form.Label>
                        <Form.Control type="text" placeholder="Enter your last name" required />
                    </Form.Group>

                    <Form.Group controlId="formPassword">
                        <Form.Label>Password:</Form.Label>
                        <Form.Control type="password" placeholder="Enter your password" required />
                    </Form.Group>

                    <Form.Group controlId="formConfirmPassword">
                        <Form.Label>Confirm Password:</Form.Label>
                        <Form.Control type="password" placeholder="Confirm your password" required />
                    </Form.Group>

                    <Button variant="danger" type="submit" className="mt-3">
                        Signup
                    </Button>
                </Form>
            </section>
        </Container>
    );
};

export default SignupPage;
