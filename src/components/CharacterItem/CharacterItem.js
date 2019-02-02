import React from 'react';
import './CharacterItem.scss';

class CharacterItem extends React.Component {
  render() {
    const { character } = this.props;
    return (
      <div className="CharacterItem">
        <div className="container">
          <div className="row">
            <img src={character.emblemPath} alt="characterImage"></img>
            <div className="col">
                <h4>{character.class}</h4>
                <p>{character.race} {character.gender}</p>
                <p className="description">Light {character.light}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CharacterItem;
