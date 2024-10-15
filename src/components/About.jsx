import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import '../styles/About.css'; // Import your CSS file

const About = () => {
  return (
    <Container className="my-5 about-container">
      <h1 className="text-center mb-4 about-title">About Glamour Beauty Studio</h1>
      <p className="about-description">
        At Glamour Beauty Studio, we are dedicated to providing exceptional beauty and skincare services tailored to meet the unique needs of each client. Our mission is to empower individuals by enhancing their natural beauty through professional makeup applications, expert skincare advice, and a wide range of high-quality beauty products.
      </p>
      
      <h2 className="text-center my-4">Our Services</h2>
      <Row>
        <Col md={4}>
          <Card className="service-card">
            <Card.Body>
              <Card.Title>Bridal Makeup</Card.Title>
              <Card.Text>
                Our bridal makeup services ensure you look stunning on your special day, with personalized consultations and flawless application.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="service-card">
            <Card.Body>
              <Card.Title>Special Occasion Makeup</Card.Title>
              <Card.Text>
                Whether it's a birthday, anniversary, or any celebration, our expert team will create a look that enhances your beauty.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="service-card">
            <Card.Body>
              <Card.Title>Skincare Consultations</Card.Title>
              <Card.Text>
                Get personalized skincare advice and recommendations to keep your skin healthy and glowing.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <h2 className="text-center my-4">Meet Our Team</h2>
      <Row>
        <Col md={4}>
          <Card className="team-card">
            <Card.Img variant="top" src="https://img.freepik.com/free-photo/smiling-beautiful-woman-sits-table-with-makeup-tools-holding-winner-cup-with-powder-brush_141793-121515.jpg?t=st=1728715358~exp=1728718958~hmac=241046f892c538b46e03544023620eabcbdd74b05cf9a00ac87e379d2ee9e3f0&w=740" alt="Team Member 1" />
            <Card.Body>
              <Card.Title>Jane Doe</Card.Title>
              <Card.Text>Lead Makeup Artist with 10 years of experience in bridal and special event makeup.</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="team-card">
            <Card.Img variant="top" src="https://img.freepik.com/free-photo/woman-with-makeup-brushes_23-2147611458.jpg?t=st=1728715114~exp=1728718714~hmac=b3c1fea14828f776fe64d95377fb423835f594146df82b195560cd087f5d8c77&w=740" alt="Team Member 2" />
            <Card.Body>
              <Card.Title>John Smith</Card.Title>
              <Card.Text>Skincare Specialist passionate about helping clients achieve their skin goals.</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="team-card">
            <Card.Img variant="top" src="https://img.freepik.com/free-photo/young-beautiful-artist-holding-different-paint-brushes_114579-39836.jpg?t=st=1728715307~exp=1728718907~hmac=f1eb018f10d2cac41cff26adbc0da2cb390351d610b12bb72d659ca9c075de37&w=740" alt="Team Member 3" />
            <Card.Body>
              <Card.Title>Emily Johnson</Card.Title>
              <Card.Text>Makeup Artist known for her creative styles and attention to detail.</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default About;
