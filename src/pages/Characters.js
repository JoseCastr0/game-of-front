import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import './characters.scss';

function Characters() {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    fetch("https://api.got.show/api/show/characters/")
      .then(res => res.json())
      .then(setCharacters)
  }, []);

  return (
    <main className='c-gallery-wrapper container-fluid'>
      <div className='c-img-gallery'>
       
          {
            characters.map(character => {
              return (
                <figure key={character.id} className='c-img-gallery__item'>
                  <Link to={`/characters/${character.slug}`}>
                    <img
                        className='c-img-gallery__img'
                         
                        src={character.image} 
                        alt={character.name}
                    />
                      <figcaption className='c-img-gallery__img-caption'>
                        {character.name}
                      </figcaption>   
                  </Link>
                  </figure>
                  )
                })
          }
        </div>
      
    </main>
  );
}

export default Characters;