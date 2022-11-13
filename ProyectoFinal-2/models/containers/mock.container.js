//No aplica lo dejo para futuros proyectos.

/* const { createFakeUser } = require("../../utils/user.utils");
const MemoryContainer = require("./memory.container");

class MockContainer extends MemoryContainer {
  constructor(resource) {
    super(resource);
  }

  save() {
    const newUser = createFakeUser();
    this.items.push(newUser);
    return newUser;
  }

  populate(qty = 5) {
    this.items = [];
    for (let i = 1; i <= qty; i++) {
      const newItem = createFakeUser();
      this.items.push(newItem);
    }
    return this.items;
  }
}

module.exports = MockContainer;
 */
