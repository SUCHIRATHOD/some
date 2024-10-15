import React from 'react';
import { Container } from 'react-bootstrap';
import '../styles/Searches.css'; // Import the CSS file

const Searches = () => {
  const searches = {
    "Face Makeup": [
      "Foundation",
      "Concealer",
      "Blush",
      "Bronzer",
      "Highlighter",
      "Setting Powder"
    ],
    "Eye Makeup": [
      "Eyeshadow Palette",
      "Eyeliner",
      "Mascara",
      "Brow Pencil",
      "False Lashes"
    ],
    "Lip Makeup": [
      "Lipstick",
      "Lip Gloss",
      "Lip Liner",
      "Liquid Lipstick"
    ],
    "Skincare": [
      "Moisturizer",
      "Serum",
      "Sunscreen",
      "Exfoliator",
      "Eye Cream"
    ],
    "Tools & Brushes": [
      "Foundation Brush",
      "Blending Sponge",
      "Eyeshadow Brush Set",
      "Contour Brush",
      "Eyelash Curler"
    ],
    "Makeup Kits": [
      "Beginner's Makeup Kit",
      "Bridal Makeup Kit",
      "Professional Artist Makeup Kit"
    ],
    "Makeup Removers": [
      "Micellar Water",
      "Cleansing Oil",
      "Makeup Wipes",
      "Cleansing Balm"
    ]
  };

  return (
    <Container className="popular-searches">
      <h5 className="title">POPULAR SEARCHES</h5>
      {Object.entries(searches).map(([category, items]) => (
        <div key={category} className="search-category">
          <h4>{category}</h4>
          <p>{items.join(" | ")}</p>
        </div>
      ))}
    </Container>
  );
}

export default Searches;
