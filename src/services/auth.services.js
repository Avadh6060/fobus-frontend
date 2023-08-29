import customAxios from '../utils/customAxios';

const authServices = {};

authServices.createAccount = (body) => {
  console.log('first');
  const data = customAxios.post('http://localhost:5000/api/users', body);
  return data;
};

authServices.login = (body) => {
  console.log('first');
  const data = customAxios.post('http://localhost:5000/api/login', body);
  return data;
};
export default authServices;
