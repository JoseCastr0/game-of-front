import React, { useState, useEffect } from 'react';
import Gallery from '../components/gallery/Gallery';

function Characters() {
  const [searchResults, setSearchResults] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetch('https://api.got.show/api/show/characters/')
      .then(res => res.json())
      .then(setSearchResults);
      const results = searchResults.filter(character =>
        //console.log('searchTerm: ', searchTerm)
          character.name.toLowerCase().includes(searchTerm)
        );
        console.log('searchResults: ', searchResults);
        console.log('searchTerm: ', searchTerm);
      setSearchResults(results);
  }, [searchTerm]);

  const onSearchChange = event => {
    console.log('entra en search change');
    setSearchTerm(event.target.value)
  }

  return (
    <Gallery 
      characters={searchResults}
      searchChange={onSearchChange}
    />
  );
}

export default Characters;