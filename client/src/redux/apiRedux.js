import { loginStart, loginSuccess, loginFailure } from './userRedux';
import axios from 'axios';

export const login = async (dispatch, user) => {
  dispatch(loginStart());

  try {
    const res = await axios.post('http://localhost:5000/api/users/login', {
      username: user.username,
      password: user.password
    });

    console.log(!!res.data.length);
    if (res.data.length) {
      dispatch(loginSuccess(res.data));
    }
  } catch (error) {
    dispatch(loginFailure());
  }
};
