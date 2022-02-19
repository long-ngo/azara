const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema(
  {
    title: { type: String, require: true, unique: true },
    desc: { type: String, require: true },
    image: { type: String, require: true },
    categoryes: { type: Array },
    size: { type: Array },
    color: { type: Array },
    price: { type: Number, require: true },
    discount: { type: Number, default: 0 },
    inStock: { type: Number, default: 0 }
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model('Product', ProductSchema);
