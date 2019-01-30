import axios from 'axios';
import apiKeys from '../apiKeys';

const firebaseUrl = apiKeys.firebaseConfig.databaseURL;

const getAllUserTriumphsById = uid => new Promise((resolve, reject) => {
  axios.get(`${firebaseUrl}/userTriumphs.json?orderBy="uid"&equalTo="${uid}"`)
    .then((result) => {
      const userTriumphObject = result.data;
      const userTriumphArray = [];
      if (userTriumphObject != null) {
        Object.keys(userTriumphObject).forEach((userTriumphId) => {
          userTriumphObject[userTriumphId].id = userTriumphId;
          userTriumphArray.push(userTriumphObject[userTriumphId]);
        });
      }
      resolve(userTriumphArray);
    })
    .catch((error) => {
      reject(error);
    });
});

export default {
  getAllUserTriumphsById,
};
