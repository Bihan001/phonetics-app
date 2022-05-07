import axios from 'axios';

export const translateApi = axios.create({
  baseURL: 'https://inputtools.google.com',
});
