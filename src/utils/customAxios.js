// for axios requests
import jwtAxios from 'axios';

const jwtAuthAxios = jwtAxios.create({
  // baseURL: "http://13.125.102.250:8081/api/",
  baseURL: 'http://localhost:8081/api/',
  headers: {
    'Content-Type': 'application/json'
  }
});

jwtAuthAxios.interceptors.response.use(
  (res) => res,
  (err) => {
    if (err.response && err.response.status === 401) {
      localStorage.clear();
    }
    return Promise.reject(err);
  }
);

export default jwtAuthAxios;
