const UsersController = require('../controllers/UserController');
const router = require('express').Router();

router.get('/', UsersController.getUsers);
router.post('/register', UsersController.register);
router.post('/login', UsersController.login);
router.delete('/:id', UsersController.deleteUserById);

module.exports = router;
