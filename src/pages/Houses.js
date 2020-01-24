import React, { useState, useEffect } from 'react';

function Houses() {
  const [characters, setCharacters] = useState({ hits: [] });

  useEffect(() => {
    fetch("https://api.got.show/api/show/characters/")
      .then(res => res.json())
      .then(setCharacters)
  }, []);

  console.log(characters);
  return (
    <div className='c-houses-container'>
      ESto es HOUSES
    </div>
  );
}

export default Houses;