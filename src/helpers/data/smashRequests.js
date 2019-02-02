import triumphRequests from './triumphRequests';
import authRequests from './authRequests';
import userTiumphRequests from './userTriumphRequests';
import bungieRequests from './bungieRequests';
import userRequests from './userRequests';
import characterRequests from './characterRequests';

const registerBungieUser = (uid, newUser) => new Promise((resolve, reject) => {
  let destiny2MembershipId = '';
  bungieRequests.getBungieAccount(newUser.bungieId)
    .then((bungieAccountResult) => {
      destiny2MembershipId = bungieAccountResult.membershipId;
      const uzer = {
        displayName: bungieAccountResult.displayName,
        destinyMembershipId: destiny2MembershipId,
        destinyMembershipType: bungieAccountResult.membershipType,
        bungieMembershipIcon: `https://www.bungie.net/${bungieAccountResult.iconPath}`,
        bungieMembershipType: newUser.membershipType,
        bungieId: newUser.bungieId,
        uid,
      };
      userRequests.createUser(uzer).then(() => {
        bungieRequests.getDestinyCharacterIds(newUser.membershipType, destiny2MembershipId).then((characterIds) => {
          characterIds.forEach((charId) => {
            bungieRequests.getDestinyCharacter(newUser.membershipType, charId, destiny2MembershipId).then((char) => {
              characterRequests.createCharacter(char);
            });
          });
        });
      });
    })
    .catch(err => reject(err));
});

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
  registerBungieUser,
};
