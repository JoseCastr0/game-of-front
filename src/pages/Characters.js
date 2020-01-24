import React, { useState, useEffect } from 'react';

function Characters() {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    fetch("https://api.got.show/api/show/characters/") // https://api.got.show/api/show/characters/
      .then(res => res.json())
      .then(setCharacters)
  }, []);

  console.log(characters);

  // characters.id.map(character => {
  //   return (
  //     console.log(character.id)
  //   )
  // })

  return (
    <section className='c-characters-wrapper'>
      {
        characters.map(character => {
          return (
            <div key={character.id}>
              <img src={character.image} alt={character.name}/>
            </div>
          )
        })
      }
    </section>
  );
}

export default Characters;