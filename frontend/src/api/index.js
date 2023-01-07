import { apiBaseUrl } from '../config';

export const request = (endpoint, method) => {
  return fetch(`${apiBaseUrl}${endpoint}`, { method })
    .then((response) => {
      return response.json();
    })
};

export const getUsers = () => request('/users', 'GET');
