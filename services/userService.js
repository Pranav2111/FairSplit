const User = require('../models/user');
const UserValueObject = require('../value-objects/user');

class UserService {
  async createUser(userData) {
    const userValueObject = new UserValueObject(userData);
    const hashedData = await userValueObject.to_hash();
    const newUser = new User(hashedData);
    return await newUser.save();
  }

  async getUserById(userId) {
    return await User.findById(userId);
  }

  async getAllUsers() {
    return await User.find();
  }

  async signUp(userData) {
    const { email, password } = userData;

    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      throw new Error('User already exists');
    }

    // Create and save new user
    return await this.createUser(userData);
  }
}

module.exports = new UserService();
