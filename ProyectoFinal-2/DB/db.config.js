const firebaseConfig = require("./firebase/firebase.config.json");
const envConfig = require("../config");

module.exports = {
  mongodb: {
    uri: `mongodb+srv://ottonlucena:${envConfig.DB_PASSWORD}@coderhouse.uso4dar.mongodb.net/coder?retryWrites=true&w=majority`,
  },

  firebase: {
    credentials: firebaseConfig,
  },
};
