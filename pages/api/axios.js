import axios from 'axios';
import { getCookie, setCookie } from '../cookie';
const instance = axios.create();
instance.interceptors.response.use(
  async (response) => response,
  async (error) => {
    //const refreshToken = getCookie(refreshToken);
    if (error.response.status === 401) {
      const response = await axios({
        method: 'post',
        url: 'http://localhost:8080/auth/refresh',
      });
      if (response.status === 202) {
        setCookie('access', response.data.accessToken);
        setCookie('refresh', response.data.refreshToken);
        return;
      } else {
        return Promise.reject({ message: '로그인 인증 만료' });
      }
    }
    return Promise.reject(error);
  }
);
export default instance;
