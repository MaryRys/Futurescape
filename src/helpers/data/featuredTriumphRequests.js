import axios from 'axios';
import apiKeys from '../apiKeys';

const firebaseUrl = apiKeys.firebaseConfig.databaseURL;

const deleteFeaturedTriumph = featuredTriumphId => axios.delete(`${firebaseUrl}/userTriumphs/${featuredTriumphId}.json`);

export default {
  deleteFeaturedTriumph,
};
