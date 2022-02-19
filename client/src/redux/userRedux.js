import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'user',
  initialState: {
    currentUser: [],
    isFetching: false,
    error: false
  },
  reducers: {
    loginStart: (state, action) => {
      state.isFetching = true;
    },
    loginSuccess: (state, action) => {
      const { user } = action.payload;
      state.isFetching = false;
      state.currentUser = user;
    },
    loginFailure: (state, action) => {
      state.isFetching = false;
      state.error = true;
    }
  }
});

const { actions, reducer } = userSlice;
export const { loginStart, loginSuccess, loginFailure } = actions;
export default reducer;
