import axios from 'axios';

const handler = async (req, res) => {
  axios({
    url: req.body.url,
    headers: { Authorization: req.body.accessToken },
  }).then(async (response) => {
    if (response.status === 200) {
      res.status(200).send(response.data);
    } else if (response.status === 401) {
      try {
        const response = await axios({
          url: 'http://localhost:8080/auth/refresh',
          headers: { Authorization: req.body.refreshToken },
          method: 'post',
        });
        if (response.status === 202) {
          axios({
            url: req.body.url,
            headers: { Authorization: response.data.accessToken },
          }).then(async (response) => {
            if (response.status === 200) {
              res.status(200).send(response.data);
            } else {
              return res.status(500).send('authentication expired');
            }
          });
        } else {
          res.status(500).send();
        }
      } catch (error) {}
    }
  });
};

export default handler;
