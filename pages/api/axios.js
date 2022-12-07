import axios from 'axios';
import { getSession } from 'next-auth/react';

const instance = axios.create({
  baseURL: process.env.baseURL,
});
instance.interceptors.response.use(
  function (response) {
    return response;
  },
  async function (error) {
    const session = await getSession();
    console.log(error);
    console.log(error.response);
    console.log(session.user.refreshToken);
    if (error.response.status === 401) {
      try {
        const response = await axios({
          url: 'http://localhost:8080/auth/refresh',
          method: 'post',
          headers: { Authorization: session.user.refreshToken },
        });
        if (response.status === 202) {
          return response.data;
        } else {
          throw new Error('로그인 인증 만료');
        }
      } catch (error) {
        new Promise.reject({ message: error });
      }
    }
  }
);
export default instance;
