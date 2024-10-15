import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import '../styles/Paragraph.css'; 

const Paragraph = () => {
  return (
    <Container className="my-5 bg-custom custom-container">
      <Row className="g-4 text-center">
        <Col md={4} className="custom-col">
          <h4 className="fw-bold">
            Beauty Begins with You
          </h4>
          <p>
            At our Makeup Studio, we believe in enhancing your natural beauty. Our skilled artists use premium products and techniques to bring out the best version of you, ensuring a look that reflects your personality and style.
          </p>
        </Col>
        
        <Col md={4} className="custom-col">
          <h4 className="fw-bold">
            Tailored to Perfection
          </h4>
          <p>
            Every face is unique, and so are our makeup services. From glamorous bridal looks to subtle, everyday styles, we tailor our approach to match your individual features and preferences, ensuring you leave our studio feeling flawless.
          </p>
        </Col>

        <Col md={4} className="custom-col">
          <h4 className="fw-bold">
            Quality You Can Trust
          </h4>
          <p>
            We only use top-quality products that are safe for your skin and long-lasting. Our experts stay up-to-date with the latest trends and techniques in the beauty industry to deliver results you can trust, whether it's for a special occasion or just a day of self-care.
          </p>
        </Col>
      </Row>
    </Container>
  );
}

export default Paragraph;
