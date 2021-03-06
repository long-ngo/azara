const ProductController = require('../controllers/ProductController');
const router = require('express').Router();

router.get('/:cat', ProductController.getProductsByCat);
router.get('/', ProductController.getProducts);

// router.post('/create', ProductController.createProduct);

// router.put('/:id', ProductController.editProductById);
// router.delete('/:id', ProductController.deleteProductById);

module.exports = router;
