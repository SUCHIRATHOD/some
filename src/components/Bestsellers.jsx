import React from 'react';
import '../styles/Bestsellers.css'; // Import the CSS file

const Bestsellers = () => {
  const products = [
    {
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTa8fBJZQ6MRjVZ_MQg_bsT_LVckXxldv6kzQ&s",
      name: "Make Up",
      serves: "Serves4",
      price: "1790 ₹",
      offerPrice: "1500 ₹",
      discount: "8%"
    },
    {
      image: "https://cdn.shopify.com/s/files/1/0750/3269/0982/files/Butterfly_cut_with_fringe.webp?v=1711632564",
      name: "Hair Cut",
      serves: "Serves5",
      price: "1600 ₹",
      offerPrice: "1400 ₹",
      discount: "8%"
    },
    {
      image: "https://pamchaneyaesthetics.com/storage/2022/11/What-are-the-Benefits-of-Full-Body-Therapy-Massage-scaled.jpeg",
      name: "Body Massage",
      serves: "Serves3",
      price: "1350 ₹",
      offerPrice: "1200 ₹",
      discount: "8%"
    },
    {
      image: "https://images.kikocosmetics.com/lf2wbbijeo86/7u7ZTInMNcXYHAVBqvFYNa/7948c1d20001fdf6c59c84076b263bbe/Tutorial_How_to_apply_eyebrow_makeup__Banner_1.webp?w=3840&fm=webp",
      name: "Eye Makeup",
      serves: "Serves4",
      price: "230 ₹",
      offerPrice: "199 ₹",
      discount: "9%"
    }
  ];

  return (
    <div className="bestsellers-section">
      <h4 className="bestsellers-title">Bestsellers</h4>
      <p className="bestsellers-description">Check out our most popular services.</p>
      <div className="bestsellers-container">
        {products.map((product, index) => (
          <div className="bestsellers-card" key={index}>
            <img src={product.image} alt={product.name} className="bestsellers-image" />
            <div className="bestsellers-card-body">
              <h5>{product.name}</h5>
              <p>
                <span className="price-original">{product.price}</span> {' '}
                <span className="price-offer">{product.offerPrice}</span>
                <span className="discount-label"> ({product.discount} off)</span>
                <br />
                <span className="item-details">{product.serves}</span>
              </p>
              <div className="delivery-details">
                <span>Available Today in 90 mins</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Bestsellers;
