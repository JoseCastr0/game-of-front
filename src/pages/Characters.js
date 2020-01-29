import React, { useState, useEffect } from 'react';
import Gallery from '../components/gallery/Gallery';

function Characters() {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    fetch('https://api.got.show/api/show/characters/')
      .then(res => res.json())
      .then(setCharacters)
  }, []);

  return (
    <Gallery 
      characters={characters}
    />
  );
}

export default Characters;