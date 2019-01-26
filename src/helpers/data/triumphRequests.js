import axios from 'axios';
import apiKeys from '../apiKeys';

const firebaseUrl = apiKeys.firebaseConfig.databaseURL;

const getAllTriumphs = () => new Promise((resolve, reject) => {
  axios.get(`${firebaseUrl}/triumphs.json`)
    .then((results) => {
      const triumphsArray = [];
      const triumphsObj = results.data;
      if (triumphsObj !== null) {
        Object.keys(triumphsObj).forEach((triumph) => {
          triumphsObj[triumph].id = triumph;
          triumphsArray.push(triumphsObj[triumph]);
        });
        // triumphsArray.sort((a, b) => moment(a.timestamp).unix() - moment(b.timestamp).unix());
      }
      resolve(triumphsArray);
    })
    .catch((error) => {
      reject(error);
    });
});

export default getAllTriumphs;
