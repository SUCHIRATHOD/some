import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import '../styles/Services.css'; // Import your CSS file

const services = [
  {
    title: 'Bridal Makeup',
    description: 'Complete bridal makeup service including trial and on-the-day application.',
    price: '$5000',
    image: 'https://img.freepik.com/free-photo/girl-surrounded-by-blurred-curtains-sparkles_23-2148331884.jpg?t=st=1728720081~exp=1728723681~hmac=a53be671d6be48a07f131d87654d9d7de6875dccf96f0d80420cb7870f42f013&w=740',
  },
  {
    title: 'Party Makeup',
    description: 'Glamorous makeup for special occasions and parties.',
    price: '$100',
    image: 'https://img.freepik.com/free-photo/woman-party-with-globe_23-2148543313.jpg?t=st=1728716563~exp=1728720163~hmac=739a05a1dbf426308245df86fa07b86c74064d958ebb9e9a2ddec767f504d400&w=740',
  },
  {
    title: 'Airbrush Makeup',
    description: 'Long-lasting airbrush makeup for a flawless finish.',
    price: '$120',
    image: 'https://img.freepik.com/free-photo/short-hair-asian-young-beautiful-woman-applying-cosmetic-powder-brush_1150-13017.jpg?t=st=1728716663~exp=1728720263~hmac=fde62849aed6b1de73c79e34427cb1248a17c9df77312767cc19c9aa6254595e&w=740',
  },
  {
    title: 'Makeup Lesson',
    description: 'Personalized makeup lessons to help you enhance your skills.',
    price: '$80',
    image: 'https://img.freepik.com/premium-photo/make-up-artist-doing-professional-make-up-young-woman_104603-7967.jpg?w=740',
  },
  {
    title: 'Skin Care',
    description: 'Personalized skin care to help you enhance your skills.',
    price: '$8000',
    image: 'https://img.freepik.com/premium-photo/doctor-beautician-applies-anti-aging-mask-woman-face-girls-lies-cosmetology-procedure_153608-312.jpg?w=740',
  },
  {
    title: 'Hair Cut',
    description: 'Personalized hair cut to help you enhance your skills.',
    price: '$8000',
    image: 'https://img.freepik.com/free-photo/hairdresser-grooming-their-client_23-2149205882.jpg?t=st=1728718459~exp=1728722059~hmac=67c6e7e32e6c69c647b3e444061d19916a1916729c19ef88b7a88a2223818d89&w=740',
  },
];

const ServicesPage = () => {
  return (
    <Container className="mt-5">
      <h1 className="text-center mb-4">Our Makeup Services</h1>
      <Row>
        {services.map((service, index) => (
          <Col md={6} lg={4} key={index} className="mb-4">
            <Card className="service-card">
              <Card.Img variant="top" src={service.image} alt={service.title} className="service-image" />
              <Card.Body>
                <Card.Title>{service.title}</Card.Title>
                <Card.Text>{service.description}</Card.Text>
                <Card.Text className="font-weight-bold">{service.price}</Card.Text>
                <Button variant="primary">Book Now</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
      <Footer />
    </Container>
  );
};

const Footer = () => {
  return (
    <footer className="footer">
    <div className="footer-content">
      <div className="footer-section logo-section">
        <img 
          src="https://img.freepik.com/free-vector/realistic-make-up-brushes-composition_1284-25929.jpg?t=st=1728629490~exp=1728633090~hmac=55f76d8a0fc2a69e9c4473782ad3c51289cfcf64e0bc80a89c3991c2d2249d5f&w=740" 
          alt="Licious Logo" 
          className="footer-logo" 
        />
        <h5>EXPERIENCE MAKEUP APP ON MOBILE</h5>
        <div className="app-icons">
          <img 
            src="https://www.licious.in/image/rebranding/png/app-store-homepage.png" 
            alt="App Store" 
            className="app-icon" 
          />
          <img 
            src="https://www.licious.in/image/rebranding/png/playstore-homepage.png" 
            alt="Play Store" 
            className="app-icon" 
          />
        </div>
      

      <div className="footer-section">
        <h5>KEEP IN TOUCH</h5>
        <div className="social-icons">
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <img 
              src="https://www.licious.in/image/rebranding/png/twitter-homepage.png" 
              alt="Twitter" 
              className="social-icon" 
            />
          </a>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <img 
              src="https://www.licious.in/image/rebranding/png/fb-homepage.png" 
              alt="Facebook" 
              className="social-icon" 
            />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <img 
              src="https://www.licious.in/image/rebranding/png/insta-homepage.png" 
              alt="Instagram" 
              className="social-icon" 
            />
          </a>
        </div>
      </div>
      </div>
      <div className="footer-section">
        <h5>USEFUL LINKS</h5>
        <ul>
          <li>Why Make Up?</li>
          <li>Refer & Earn</li>
          <li>Make Up Cash & Cash+</li>
          <li>Careers</li>
          <li>BLOG</li> 
           </ul>
           </div>
          <div>
            <ul>
          <li>About Us</li>
          <li>Bug Bounty Guidelines</li>
          <li>T&C</li>
          <li>FAQ</li>
          <li>Privacy Policy</li>
          <li>Cancellation & Reschedule Policy</li>
          <li>FSSC 22000 Certification</li>
          <li>SA8000 Certification</li>
          <li>CSR Policy</li>
          <li>Sitemap</li>
          </ul>
      </div>

      <div className="footer-section contact-section">
        <h5>CONTACT US</h5>
        <p>Call: 1800-4190-786</p>
        <p>Email: <a href="mailto:talktous@licious.com">talktous@licious.com</a></p>
        <h6>REGISTERED OFFICE ADDRESS:</h6>
        <p>DELIGHTFUL GOURMET PVT LTD</p>
        <p>Maruthi Infotech Center 11/1, 12/1 B wing 1st Floor</p>
        <p>Amarjyothi layout Intermediate ring road</p>
        <p>Domlur, B.B.M.P East, Karnataka-560071</p>
        <p>Bangalore, Karnataka - 560071</p>
        <div className="payment-icons">
         
          <img src="https://www.licious.in/image/rebranding/png/3-dsecure.png" alt="Secure Payment" />
        </div>
        <p>HAVE SECURITY CONCERN?</p>
        <p>Email us to: <a href="mailto:security@licious.com">security@licious.com</a></p>
      </div>
    </div>
  </footer>
  );
};

export default ServicesPage;
