import axios from 'axios';

const BASE_URT = 'http://localhost:5000/api';
const TOKEN = '';

export const publicRequest = axios.create({
  baseURL: BASE_URT
});

export const userRequest = axios.create({
  baseURL: BASE_URT,
  headers: { token: 'Bearer' }
});
