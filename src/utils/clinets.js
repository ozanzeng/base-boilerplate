import axios from 'axios';
import * as API from './apiUrl';

const requestSuccess = config => config;
const requestError = error => error;

const responseSuccess = config => config;
const responseError = error => error;

export const eposAPI = axios.create({
  baseURL: API.EPOS,
});

// Interceptor
eposAPI.interceptors.request.use(requestSuccess, requestError);
eposAPI.interceptors.response.use(responseSuccess, responseError);