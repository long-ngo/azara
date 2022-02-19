const User = require('../models/User');

class AuthController {
  //[POST] api/register
  async register(req, res, next) {
    try {
      const user = User(req.body);
      const userSave = await user.save();
      res.json(userSave);
    } catch (err) {
      next(err);
    }
  }

  //[POST] api/login
  async login(req, res, next) {
    try {
      const user = await User.find(req.body);
      res.json(user);
    } catch (err) {
      next(err);
    }
  }
}

module.exports = new AuthController();
