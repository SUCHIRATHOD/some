import Carousel from 'react-bootstrap/Carousel';

import '../styles/Banner.css';
function Banner() {
  return (
    <Carousel>
      <Carousel.Item>
        <img className='image' src="https://img.freepik.com/free-vector/cosmetic-horizontal-banner-template_23-2148884861.jpg?t=st=1728384093~exp=1728387693~hmac=db23998491dd7eacb41eaab13ce67120b419b3ef7d3593384f4dfae9f69ca65b&w=740"/>
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className='image' src="https://img.freepik.com/free-vector/cosmetics-sale-horizontal-banner-template_23-2148954325.jpg?t=st=1728384167~exp=1728387767~hmac=b0334d83459cbc9ffb5c46198054a69f61e2a7bbd99728620dc0241d41f3bf30&w=740"/>
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
       <img className='image' src="https://img.freepik.com/free-vector/cosmetics-sale-horizontal-banner-template_23-2148954326.jpg?t=st=1728384282~exp=1728387882~hmac=28901a9fd538e770987a85c024b78d3f4cee5c54f61cf11f37e894423308301d&w=740"/>
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Banner;