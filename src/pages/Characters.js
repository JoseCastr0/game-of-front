import React, { useState, useEffect } from 'react';
import './characters.scss';

function Characters() {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    fetch("https://api.got.show/api/show/characters/")
      .then(res => res.json())
      .then(setCharacters)
  }, []);

  console.log(characters);

  return (
    <main className='c-characters container-fluid'>
      <div className='c-characters__wrapper'>
        {
          characters.map(character => {
            return (
              <div key={character.id}>
                <img src={character.image} alt={character.name}/>
              </div>
            )
          })
        }
      </div>
    </main>
  );
}

export default Characters;