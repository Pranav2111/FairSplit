const bcrypt = require('bcryptjs');

class UserValueObject {
  constructor({ name, email, password }) {
    this.name = name;
    this.email = email;
    this.passwordHash = password; // Raw password
  }

  async to_hash() {
    this.passwordHash = await bcrypt.hash(this.passwordHash, 12);
    return {
      name: this.name,
      email: this.email,
      passwordHash: this.passwordHash,
    };
  }
}

module.exports = UserValueObject;
