const { Schema } = require("mongoose");
const MongoContainer = require("../../containers/mongo.container");

const collections = "products";

const productsSchema = new Schema({
  timestamp: { type: String },
  nombre: { type: String },
  descripcion: { type: String },
  codigo: { type: Number },
  foto: { type: String },
  precio: { type: Number },
  stock: { type: Number },
});

class ProductsMongoDao extends MongoContainer {
  constructor() {
    super(collections, productsSchema);
  }
}

module.exports = ProductsMongoDao;
