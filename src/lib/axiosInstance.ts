import axios from 'axios';

export const axiosInstance = axios.create({
  baseURL: 'https://quest-hub.herokuapp.com/',
  headers: {
    'Content-Type': 'application/json',
  },
});

export const createAxiosTokenInstance = () => {
  const axiosTokenInstance = axios.create({
    baseURL: 'https://quest-hub.herokuapp.com/',
    headers: {
      Authorization: `Bearer ${localStorage.getItem('token')}`,
      'Content-Type': 'application/json',
    },
  });
  return axiosTokenInstance;
};
