import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import '../styles/Categories.css'; // Import custom CSS file

const Categories = () => {
  const images = [
    "https://img.freepik.com/premium-photo/paint-brushes-water-paint-colors_1148167-58368.jpg?w=740",
    "https://img.freepik.com/free-photo/eye-shadows-with-facial-powders-pink-table_23-2148047010.jpg?t=st=1728385070~exp=1728388670~hmac=4464fbf9080f652c221abf96395eb56089703877388db67312fcd989e232c711&w=740",
    "https://img.freepik.com/premium-photo/cosmetic-productphotography-v-61-job-id-4284645db3794034b108b1599a110631_1036629-2883.jpg?w=740",
    "https://img.freepik.com/free-vector/cosmetic-items_23-2147520115.jpg?t=st=1728385303~exp=1728388903~hmac=cf7abb82aa1b3dd89d280260ba02c281daf9beab70dfeef7c4b0364b29e7a8a9&w=740",
    "https://img.freepik.com/free-photo/red-lipsticks-arrangement-high-angle_23-2148978124.jpg?t=st=1728385385~exp=1728388985~hmac=5020ce3c46d961d19d7af7ef30be09366120cc6589b2ac93a067c195b6fd2ec3&w=360",
    "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTvVu6Xkfl6pI1_xwuPqqKaOgD1JR5MQtXu7cKvvqgp1AVGkuruticeBIeSSuxYZ7ZU3hHOok62nbGjC7kaL482Ojx6RG03fhPlBDO5YiQs9B7jIXioqbN0Cg",
  ];
  const picture = [
    "https://www.debellecosmetix.com/cdn/shop/files/moulinrouge_4_800x.jpg?v=1721725999",
    "https://images-cdn.ubuy.co.in/644057ff865f5278c0570900-eyebrow-pencil-black-waterproof.jpg",
    "https://nourishmantra.in/cdn/shop/products/Artboard1_1.jpg?v=1723286396",
    "https://www.onebharatpharmacy.com/uploads/product/main/1650281729_7518_1.jpg",
    "https://aqualogica.in/cdn/shop/files/1_8d797483-8cdc-4d99-9a42-49972639c3cd.jpg?v=1719466573&width=1445",
    "https://rukminim2.flixcart.com/image/720/864/xif0q/brush-applicator/b/o/9/soft-fluffy-makeup-brushes-set-with-finger-size-powder-puff-16-original-imagqf4tgrhcmmuw.jpeg?q=60&crop=false"
  ]

  const imageNames = [
    "Make Up kit",
    "Powder",
    "Lipblum",
    "Foundation",
    "Lip Sticks",
    "Mascara",
  ];
  const pictureNames = [
    "Nail Polise",
    "Eye Linear",
    "Eye powder",
    "Sun Screen",
    "Moisturizer",
    "Make Up Brush",
  ]

  return (
    <Container className="my-4">
      <Row>
        <Col className="mx-0">
          <h4 className="text-start mb-0">Shop by Categories</h4>
          <p>Lorem ipsum dolor sit amet consectetur.</p>
        </Col>
      </Row>
      <Row className="mt-4">
        {images.map((image, index) => (
          <Col xs={6} md={4} lg={2} key={index} className="d-flex flex-column align-items-center mb-3">
            <img src={image} alt={`Category ${index + 1}`} className="category-image" />
            <span>{imageNames[index]}</span>
          </Col>
        ))}
        {/* Add another column with the same images and names */}
        {picture.map((image, index) => (
          <Col xs={6} md={4} lg={2} key={`duplicate-${index}`} className="d-flex flex-column align-items-center mb-3">
            <img src={image} alt={`Category ${index + 1}`} className="category-image" />
            <span>{pictureNames[index]}</span>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Categories;
