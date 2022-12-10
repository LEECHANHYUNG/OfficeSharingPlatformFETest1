import axios from 'axios';

const handler = async (req, res) => {
  try {
    const response = await axios({
      url: `http://localhost:8080/mypage/usage?page=${req.body.page}`,
      headers: {
        Authorization: req.body.accessToken,
      },
    });

    if (response.status === 200) {
      res.status(200).send(response.data);
    } else {
      return new Promise.reject(response.data);
    }
  } catch (error) {
    res.status(500).send(error);
  }
};
export default handler;
