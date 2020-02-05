import React, { Component } from 'react';
import axios from 'axios';
import SimpleBarReact from "simplebar-react";
import './timeline.scss';

class Timeline extends Component {
  constructor() {
    super()
    this.state = {
      characters: [],
      isDesc: false
    }
  }

  componentDidMount() {
    axios.get('https://api.got.show/api/show/characters/')
      .then(res => {
        console.log(res);
        let filteredData = res.data.filter(char => {
          return char.age !== null
        }).filter(el => {
          return el.age.age !== undefined
        })

        this.setState({ characters: filteredData.sort((a, b) => a.age.age - b.age.age) });
      })
      .catch(err => {
        console.log(err)
      })
  }

  orderCharacters() {
    this.setState({ characters: this.state.characters.sort((a, b) => this.sortByAge(a, b)) });
  }

  sortByAge(a, b) {
    const { isDesc } = this.state;
    const diff = a.age.age - b.age.age;

    if (isDesc) {
      this.setState({ isDesc: false });
      return diff;
    } else {
      this.setState({ isDesc: true });
      return -1 * diff;
    }
  }

  //setCharacters(filterAge);
  render() {
    const { characters } = this.state;
    return (
      <div className='c-timeline'>
        <SimpleBarReact className='o-simple-bar'>
          <button onClick={this.orderCharacters.bind(this)}>Order</button>
          <section className='container'>
            <div className='c-timeline__cards-wrapper'>
              {
                characters.map(character => {
                  return (
                    <div className='c-timeline__card'>
                      <div>
                        <h3>Name: {character.name} - edad: {character.age.age ? character.age.age : ''}</h3>
                      </div>
                    </div>
                  )
                })
              }
            </div>
          </section>
        </SimpleBarReact>
      </div>
    );
  }
}

export default Timeline;

// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const Timeline = () => {
//   const [characters, setCharacters] = useState([]);

//   // useEffect(() => {
//   //   fetch('https://api.got.show/api/show/characters/')
//   //     .then(res => res.json())
//   //     .then(setCharacters)
//   // }, [setCharacters]); 

//   useEffect(() => {
//     axios.get('https://api.got.show/api/show/characters/')
//       .then(res => {
//         console.log(res);
//         let filteredData = res.data.filter(char => {
//           return char.age !== null
//         }).filter(el => {
//           return el.age.age !== undefined
//         })
//         setCharacters(filteredData);
//         console.log('filteredData', filteredData)
//       })
//       .catch(err => {
//         console.log(err)
//       })
//   }, [characters]); 

//   function orderCharacters() {
//     console.log('clik');    
//     const orderedChars = characters.sort((a, b) => sortByAge(a, b, DSC));
//     setCharacters(orderedChars);
//     console.log('CHARACTERS: ', characters);    
//   }

//   const ASC = 'ascending';
//   const DSC = 'descending';


//   function sortByAge(a, b, order = ASC) {
//     const diff = a.age.age - b.age.age;

//     if (order === ASC) {
//         return diff;
//     }

//     return -1 * diff;
//   }

//   //setCharacters(filterAge);

//   return (
//     <div>
//       {/* <button onClick={(orderCharacters)}>Order</button> */}
//       <button onClick={() => setCharacters(characters.sort((a, b) => sortByAge(a, b, DSC)))}>Order</button>
//         {
//           characters.map(character => {
//             return (
//                 <div>Name: {character.name} - edad: {character.age.age ? character.age.age : '' }</div>
//               )
//             })
//         }
//     </div>
//   );
// }

// export default Timeline;