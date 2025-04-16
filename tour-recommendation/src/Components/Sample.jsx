import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Sample = () => {
  const [cities, setCities] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/cities') // Update if your port is different
      .then((res) => {
        setCities(res.data);
      })
      .catch((err) => {
        console.error("Error fetching city data:", err);
      });
  }, []);

  return (
    <div style={{ padding: '30px' }}>
      <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>Cities (Sample API Test)</h2>
      {cities.length > 0 ? (
        cities.map((city, index) => (
          <div key={index} style={{ border: '1px solid #ccc', padding: '15px', marginBottom: '10px', borderRadius: '8px' }}>
            <h3>{city.city}</h3>
            <p><strong>Best Time to Visit:</strong> {city.bestTimeToVisit}</p>
            <p><strong>Popular Places:</strong> {city.popularPlaces.join(', ')}</p>
            <p><strong>Description:</strong> {city.description}</p>
            <p><strong>State:</strong> {city.state}</p>
            <p><strong>Average Budget:</strong> {city.averageBudget}</p>

            {/* now with this data this api test is successful. now lets make template jsx for city and after that set up we'll link api to enter city detail in template. so City  */}
          </div>
        ))
      ) : (
        <p>Loading city data...</p>
      )}
    </div>
  );
};

export default Sample;
