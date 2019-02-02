import axios from 'axios';
import apiKeys from '../apiKeys';

const firebaseUrl = apiKeys.firebaseConfig.databaseURL;

const createCharacter = character => axios.post(`${firebaseUrl}/characters.json`, character);

const getCharacters = uid => new Promise((resolve, reject) => {
  axios.get(`${firebaseUrl}/characters.json?orderBy="uid"&equalTo="${uid}"`)
    .then((result) => {
      const characterObject = result.data;
      const characterArray = [];
      if (characterObject != null) {
        Object.keys(characterObject).forEach((characterId) => {
          characterObject[characterId].id = characterId;
          characterArray.push(characterObject[characterId]);
        });
      }
      resolve(characterArray);
    })
    .catch((error) => {
      reject(error);
    });
});

export default {
  createCharacter,
  getCharacters,
};
