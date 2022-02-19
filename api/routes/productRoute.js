const ProductController = require('../controllers/ProductController');
const router = require('express').Router();

router.get('/:id', ProductController.getProductById);

module.exports = router;
