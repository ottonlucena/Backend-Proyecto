const { Schema } = require("mongoose");
const MongoContainer = require("../../containers/mongo.container");

const collections = "users";

const usersSchema = new Schema({
  nombre: { type: String },
  email: { type: String, unique: true },
  website: { type: String },
  image: { type: String },
});

class UsersMongoDao extends MongoContainer {
  constructor() {
    super(collections, usersSchema);
  }
}

module.exports = UsersMongoDao;
