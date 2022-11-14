const admin = require("firebase-admin");
const { getFirestore } = require("firebase-admin/firestore");
const { HTTP_STATUS } = require("../../constants/api.constants");
const dbConfig = require("../../DB/db.config");
const { HttpError } = require("../../utils/api.utils");

class FirebaseContainer {
  constructor(collection) {
    FirebaseContainer.connect();
    const db = getFirestore();
    this.query = db.collection(collection);
  }

  static connect() {
    if (!admin.apps.length) {
      admin.initializeApp({
        credential: admin.credential.cert(dbConfig.firebase.credentials),
      });
    }
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

  async getById(id) {
    const docRef = await this.query.doc(id);
    if (!docRef) {
      const msg = `Resource no exist en registro ${id}`;
      throw new HttpError(HTTP_STATUS.NOT_FOUND, msg);
    }

    const document = await docRef.get();
    return document.data();
  }

  async save(item) {
    const docRef = this.query.doc();
    return await docRef.set(item);
  }

  async update(id, item) {
    const docRef = this.query.doc(id);
    if (!docRef) {
      const msg = `Resource no exist en registro ${id}`;
      throw new HttpError(HTTP_STATUS.NOT_FOUND, msg);
    }

    const { nombre, descripcion, codigo, foto, precio, stock } = item;

    const newUser = {
      timestamp: new Date().toUTCString(),
      nombre,
      descripcion,
      codigo,
      foto,
      precio,
      stock,
    };
    return await docRef.update(newUser);
  }

  async delete(id) {
    const docRef = this.query.doc(id);
    return await docRef.delete();
  }
}

module.exports = FirebaseContainer;
