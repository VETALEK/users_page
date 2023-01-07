import { apiBaseUrl } from '../config';

export const request = (endpoint, method, data) => {
  const requestInit = {
    method,
    headers: {
      'Content-Type': 'application/json; charset=UTF-8',
    },
  };

  if (data) {
    Object.assign(
      requestInit,
      { 
        body: JSON.stringify(data),
      },
    );
  }

  return fetch(
    `${apiBaseUrl}${endpoint}`,
    requestInit,
  ).then((response) => {
      return response.json();
    });
};

export const getAllUsers = () => request('/users', 'GET');

export const getUserById = (id) => request(`/users/${id}`, 'GET');

export const createUser = (user) => request('/users', 'POST', user);

export const updateUserById = (id, user) => request(`/users/${id}`, 'PATCH', user);

export const createOrUpdateUser = (user) => request('/users', 'PUT', user);

export const deleteUserById = (id) => request(`/users/${id}`, 'DELETE');
