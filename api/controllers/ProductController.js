const Product = require('../models/Product');

class ProductController {
  //[GET] /api/products
  async getProducts(req, res, next) {
    try {
      const products = await Product.find({});
      res.json(products);
    } catch (err) {
      next(err);
    }
  }

  //[GET] /api/products/:cat
  async getProductsByCat(req, res, next) {
    try {
      const products = await Product.find({
        categoryes: req.params.cat
      });
      res.json(products);
    } catch (err) {
      next(err);
    }
  }

  //[GET] /api/product/:id
  async getProductById(req, res, next) {
    try {
      const products = await Product.find({
        _id: req.params.id
      });
      res.json(products);
    } catch (err) {
      next(err);
    }
  }
}

module.exports = new ProductController();
