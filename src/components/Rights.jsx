import React from 'react';
import { Container } from 'react-bootstrap';
import '../styles/Rights.css'; // Import your CSS file

const Rights = () => {
  return (
    <Container className="text-center my-5 custom-container" id="col-2">
      <h4 className="custom-title">© 2021 Glamour Beauty Studio. All Rights Reserved.</h4>
      <p className="custom-text">
        Glamour Beauty Studio is your one-stop destination for all things beauty and skincare. Whether you're looking for professional makeup services, skincare products, or expert beauty advice, we've got you covered. You can now book appointments online for makeup sessions, browse our exclusive range of beauty products, and enjoy premium skincare at your convenience. From bridal makeup to everyday glam, our team of experts ensures you look and feel your best. Once you experience Glamour Beauty Studio, you'll never look back at your old beauty routines!
      </p>
    </Container>
  );
};

export default Rights;
