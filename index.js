// import datejs
const datejs = require('datejs');

function combineUsers(...args) {
  // Step 2: initialize object
  const combinedObject = {
    users: []
  };

  // Step 3 & 4: loop and merge arrays
  for (let arr of args) {
    combinedObject.users = [...combinedObject.users, ...arr];
  }

  // Step 5: add today's date
  combinedObject.merge_date = new Date().toString('M/d/yyyy');

  // Step 7: return object
  return combinedObject;
}

module.exports = combineUsers;