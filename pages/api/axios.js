import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:8080/mypage',
});

instance.interceptors.response.use(
  (config) => {
    return config;
  },
  async (err) => {
    if (err.response.status === 401) {
      try {
        const response = await axios({
          url: 'http://localhost:8080/auth/refresh',
          headers: { Authorization: session.user.refreshToken },
        });
        if (response.status === 202) {
          session.user.refreshToken = response.data.refreshToken;
          session.user.accessToken = response.data.accessToken;
          const response = await axios({
            url: 'http://localhost:8080/mypage',
            headers: { Authorization: session.user.accessToken },
          });
          if (response.status === 200) {
            userData = response.data;
          }
        } else if (response.status === 500) {
          userData = {
            message: '로그인 정보 만료',
          };
        } else if (response.status === 403) {
          userData = {
            message: '로그인 정보 만료',
          };
        }
      } catch (error) {}
    }
  }
);
