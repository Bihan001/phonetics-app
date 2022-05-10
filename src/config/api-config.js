import axios from 'axios';

/**
 * - axios.create() is a function that creates a new instance of axios with specified parameters.
 * - We are creating a new axios instance with the base url already specified to reduce redundant code.
 */
export const translateApi = axios.create({
  baseURL: 'https://inputtools.google.com',
});
