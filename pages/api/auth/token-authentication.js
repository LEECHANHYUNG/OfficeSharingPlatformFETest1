import axios from 'axios';

const handler = async (req, res) => {
  if (req.method === 'POST') {
    const response = await axios({
      method: 'get',
      url: 'http://localhost:8080/mypage',
      headers: { Authorization: req.body.accessToken },
    });
    if (response.status === 200) {
      res.status(200).send({ user: response.data });
    }
  }
};
export default handler;
