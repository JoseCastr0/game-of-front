import React, { useState, useEffect } from 'react';
import './logoHouse.scss';

function CharacterDetail({characterName}) {
    const [houses, setHouses] = useState([]);
    
    useEffect(() => {
        if (characterName !== undefined) {
            fetch(`https://api.got.show/api/show/houses/${characterName}`)
              .then(res => res.json())
              .then(setHouses)
        }
      }, [characterName]);

      console.log("Logo HOuse: ", characterName)
    
    return (
        houses.map(house => {
            return (
                <img
                    className='c-logo-house' 
                    src={house.logoURL}
                    alt='' 
                />
            )
        })        
    );
}

export default CharacterDetail;