const User = require('../models/User');

class UserController {
  //[GET] api/users
  async getUsers(req, res, next) {
    try {
      const user = await User.find({});
      res.json(user);
    } catch (err) {
      next(err);
    }
  }

  //[POST] api/users/register
  async register(req, res, next) {
    try {
      const user = User(req.body);
      const userSave = await user.save();
      res.json(userSave);
    } catch (err) {
      next(err);
    }
  }

  //[POST] api/users/login
  async login(req, res, next) {
    try {
      const user = await User.find(req.body);
      res.json(user);
    } catch (err) {
      next(err);
    }
  }

  //[DELETE] api/users/:id
  deleteUserById(req, res, next) {
    User.deleteOne({ _id: req.params.id })
      .then(() => res.send('Done!'))
      .catch(next);
  }
}

module.exports = new UserController();
