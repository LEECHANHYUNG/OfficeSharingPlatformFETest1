import axios from 'axios';
import { getSession } from 'next-auth/react';
const handler = async (req, res) => {
  if (req.method === 'POST') {
    const session = await getSession({ req });
    console.log(session);
    const refreshToken = session.user.refreshToken;
    const response = await axios({
      method: 'post',
      url: 'http://localhost:8080/auth/refresh',
      headers: { Authorization: refreshToken },
    });
    if (response.status === 202) {
      session.user.accessToken = response.data.accessToken;
      session.user.refreshToken = response.data.refreshToken;
      res.status(202).send();
    }
  }
};

export default handler;
