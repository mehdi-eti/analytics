import axios from 'axios';
// config
import { HOST_API } from 'src/config-global';

// ----------------------------------------------------------------------

const axiosInstance = axios.create({ baseURL: HOST_API });

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => Promise.reject((error.response && error.response.data) || 'مشکلی پیش آمد')
);

export default axiosInstance;

export const API_ENDPOINTS = {
  calendar: '/api/calendar',
  auth: {
    me: '/api/auth/me',
    login: '/api/auth/login',
    register: '/api/auth/register',
    verifyCode: '/api/auth/verify-code',
  },
};

// Requests
export function fetche(url: string, config?: object) {
  return axiosInstance.get(url, config).then((res) => res.data);
}

export function sender(url: string, data: any, config?: object) {
  return axiosInstance.post(url, data, config).then((res) => res.data);
}

export function updater(url: string, data: any, config?: object) {
  return axiosInstance.put(url, data, config).then((res) => res.data);
}

export function deleter(url: string, config?: object) {
  return axiosInstance.delete(url, config).then((res) => res.data);
}
