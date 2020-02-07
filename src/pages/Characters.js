import React, { Component } from 'react';
import Gallery from '../components/gallery/Gallery';

class Characters extends Component {
  constructor() {
    super()
    this.state = {
      characters: [],
      searchfield: ''
    }
  }

  componentDidMount() {
    fetch('https://api.got.show/api/show/characters/')
      .then(response=> response.json())
      .then(characters => {this.setState({ characters: characters})});
  }

  onSearchChange = (event) => {
    this.setState({ searchfield: event.target.value })
  }

  render() {
    const { characters, searchfield } = this.state;
    const filteredCharacters = characters.filter(robot =>{
      return robot.name.toLowerCase().includes(searchfield.toLowerCase());
    })
    return !characters.length ?
      <h1>Loading...</h1> :
      (
        <Gallery 
          characters={filteredCharacters}
          searchChange={this.onSearchChange}
        />
      );
  }
}

export default Characters;