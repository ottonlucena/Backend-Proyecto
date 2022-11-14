const FirebaseContainer = require("../../containers/firebase.container");
const { getFirestore } = require("firebase-admin/firestore");

const collection = "carts";

class ProductsFirebaseDao extends FirebaseContainer {
  constructor() {
    super(collection);
  }

  async getAll() {
    const db = getFirestore();
    const docRef = db.collection(collection).doc("products");
    const doc = await docRef.get();
    return doc.data();
  }
}

module.exports = ProductsFirebaseDao;
