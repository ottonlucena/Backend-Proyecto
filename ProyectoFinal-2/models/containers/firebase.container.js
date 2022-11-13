const admin = require("firebase-admin");
const { getFirestore } = require("firebase-admin/firestore");
const { HTTP_STATUS } = require("../../constants/api.constants");
const dbConfig = require("../../DB/db.config");
const { HttpError } = require("../../utils/api.utils");

class FirebaseContainer {
  constructor(collection) {
    const db = getFirestore();
    this.query = db.collection(collection);
  }

  static connect() {
    admin.initializeApp({
      credential: admin.credential.cert(dbConfig.firebase.credentials),
    });
    console.log(`Firebase connected`);
  }

  async getAll() {
    const docRef = await this.query.get(); //hacemos referencia al doc
    const documents = docRef.docs;
    return documents.map((document) => {
      return {
        id: document.id,
        ...document.data(),
      };
    });
  }

  async getByid(id) {
    const docRef = await this.query.get(id);
    if (!docRef) {
      const msg = `Resource no exist en registro ${id}`;
      throw new HttpError(HTTP_STATUS.NOT_FOUND, msg);
    }

    const document = await docRef.get();
    return document.data();
  }

  async save(item) {
    const docRef = this.query.doc();
    return await docRef.save(item);
  }

  async update(id, item) {
    const docRef = this.query.doc(id);
    if (!docRef) {
      const msg = `Resource no exist en registro ${id}`;
      throw new HttpError(HTTP_STATUS.NOT_FOUND, msg);
    }

    return await docRef.update(item);
  }

  async delete(id) {
    const docRef = this.query.doc(id);
    return await docRef.delete();
  }
}

module.exports = FirebaseContainer;
