import React, { useState, useEffect } from 'react';
import './characters.scss';
import Gallery from '../components/gallery/Gallery';

function Houses() {
  const [houses, setHouses] = useState([]);

  useEffect(() => {
    fetch('https://api.got.show/api/show/houses/')
      .then(res => res.json())
      .then(setHouses)
  }, []);

  return (
    <Gallery 
      houses={houses}
    />
  );
}

export default Houses;