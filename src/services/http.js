import axios from 'axios';
import { login, register } from './auth.js';

const BASE_URL = 'https://jsonplaceholder.typicode.com';

const instance = axios.create({
  baseURL: BASE_URL,
  timeout: 3000,
  headers: {
    Accept: 'application/json;charset=UTF-8',
    'Content-Type': 'application/json',
  },
});

/**
 * [fetchData description]
 * @param  {String} keyword [description]
 * @return {AxiosPromise<Object>}         [description]
 */
async function fetchData(keyword) {
  return instance.get(`/${keyword}/`);
}

/**
 * [getUsers description]
 * @return {Promise<Object>} [description]
 */
function getUsers() {
  return fetchData('users')
    .then(function (response) {
      return response;
    })
    .catch(function (error) {
      return error;
    });
}

/**
 * [getPosts description]
 * @return {Promise<Object>} [description]
 */
async function getPosts() {
  return fetchData('posts')
    .then(function (response) {
      return response;
    })
    .catch(function (error) {
      return error;
    });
}

/**
 * [getComments description]
 * @return {Promise<Object>} [description]
 */
async function getComments() {
  return fetchData('posts')
    .then(function (response) {
      return response;
    })
    .catch(function (error) {
      return error;
    });
}

/**
 * [getPhotos description]
 * @return {Promise<Object>} [description]
 */
async function getPhotos() {
  return fetchData('photos')
    .then(function (response) {
      return response;
    })
    .catch(function (error) {
      return error;
    });
}

/**
 * [getAlbums description]
 * @return {Promise<Object>} [description]
 */
async function getAlbums() {
  return fetchData('albums')
    .then(function (response) {
      return response;
    })
    .catch(function (error) {
      return error;
    });
}

export { getUsers, getPosts, getPhotos, getAlbums, getComments };
