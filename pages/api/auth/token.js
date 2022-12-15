import axios from 'axios';

const handler = async (req, res) => {
  axios({
    url: req.body.url,
    headers: { Authorization: req.body.accessToken },
  }).then(async (response) => {
    if (response.status === 200) {
      res.status(200).send(response.data);
    }
  });
};

export default handler;
