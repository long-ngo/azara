const router = require('express').Router();

router.post('/register', UsersController.register);
router.post('/login', UsersController.login);

module.exports = router;
