const userRoute = require('./userRoute');
const productsRoute = require('./productsRoute');
const productRoute = require('./productRoute');

function mainRoute(app) {
  app.use('/api/users', userRoute);
  app.use('/api/products', productsRoute);
  app.use('/api/product', productRoute);
}

module.exports = mainRoute;
