import React from 'react';
import PropTypes from 'prop-types';
import CharacterItem from '../CharacterItem/CharacterItem';
import charactersShape from '../../helpers/propz/charactersShape';
import './Characters.scss';

class Characters extends React.Component {
  static propTypes ={
    characters: PropTypes.arrayOf(charactersShape),
  }

  render() {
    const { characters } = this.props;
    const characterItemComponents = characters.map(character => (
      <CharacterItem
      character={character}
      key={character.id}
      />
    ));
    return (
      <div className="characters">
        <div className="container">
          <div className="row">
            {characterItemComponents}
          </div>
        </div>
      </div>
    );
  }
}

export default Characters;
