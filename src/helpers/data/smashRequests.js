import triumphRequests from './triumphRequests';
import authRequests from './authRequests';
import userTiumphRequests from './userTriumphRequests';

const getAllTriumphsWithUser = () => new Promise((resolve, reject) => {
  let userTriumphs = [];
  const uid = authRequests.getCurrentUid();
  userTiumphRequests.getAllUserTriumphsById(uid)
    .then((uTs) => {
      userTriumphs = uTs;
      triumphRequests.getAllTriumphs()
        .then((ts) => {
          const triumphs = ts.map(
            t => Object.assign({ ...userTriumphs.find(x => x.triumphId === t.id), ...t }),
          );
          console.log(triumphs);
          resolve(triumphs);
        });
    });
});

export default {
  getAllTriumphsWithUser,
};
