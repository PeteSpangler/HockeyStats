import axios from 'axios';

const api = axios.create({
  baseURL: 'https://statsapi.web.nhl.com/api/v1/',
});

export default api;
