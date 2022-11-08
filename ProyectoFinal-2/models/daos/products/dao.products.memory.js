const MemoryContainer = require("../../containers/memory.container");

class DaoProductsMemory extends MemoryContainer {
  constructor() {
    super("products");
  }
}

module.exports = DaoProductsMemory;
