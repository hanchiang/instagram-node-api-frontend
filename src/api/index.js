import axios from 'axios';

const BASE = 'https://jsonplaceholder.typicode.com';

export function getList() {
  return axios.get(`${BASE}/todos`);
}
