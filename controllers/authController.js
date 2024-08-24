const User = require('../models/user');
const userService = require('../services/userService');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const ENV = require('../config/env');

const login = async (req, res, next) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({ error: 'Invalid email or password' });
    }

    const isMatch = await bcrypt.compare(password, user.passwordHash);
    if (!isMatch) {
      return res.status(401).json({ error: 'Invalid email or password' });
    }

    const token = jwt.sign({ id: user._id }, ENV.JWT_SECRET, {
      expiresIn: ENV.JWT_EXPIRES_IN,
    });
    res.json({ token });
  } catch (err) {
    next(err);
  }
};

const signUp = async (req, res, next) => {
  try {
    const newUser = await userService.signUp(req.body);
    res.status(201).json(newUser);
  } catch (err) {
    next(err);
  }
};
x;
module.exports = { login, signUp };
