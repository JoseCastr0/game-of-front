import React, { useState, useEffect } from 'react';

const Timeline = () => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    fetch('https://api.got.show/api/show/characters/')
      .then(res => res.json())
      .then(setCharacters)
  }, []); 

  function orderCharacters() {
    //setCharacters(filterAge.sort((a, b) => sortByAge(a, b, DSC)))
  }

  const ASC = 'ascending';
  const DSC = 'descending';

  

  const filteredData = characters.filter(char => {
    if(char.age !== null) {
      return char;
    }
  })
  const filterAge = filteredData.filter(el => {
    console.log('el: ', el.age.age)
    return el.age.age !== undefined
  })

  function sortByAge(a, b, order = ASC) {
    const diff = a.age.age - b.age.age;

    if (order === ASC) {
        return diff;
    }

    return -1 * diff;
  }
  
  setCharacters(filterAge);
  
  console.log('filtered characters: ', filterAge);
  return (
    <div>
      <button onClick={orderCharacters()}>Order</button>
      {
        filterAge.map(character => {
          return (
            <div>Name: {character.name} - edad: {character.age.age}</div>
            )
          })
        }
    </div>
  );
}

export default Timeline;