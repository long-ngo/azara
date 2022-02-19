import { createSlice, current } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    products: [],
    quantity: 0,
    total: 0
  },
  reducers: {
    addProduct: (state, action) => {
      const { product } = action.payload;
      const productCurrent = current(state.products);

      const index = productCurrent.findIndex((item) => {
        return (
          item._id === product._id &&
          item.color === product.color &&
          item.size === product.size
        );
      });

      if (index < 0) {
        state.products.push(product);
        state.quantity += 1;
        state.total += product.price * product.quantity;
      } else {
        state.total -= product.price * state.products[index].quantity;
        state.products[index].quantity += product.quantity;
        state.total += product.price * state.products[index].quantity;
      }
    },
    removeProduct: (state, action) => {
      const { product } = action.payload;
      const productCurrent = current(state.products);
      const index = productCurrent.findIndex((item) => {
        return (
          item._id === product._id &&
          item.color === product.color &&
          item.size === product.size
        );
      });

      if (index >= 0) {
        state.total -= product.price * state.products[index].quantity;
        state.products.splice(index, 1);
        state.quantity -= 1;
      }
    },
    addOrRemoveQuantity: (state, action) => {
      const { product, type } = action.payload;
      const productCurrent = current(state.products);
      const index = productCurrent.findIndex((item) => {
        return (
          item._id === product._id &&
          item.color === product.color &&
          item.size === product.size
        );
      });
      if (index >= 0) {
        if (type) {
          state.total -= product.price * state.products[index].quantity;
          state.products[index].quantity += 1;
          state.total += product.price * state.products[index].quantity;
        } else {
          if (product.quantity > 1) {
            state.total -= product.price * state.products[index].quantity;
            state.products[index].quantity -= 1;
            state.total += product.price * state.products[index].quantity;
          } else {
            state.total -= product.price * state.products[index].quantity;
            state.products.splice(index, 1);
            state.quantity -= 1;
          }
        }
      }
    }
  }
});

const { actions, reducer } = cartSlice;
export const { addProduct, removeProduct, addOrRemoveQuantity } = actions;
export default reducer;
