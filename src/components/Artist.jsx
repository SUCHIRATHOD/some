import React from 'react';
import '../styles/Artist.css'; // Import the CSS file

const Artist = () => {
  const images = [
    "https://meetfox-assets-production.s3.eu-central-1.amazonaws.com/avatars/3e121f8da2f1414afcb032aa260b1a52cc71b9e45fdafb56af55b46932fcdcf8.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUzUfgLXqIm3r69HyE1-DSxLz9rnG1UU1rVA&s",
    "https://s3-media0.fl.yelpcdn.com/bphoto/SK1YjiIzvYBzA2nbiZwOBw/348s.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYHsDmPMVByijWFpkpsuw1LUxUFhVjmpeLAw&s"
  ];

  return (
    <div className="bestsellers-section">
      <h2 className="bestsellers-title">Popular Make Up Artist</h2>
      <p className="bestsellers-subtitle">Hear it directly from people like you</p>
      <div className="bestsellers-container">
        {images.map((image, index) => (
          <div className="bestsellers-card" key={index}>
            <img src={image} alt={`Artist ${index + 1}`} className="bestsellers-image" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Artist;
