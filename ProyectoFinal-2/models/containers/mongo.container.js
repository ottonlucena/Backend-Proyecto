const mongoose = require("mongoose");
const { HTTP_STATUS } = require("../../constants/api.constants");
const dbConfig = require("../../DB/db.config");
const { HttpError } = require("../../utils/api.utils");

class MongoContainer {
  constructor(collection, schema) {
    //Definir la lógica para que se aplique a cada recurso.
    this.model = mongoose.model(collection, schema);
  }

  static async connect() {
    await mongoose.connect(dbConfig.mongodb.uri);
  }

  static async disconnect() {
    await mongoose.disconnect();
  }

  async getAll(filter = {}) {
    const documents = await this.model.find(filter, { __v: 0 }).lean();
    return documents;
  }

  async getById(id) {
    const document = await this.model.findOne({ _id: id }, { __v: 0 });
    if (!document) {
      const msg = `Resource no exist en registro ${id}`;
      throw new HttpError(HTTP_STATUS.NOT_FOUND, msg);
    }

    return document;
  }

  async save(item) {
    const newDocument = new this.model(item);
    console.log(item);
    return await newDocument.save();
  }

  async update(id, item) {
    const updateDocument = await this.model.updateOne(
      { _id: id },
      {
        $set: {
          timestamp: new Date().toUTCString(),
          ...item,
        },
      }
    );

    if (!updateDocument.matchedCount) {
      const msg = `Resource no exist en registro ${id}`;
      throw new HttpError(HTTP_STATUS.NOT_FOUND, msg);
    }

    return updateDocument;
  }

  async delete(id) {
    return await this.model.deleteOne({ _id: id });
  }
}

module.exports = MongoContainer;
