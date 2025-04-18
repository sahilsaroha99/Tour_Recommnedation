import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../popular.css';

const destinations = [
  { title: 'Beach', image: '/images/beach.jpg' },
  { title: 'Historical', image: '/images/historical.jpg' },
  { title: 'Hill Station', image: '/images/hill.jpg' },
  { title: 'Sample(Test)', image: '/images/hill.jpg' },
];

const PopularDestinations = () => {
  const navigate = useNavigate();

  const handleCategoryClick = (title) => {
    // Convert to lowercase and replace spaces with dashes
    const formattedTitle = title.toLowerCase().replace(/\s+/g, '-');
    navigate(`/category/${formattedTitle}`);
  };

  return (
    <div className="popu-container">
      <h2 className="destinations-heading">Popular Categories</h2>
      <div className="cards-wrapper">
        {destinations.map((dest, index) => (
          <div
            className="destination-card"
            key={index}
            onClick={() => handleCategoryClick(dest.title)}
            style={{ cursor: 'pointer' }}
          >
            <img src={dest.image} alt={dest.title} className="card-image" />
            <div className="card-title">{dest.title}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularDestinations;
