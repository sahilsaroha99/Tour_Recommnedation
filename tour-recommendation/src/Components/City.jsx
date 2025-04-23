import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import '../city.css';

const City = () => {
  const { cityName } = useParams();
  const [cityData, setCityData] = useState(null);
  const [recommendedCities, setRecommendedCities] = useState([]);

  useEffect(() => {
    const sanitizedCity = decodeURIComponent(cityName).trim();

    // Fetch city info
    fetch(`http://localhost:5000/api/cities`)
      .then((res) => res.json())
      .then((data) => {
        const matched = data.find((city) => city.city.toLowerCase() === cityName.toLowerCase());
        setCityData(matched);
      });

    // Fetch recommendations
    fetch(`http://127.0.0.1:5000/recommend?place=${sanitizedCity}`)
      .then((res) => res.json())
      .then((data) => {
        setRecommendedCities(data.recommendations);
      });
  }, [cityName]);

  const getImagePath = (name) => {
    const basePath = `/images/${name.toLowerCase().replace(/\s+/g, '')}`;
    return `${basePath}.jpg`;
  };

  const handleImageError = (e) => {
    const src = e.target.src;
    if (src.endsWith('.jpg')) {
      e.target.src = src.replace('.jpg', '.jpeg');
    }
  };

  const handleCityClick = (name) => {
    window.location.href = `/${name.toLowerCase()}`;
  };

  if (!cityData) return <div>Loading...</div>;

  return (
    <div className="section-container city-wrapper">
      {/* City Info */}
      <div className="city-info">
        <div className="city-image">
          <img
            src={getImagePath(cityName)}
            alt={cityName}
            onError={handleImageError}
          />
        </div>
        <div className="city-details">
          <h2>{cityData.city}</h2>
          <p><strong>Best Time to Visit:</strong> {cityData.bestTimeToVisit}</p>
          <p><strong>Popular Places:</strong> {cityData.popularPlaces.join(', ')}</p>
          <p><strong>Activities:</strong> {cityData.activities.join(', ')}</p>
          <p><strong>Description:</strong> {cityData.description}</p>
          <p><strong>State:</strong> {cityData.state}</p>
          <p><strong>Average Budget:</strong> {cityData.averageBudget}</p>
        </div>
      </div>

      {/* Recommended Places */}
      <div className="recommended-section">
        <h2 className="recommended-heading">Recommended Places Near {cityName}</h2>
        <div className="recommended-marquee">
          <div className="recommended-track">
            {[...recommendedCities, ...recommendedCities].map((name, index) => (
              <div
                className="recommended-card"
                key={index}
                onClick={() => handleCityClick(name)}
                style={{ cursor: 'pointer' }}
              >
                <img
                  src={getImagePath(name)}
                  alt={name}
                  className="recommended-img"
                  onError={handleImageError}
                />
                <div className="recommended-name">{name}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default City;
