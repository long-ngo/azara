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
        return item.color === product.color && item.size === product.size;
      });

      if (index < 0) {
        state.products.push(product);
        state.quantity += 1;
      } else {
        state.products[index].quantity += product.quantity;
      }

      state.total += product.price;
    }
  }
});

const { actions, reducer } = cartSlice;
export const { addProduct } = actions;
export default reducer;
