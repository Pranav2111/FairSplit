const ENV = require('./env');

module.exports = {
  secret: ENV.JWT_SECRET,
  options: {
    expiresIn: ENV.JWT_EXPIRES_IN,
  },
};
